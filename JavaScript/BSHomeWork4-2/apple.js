/*TODO:
1. 宣告產品的列
2.抓取產品的DOM
1.
*/
const Products = {
    iPad: [
        {
            color: "space",
            img: "apple/ipad-pro-finish-select-202212-11inch-space-gray.jpg",
            spec: [
                {
                    id: "gb128",
                    class: "storage-128",
                    storage: "128GB",
                    network: "wifi",
                    mobiNet: true,
                    price: "$27900",
                },
                {
                    id: "gb256",
                    class: "storage-256",
                    storage: "256GB",
                    network: "wifi",
                    mobiNet: true,
                    price: "$31400",
                },
                {
                    id: "gb512",
                    class: "storage-512",
                    storage: "512GB",
                    network: "wifi",
                    mobiNet: false,
                    price: "$38400",
                },
                {
                    id: "gb1t",
                    class: "storage-1t",
                    storage: "1T",
                    network: "wifi",
                    mobiNet: true,
                    price: "$52400",
                },
                {
                    id: "gb2t",
                    class: "storage-2t",
                    storage: "2T",
                    network: "wifi",
                    mobiNet: false,
                    price: "$66400",
                },
                {
                    id: "gb128",
                    class: "storage-128",
                    storage: "128GB",
                    network: "mobiNet",
                    mobiNet: true,
                    price: "$27900",
                },
                {
                    id: "gb256",
                    class: "storage-256",
                    storage: "256GB",
                    network: "mobiNet",
                    mobiNet: true,
                    price: "$31400",
                },
                {
                    id: "gb512",
                    class: "storage-512",
                    storage: "512GB",
                    network: "mobiNet",
                    mobiNet: true,
                    price: "$38400",
                },
                {
                    id: "gb1t",
                    class: "storage-1t",
                    storage: "1T",
                    network: "mobiNet",
                    mobiNet: true,
                    price: "$52400",
                },
                {
                    id: "gb2t",
                    class: "storage-2t",
                    storage: "2T",
                    network: "mobiNet",
                    mobiNet: true,
                    price: "$66400",
                },
            ],
        },
        {
            color: "silver",
            img: "apple/ipad-pro-finish-select-202212-11inch-silver.jpg",
            spec: [
                {
                    id: "gb128",
                    class: "storage-128",
                    storage: "128GB",
                    network: "wifi",
                    mobiNet: true,
                    price: "$27900",
                },
                {
                    id: "gb256",
                    class: "storage-256",
                    storage: "256GB",
                    network: "wifi",
                    mobiNet: true,
                    price: "$31400",
                },
                {
                    id: "gb512",
                    class: "storage-512",
                    storage: "512GB",
                    network: "wifi",
                    mobiNet: false,
                    price: "$38400",
                },
                {
                    id: "gb1t",
                    class: "storage-1t",
                    storage: "1T",
                    network: "wifi",
                    mobiNet: true,
                    price: "$52400",
                },
                {
                    id: "gb2t",
                    class: "storage-2t",
                    storage: "2T",
                    network: "wifi",
                    mobiNet: false,
                    price: "$66400",
                },
                {
                    id: "gb128",
                    class: "storage-128",
                    storage: "128GB",
                    network: "mobiNet",
                    mobiNet: true,
                    price: "$27900",
                },
                {
                    id: "gb256",
                    class: "storage-256",
                    storage: "256GB",
                    network: "mobiNet",
                    mobiNet: true,
                    price: "$31400",
                },
                {
                    id: "gb512",
                    class: "storage-512",
                    storage: "512GB",
                    network: "mobiNet",
                    mobiNet: true,
                    price: "$38400",
                },
                {
                    id: "gb1t",
                    class: "storage-1t",
                    storage: "1T",
                    network: "mobiNet",
                    mobiNet: true,
                    price: "$52400",
                },
                {
                    id: "gb2t",
                    class: "storage-2t",
                    storage: "2T",
                    network: "mobiNet",
                    mobiNet: true,
                    price: "$66400",
                }
            ]
        }
    ],
    iphone14: {
        color: ["purple", "gold", "silver", " black"],
        img: [
            "./apple/iphone-14-pro-finish-select-202209-6-1inch-deeppurple.jpg",
            "apple/iphone-14-pro-finish-select-202209-6-1inch-gold.jpg",
            "apple/iphone-14-pro-finish-select-202209-6-1inch-silver.jpg",
            "apple/iphone-14-pro-finish-select-202209-6-1inch-spaceblack.jpg",
        ],
        spec: {
            id: ["gb128", "gb256", "gb512", "gb1t"],
            class: ["storage-128", "storage-256", "storage-512", "storage-1t",],
            storage: ["128G", "256G", "512G", "1T"],
            price: ["$34900", "$38400", "$45400", "$52400"]
        }
    },
    MacbookPro: {
        color: ["silver", " space"],
        img: [
            "./apple/mbp14-silver-select-202110_GEO_TW.jpg",
            "./apple/mbp14-spacegray-gallery1-202110_GEO_TW.jpg",
        ],
        spec: {
            id: ["gb1t", "gb2t", "gb4t", "gb8t"],
            class: ["storage-1t", "storage-2t", "storage-4t", "storage-8t",],
            storage: ["1T", "2T", "4T", "8T"],
            price: ["$74900", "$86900", "$104900", "$140900"]
        }
    }
}
let colorDict = {
    space: "太空灰",
    silver: "銀色",
    gold: "金色",
    white: "白色",
    black: "太空黑色",
    purple: "深紫色"
};
// 抓DOM
let picHtml = "";
let mainPic = document.querySelector(".main-pic");
let sumPrice = document.querySelector(".sum-price");
let btniPads = document.querySelector(".IPad");
let btniPhone = document.querySelector(".IPhone");
let btnMacbook = document.querySelector(".Macbook");

// 種類宣告
let g128Check;
let g256Check;
let g512Check;
let g1tCheck;
let g2tCheck;
let g4tCheck;
let g8tCheck;
let wifiCheck;
let mobiNetCheck;

function CalcPrice(storage, mobiNetC) {
    console.log(storage.value);
    console.log(mobiNetC);
    for (let item of Products.iPad[0].spec) {
        if (item.mobiNet == mobiNetC && item.storage == storage.value) {
            sumPrice.innerText = item.price;
            return;
        }
    }
}
function getIpadSelect() {
    g128Check = document.querySelector("#gb128");
    g256Check = document.querySelector("#gb256");
    g512Check = document.querySelector("#gb512");
    g1tCheck = document.querySelector("#gb1t");
    g2tCheck = document.querySelector("#gb2t");
    mobiNetCheck = document.querySelector("#mobiNet").checked;
}
function getIphoneSelect() {
    g128Check = document.querySelector("#gb128");
    g256Check = document.querySelector("#gb256");
    g512Check = document.querySelector("#gb512");
    g1tCheck = document.querySelector("#gb1t");
}
function getMacbookSelect() {
    g1tCheck = document.querySelector("#gb1t");
    g2tCheck = document.querySelector("#gb2t");
    g4tCheck = document.querySelector("#gb4t");
    g8tCheck = document.querySelector("#gb8t");
    mobiNetCheck = document.querySelector("#mobiNet").checked;
}
function changeMainPic(imgSrc) {
    picHtml = `
    <img class="img-fluid w-75" src="${imgSrc}" alt="">
    `;
    mainPic.innerHTML = picHtml;
}

//IPad顏色區塊 插入元素
let colorSelect = document.getElementsByClassName("color-select")[0];
//IPad儲存裝置 插入元素
let storageSelect = document.getElementsByClassName("storage-select")[0];
//IPad連線能力 插入元素
let networkSelect = document.getElementsByClassName("network-select")[0];
//手機沒有連線能力選項 要移除Title
let networkTitle = document.getElementsByClassName("network-title")[0];


function ProductIPad() {
    colorSelect.innerHTML = "";
    storageSelect.innerHTML = "";
    sumPrice.innerText = "";
    networkSelect.style.display = "flex";
    networkTitle.style.display = "block";
    changeMainPic("./apple/ipad-pro-finish-unselect-gallery-2-202212.jpg")
    for (let j = 0; j < Products.iPad.length; j++) {
        let div = document.createElement("div");
        let div2 = document.createElement("div");
        let i = document.createElement("i");
        let p = document.createElement("p");
        div.setAttribute("class", "col-6 col-lg-6");
        div2.setAttribute(
            "class",
            `item item-${Products.iPad[j].color} text-center`
        );
        i.setAttribute(
            "class",
            `fas fa-circle fa-3x ${Products.iPad[j].color}`
        );
        p.innerText = `${colorDict[Products.iPad[j].color]}`;
        div2.append(i, p);
        div.appendChild(div2);
        colorSelect.appendChild(div);
        for (let j = 0; j < 2; j++) {
            let div = document.createElement("div");
            let input = document.createElement("input");
            let label = document.createElement("label");
            let p = document.createElement("p");
            div.setAttribute("class", "col-6 col-lg-6");
            input.setAttribute("type", "radio");
            input.setAttribute("name", "storage");
            input.setAttribute("id", `${Products.iPad[0].spec[j].id}`);
            input.setAttribute("value", `${Products.iPad[0].spec[j].storage}`);
            label.setAttribute(
                "class",
                `item ${Products.iPad[0].spec[j].class} text-center`
            );
            label.setAttribute("for", `${Products.iPad[0].spec[j].id}`);
            p.innerText = Products.iPad[0].spec[j].storage;
            label.appendChild(p);
            div.append(input, label);
            storageSelect.append(div);
        }
        document
            .querySelector(".item-space")
            .addEventListener("click", function () {
                changeMainPic(Products.iPad[0].img);
            });

        document.querySelector(".item-silver")
            .addEventListener("click", function () {
                changeMainPic(Products.iPad[1].img);
            });
        document.querySelector(".storage-128")
            .addEventListener("click", function () {
                getSelect();
                CalcPrice(g128Check, mobiNetCheck);
            });
        document
            .querySelector(".storage-256")
            .addEventListener("click", function () {
                getSelect();
                CalcPrice(g256Check, mobiNetCheck);
            });
        document
            .querySelector(".storage-512")
            .addEventListener("click", function () {
                getSelect();
                CalcPrice(g512Check, mobiNetCheck);
            });
        document
            .querySelector(".storage-1t")
            .addEventListener("click", function () {
                getSelect();
                CalcPrice(gb1tCheck, mobiNetCheck);
            });
        document
            .querySelector(".storage-2t")
            .addEventListener("click", function () {
                getSelect();
                CalcPrice(gb2tCheck, mobiNetCheck);
            });
        document.querySelector(".wifi").addEventListener("click", function () {
            getSelect();
            mobiNetCheck = false;
            if (g128Check.checked) {
                CalcPrice(g128Check, mobiNetCheck);
            } else if (g256Check.checked) {
                CalcPrice(g256Check, mobiNetCheck);
            }
            else if (g512Check.checked) {
                CalcPrice(g512Check, mobiNetCheck);
            }
            else if (g1tCheck.checked) {
                CalcPrice(g1tCheck, mobiNetCheck);
            }
            else (g2tCheck.checked)
            {
                CalcPrice(g2tCheck, mobiNetCheck);
            }
        });
        document.querySelector(".mobiNet").addEventListener("click", function () {
            getSelect();
            mobiNetCheck = true;
            if (g128Check.checked) {
                CalcPrice(g128Check, mobiNetCheck);
            } else if (g256Check.checked) {
                CalcPrice(g256Check, mobiNetCheck);
            }
            else if (g512Check.checked) {
                CalcPrice(g512Check, mobiNetCheck);
            }
            else if (g1tCheck.checked) {
                CalcPrice(g1tCheck, mobiNetCheck);
            }
            else (g2tCheck.checked)
            {
                CalcPrice(g2tCheck, mobiNetCheck);
            }
        });
        ProductIPads();
        btniPads.addEventListener("click", function () {
            ProductIPads();
        });
    }

}
// iPhone 切換
function ProductIPhone() {
    colorSelect.innerHTML = "";
    storageSelect.innerHTML = "";
    sumPrice.innerText = "";
    networkSelect.style.display = "none";
    networkTitle.style.display = "none";
    changeMainPic("apple/iphone-14-pro-model-unselect-gallery-1-202209.jpg");

    console.log(Object.keys(Products.iPhone14.color[0])[0]);
    for (let j = 0; j < Products.iPhone14.color.length; j++) {
        let div = document.createElement("div");
        let div2 = document.createElement("div");
        let i = document.createElement("i");
        let p = document.createElement("p");
        div.setAttribute("class", "col-6 col-lg-6");
        div2.setAttribute(
            "class",
            `item item-${Products.iPhone14.color[j]} text-center`
        );
        i.setAttribute(
            "class",
            `fas fa-circle fa-3x ${Products.iPhone14.color[j]}`
        );
        p.innerText = `${colorDict[Products.iPhone14.color[j]]}`;
        div2.append(i, p);
        div.appendChild(div2);
        colorSelect.appendChild(div);
    }
    //顏色切換事件
    let changeColor = document.querySelectorAll(".color-select .item");
    for (let i = 0; i < changeColor.length; i++) {
        changeColor[i].addEventListener("click", function () {
            changeMainPic(Products.iPhone14.img[i]);
        });
    }

    //儲存裝置 塞入資料
    for (let j = 0; j < Products.iPhone14.spec.storage.length; j++) {
        let div = document.createElement("div");
        let input = document.createElement("input");
        let label = document.createElement("label");
        let p = document.createElement("p");
        div.setAttribute("class", "col-6 col-lg-6");
        input.setAttribute("type", "radio");
        input.setAttribute("name", "storage");
        input.setAttribute("id", `${Products.iPhone14.spec.id[j]}`);
        input.setAttribute("value", `${Products.iPhone14.spec.storage[j]}`);
        label.setAttribute(
            "class",
            `item ${Products.iPhone14.spec.class[j]} storage text-center`
        );
        label.setAttribute("for", `${Products.iPhone14.spec.id[j]}`);
        p.innerText = Products.iPhone14.spec.storage[j];
        label.appendChild(p);
        div.append(input, label);
        storageSelect.append(div);
    }
    document
        .querySelector(".storage-select .storage-128")
        .addEventListener("click", function () {
            sumPrice.innerText = Products.iPhone14.spec.price[1];
        });
    document
        .querySelector(".storage-select .storage-256")
        .addEventListener("click", function () {
            sumPrice.innerText = Products.iPhone14.spec.price[2];
        });
    btniPhone.addEventListener("click", function () {
        ProductIPhone();
    });

}
