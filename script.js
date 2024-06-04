let isMouseDown = false;
const gridContainer = document.querySelector(".grid-container");
const rightSidePanel = document.querySelector(".right-side-panel");

document.addEventListener("DOMContentLoaded", event => {
    resetAndCreateGrid(16);
})
gridContainer.addEventListener("mouseover", paintTheTile);
gridContainer.addEventListener("mousedown", (event) => {
    event.preventDefault();
    isMouseDown = true;
});
document.addEventListener("mouseup", (event) => {
    event.preventDefault();
    isMouseDown = false
});

rightSidePanel.addEventListener("click", changeGrid);


function paintTheTile(event) {
    if (event.target.matches(".tile") && isMouseDown) {
        event.preventDefault();
        event.target.style.backgroundColor = "red";
    }
}

function resetAndCreateGrid(tileNumber) {
    const gridContainer = document.querySelector(".grid-container");

    // Reset Grid
    while (gridContainer.firstChild !== null) {
        gridContainer.firstChild.remove();
    }

    // Create Grid 
    for (let i = 0; i < tileNumber * tileNumber; i++) {
        const newTile = document.createElement("div")
        newTile.classList.add("tile", `tile-${i}`);
        newTile.style.width = `${(1000 - 2) / tileNumber}px`;
        newTile.style.height = `${(1000 - 2) / tileNumber}px`;
        newTile.setAttribute("draggable", "false");
        gridContainer.appendChild(newTile);
    }
}

function changeGrid(event) {
    if (event.target.matches(".custom-grid-button")) {
        askGridNumber(event);
    } else if (event.target.matches(".custom-grid-submit")) {
        if (
            typeof getInputValue() === "number" &&
            getInputValue() >= 4 && getInputValue() <= 100
            ) {
                resetAndCreateGrid(getInputValue());
                toggleCustomGridButton(true);
                toggleInputGrid(false);
            } else {
                alert("please set the number between 4 and 100");
                console.log(getInputValue());
            }
    } else if (event.target.matches(".grid-16-button")) {
        resetAndCreateGrid(16);
    } else if (event.target.matches(".grid-32-button")) {
        resetAndCreateGrid(32);
    } else if (event.target.matches(".grid-64-button")) {
        resetAndCreateGrid(64);
    } else if (event.target.matches(".grid-100-button")) {
        resetAndCreateGrid(100);
    } else if (event.target.matches(".grid-200-button")) {
        resetAndCreateGrid(200);
    }
}

function askGridNumber(event) {
    if (event.target.matches(".custom-grid-button")) {
        toggleInputGrid(true);
        toggleCustomGridButton(false);
    }
}

function toggleInputGrid(bol) {
    const inputField = document.querySelector(".custom-grid-input");
    const submitButton = document.querySelector(".custom-grid-submit");
    if (bol) {
        inputField.classList.remove("disable");
        submitButton.classList.remove("disable");
    } else {
        inputField.classList.add("disable");
        submitButton.classList.add("disable");
    }
}

function toggleCustomGridButton(bol) {
    const customGridButton = document.querySelector(".custom-grid-button");
    if (bol) customGridButton.classList.remove("disable");
    else customGridButton.classList.add("disable")
}

function getInputValue() {
    const inputField = document.querySelector(".custom-grid-input");
    return parseInt(inputField.value);
}