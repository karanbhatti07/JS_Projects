let hrs=document.getElementsByClassName("hrs")[0]
let min=document.getElementsByClassName("min")[0]
let sec=document.getElementsByClassName("sec")[0]
console.log(hrs)
function setdate(){
    let now=new Date()

    

    let second=now.getSeconds()
    let seconds = (second / 60) * 360 ; 
    sec.style.transform = `rotate(${seconds}deg)`;

    let minute=now.getMinutes()
    let minutes=((minute/60)*360 + (second/60)*6)
    min.style.transform = `rotate(${minutes+180}deg)`;


    let hour =now.getHours()
    let hours=((hour/12)*360 + (minute/60)*30)
    hrs.style.transform = `rotate(${hours+180}deg)`;
}
setInterval(setdate, 1000);
setdate()

