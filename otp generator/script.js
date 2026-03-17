let input = document.getElementById("inp")

function otpgenerator(){
    let otp=""
    for(let i=1;i<=4;i++){
        otp+=Math.floor(Math.random()*10)
    }
    input.value=otp
    // console.log(otp)
}
otpgenerator()

function copy(){
    let copytext = document.getElementById("inp")

    copytext.select()
    copytext.setSelectionRange(0, 99999)

    navigator.clipboard.writeText(copytext.value);

  
    alert("Copied the text: " );
}
copy()