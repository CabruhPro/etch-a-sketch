grid=document.querySelector(".grid");
for (i = 0; i < 256; i++){
    div = document.createElement("div");
    div.addEventListener('mouseenter', function (e) {
        if (e.buttons == 1) {
            this.style.backgroundColor="red";
        }
    });
    grid.appendChild(div);
}
