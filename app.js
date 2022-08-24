"use strict"

let main = function() {
    let buttons = document.querySelectorAll(".btn");
    let arrayOfButtons = Array.from(buttons);

    let descriptions = document.querySelectorAll(".description");
    
    for (let description of descriptions) {
        description.style.display = "none";
    }

    for (let btn of buttons) {
        btn.addEventListener("click", event => {
            let btn = event.currentTarget;
            let idx = arrayOfButtons.indexOf(btn);
            let element = descriptions[idx];

            element.style.display = displayButton(element, btn);
        })
    }
}()

// for display
function displayButton(element, btn) {
    let display = element.style.display;
    
    if (display === "none") {
        btn.innerText = "x"
        return "block"
    } else {
        btn.innerText = "+"
        return "none"
    }
}