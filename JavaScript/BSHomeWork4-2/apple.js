let IPhoneArr = [
    { rgb: '#675E70', color: "深紫色", pic: './apple/iPhonePro/colors/darkpurple.jpg', storage: "128GB", price: 34900 },
    { rgb: '#675E70', color: "深紫色", pic: './apple/iPhonePro/colors/darkpurple.jpg', storage: "256GB", price: 38400 },
    { rgb: '#675E70', color: "深紫色", pic: './apple/iPhonePro/colors/darkpurple.jpg', storage: "512GB", price: 45400 },
    { rgb: '#675E70', color: "深紫色", pic: './apple/iPhonePro/colors/darkpurple.jpg', storage: "1T", price: 52400 },
    // --------------
    { rgb: '#F4E8CE', color: "金色", pic: './apple/iPhonePro/colors/gold.jpg', storage: "128GB", price: 34900 },
    { rgb: '#F4E8CE', color: "金色", pic: './apple/iPhonePro/colors/gold.jpg', storage: "256GB", price: 38400 },
    { rgb: '#F4E8CE', color: "金色", pic: './apple/iPhonePro/colors/gold.jpg', storage: "512GB", price: 45400 },
    { rgb: '#F4E8CE', color: "金色", pic: './apple/iPhonePro/colors/gold.jpg', storage: "1T", price: 52400 },
    // -------------------------
    { rgb: '#F1F3F2', color: "銀色", pic: './apple/iPhonePro/colors/silver.jpg', storage: "128GB", price: 34900 },
    { rgb: '#F1F3F2', color: "銀色", pic: './apple/iPhonePro/colors/silver.jpg', storage: "256GB", price: 38400 },
    { rgb: '#F1F3F2', color: "銀色", pic: './apple/iPhonePro/colors/silver.jpg', storage: "512GB", price: 45400 },
    { rgb: '#F1F3F2', color: "銀色", pic: './apple/iPhonePro/colors/silver.jpg', storage: "1T", price: 52400 },
    { rgb: '#4F4E4C', color: "太空黑色", pic: './apple/iPhonePro/colors/spaceblack.jpg', storage: "128GB", price: 34900 },
    { rgb: '#4F4E4C', color: "太空黑色", pic: './apple/iPhonePro/colors/spaceblack.jpg', storage: "256GB", price: 38400 },
    { rgb: '#4F4E4C', color: "太空黑色", pic: './apple/iPhonePro/colors/spaceblack.jpg', storage: "512GB", price: 45400 },
    { rgb: '#4F4E4C', color: "太空黑色", pic: './apple/iPhonePro/colors/spaceblack.jpg', storage: "1T", price: 52400 },
    
];
let IPadArr = [
    { rgb: '#78767B', color: "太空灰色", pic: "./apple/iPadPro/spacegray-1.jpg", storage: "128GB", price: 27900 },
    { rgb: '#78767B', color: "太空灰色", pic: "./apple/iPadPro/spacegray-1.jpg", storage: "256GB", price: 31400 },
    { rgb: '#78767B', color: "太空灰色", pic: "./apple/iPadPro/spacegray-1.jpg", storage: "512GB", price: 38400 },
    { rgb: '#78767B', color: "太空灰色", pic: "./apple/iPadPro/spacegray-1.jpg", storage: "1TB", price: 52400 },
    { rgb: '#78767B', color: "太空灰色", pic: "./apple/iPadPro/spacegray-1.jpg", storage: "2TB", price: 66400 },
    { rgb: '#E3E4E5', color: "銀色", pic: "./apple/iPadPro/silver-1.jpg", storage: "128GB", price: 27900 },
    { rgb: '#E3E4E5', color: "銀色", pic: "./apple/iPadPro/silver-1.jpg", storage: "256GB", price: 31400 },
    { rgb: '#E3E4E5', color: "銀色", pic: "./apple/iPadPro/silver-1.jpg", storage: "512GB", price: 38400 },
    { rgb: '#E3E4E5', color: "銀色", pic: "./apple/iPadPro/silver-1.jpg", storage: "1TB", price: 52400 },
    { rgb: '#E3E4E5', color: "銀色", pic: "./apple/iPadPro/silver-1.jpg", storage: "2TB", price: 66400 }
]
let MacProArr = [
    { rgb: '#78767B', color: "太空灰色", pic: "./apple/MacbookPro/mbp-spacegray-1.jpg", storage: "1T", price: 74900 },
    { rgb: '#78767B', color: "太空灰色", pic: "./apple/MacbookPro/mbp-spacegray-1.jpg", storage: "2T", price: 86900 },
    { rgb: '#78767B', color: "太空灰色", pic:"./apple/MacbookPro/mbp-spacegray-1.jpg", storage: "4T", price: 104900 },
    { rgb: '#78767B', color: "太空灰色", pic: "./apple/MacbookPro/mbp-spacegray-1.jpg", storage: "8TB", price: 140900 },
    { rgb: '#78767B', color: "太空灰色", pic:"./apple/MacbookPro/mbp-spacegray-1.jpg", storage: "2TB", price: 66400 },
    { rgb: '#E3E4E5', color: "銀色", pic: "./apple/MacbookPro/mbp-silver-1.jpg", storage: "1T", price: 74900 },
    { rgb: '#E3E4E5', color: "銀色", pic: "./apple/MacbookPro/mbp-silver-1.jpg", storage: "2T", price: 86900 },
    { rgb: '#E3E4E5', color: "銀色", pic: "./apple/MacbookPro/mbp-silver-1.jpg", storage: "4T", price: 104900 },
    { rgb: '#E3E4E5', color: "銀色", pic: "./apple/MacbookPro/mbp-silver-1.jpg", storage: "8TB", price: 140900 }
]


let allArr = [];
allArr.push(IPhoneArr);
allArr.push(IPadArr);
allArr.push(MacProArr);
let picFamily = ["./apple/iPhonePro/iphone-14-pro產品圖.jpg", "./apple/iPadPro/ipad-1.jpg", "./apple/MacbookPro/macbookpro產品圖.jpg"]
let product = document.querySelector(".product");
let btn = document.querySelectorAll(".title");

btn.forEach((item, index) => {

    //事件: 按下上排按鈕跳換產品
    item.addEventListener('click', () => {

        //產品圖
        product.innerHTML = "";
        let phone = allArr[index];
        let picBox = document.createElement("div");
        picBox.classList.add("col-12", "col-md-6", "px-3", "d-flex", "justify-content-center", "align-items-center");
        let img = document.createElement("img");
        img.classList.add("w-75");
        img.src = picFamily[index];
        picBox.append(img);
        product.append(picBox);

        //顏色
        let largeBox = document.createElement("div");
        largeBox.classList.add("col-12", "col-md-6");

        let colorBox = document.createElement("div");
        colorBox.classList.add("item");
        let colorH2 = document.createElement("h2");
        colorH2.innerText = "顏色";
        colorH2.classList.add("fw-bolder");
        colorBox.append(colorH2);
        let colorData = document.createElement("div");
        colorData.classList.add("color-box", "row");
        let countArr = [];
        phone.forEach((thisPhone, ind) => {
            countArr.push(thisPhone['color']);
        });

        let set1 = new Set(countArr);
        let colorArr = [];

        phone.forEach((thisPhone, ind) => {
            colorArr.push(thisPhone['rgb']);
        })
        let set21 = new Set(colorArr);
        let set2 = [];
        set21.forEach(x => {
            set2.push(x)
        });

        let set = [];
        set1.forEach(x => {
            set.push(x);
        })

        set.forEach((color, ind) => {
            let outside = document.createElement("div");
            outside.classList.add("box", "col-6", "col-md-4");
            let content = document.createElement("div");
            content.classList.add("content", "p-3", "pt-4", "border", "border-secondary", "rounded");
            let circle = document.createElement("div");
            circle.classList.add("color", "mx-auto");
            circle.style.backgroundColor = set2[ind];
            content.append(circle);
            let p = document.createElement("div");
            p.innerText = color;
            p.classList.add("pt-2", "text-center");
            content.append(p);
            outside.append(content);
            colorData.append(outside);

        });
        colorBox.append(colorData);

        //規格生成
        let typeBox = document.createElement("div");
        typeBox.classList.add("item");
        let typeH2 = document.createElement("h2");
        typeH2.innerText = "規格";
        typeH2.classList.add("fw-bolder");
        typeBox.append(typeH2);
        let priceData = document.createElement("div");
        priceData.classList.add("price-box", "row");
        let typeArr = [];
        phone.forEach((thisPhone, ind) => {
            typeArr.push(thisPhone['storage']);
        })
        let set31 = new Set(typeArr);
        let set3 = [];
        set31.forEach(x => {
            set3.push(x);
        });
        let priceArr = [];
        phone.forEach((thisPhone, ind) => {
            priceArr.push(thisPhone['price']);
        });
        let set4 = new Set(priceArr);
        set3.forEach((x, ind) => {
            let outside = document.createElement("div");
            outside.classList.add("box", "col-6", "col-md-4");
            let content = document.createElement("div");
            content.classList.add("content", "p-3", "pt-4", "border", "border-secondary", "rounded", "text-center", "price-box-item");
            let p1 = document.createElement("p");
            p1.classList.add("size", "fw-bolder");
            p1.innerText = x;
            let p2 = document.createElement("p");
            p2.classList.add("price")
            p2.innerText = "NT$" + phone[ind]['price'];
            content.append(p1);
            content.append(p2);
            outside.append(content);
            priceData.append(outside);
        });

        let priceBox = document.createElement("div");
        let priceH2 = document.createElement("h2");
        priceH2.classList.add("fw-bolder");
        priceH2.innerText = "價格";
        let total = document.createElement("div");
        total.classList.add("total");
        priceBox.append(priceH2);
        priceBox.append(total);
        typeBox.append(priceData);
        largeBox.append(colorBox);
        largeBox.append(typeBox);
        largeBox.append(priceBox);
        product.append(largeBox);


        let total1 = document.querySelector(".total");
        let choosePrice = document.querySelectorAll(".price-box-item");
        choosePrice.forEach(item => {
            item.addEventListener('click', () => {
                total1.innerText = item.querySelector(".price").innerText;
            })


        })
        let chooseColorArr = document.querySelectorAll(".color-box .box");
        chooseColorArr.forEach(item => {
            item.addEventListener('click', () => {
                let RGB = phone.find(x => x['color'] == item.querySelector(".text-center").innerText)['pic'];
                img.src = RGB;
            })
        })
    })
})