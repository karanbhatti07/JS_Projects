let hrs=document.getElementById("hrs");
let min=document.getElementById("min");
let sec=document.getElementById("sec");
    function setdate(){
    let now = new Date();

    hrs.innerHTML = now.getHours();
    min.innerHTML = now.getMinutes();


    

    sec.innerHTML = now.getSeconds();
    let seconds = (second / 60) * 360 ; 

    min.innerHTML = now.getMinutes();
    let minutes=((minute/60)*360 + (second/60)*6);
   
    hrs.innerHTML = now.getHours();
    let hours=((hour/12)*360 + (minute/60)*30);
   
}
setInterval(setdate, 1000);
setdate()