let pixelcount=16;
grid=document.querySelector(".grid");
populateGrid();
button=document.querySelector("button");

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
                this.style.backgroundColor="red";
            }
        });
        pixel.addEventListener('mousedown', function(e){ 
            e.preventDefault();
            this.style.backgroundColor="red";
        });
        grid.appendChild(pixel);
    }
}

button.addEventListener('click', () => {
    pixelcount = prompt("How many pixels? (Max 100)")
    populateGrid();
});
