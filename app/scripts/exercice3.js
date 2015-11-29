/*function dragEnter(ev) {
  event.preventDefault();
  return true;
}

function dragOver(ev) {
  return false;
}

function dragDrop(ev) {
  var src = ev.dataTransfer.getData("Text");
  ev.target.appendChild(document.getElementById(result));
  ev.stopPropagation();
  return false;
}

function drop(target, event) {
  navId = event.dataTransfer.getData("text");
  target.appendChild(document.getElementById("result"));
  event.preventDefault();
}*/

var MAX_HEIGHT = 100;
function render(src){
  var image = new Image();
  image.onload = function(){
    var canvas = document.getElementById("result");
    if(image.height > MAX_HEIGHT) {
      image.width *= MAX_HEIGHT / image.height;
      image.height = MAX_HEIGHT;
    }
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0, image.width, image.height);
  };
  image.src = src;
}

function loadImage(src){
  //	Prevent any non-image file type from being read.
  if(!src.type.match(/image.*/)){
    console.log("The dropped file is not an image: ", src.type);
    return;
  }

  //	Create our FileReader and run the results through the render function.
  var reader = new FileReader();
  reader.onload = function(e){
    render(e.target.result);
  };
  reader.readAsDataURL(src);
}

var target = document.getElementById("dropArea");
target.addEventListener("dragover", function(e){e.preventDefault();}, true);
target.addEventListener("drop", function(e){
  e.preventDefault();
  loadImage(e.dataTransfer.files[0]);
}, true);


