
let imgArr = document.querySelectorAll (".img")
let prevX = 0;
let prevY = 0;
let movexAmount = 0;
let moveyAmount = 0;


document.addEventListener("mousemove", function(e){
  mousePos(e);
})

function mousePos(e){

  movexAmount = e.pageX - e.pageX;
  moveyAmount = e.pageY - e.pageY;

  moveImg(movexAmount, moveyAmount);

  e.prevX - e.prevX;
  e.prevY - e.prevY;
}

function moveImg(xAmount, yAmount){
  
  imgArr.forEach(function(img){
    let movementStrenght = 5 + (Math.random() * 15);

    img.style.left = (img.offsetLeft) - (xAmount/movementStrenght) + "px";
    img.style.top = (img.offsetTop) - (yAmount/movementStrenght) + "px";
  })
}