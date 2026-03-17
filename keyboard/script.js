let btn1 = document.querySelectorAll(".button1")
let input = document.getElementById("textarea1")

window.addEventListener("keydown", function (e) {
    if (e.key === "CapsLock" || e.key === "Shift") {
        return
    }
    if (e.key === "Backspace") {
        input.value = input.value.slice(0, -1)   // last letter remove
    }
    else if(e.key === "Enter"){
        input.value += "\n"
    }
    else if(e.key === "CapsLock"){
        input.value = e.key.toUpperCase()
    }
    else if(e.key === "Shift + e.key"){
        input.value = e.key.toUpperCase()
    }
    else {
        input.value += e.key
    }

    // input.value += e.key
    btn1.forEach((element) => {
        if(element.innerText===e.key)
        {
        element.style.color = "red"
        }
    })
})
