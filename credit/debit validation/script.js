let input = document.getElementById("name")
let p = document.getElementById("error")
let card_no = document.getElementById("crd_no")
let p2 = document.getElementById("error2")
let month = document.getElementById("month_input")
let p3 = document.getElementById("error3")
let year = document.getElementById("year_input")
let p4 = document.getElementById("error4")
let cvv_no = document.getElementById("cvv_input")
let p5 = document.getElementById("error5")

function check(){
let flag = 1
if(input.value == ""){
    p.innerHTML = "Please enter name"
    flag = 0
}
else{
    p.innerHTML=""
}
if(card_no.value == ""){
    p2.innerHTML = "Please enter card number"
    flag = 0
}
else if(card_no.value.length > 16 || card_no.value.length < 16){
    p2.innerHTML= "Invalid length"
    flag = 0
}
else{
    p2.innerHTML=""
}
if(month.value == ""){
    p3.innerHTML = "Enter month"
    flag = 0
}
else if(month.value > 12){
    p3.innerHTML = "Invalid month"
    flag  = 0
}
else{
    p3.innerHTML=""
}
if(year.value == ""){
    p4.innerHTML = "Enter year"
    flag = 0
}
else if(year.value.length > 4 || year.value.length < 4){
    p4.innerHTML = "Invalid year"
}
else{
    p4.innerHTML=""
}
if(cvv_no.value == ""){
    p5.innerHTML = "Enter CVV no."
    flag = 0
}
else if(cvv_no.value.length > 3 || cvv_no.value.length < 3){
    p5.innerHTML = "Invalid CVV no."
    flag = 0
}
else{
    p5.innerHTML=""
}
if(flag == 1)
    {
        alert("submit")
        return true
    }
    else{
        return false
    }
}

function reset(){
    input.value = ""
    card_no.value=""
    month.value = ""
    year.value = ""
    cvv_no.value = ""
    p.innerHTML=""
    p2.innerHTML=""
    p3.innerHTML=""
    p4.innerHTML=""
    p5.innerHTML=""

}