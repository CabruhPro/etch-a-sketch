// Initial page variables
let pixelcount=64;
let color="#000000";
let drawing=true;

grid=document.querySelector(".grid");
populateGrid();
function populateGrid (){
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
    for (i=0; i < pixelcount**2; i++){
        percentage = 100/pixelcount + "%";
        pixel = document.createElement("div");
        pixel.className = "pixel";
        pixel.style.minWidth = percentage;
        pixel.addEventListener('mouseover', function(e){
            if(e.buttons==1){
                if(drawing){
                    this.style.backgroundColor=color;
                }
                else{
                    this.style.backgroundColor="#FFFFFF"
                }
            }
        });
        pixel.addEventListener('mousedown', function(e){ 
            e.preventDefault();
            if (drawing){
                this.style.backgroundColor=color;
            }
            else{
                this.style.backgroundColor="#FFFFFF"
            }
        });
        grid.appendChild(pixel);
    }
}

pixelcountdiv=document.querySelector("#pixelcount");
slider=document.querySelector(".slider");
function displayPixelCount (pixelcount) {
    pixelcountdiv.textContent="Pixel Count: "+pixelcount+"px"; 
}
slider.addEventListener('input', function (e) {
    pixelcount=2**slider.value*8;
    populateGrid();
    displayPixelCount(pixelcount);
});

colorvaldiv=document.querySelector("#colorvalue");
colorpicker=document.querySelector("#colorpalette");
function displayColorValue (colorvalue) {
    colorvaldiv.textContent="Color: "+colorvalue; 
}
colorpicker.addEventListener('input', function (e) {
    colorvalue=colorpicker.value;
    displayColorValue(colorvalue);
    colorvaldiv.style.color=colorvalue;
    color=colorvalue;
});

drawbutton=document.querySelector("#draw");
drawbutton.addEventListener('click', function () {
    drawbutton.style.color="#FFFFFF"
    drawbutton.style.borderColor="#FFFFFF"
    erasebutton.style.color="#000000"
    erasebutton.style.borderColor="#000000"
    drawing=true;
});
erasebutton=document.querySelector("#erase");
erasebutton.addEventListener('click', function () {
    drawbutton.style.color="#000000"
    drawbutton.style.borderColor="#000000"
    erasebutton.style.color="#FFFFFF"
    erasebutton.style.borderColor="#FFFFFF"
    drawing=false;
});
clearbutton=document.querySelector("#clear");
clearbutton.addEventListener('click', function () {
    grid.childNodes.forEach(pixel => pixel.style.backgroundColor="#FFFFFF");
});
clearbutton.addEventListener('mousedown', function () {
    clearbutton.style.color="#FFFFFF"
    clearbutton.style.borderColor="#FFFFFF"
});
clearbutton.addEventListener('mouseup', function () {
    clearbutton.style.color="#000000"
    clearbutton.style.borderColor="#000000"
});
clearbutton.addEventListener('mouseleave', function () {
    clearbutton.style.color="#000000"
    clearbutton.style.borderColor="#000000"
});