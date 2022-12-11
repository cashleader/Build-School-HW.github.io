/*
TODO: 終極密碼
1.產生隨機亂數1~100
2.顯示出使用者輸入的數字
3.判斷使用者輸入的為數字
4
4-1:比對使用者輸入的數字
4-2:顯示區間結果


---額外功能---------
1.用鍵盤輸入
2.判斷使用輸入數字
3.美化外觀
 */

// 宣告變數
let min=0;
let max=100;

// 抓取html 的元素

let inputStr=document.querySelector(".guessField");


let checkbtn=document.querySelector("#check");
console.log(checkbtn);

let numClick=document.querySelector(".button");
console.log(numClick);

// 顯示題示字(輸入數字、)
let msg=document.querySelector('.guesses');

// 顯示 range 區間
const showNum=document.querySelector('.lastResult');

// 產生亂數
let randomNumber = Math.floor(Math.random() * 100);
// let randomNumber=50;

// step2:監聽按鈕

// 
checkbtn.addEventListener("click",function(){
    testNum();
    checkNum();
});
//驗證輸入的密碼是否正確
function checkNum() {
    let useInput=parseInt(inputStr.value,10);

    if(useInput>=max||useInput<=min) {
        showNum.innerHTML='數字超出範圍，請重新輸入';
    }
    else if(useInput==randomNumber)
    {
        msg.innerHTML=`成功了!答案是${randomNumber}`;
    }
    else if(useInput<randomNumber)
    {
        min=useInput;
        showNum.innerHTML=`${min}~${max}`;
    }
    else if(useInput>randomNumber)
    {
        max=useInput;
        showNum.innerHTML=`${min}~${max}`;
    }
}

// 檢查是否為數字
function testNum()
{
	let input=document.getElementById("check").value;
	if(isNaN(input)||input.replace(/(^\s*)|(\s*$)/g,"")=="")
    {
		msg.innerHTML='請輸入數字';
	}
}