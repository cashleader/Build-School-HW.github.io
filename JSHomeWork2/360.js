   // 1.宣告所有需要的DOM
        //1-1所有顏色按鈕的dom
        const bluerayBtn = document.getElementById('blueray');
        console.log(bluerayBtn);
        const blackBtn = document.getElementById('black');
        const grayBtn = document.getElementById('gray');
        const redBtn = document.getElementById('red');
        const whiteBtn = document.getElementById('white');
        const silverBtn = document.getElementById('silver');


        let carSrc;
        let colorName = document.querySelector('.color-name');
        let carArray = [];


        for (let i = 1; i < 61; i++) {
            carSrc = "TOYOTA/360EXT_1_18_" + i + ".png";
            carArray.push(carSrc);
        }
        let container;
        let control;
        let control_reverse;
        let index = 0;
        let img = document.querySelector("#container img");


        window.onload = function () {
            container = document.getElementById("container");
            control = document.getElementById("control");
            control_reverse = document.getElementById("control_reverse");
            img.src = carArray[index];

            // 左邊
            control.addEventListener('click', function () {
                if (index == 59) {
                    index = 0;
                }
                else
                    index++;
            })
            img.src = carArray[index];

            // 右邊
            control_reverse.addEventListener('click', function () {
                if (index == 0) {
                    index = 59;
                }
                else
                    index--;
                img.src = carArray[index];
            })
        }

        // 改變顏色
        bluerayBtn.addEventListener('click', function () {
            carArray = [];
            for (let i = 1; i < 61; i++) {
                carSrc = "TOYOTA/360EXT_1_18_" + i + ".png";
                carArray.push(carSrc);
            }
            colorName.innerHTML = "藍耀灰";
        })
        blackBtn.addEventListener('click', function () {
            carArray = [];
            for (let i = 1; i < 61; i++) {
                carSrc = "TOYOTA/360EXT_1_19_" + i + ".png";
                carArray.push(carSrc);

            }
            colorName.innerHTML = "檀木黑";
        })
        grayBtn.addEventListener('click', function () {
            carArray = [];
            for (let i = 1; i < 61; i++) {
                carSrc = "TOYOTA/360EXT_1_20_" + i + ".png";
                carArray.push(carSrc);
            }
            colorName.innerHTML = "雲河灰";
        })
        redBtn.addEventListener('click', function () {
            carArray = [];
            for (let i = 1; i < 61; i++) {
                carSrc = "TOYOTA/360EXT_1_22_" + i + ".png";
                carArray.push(carSrc);
            }
            colorName.innerHTML = "炫魅紅";
        })
        whiteBtn.addEventListener('click', function () {
            carArray = [];
            for (let i = 1; i < 61; i++) {
                carSrc = "TOYOTA/360EXT_1_23_" + i + ".png";
                carArray.push(carSrc);
            }
            colorName.innerHTML = "雪貂白";
        })
        silverBtn.addEventListener('click', function () {
            carArray = [];
            for (let i = 1; i < 61; i++) {
                carSrc = "TOYOTA/360EXT_1_21_" + i + ".png";
                carArray.push(carSrc);
            }
            colorName.innerHTML = "極光銀";
        })

