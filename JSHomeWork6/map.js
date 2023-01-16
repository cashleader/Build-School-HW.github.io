//宣告
let map;
const areaDataRequest = fetch('./台灣行政地區.json');
const carDataRequest = fetch('./111年臺北市電動機車充電地點.json');
let areaData; //行政區資料
let carData; //充電站量資料
let carAreaData; //充電站資料 + 行政區經緯度資料
let markers = L.markerClusterGroup();  //marker叢集

//DOM
const countySelect = document.querySelector('#county')
const countyText = document.querySelector('strong')
const tbody = document.querySelector('tbody')
//function
function initMap() {
    // 初始地圖
    map = L.map('map', {
        center: [25.084559885704355, 121.52489910527188],
        zoom: 12
    })
    // 設定圖層 openstreetmap
    let osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    let osm = new L.TileLayer(osmUrl, { minZoom: 11, maxZoom: 25 })
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
                    Town: `${x.Town}`,
                    lat: area != undefined ? area.Lat : undefined,
                    lng: area != undefined ? area.Lng : undefined
                }
            }).filter(x => x.lng != undefined).groupBy('Town');
            // console.log(carAreaData)
            renderMarker();
            initCountySelect();

        })
}
function renderMarker() {
    if (markers) markers.clearLayers();
    Object.keys(carAreaData).forEach(key => {
        let data = carAreaData[key]
        let marker = L.marker([data[0].lat, data[0].lng])
        marker.bindPopup(
            `
            <h4>${data[0].Town}</h4>
            `
        )
        //console.log(data)
        marker.addEventListener('click', function () {
            countyText.innerText = data[0].Town;
            tbody.innerHTML = '';
            data.forEach(x => {
                let tr = document.createElement('tr');
                let nameTd = document.createElement('td');
                let addressTd = document.createElement('td');
                console.log(x);
                let otherTd = document.createElement('td');
                nameTd.innerText = `${x.Name}`
                addressTd.innerText = `${x.address}`
                otherTd.innerText = `${x.other}`

                tr.appendChild(nameTd);
                tr.appendChild(addressTd);
                tr.appendChild(otherTd);
                tbody.appendChild(tr);
            })
        })
        markers.addLayer(marker);
    })
    map.addLayer(markers);
}
function initCountySelect() {
    ['請選擇', ...new Set(areaData.filter(x => x.City == '臺北市').map(x => x.District))].forEach(district => {
        let option = document.createElement('option')
        option.innerText = district

        option.value = district == '請選擇' ? '' : district
        countySelect.appendChild(option)
    })

    countySelect.onchange = function () {
        if (this.value != '') {
            // 改變地圖的焦點
            let county = areaData.find(x => x.District == this.value)
            map.setView([county.Lat, county.Lng])
        }
    }
}

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