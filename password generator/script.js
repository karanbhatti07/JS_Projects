let input = document.getElementById("inp")
let lengthinput = document.getElementById("len")
let symbol = document.getElementById("symbol")
let number = document.getElementById("number")
let lower = document.getElementById("lower")
let upper = document.getElementById("upper")

// let str = "ABCDEFGHIJKLMNOPQRStUVWXYZabcdefghijklmnopqrstuvwxyz1234567890@#$%&* "

function passwordgenerator(){
    let psw = ""
    let chars = ""
    let length = Number(lengthinput.value)

    if (upper.checked)
        chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (lower.checked)
        chars += "abcdefghijklmnopqrstuvwxyz";

    if (number.checked)
        chars += "0123456789";

    if (symbol.checked)
        chars += "@#$%&*";

    if (length <= 0 || chars === "") {
        alert("Enter Length and check atleast one option");
        return;
    }

    for(let i=0;i<length;i++){
        st = Math.floor(Math.random()*chars.length)
        psw += chars.charAt(st)
    }
    input.value=psw
}
