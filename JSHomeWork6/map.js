//宣告
let map
const areaDataRequest = fetch('./台灣行政地區.json')
const carDataRequest = fetch('./111年臺北市電動機車充電地點.json')
let areaData //行政區資料
let carData //充電站量資料
let carAreaData //充電站資料 + 行政區經緯度資料
let markers = L.markerClusterGroup()  //marker叢集
//DOM
const countySelect = document.querySelector('#county')
const countyText = document.querySelector('strong')
const tbody = document.querySelector('tbody')
//function
function initMap() {
    // 初始地圖
    map = L.map('map', {
        center: [25.03416068163684, 121.56454962636319],
        zoom: 9
    })
    // 設定圖層 openstreetmap
    let osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    let osm = new L.TileLayer(osmUrl, { minZoom: 8, maxZoom: 19 })
    map.addLayer(osm)
}
function setMapItem() {
    Promise.all([areaDataRequest, carDataRequest])
        .then(res => Promise.all(res.map(x => x.json())))
        .then(jsonData => {
            [areaData, carData] = jsonData;
            carAreaData = carData.map(x => {
                let area = areaData.find(y => y.District == x.Town)
                return {
                    ...x,
                    Town: `{x.Town}`,
                    lat: area != undefined ? area.Lat : undefined,
                    lng: area != undefined ? area.Lng : undefined
                }
            }).filter(x => x.lang != undefined).groupBy('Town');
            // renderMarker();
            // initCountySelect();
            console.log(carAreaData);
        })
}
// function initCountySelect() {
//     ['請選擇', ...new Set(areaData.map(x => x.Town))].forEach(city => {
//         let option = document.createElement('option')
//         option.innerText = Town
//         option.value = Town == '請選擇' ? '' : Town
//         countySelect.appendChild(option)
//     })

//     countySelect.onchange = function () {
//         if (this.value != '') {
//             // 改變地圖的焦點
//             let county = areaData.find(x => x.Town == this.value)
//             map.setView([county.Lat, county.Lng], 12)
//         }
//     }
// }




//window.onload 
window.onload = function () {
    initMap();
    setMapItem();
}
Array.prototype.groupBy = function (prop) {
    return this.reduce(function (groups, item) {
        const val = item[prop]
        if (groups[val] == undefined) {
            groups[val] = []
        } else {
            groups[val] = groups[val]
        }
        groups[val].push(item)
        return groups
    }, {})
}