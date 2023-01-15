/*TODO:
1.開始按鈕
2.產生四個不重複的數字
3.檢查數字
4.清除功能
*/

// 抓取所需要的DOM
let answer = "";
let start = document.getElementById("start");
let see = document.getElementById("see");
let check = document.getElementById("check");
let input = document.getElementById("input");
let clean = document.getElementById("clean");
let times = document.getElementById("times");


// 產生答案
function Answer() {
    while (answer.length < 4) {
        let r = Math.floor(Math.random() * 10);
        if (!answer.includes(r)) {
            answer += r;
        }
    }
}

// 開始遊戲
start.onclick = function () {
    Answer();
    input.disabled = false;
    check.disabled = false;
}
// 看答案
see.onclick = function () {
    if (check.disabled == true) {
        alert("請先點選開始按鈕");
    }
    else {
        alert(answer);
    }

}
times = 0;
check.onclick = function () {
    // 正則表達式，判斷數字是否重複
    let regex = /^(?!\d*?(\d)\d*?\1)\d{4}$/;
    if (input.value.length == 4&&regex.test(input.value))  {
        let a = 0;
        let b = 0;
        times += 1;
        document.getElementById("times").innerText = times;
        let inputArray = Array.from(input.value);
        let answerArray = Array.from(answer);
        for (let i = 0; i < 4; i++) {
            if (answerArray.includes(inputArray[i])) {
                if (answerArray[i] == inputArray[i]) {
                    a++;
                } else {
                    b++;
                }
            } 
            
        }
        let span = document.createElement("span");
        let option = document.createElement("li");
        let select = document.getElementById("select");
        span.className = "badge bg-danger";
        option.className = "list-group-item";
        if (answer === input.value) {
            span.className = "badge bg-success";
            alert("猜對了");
        }
        else {
            span.innerText = a + "A" + b + "B";
        }
        option.innerText = input.value;
        option.appendChild(span);
        select.appendChild(option);
    }

    else {
        alert("長度太長或太短或重複");
    }
    input.value = "";
}

clean.onclick = function () {
    window.location.reload();
}