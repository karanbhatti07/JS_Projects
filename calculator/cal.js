function display(b){
    let a=document.getElementById("input")
    a.value+=b
}
function res(){
    let c=document.getElementById("input").value
    re=eval(c)
    c=document.getElementById("input").value=re
}
function clear1(){
    document.getElementById("input").value=" "
}