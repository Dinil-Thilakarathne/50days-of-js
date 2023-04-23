const colors = [0 , 1 ,2 , 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D" , "E", "F"];
const generateBtn = document.getElementById("color-generate-btn");
const colorBox =document.getElementById("colorBox");
const hexValue = document.getElementById("color-hex-value");
const rgbValue = document.getElementById("color-rgb-value");


// generate random color 
generateBtn.addEventListener("click" , () =>{
    let color = "#";
    for(let i =0 ; i < 6 ; i++){
        color += colors[getRandomValue()];
    }
    // change box bg color 
    colorBox.style.backgroundColor = color;

    // display color values 
    hexValue.textContent = color;
    rgbValue.textContent = hexToRgb(color);
})

// generate random number 
getRandomValue = () =>{
    return Math.floor(Math.random()*colors.length);
}

// hex to rgb convert 
hexToRgb = (hex) => {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
  
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

  