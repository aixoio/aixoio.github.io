var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
function Circle(x, y, dx, dy, radius, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.color = color;
  this.radius = radius;
  this.draw = function () {
    context.beginPath();
    context.strokeStyle = this.color;
    context.arc(this.x, this.y, this.radius, 0, (Math.PI * 2), false);
    context.stroke();
  };
  this.update = function () {
    if ((this.x + radius) > canvas.width || (this.x - radius) < 0) {
      this.dx = -this.dx;
    }
    if ((this.y + radius) > canvas.height || (this.y - radius) < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
  }
}
var circle = new Circle(200, 200, 5, 5, 100, "#ff0000");
var circles = [new Circle(200, 200, 8, 8, 50, "#ffccff"), new Circle(100, 100, 20, 20, 5, "#bbccff"), new Circle(100, 100, 5, 5, 25, "#aaaffa"), new Circle(100, 100, 8, 8, 10, "#ffbbaa")];
var x = (Math.random() * canvas.width);
var y = (Math.random() * canvas.height);
var dx = ((Math.random() - 0.5) * 5);
var dy = ((Math.random() - 0.5) * 5);
var radius = 50;
animate();
function animate() {
  requestAnimationFrame(animate);
  context.fillStyle = "#000000";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.stroke();
  circle.draw();
  circle.update();
  circles.forEach((item, i) => {
    item.draw();
    item.update();
  });
  context.fillStyle = "#ffffff";
  context.font = "25px Arial";
  context.fillText("aixoio", (((canvas.width / 2) - 25) - 6), (((canvas.height / 2) - 25)) - 6);
}
