let box = document.getElementById('box');

document.onmousemove = function(e) {
    let x = e.clientX;
    let y = e.clientY;
    box.style.left = x + 'px';
    box.style.top = y + 'px';
}