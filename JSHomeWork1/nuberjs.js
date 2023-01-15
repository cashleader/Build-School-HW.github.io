// 抓取html 的DOM
let startBtn = document.querySelector('.startBtn');
let restBtn = document.querySelector('.restBtn');
let inputStr = document.querySelector(".input");
let msg = document.querySelector('.message');
let warn = document.querySelector('.warning');
let checkBtn = document.querySelector(".check");
let clearBtn = document.querySelector('.clear');
let ansBtn = document.querySelector('.answer');
let numBtns = document.querySelector('.button');
let Start = document.querySelector('.start');

// 產生亂數
let min = 1;
let max = 100;
const STANDARD_RADIX = 10

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let answer = getRandomNum(min, max);
console.log('答案是' + answer);

// 數字鍵讀取
let btn = document.querySelectorAll('.item');
btn.forEach(element => {
    element.addEventListener('click', function () {
        inputStr.value += element.innerHTML;
    })
});
// 遊戲開始
startBtn.addEventListener("click", function () {
    Start.style.display = 'none'
});

//驗證輸入的密碼是否正確
checkBtn.addEventListener("click", function () {
    let num = inputStr.value;
    let useInput = parseInt(num, STANDARD_RADIX);
    if (useInput != NaN) {
        if (useInput >= max || useInput <= min) {
            warn.innerHTML = '欠罵!數字超過範圍，給我重新輸入';

        }
        else if (useInput == answer) {
            alert("可以買樂透，竟然猜中了");
            btn.forEach(x => {
                x.disabled = true;
            })
            checkBtn.disabled = true;
            clearBtn.disabled = true;
        }
        else if (useInput => answer) {
            max = useInput;
            msg.innerHTML = `${min}~${max}`;
            warn.innerHTML = '';
        }
        else if (useInput <= answer) {
            min = useInput;
            msg.innerHTML = `${min}~${max}`;
            warn.innerHTML = '';
        }
    }
    else {
        warn.innerHTML = '請輸入數字';
    }
    inputStr.value = "";
});



//清除功能
clearBtn.addEventListener('click', function () {
    inputStr.value = '';
    msg.innerHTML = '';
})
//看答案
ansBtn.addEventListener('click', function () {
    alert(answer);
});
// 重新開始遊戲
restBtn.addEventListener('click', function () {
    min = 1;
    max = 100;
    answer = getRandomNum(min, max);
    msg.innerHTML = `${min}~${max}`;
    inputStr.value = '';
    warn.innerHTML = '';
    btn.forEach(x => {
        x.disabled = false;
    })
    checkBtn.disabled = false;
    clearBtn.disabled = false;
});