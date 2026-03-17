let input_text=document.getElementById("inp")
let count = 0
let max = 7


function addtask(){
    let input= document.createElement("input")
    if(count >= max){
        alert("Maximum 7 tasks allowed")
        return
    }

    input.type="text"
    input.placeholder="   Add task......"
    let a = input_text.value
    input.value=a
    input_text.value=""
    input.className="task"
// /////////////////////////////////
    input.style.height="60px"
    input.style.width="500px"
    input.style.fontSize="20px"
    input.disabled = true;
// ////////////////////////////////
    let btn=document.createElement("button")
    btn.id="btn"
    btn.innerHTML='<i class="fa-solid fa-delete-left"></i>'
    btn.onclick = del1

    function del1(){
        input.remove()
        btn.remove()
        btn2.remove()
        btn3.remove()
        count--
    }
    // ///////////////////////////////////////////
    let btn2=document.createElement("button")
    btn2.id="btn2"
    btn2.innerHTML='<i class="fa-solid fa-pen-to-square"></i>'
    btn2.onclick = edit

    function edit(){
        input.disabled = false
        // input.style.cssText = "background-color: yellow; width:500px; height:60px"
    }
    // //////////////////////////////////////////////
    let btn3=document.createElement("button")
    btn3.id="btn3"
    btn3.innerHTML='<i class="fa-solid fa-floppy-disk"></i>'
    btn3.onclick = save

    function save(){
        input.disabled = true
    }
    document.getElementById("div2").appendChild(input);
    document.getElementById("div2").appendChild(btn);
    document.getElementById("div2").appendChild(btn2);
    document.getElementById("div2").appendChild(btn3);

    count++
}
