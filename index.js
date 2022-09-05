let count = 0;
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let headingEl = document.getElementById("heading-el");


function increment() {
    count += 1
    countEl.textContent = count
    if (count == 15) {
        headingEl.textContent = "That's enough, better go learn coding now"
        countEl.textContent = 0
        count = 0
    } else {
        //do nothing
    }
}

function save() {
    let previousEntries = count + " - "
    saveEl.textContent += previousEntries
    countEl.textContent = 0
    count = 0;
}

