let textarea = document.getElementById("textarea")
let character_btn=document.getElementById("charbtn")
let word_btn=document.getElementById("wrdbtn")
let sentence_btn=document.getElementById("stcbtn")
let clr_btn=document.getElementById("clr_btn")
let ch_input = document.getElementById("ch_input")
let w_input = document.getElementById("w_input")

function wordcount(){
    let text1=textarea.value.trim()
    let text2=text1.split(/\s+/).length
    w_input.value=text2
    console.log(text2);

    w_input.style.fontSize="15px"
    w_input.style.fontWeight="bolder"
    w_input.style.textAlign="center"
    w_input.style.backgroundColor="red"
    w_input.style.color="white"
    
    
}
wordcount()

function charactercount(){
    let text = textarea.value.length
    
    ch_input.value=text
    ch_input.style.fontSize="15px"
    ch_input.style.fontWeight="bolder"
    ch_input.style.textAlign="center"
    ch_input.style.backgroundColor="red"
    ch_input.style.color="white"
}
charactercount()

function clearall(){
    document.getElementById("textarea").value = "";
    document.getElementById("ch_input").value = "";
    document.getElementById("w_input").value = "";
}
clearall()