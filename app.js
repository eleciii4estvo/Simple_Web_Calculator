const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const num3 = document.getElementById('num3')
const num4 = document.getElementById('num4')
const num5 = document.getElementById('num5')
const num6 = document.getElementById('num6')
const num7 = document.getElementById('num7')
const num8 = document.getElementById('num8')
const num9 = document.getElementById('num9')
const num0 = document.getElementById('num0')
const point = document.getElementById('point')
const actPlus = document.getElementById('plus')
const actMinus = document.getElementById('minus')
const actMultiply = document.getElementById('multiply')
const actDivide = document.getElementById('divide')
const actResult=document.getElementById('getResult')
const result = document.getElementById('result')
const clear = document.getElementById('clear')
let first = 0
let second = 0
let action = '+'
let lastErr=false


num1.onclick = function() {
    errorChecker(result);
    result.textContent+=1;
}
num2.onclick = function() {
    errorChecker(result);
    result.textContent+=2;
}
num3.onclick = function() {
    errorChecker(result);
    result.textContent+=3;
}
num4.onclick = function() {
    errorChecker(result);
    result.textContent+=4;
}
num5.onclick = function() {
    errorChecker(result);
    result.textContent+=5;
}
num6.onclick = function() {
    errorChecker(result);
    result.textContent+=6;
}
num7.onclick = function() {
    errorChecker(result);
    result.textContent+=7;
}
num8.onclick = function() {
    errorChecker(result);
    result.textContent+=8;
}
num9.onclick = function() {
    errorChecker(result);
    result.textContent+=9;
}
num0.onclick = function() {
    errorChecker(result);
    result.textContent+=0;
}
point.onclick = function(){
    result.textContent+= '.';
}
firstValue = function(){
    first = Number(result.textContent)
}
actPlus.onclick = function(){
    firstValue();
    result.textContent+='+';
    action = '+';
}
actMinus.onclick = function(){
    firstValue();
    result.textContent+='-';
    action = '-';
}
actMultiply.onclick = function(){
    firstValue();
    result.textContent+='*';
    action = '*';
}
actDivide.onclick = function(){
    firstValue();
    result.textContent+='/';
    action = '/';
}

function errorChecker(res){
    if (lastErr){
        result.textContent='';
        lastErr=false;
    }
}

actResult.onclick = function(){
    const lastIndex = result.textContent.lastIndexOf(action);
    let tempres=0;
    second=Number(result.textContent.slice(lastIndex+1));
    console.log(first);
    console.log(second);
    
    if (action=='+'){
        result.textContent=first+second;
    } else if(action=='-'){
        result.textContent=first-second;
    } else if(action=='*'){
        result.textContent=first*second;
    } else{
        tempres = first/second;
        if (tempres!=Math.floor(tempres)){
            result.textContent=tempres.toFixed(3);
        } else{
            result.textContent=tempres;
        }
    }
    if (isNaN(first)||isNaN(second)){
        result.textContent='Error'
        lastErr=true;
    }
    
}

clear.onclick = function(){
    result.textContent='';
    first=0;
    second=0;
}