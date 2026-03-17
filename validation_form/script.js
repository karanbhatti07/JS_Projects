    let fname = document.getElementById("f_name")
    let lname = document.getElementById("l_name")
    let email = document.getElementById("email")
    let phone = document.getElementById("phone")
    let pwd = document.getElementById("pwd")
    let cpwd = document.getElementById("cpwd")
    let age = document.getElementById("age")
    let male = document.getElementById("male")
    let female = document.getElementById("female")
    let checkbtn = document.getElementById("checkbtn")
    // /////////////////////////////////////////////////////////////////////
    let p = document.getElementById("error")
    let p2 = document.getElementById("error2")
    let p3 = document.getElementById("error3")
    let p4 = document.getElementById("error4")
    let p5 = document.getElementById("error5")
    let p6 = document.getElementById("error6")
    let p7 = document.getElementById("error7")
    let p8 = document.getElementById("error8")
    let p10 = document.getElementById("error10")


    // let pass = "123456789"
    let pass = 0
    function register1(){
    let flag = 1

    if(fname.value == "")
    {
        p.innerHTML="Cannot keep Empty"
        fname.classList.add("errorBorder")
        flag = 0
        
    }
    else if(fname.value.length < 3 || fname.value.length > 15){
        p.innerHTML="Name must be between 3 and 15 characters "
        fname.classList.add("errorBorder")
        flag = 0
    }
    else{
        p.innerHTML='<i class="fa-solid fa-check"></i>'
        p.style.color = "green"
        // fname.classList.add("errorBorder")
        flag = 0
    }
    if(lname.value == ""){
        p2.innerHTML="Cannot keep Empty"        
        flag = 0
    }
    else{
        p2.innerHTML=""
        flag = 0
    }
    if(email.value == ""){
        p3.innerHTML="Cannot keep Empty"        
        flag = 0
    }
    else{
        p3.innerHTML=""
        flag=0
    }
    if(phone.value == ""){
        p4.innerHTML="Cannot keep Empty"        
        flag = 0
    }
    else if(phone.value.length > 10 || phone.value.length <10){
        p4.innerHTML="length must be of 10 digits"
        flag = 0
    }
    else{
        p4.innerHTML=""
    }
    if(pwd.value == ""){
        p5.innerHTML="Cannot keep Empty"        
        flag = 0
    }
    // else if(pwd.value){
    //     p5.innerHTML="Not complete"
    // }
    else{
        p5.innerHTML=""
    }
    if(cpwd.value == ""){
        p6.innerHTML="Cannot keep Empty"        
        flag = 0
    }
    else if(cpwd != pwd){
        p6.innerHTML="Password  do not match"
    }
    else{
        p6.innerHTML=""
    }
    if(age.value == ""){
        p7.innerHTML="Cannot keep Empty"        
        flag = 0
    }
    else{
        p7.innerHTML=""
    }
    if(male.checked == false && female.checked == false){
        p8.innerHTML="Must select one option"        
        flag = 0
    }
    else{
        p8.innerHTML=""
    }
    if(checkbtn.checked == false){
        p10.innerHTML="Check the box"        
        flag = 0
    }
    else{
        p10.innerHTML = ""
        // flag = 1
        // alert("Submitted")
        // fname.classList.remove("errorBorder")
    }
    if(flag == 1)
        {
        return true
    }
    else{
        return false
    }
}