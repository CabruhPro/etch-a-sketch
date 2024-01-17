let pixelcount=16;

grid=document.querySelector(".grid");
button=document.querySelector("button");
button.addEventListener("click",()=>{
    prompt("How manyn pixels? (Max 100)")
});

function populateGrid() {
    for (i = 0; i < pixelcount**2; i++){
        div = document.createElement("div");
        div.addEventListener('mouseenter', function (e) {
            if (e.buttons == 1) {
                percent=100/pixelcount;
                this.style.backgroundColor="red";
                this.style.minWidth=percent;
            }
        });
        grid.appendChild(div);
    }
}
populateGrid();

