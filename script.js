let isMouseDown = false;
const gridContainer = document.querySelector(".grid-container");

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

function paintTheTile(event) {
    if (event.target.matches(".tile") && isMouseDown) {
        event.preventDefault();
        event.target.style.backgroundColor = "red";
        console.log("shift is: " + event.shiftKey)
        console.log("shift is--: " + event.button)
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

