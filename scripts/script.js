let dataRange = document.querySelector("#data-range");
const  dataLeft = document.querySelector(".data-left-number");
const dataUsed = document.querySelector(".data-used");

dataRange.addEventListener("input", () => {
    // Changes the linear gradient color of the input range
    let positionX = dataRange.value;
    let color = `linear-gradient(90deg, hsl(6, 100%, 80%) 0%, hsl(335, 100%, 65%) ${positionX/10}%, hsl(229, 57%, 11%) ${positionX/10}%, hsl(229, 57%, 11%) 100%)`
    dataRange.style.background = color;
    
    // Data left
    dataLeft.textContent = (1000 - dataRange.value)

    // Data used
    dataUsed.textContent = dataRange.value;
})

