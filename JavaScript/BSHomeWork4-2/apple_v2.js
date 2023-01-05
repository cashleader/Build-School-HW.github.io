window.onload = function () {



}
let iPadAirArray = [
    { id: "A0001", color: "spacegray", storage: "64GB", network: "Wi-Fi", price: 19900, description: "太空灰 64GB Wi-Fi", picture: "spacegray.jpg" },
    { id: "A0002", color: "spacegray", storage: "256GB", network: "Wi-Fi", price: 24900, description: "太空灰 256GB Wi-Fi", picture: "spacegray.jpg" },
    { id: "A0003", color: "spacegray", storage: "64GB", network: "5G", price: 24900, description: "太空灰 64GB 5G", picture: "spacegray.jpg" },
    { id: "A0004", color: "spacegray", storage: "256GB", network: "5G", price: 29900, description: "太空灰 256GB 5G", picture: "spacegray.jpg" },
    { id: "A0005", color: "pink", storage: "64GB", network: "Wi-Fi", price: 19900, description: "粉紅 64GB Wi-Fi", picture: "pink.jpg" },
    { id: "A0006", color: "pink", storage: "256GB", network: "Wi-Fi", price: 24900, description: "粉紅 256GB Wi-Fi", picture: "pink.jpg" },
    { id: "A0007", color: "pink", storage: "64GB", network: "5G", price: 24900, description: "粉紅 64GB 5G", picture: "pink.jpg" },
    { id: "A0008", color: "pink", storage: "256GB", network: "5G", price: 29900, description: "粉紅 256GB 5G", picture: "pink.jpg" },
    { id: "A0009", color: "blue", storage: "64GB", network: "Wi-Fi", price: 19900, description: "藍色 64GB Wi-Fi", picture: "blue.jpg" },
    { id: "A0010", color: "blue", storage: "256GB", network: "Wi-Fi", price: 24900, description: "藍色 256GB Wi-Fi", picture: "blue.jpg" },
    { id: "A0011", color: "blue", storage: "64GB", network: "5G", price: 24900, description: "藍色 64GB 5G", picture: "blue.jpg" },
    { id: "A0012", color: "blue", storage: "256GB", network: "5G", price: 29900, description: "藍色 256GB 5G", picture: "blue.jpg" },
    { id: "A0013", color: "purple", storage: "64GB", network: "Wi-Fi", price: 19900, description: "紫色 64GB Wi-Fi", picture: "purple.jpg" },
    { id: "A0014", color: "purple", storage: "256GB", network: "Wi-Fi", price: 24900, description: "紫色 256GB Wi-Fi", picture: "purple.jpg" },
    { id: "A0015", color: "purple", storage: "64GB", network: "5G", price: 24900, description: "紫色 64GB 5G", picture: "purple.jpg" },
    { id: "A0016", color: "purple", storage: "256GB", network: "5G", price: 29900, description: "紫色 256GB 5G", picture: "purple.jpg" },
    { id: "A0017", color: "star", storage: "64GB", network: "Wi-Fi", price: 19900, description: "星光色 64GB Wi-Fi", picture: "star.jpg" },
    { id: "A0018", color: "star", storage: "256GB", network: "Wi-Fi", price: 24900, description: "星光色 256GB Wi-Fi", picture: "star.jpg" },
    { id: "A0019", color: "star", storage: "64GB", network: "5G", price: 24900, description: "星光色 64GB 5G", picture: "star.jpg" },
    { id: "A0020", color: "star", storage: "256GB", network: "5G", price: 29900, description: "星光色 256GB 5G", picture: "star.jpg" },
]

let iPhoneArray = [
    { id: "B0001", color: "blue", storage: "128GB", price: 27900, description: "藍色 128GB iPhone", picture: "blue.jpg", tag: "no" },
    { id: "B0002", color: "blue", storage: "256GB", price: 31400, description: "藍色 256GB iPhone", picture: "blue.jpg", tag: "no" },
    { id: "B0003", color: "blue", storage: "512GB", price: 38400, description: "藍色 512GB iPhone", picture: "blue.jpg", tag: "no" },
    { id: "B0004", color: "blue", storage: "128GB", price: 31900, description: "藍色 128GB iPhone Plus", picture: "blue.jpg", tag: "plus" },
    { id: "B0005", color: "blue", storage: "256GB", price: 35400, description: "藍色 256GB iPhone Plus", picture: "blue.jpg", tag: "plus" },
    { id: "B0006", color: "blue", storage: "512GB", price: 42400, description: "藍色 512GB iPhone Plus", picture: "blue.jpg", tag: "plus" },

    { id: "B0011", color: "purple", storage: "128GB", price: 27900, description: "紫色 128GB iPhone", picture: "purple.jpg", tag: "no" },
    { id: "B0012", color: "purple", storage: "256GB", price: 31400, description: "紫色 256GB iPhone", picture: "purple.jpg", tag: "no" },
    { id: "B0013", color: "purple", storage: "512GB", price: 38400, description: "紫色 512GB iPhone", picture: "purple.jpg", tag: "no" },
    { id: "B0014", color: "purple", storage: "128GB", price: 31900, description: "紫色 128GB iPhone Plus", picture: "purple.jpg", tag: "plus" },
    { id: "B0015", color: "purple", storage: "256GB", price: 35400, description: "紫色 256GB iPhone Plus", picture: "purple.jpg", tag: "plus" },
    { id: "B0016", color: "purple", storage: "512GB", price: 42400, description: "紫色 512GB iPhone Plus", picture: "purple.jpg", tag: "plus" },

    { id: "B0021", color: "midnight", storage: "128GB", price: 27900, description: "午夜色 128GB iPhone", picture: "midnight.jpg", tag: "no" },
    { id: "B0022", color: "midnight", storage: "256GB", price: 31400, description: "午夜色 256GB iPhone", picture: "midnight.jpg", tag: "no" },
    { id: "B0023", color: "midnight", storage: "512GB", price: 38400, description: "午夜色 512GB iPhone", picture: "midnight.jpg", tag: "no" },
    { id: "B0024", color: "midnight", storage: "128GB", price: 31900, description: "午夜色 128GB iPhone Plus", picture: "midnight.jpg", tag: "plus" },
    { id: "B0025", color: "midnight", storage: "256GB", price: 35400, description: "午夜色 256GB iPhone Plus", picture: "midnight.jpg", tag: "plus" },
    { id: "B0026", color: "midnight", storage: "512GB", price: 42400, description: "午夜色 512GB iPhone Plus", picture: "midnight.jpg", tag: "plus" },

    { id: "B0031", color: "star", storage: "128GB", price: 27900, description: "星光色 128GB iPhone", picture: "star.jpg", tag: "no" },
    { id: "B0032", color: "star", storage: "256GB", price: 31400, description: "星光色 256GB iPhone", picture: "star.jpg", tag: "no" },
    { id: "B0033", color: "star", storage: "512GB", price: 38400, description: "星光色 512GB iPhone", picture: "star.jpg", tag: "no" },
    { id: "B0034", color: "star", storage: "128GB", price: 31900, description: "星光色 128GB iPhone Plus", picture: "star.jpg", tag: "plus" },
    { id: "B0035", color: "star", storage: "256GB", price: 35400, description: "星光色 256GB iPhone Plus", picture: "star.jpg", tag: "plus" },
    { id: "B0036", color: "star", storage: "512GB", price: 42400, description: "星光色 512GB iPhone Plus", picture: "star.jpg", tag: "plus" },

    { id: "B0041", color: "red", storage: "128GB", price: 27900, description: "紅色 128GB iPhone", picture: "red.jpg", tag: "no" },
    { id: "B0042", color: "red", storage: "256GB", price: 31400, description: "紅色 256GB iPhone", picture: "red.jpg", tag: "no" },
    { id: "B0043", color: "red", storage: "512GB", price: 38400, description: "紅色 512GB iPhone", picture: "red.jpg", tag: "no" },
    { id: "B0044", color: "red", storage: "128GB", price: 31900, description: "紅色 128GB iPhone Plus", picture: "red.jpg", tag: "plus" },
    { id: "B0045", color: "red", storage: "256GB", price: 35400, description: "紅色 256GB iPhone Plus", picture: "red.jpg", tag: "plus" },
    { id: "B0046", color: "red", storage: "512GB", price: 42400, description: "紅色 512GB iPhone Plus", picture: "red.jpg", tag: "plus" },

]
let iPhoneProArray = [
    { id: "C0001", color: "darkpurple", storage: "128GB", price: 34900, description: "深紫色 128GB iPhone14 Pro", picture: "darkpurple.jpg", tag: "no" },
    { id: "C0002", color: "darkpurple", storage: "256GB", price: 38400, description: "深紫色 256GB iPhone14 Pro", picture: "darkpurple.jpg", tag: "no" },
    { id: "C0003", color: "darkpurple", storage: "512GB", price: 45400, description: "深紫色 512GB iPhone14 Pro", picture: "darkpurple.jpg", tag: "no" },
    { id: "C0004", color: "darkpurple", storage: "1TB", price: 52400, description: "深紫色 1TB iPhone14 Pro", picture: "darkpurple.jpg", tag: "no" },
    { id: "C0005", color: "darkpurple", storage: "128GB", price: 38900, description: "深紫色 128GB iPhone14 Pro Max", picture: "darkpurple.jpg", tag: "Max" },
    { id: "C0006", color: "darkpurple", storage: "256GB", price: 42400, description: "深紫色 256GB iPhone14 Pro Max", picture: "darkpurple.jpg", tag: "Max" },
    { id: "C0007", color: "darkpurple", storage: "512GB", price: 49400, description: "深紫色 512GB iPhone14 Pro Max", picture: "darkpurple.jpg", tag: "Max" },
    { id: "C0008", color: "darkpurple", storage: "1TB", price: 56400, description: "深紫色 1TB iPhone14 Pro Max", picture: "darkpurple.jpg", tag: "Max" },

    { id: "C0001", color: "gold", storage: "128GB", price: 34900, description: "金色 128GB iPhone14 Pro", picture: "gold.jpg", tag: "no" },
    { id: "C0002", color: "gold", storage: "256GB", price: 38400, description: "金色 256GB iPhone14 Pro", picture: "gold.jpg", tag: "no" },
    { id: "C0003", color: "gold", storage: "512GB", price: 45400, description: "金色 512GB iPhone14 Pro", picture: "gold.jpg", tag: "no" },
    { id: "C0004", color: "gold", storage: "1TB", price: 52400, description: "金色 1TB iPhone14 Pro", picture: "gold.jpg", tag: "no" },
    { id: "C0005", color: "gold", storage: "128GB", price: 38900, description: "金色 128GB iPhone14 Pro Max", picture: "gold.jpg", tag: "Max" },
    { id: "C0006", color: "gold", storage: "256GB", price: 42400, description: "金色 256GB iPhone14 Pro Max", picture: "gold.jpg", tag: "Max" },
    { id: "C0007", color: "gold", storage: "512GB", price: 49400, description: "金色 512GB iPhone14 Pro Max", picture: "gold.jpg", tag: "Max" },
    { id: "C0008", color: "gold", storage: "1TB", price: 56400, description: "金色 1TB iPhone14 Pro Max", picture: "gold.jpg", tag: "Max" },

    { id: "C0001", color: "silver", storage: "128GB", price: 34900, description: "銀色 128GB iPhone14 Pro", picture: "silver.jpg", tag: "no" },
    { id: "C0002", color: "silver", storage: "256GB", price: 38400, description: "銀色 256GB iPhone14 Pro", picture: "silver.jpg", tag: "no" },
    { id: "C0003", color: "silver", storage: "512GB", price: 45400, description: "銀色 512GB iPhone14 Pro", picture: "silver.jpg", tag: "no" },
    { id: "C0004", color: "silver", storage: "1TB", price: 52400, description: "銀色 1TB iPhone14 Pro", picture: "silver.jpg", tag: "no" },
    { id: "C0005", color: "silver", storage: "128GB", price: 38900, description: "銀色 128GB iPhone14 Pro Max", picture: "silver.jpg", tag: "Max" },
    { id: "C0006", color: "silver", storage: "256GB", price: 42400, description: "銀色 256GB iPhone14 Pro Max", picture: "silver.jpg", tag: "Max" },
    { id: "C0007", color: "silver", storage: "512GB", price: 49400, description: "銀色 512GB iPhone14 Pro Max", picture: "silver.jpg", tag: "Max" },
    { id: "C0008", color: "silver", storage: "1TB", price: 56400, description: "銀色 1TB iPhone14 Pro Max", picture: "silver.jpg", tag: "Max" },

    { id: "C0001", color: "spaceblack", storage: "128GB", price: 34900, description: "太空黑色 128GB iPhone14 Pro", picture: "spaceblack.jpg", tag: "no" },
    { id: "C0002", color: "spaceblack", storage: "256GB", price: 38400, description: "太空黑色 256GB iPhone14 Pro", picture: "spaceblack.jpg", tag: "no" },
    { id: "C0003", color: "spaceblack", storage: "512GB", price: 45400, description: "太空黑色 512GB iPhone14 Pro", picture: "spaceblack.jpg", tag: "no" },
    { id: "C0004", color: "spaceblack", storage: "1TB", price: 52400, description: "太空黑色 1TB iPhone14 Pro", picture: "spaceblack.jpg", tag: "no" },
    { id: "C0005", color: "spaceblack", storage: "128GB", price: 38900, description: "太空黑色 128GB iPhone14 Pro Max", picture: "spaceblack.jpg", tag: "Max" },
    { id: "C0006", color: "spaceblack", storage: "256GB", price: 42400, description: "太空黑色 256GB iPhone14 Pro Max", picture: "spaceblack.jpg", tag: "Max" },
    { id: "C0007", color: "spaceblack", storage: "512GB", price: 49400, description: "太空黑色 512GB iPhone14 Pro Max", picture: "spaceblack.jpg", tag: "Max" },
    { id: "C0008", color: "spaceblack", storage: "1TB", price: 56400, description: "太空黑色 1TB iPhone14 Pro Max", picture: "spaceblack.jpg", tag: "Max" },


]

let iph14 = document.querySelector('.iphone14');
let iph14Pro = document.querySelector('.iphone14Pro');
let ipadair5 = document.querySelector('.ipadair5');
let picturecontent = document.querySelector('.carousel-inner');
let product = document.querySelector('.product');
let color = document.querySelector('.color');
let storage = document.querySelector('.storage');
let network = document.querySelector('.network');
let showcontent = document.querySelector('.showcontent');
let selectedColor = "";
let colorList = document.getElementsByName("color");
let storageList = document.getElementsByName("storage");
let iphoneList = document.getElementsByName("iphone");
let netList = document.getElementsByName("net");
let selectediPhone = "";
let btnarea=document.querySelector('.btnarea')

function createiPhone14() {
    picturecontent.innerHTML = "";
    picturecontent.innerHTML = `
    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="./Apple/iPhone/colors/blue.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="./Apple/iPhone/colors/blue_2.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="./Apple/iPhone/colors/blue_3.jpg" class="d-block w-100" alt="...">
                        </div>
                    </div>`

    product.innerHTML = "";
    product.innerHTML = `<h1>機型。 <span> 哪一款最適合你？</span></h1>
                <input type="radio" id="iPhone14" name="iphone" class="radiobtn" onclick="chooseiPhone()"><label for="iPhone14" class="btn btn-outline-primary w-100 mt-3 mb-3 btntxt">iPhone 14</label>
                <input type="radio" id="iPhone14Plus" name="iphone" class="radiobtn" onclick="chooseiPhone()"><label for="iPhone14Plus" class="btn btn-outline-primary w-100 mt-3 mb-3 btntxt">iPhone 14 Plus</label>
    `;

    color.innerHTML = "";
    color.innerHTML = `<h1>外觀。<span> 挑選你喜愛的外觀。</span></h1>
                <div class="button-box d-flex flex-wrap">
                    <input type="radio" id="blue" name="color" class="radiobtn" onclick="chooseiPhoneColor()"><label class="selfbtn"
                        for="blue"><img class="w-100" src="./Apple/iPhone/btn1.jpg" alt=""></label>
                    <input type="radio" id="purple" name="color" class="radiobtn" onclick="chooseiPhoneColor()"><label class="selfbtn"
                        for="purple"><img class="w-100" src="./Apple/iPhone/btn2.jpg" alt=""></label>
                    <input type="radio" id="midnight" name="color" class="radiobtn" onclick="chooseiPhoneColor()"><label class="selfbtn"
                        for="midnight"><img class="w-100" src="./Apple/iPhone/btn3.jpg" alt=""></label>
                    <input type="radio" id="star" name="color" class="radiobtn" onclick="chooseiPhoneColor()"><label class="selfbtn"
                        for="star"><img class="w-100" src="./Apple/iPhone/btn4.jpg" alt=""></label>
                    <input type="radio" id="red" name="color" class="radiobtn" onclick="chooseiPhoneColor()"><label class="selfbtn"
                        for="red"><img class="w-100" src="./Apple/iPhone/btn5.jpg" alt=""></label>
                </div>`

    storage.innerHTML = "";
    storage.innerHTML = `     <h1>儲存裝置。 <span> 你需要多少儲存空間？</span></h1>
                <input type="radio" id="s128GB" name="storage" class="radiobtn " onclick="chooseStorage()"><label for="s128GB"
                    class="btn btn-outline-primary w-100 mt-3 mb-3">128GB</label>
                <input type="radio" id="s256GB" name="storage" class="radiobtn " onclick="chooseStorage()"><label for="s256GB"
                    class="btn btn-outline-primary w-100 mt-3 mb-3">256GB</label>
                <input type="radio" id="s512GB" name="storage" class="radiobtn " onclick="chooseStorage()"><label for="s512GB"
                    class="btn btn-outline-primary w-100 mt-3 mb-3">512GB</label>
`

    network.innerHTML = "";
    showcontent.innerHTML = "";
    btnarea.innerHTML = `<button type="button" class="btn btn-secondary show" onclick="showiPhonePrice()">查看價格</button>`;
}


function createiPhone14Pro() {
    picturecontent.innerHTML = "";
    picturecontent.innerHTML = `
    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="./Apple/iPhonePro/colors/darkpurple.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="./Apple/iPhonePro/colors/darkpurple_2.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="./Apple/iPhonePro/colors/darkpurple_3.jpg" class="d-block w-100" alt="...">
                        </div>
                    </div>`

    product.innerHTML = "";
    product.innerHTML = `<h1>機型。 <span> 哪一款最適合你？</span></h1>
                <input type="radio" id="iPhone14Pro" name="iphone" class="radiobtn" onclick="chooseiPhone()"><label for="iPhone14Pro" class="btn btn-outline-primary w-100 mt-3 mb-3 btntxt">iPhone 14 Pro</label>
                <input type="radio" id="iPhone14ProMax" name="iphone" class="radiobtn" onclick="chooseiPhone()"><label for="iPhone14ProMax" class="btn btn-outline-primary w-100 mt-3 mb-3 btntxt">iPhone 14 Pro Max</label>
    `;

    color.innerHTML = "";
    color.innerHTML = `<h1>外觀。<span> 挑選你喜愛的外觀。</span></h1>
                <div class="button-box d-flex flex-wrap">
                    <input type="radio" id="darkpurple" name="color" class="radiobtn " onclick="chooseiPhoneProColor()"><label class="selfbtn" for="darkpurple"><img class="w-100" src="./Apple/iPhonePro/btn1.jpg" alt=""></label>
                    <input type="radio" id="gold" name="color" class="radiobtn " onclick="chooseiPhoneProColor()"><label class="selfbtn" for="gold"><img class="w-100" src="./Apple/iPhonePro/btn2.jpg" alt=""></label>
                    <input type="radio" id="silver" name="color" class="radiobtn " onclick="chooseiPhoneProColor()"><label class="selfbtn" for="silver"><img class="w-100" src="./Apple/iPhonePro/btn3.jpg" alt=""></label>
                    <input type="radio" id="spaceblack" name="color" class="radiobtn " onclick="chooseiPhoneProColor()"><label class="selfbtn" for="spaceblack"><img class="w-100" src="./Apple/iPhonePro/btn4.jpg" alt=""></label>
                </div>`

    storage.innerHTML = "";
    storage.innerHTML = `<h1>儲存裝置。 <span> 你需要多少儲存空間？</span></h1>
                <input type="radio" id="s128GB" name="storage" class="radiobtn " onclick="chooseStorage()"><label for="s128GB" class="btn btn-outline-primary w-100 mt-3 mb-3">128GB</label>
                <input type="radio" id="s256GB" name="storage" class="radiobtn " onclick="chooseStorage()"><label for="s256GB"class="btn btn-outline-primary w-100 mt-3 mb-3">256GB</label>
                <input type="radio" id="s512GB" name="storage" class="radiobtn " onclick="chooseStorage()"><label for="s512GB"class="btn btn-outline-primary w-100 mt-3 mb-3">512GB</label>
                <input type="radio" id="s1TB" name="storage" class="radiobtn " onclick="chooseStorage()"><label for="s1TB"class="btn btn-outline-primary w-100 mt-3 mb-3">1TB</label>
`

    network.innerHTML = "";
    showcontent.innerHTML = "";
    btnarea.innerHTML = `<button type="button" class="btn btn-secondary show" onclick="showiPhoneProPrice()">查看價格</button>`;
}

function createiPadAir5() {
    picturecontent.innerHTML = "";
    picturecontent.innerHTML = `
    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="./Apple/iPadAir/colors/spacegray.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="./Apple/iPadAir/colors/spacegray_2.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="./Apple/iPadAir/colors/spacegray_3.jpg" class="d-block w-100" alt="...">
                        </div>
                    </div>`

    product.innerHTML = "";


    color.innerHTML = "";
    color.innerHTML = `<h1>外觀。<span> 挑選喜愛的顏色。</span></h1>
                <div class="button-box d-flex flex-wrap">
                    <input type="radio" id="spacegray" name="color" class="radiobtn " onclick="chooseiPadAirColor()"><label class="selfbtn" for="spacegray"><img class="w-100" src="./Apple/iPadAir/btn1.png" alt=""></label>
                    <input type="radio" id="blue" name="color" class="radiobtn " onclick="chooseiPadAirColor()"><label class="selfbtn" for="blue"><img class="w-100" src="./Apple/iPadAir/btn2.png" alt=""></label>
                    <input type="radio" id="pink" name="color" class="radiobtn " onclick="chooseiPadAirColor()"><label class="selfbtn" for="pink"><img class="w-100" src="./Apple/iPadAir/btn3.png" alt=""></label>
                    <input type="radio" id="purple" name="color" class="radiobtn " onclick="chooseiPadAirColor()"><label class="selfbtn" for="purple"><img class="w-100" src="./Apple/iPadAir/btn4.png" alt=""></label>
                    <input type="radio" id="star" name="color" class="radiobtn " onclick="chooseiPadAirColor()"><label class="selfbtn" for="star"><img class="w-100" src="./Apple/iPadAir/btn5.png" alt=""></label>
                </div>`

    storage.innerHTML = "";
    storage.innerHTML = `<h1>儲存裝置。 <span> 選擇需要的儲存空間？</span></h1>
                <input type="radio" id="s64GB" name="storage" class="radiobtn " onclick="chooseStorage()"><label for="s64GB" class="btn btn-outline-primary w-100 mt-3 mb-3">64GB</label>
                <input type="radio" id="s256GB" name="storage" class="radiobtn " onclick="chooseStorage()"><label for="s256GB"class="btn btn-outline-primary w-100 mt-3 mb-3">256GB</label>
                
`

    network.innerHTML = "";
    network.innerHTML = `<h1>連線能力。 <span> 選擇連線方式</span></h1>
                <input type="radio" id="WiFi" name="net" class="radiobtn " onclick="chooseNet()"><label for="WiFi" class="btn btn-outline-primary w-100 mt-3 mb-3">Wi-Fi</label>
                <input type="radio" id="WiFi5G" name="net" class="radiobtn " onclick="chooseNet()"><label for="WiFi5G" class="btn btn-outline-primary w-100 mt-3 mb-3">Wi-Fi + 行動網路</label>
                
`
    showcontent.innerHTML = "";
    btnarea.innerHTML = `<button type="button" class="btn btn-secondary show" onclick="showiPadAirPrice()">查看價格</button>`;

}

function chooseiPhoneColor() {
    // let AcolorArray=["spacegray","blue","pink","purple","star","midnight","red","darkpurple","gold","silver","spaceblack"];
    for (i = 0; i < colorList.length; i++) {
        if (colorList[i].checked) {
            selectedColor = colorList[i].id;
            console.log(selectedColor);
        }
    }
    picturecontent.innerHTML = "";
    picturecontent.innerHTML = `
    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="./Apple/iPhone/colors/${selectedColor}.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="./Apple/iPhone/colors/${selectedColor}_2.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="./Apple/iPhone/colors/${selectedColor}_3.jpg" class="d-block w-100" alt="...">
                        </div>
                    </div>`
}

function chooseiPhoneProColor() {
    // let AcolorArray=["spacegray","blue","pink","purple","star","midnight","red","darkpurple","gold","silver","spaceblack"];
    for (i = 0; i < colorList.length; i++) {
        if (colorList[i].checked) {
            selectedColor = colorList[i].id;
            console.log(selectedColor);
        }
    }
    picturecontent.innerHTML = "";
    picturecontent.innerHTML = `
    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="./Apple/iPhonePro/colors/${selectedColor}.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="./Apple/iPhonePro/colors/${selectedColor}_2.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="./Apple/iPhonePro/colors/${selectedColor}_3.jpg" class="d-block w-100" alt="...">
                        </div>
                    </div>`
}

function chooseiPadAirColor() {
    // let AcolorArray=["spacegray","blue","pink","purple","star","midnight","red","darkpurple","gold","silver","spaceblack"];
    for (i = 0; i < colorList.length; i++) {
        if (colorList[i].checked) {
            selectedColor = colorList[i].id;
            console.log(selectedColor);
        }
    }
    picturecontent.innerHTML = "";
    picturecontent.innerHTML = `
    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="./Apple/iPadAir/colors/${selectedColor}.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="./Apple/iPadAir/colors/${selectedColor}_2.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="./Apple/iPadAir/colors/${selectedColor}_3.jpg" class="d-block w-100" alt="...">
                        </div>
                    </div>`
}







function chooseStorage() {
    // let AcolorArray=["spacegray","blue","pink","purple","star","midnight","red","darkpurple","gold","silver","spaceblack"];
    for (i = 0; i < storageList.length; i++) {
        if (storageList[i].checked) {
            selectedStorage = storageList[i].id;
            selectedStorage = selectedStorage.replace("s", "");
            console.log(selectedStorage);
        }
    }

}

function chooseiPhone() {
    // let AcolorArray=["spacegray","blue","pink","purple","star","midnight","red","darkpurple","gold","silver","spaceblack"];
    for (i = 0; i < iphoneList.length; i++) {
        if (iphoneList[i].checked) {
            selectediPhoneType = iphoneList[i].id;
            console.log(selectediPhoneType);
        }
    }

}

function chooseNet() {
    // let AcolorArray=["spacegray","blue","pink","purple","star","midnight","red","darkpurple","gold","silver","spaceblack"];
    for (i = 0; i < netList.length; i++) {
        if (netList[i].checked) {
            selectednet = netList[i].id;
            console.log(selectednet);
        }
    }
}

function showiPhonePrice() {
    showcontent.innerHTML = "";
    if (selectedColor == "" || selectedStorage == "" || selectediPhoneType == "") {
        alert("尚有種類 容量 或顏色沒有選擇");
    }
    if (selectediPhoneType.includes('Plus')) {
        selectediPhone = iPhoneArray.filter(x => x.color == selectedColor && x.storage == selectedStorage && x.tag == 'plus');
    }
    else {
        selectediPhone = iPhoneArray.filter(x => x.color == selectedColor && x.storage == selectedStorage && x.tag == 'no');
    }
    let showprice = selectediPhone[0].price;
    let text = document.createElement("div");
    let des = selectediPhone[0].description;
    text.innerHTML = `<h1>您選購的產品為${des} <br>價格為 ${showprice} 元</h1>`;

    showcontent.appendChild(text);
}

function showiPhoneProPrice() {
    showcontent.innerHTML = "";
    if (selectedColor == "" || selectedStorage == "" || selectediPhoneType == "") {
        alert("尚有種類 容量 或顏色沒有選擇");
    }
    if (selectediPhoneType.includes('Max')) {
        selectediPhone = iPhoneProArray.filter(x => x.color == selectedColor && x.storage == selectedStorage && x.tag == 'Max');
    }
    else {
        selectediPhone = iPhoneProArray.filter(x => x.color == selectedColor && x.storage == selectedStorage && x.tag == 'no');
    }
    let showprice = selectediPhone[0].price;
    let text = document.createElement("div");
    let des = selectediPhone[0].description;
    text.innerHTML = `<h1>您選購的產品為${des} <br>價格為 ${showprice} 元</h1>`;

    showcontent.appendChild(text);
}

function showiPadAirPrice() {
    showcontent.innerHTML = "";
    if (selectedColor == "" || selectedStorage == "" || selectednet == "") {
        alert("尚有種類 容量 或顏色沒有選擇");
    }
    if (selectednet.includes('5G')) {
        selectediPhone = iPadAirArray.filter(x => x.color == selectedColor && x.storage == selectedStorage && x.network == '5G');
    }
    else {
        selectediPhone = iPadAirArray.filter(x => x.color == selectedColor && x.storage == selectedStorage && x.network == 'Wi-Fi');
    }
    let showprice = selectediPhone[0].price;
    let des = selectediPhone[0].description;
    let text = document.createElement("div");
    text.innerHTML = `<h1>您選購的產品為 iPad Air${des} <br> 價格為 ${showprice} 元</h1>`;

    showcontent.appendChild(text);
}