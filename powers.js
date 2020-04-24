function enableClass (selectedEl) {
    selectedEl.classList.remove("disabled")
    selectedEl.classList.add("enabled")
}
function disableClass (selectedEl) {
    selectedEl.classList.remove("enabled")
    selectedEl.classList.add("disabled")
}

function handlerFunction(element) {
    selectedEl = document.querySelectorAll("section")
    if (element === "activateAll") {
        for (el of selectedEl) {
            enableClass(el)
        }
    } else if (element === "deactivateAll") {
        for (el of selectedEl) {
            disableClass(el)
        }
    } else {
        selectedEl = document.querySelector(element)
        enableClass(selectedEl)
    }
}

function buttonSelect (id) {
    selector = event.target.id.split("-")
    if (selector[1] === "all") {
        handlerFunction(`${selector[0]}All`)
    } else {
        handlerFunction(`#${selector[1]}`)
    }
}

document.querySelector("body").addEventListener("click", buttonSelect)