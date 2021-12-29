
// MOUSE EVENT
let mousePointer;
let x = 0;
let y = 0;
let mx = 0;
let my = 0;
let speed = 0.12;

window.onload = function() {
  mousePointer = document.querySelector('.mouse_pointer');

  window.addEventListener('mousemove', mouseFunc, false);
  
  function mouseFunc(e) {
    x = e.clientX;
    y = e.clientY;
  }

  loop();
}

function loop() {
  mx += (x - mx) * speed;
  my += (y - my) * speed;
  mousePointer.style.transform = `translate(${mx}px, ${my}px)`;
  window.requestAnimationFrame(loop);
}

//Mouse Big event
var mousePointerImage = document.getElementsByClassName('mouse_img_pointer');

mousePointerImage[0].addEventListener("mouseover", mouseOverPointer);
mousePointerImage[1].addEventListener("mouseover", mouseOverPointer);
mousePointerImage[2].addEventListener("mouseover", mouseOverPointer);
mousePointerImage[3].addEventListener("mouseover", mouseOverPointer);

mousePointerImage[0].addEventListener("mouseout", mouseOutPointer);
mousePointerImage[1].addEventListener("mouseout", mouseOutPointer);
mousePointerImage[2].addEventListener("mouseout", mouseOutPointer);
mousePointerImage[3].addEventListener("mouseout", mouseOutPointer);

function mouseOverPointer (){
  mousePointer.style=" width: 50px; height: 50px; transition: width height 0.3s;"

}
function mouseOutPointer (){
  mousePointer.style=" width: 12px; height: 12px; transition: width height 0.3s;"

}