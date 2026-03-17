// let min=document.getElementsByClassName("min")
// let sec=document.getElementsByClassName("sec")
// let msec=document.getElementsByClassName("msec")
// let btn1=document.getElementById("btn1")
// let btn2=document.getElementById("btn2")
// let btn3=document.getElementById("btn2")
// let timer=null;

//
      
// function start(){
//     if (timer!==null)
//         return timer=setInterval(stopwatch,10)    
// }
// function stop(){
//     clearInterval(timer);
//     timer= null;
// }
// function restart(){
// clearInterval(timer);
// timer=null;
// min=0;
// sec=0;
// msec=0;
// document.getElementsByClassName("display").innerHTML="00:00:00";
//  }
// function stopwatch(){
//     msec++;

//     if (msec === 100){
//         msec=0
//         sec++;
//     }
//     if(sec===60){
//         sec=0;
//         min++;

//     }
    
//     let m=min<10?"0"+min:min;
//     let s=sec<10?"0"+sec:sec;
//     let ms=msec<10?"0"+msec:msec;

//     document.getElementById("display").innerHTML=
//     m+":"+s+":"+ms;    
// }

let display = document.querySelector(".display")
let stopbtn = document.getElementById("stopbtn")
let startbtn = document.getElementById("startbtn")
let resetbtn = document.getElementById("resetbtn")

let min = 0;
let sec = 0;
let msec= 0;
let timer = null;

function Startbtn(){
    if(timer != null){
        clearInterval(timer)
    }
    timer=setInterval(start,10)
}

function Stopbtn(){
   clearInterval(timer)
}

function Resetbtn(){
   clearInterval(timer)
   display.innerHTML=`00:00:00`
   msec=sec=min=0
}

function start(){
    msec++
    if(msec==100){
        msec=0
        sec++
        if(sec==60){
            sec=0
            min++
        }
    }
    let msecstring
    if(msec < 10){
        msecstring=`0${msec}`
    }
    else{
        msecstring=msec
    }

    let secstring
    if(sec < 10){
        secstring=`0${sec}`
    }
    else{
        secstring=sec
    }

    let minstring
    if(min < 10){
        minstring=`0${min}`
    }
    else{
        minstring=min
    }

    display.innerHTML=`${minstring}:${secstring}:${msecstring}`


}















































// function hello(...args){
//     let s=0;
//     for(let i=0; i<args.length; i++){
//         s=s+args[i];
//     }
//     console.log(s);
// }
// hello(667);
// hello(34,44);

