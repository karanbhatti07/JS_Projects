let btn1=document.getElementById("btn1")
let btn2=document.getElementById("btn2")
let btn3=document.getElementById("btn3")
let btn4=document.getElementById("btn4")
let btn5=document.getElementById("btn5")
let btn6=document.getElementById("btn6")
let btn7=document.getElementById("btn7")
let btn8=document.getElementById("btn8")
let btn9=document.getElementById("btn9")

let flag=1

function fun1(){
    if(flag==1){
        btn1.value="X"
        btn1.style.fontSize="40px"
        btn1.disabled=true
        flag=0;
    }
    else{
        btn1.value="O"
        btn1.style.fontSize="40px"
        btn1.disabled=true
        flag=1;
    }
    checkwin();
}

function fun2(){
    if(flag==1){
        btn2.value="X"
        btn2.style.fontSize="40px"
        btn2.disabled=true
        flag=0;
    }
    else{
        btn2.value="O"
        btn2.style.fontSize="40px"
        btn2.disabled=true
        flag=1;
    }
    checkwin();
}

function fun3(){
    if(flag==1){
        btn3.value="X"
        btn3.style.fontSize="40px"
        btn3.disabled=true
        flag=0;
    }
    else{
        btn3.value="O"
        btn3.style.fontSize="40px"
        btn3.disabled=true
        flag=1;
    }
    checkwin();
}

function fun4(){
    if(flag==1){
        btn4.value="X"
        btn4.style.fontSize="40px"
        btn4.disabled=true
        flag=0;
    }
    else{
        btn4.value="O"
        btn4.style.fontSize="40px"
        btn4.disabled=true
        flag=1;
    }
    checkwin();
}

function fun5(){
    if(flag==1){
        btn5.value="X"
        btn5.style.fontSize="40px"
        btn5.disabled=true
        flag=0;
    }
    else{
        btn5.value="O"
        btn5.style.fontSize="40px"
        btn5.disabled=true
        flag=1;
    }
    checkwin();
}

function fun6(){
    if(flag==1){
        btn6.value="X"
        btn6.style.fontSize="40px"
        btn6.disabled=true
        flag=0;
    }
    else{
        btn6.value="O"
        btn6.style.fontSize="40px"
        btn6.disabled=true
        flag=1;
    }
    checkwin();
}

function fun7(){
    if(flag==1){
        btn7.value="X"
        btn7.style.fontSize="40px"
        btn7.disabled=true
        flag=0;
    }
    else{
        btn7.value="O"
        btn7.style.fontSize="40px"
        btn7.disabled=true
        flag=1;
    }
    checkwin();
}

function fun8(){
    if(flag==1){
        btn8.value="X"
        btn8.style.fontSize="40px"
        btn8.disabled=true
        flag=0;
    }
    else{
        btn8.value="O"
        btn8.style.fontSize="40px"
        btn8.disabled=true
        flag=1;
    }
    checkwin();
}

function fun9(){
    if(flag==1){
        btn9.value="X"
        btn9.style.fontSize="40px"
        btn9.disabled=true
        flag=0;

    }
    else{
        btn9.value="O"
        btn9.style.fontSize="40px"
        btn9.disabled=true
        flag=1;
    }
    
}

function checkwin() {
    if (btn1.value !== "" && btn1.value === btn2.value && btn2.value === btn3.value) {
        alert(btn1.value + " WINS");
    }
    else if (btn4.value !== "" && btn4.value === btn5.value && btn5.value === btn6.value) {
        alert(btn4.value + " WINS");
    }
    else if (btn7.value !== "" && btn7.value === btn8.value && btn8.value === btn9.value) {
        alert(btn7.value + " WINS");
    }
    else if (btn1.value !== "" && btn1.value === btn4.value && btn4.value === btn7.value) {
        alert(btn1.value + " WINS");
    }
    else if (btn2.value !== "" && btn2.value === btn5.value && btn5.value === btn8.value) {
        alert(btn2.value + " WINS");
    }
    else if (btn3.value !== "" && btn3.value === btn6.value && btn6.value === btn9.value) {
        alert(btn3.value + " WINS");
    }
    else if (btn1.value !== "" && btn1.value === btn5.value && btn5.value === btn9.value) {
        alert(btn1.value + " WINS");
    }
    else if (btn3.value !== "" && btn3.value === btn5.value && btn5.value === btn7.value) {
        alert(btn3.value + " WINS");
    }
}



