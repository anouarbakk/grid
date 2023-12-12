let container = document.querySelector("#container");

for (let i = 0; i < 256; i++) {
    let grid = document.createElement("div");
    grid.classList.add("grid");
    container.appendChild(grid);
    grid.addEventListener("mouseover", () => changeColor(grid));
}

function changeColor(grid) {
    grid.classList.add("changeColor");
}