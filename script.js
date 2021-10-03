let boxTop = 200;
let boxLeft = 200;

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if (keyName === "ArrowDown") { boxTop = boxTop + 10 }
    if (keyName === "ArrowUp") { boxTop = boxTop - 10 }
    if (keyName === "ArrowLeft") { boxLeft = boxLeft - 10 }
    if (keyName === "ArrowRight") { boxLeft = boxLeft + 10 }
    document.getElementById("box").style.top = boxTop + "px";
    document.getElementById("box").style.left = boxLeft + "px";
    console.log(keyName)

});