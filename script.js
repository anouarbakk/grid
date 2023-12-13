function changeColor(grid) {
    grid.classList.add("changeColor");
}
function creategrid(size) {
    let container = document.querySelector("#container");
    container.innerHTML = "";
    for (let i = 0; i < size * size; i++) {
        let grid = document.createElement("div");
        grid.classList.add("grid");
        grid.style.width = `${100 / size}%`;
        grid.style.height = `${100 / size}%`;
        container.appendChild(grid);
        grid.addEventListener("mouseover", () => changeColor(grid));
        container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    }
}
let resize = document.querySelector("#sizeButton");
let sizeInput=document.querySelector("#size");
resize.addEventListener("click", () => {
    let newSize=parseInt(sizeInput.value);
    if (!isNaN(newSize) && newSize >0 && newSize <=100){
        creategrid(newSize);
    }
    else{
        alert("Please enter a number between 1 and 100");
    }
});
creategrid(16);
