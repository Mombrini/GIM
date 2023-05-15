var canvas = document.getElementById('snowCanvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var snowflakes = [];

function Snowflake() {
  this.x = Math.random() * canvas.width;
  this.y = -50;
  this.speed = Math.random() * 5 + 1;
  this.radius = Math.random() * 4 + 1;
  this.opacity = Math.random() * 0.5 + 0.5;

  this.update = function() {
    this.y += this.speed;
    if (this.y > canvas.height) {
      this.y = -50;
      this.x = Math.random() * canvas.width;
    }
  };

  this.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(230, 230, 230, " + this.opacity + ")";
    ctx.fill();
  };
}

function createSnowflakes() {
  for (var i = 0; i < 200; i++) {
    snowflakes.push(new Snowflake());
  }
}

function animateSnowflakes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < snowflakes.length; i++) {
    snowflakes[i].update();
    snowflakes[i].draw();
  }
  requestAnimationFrame(animateSnowflakes);
}

createSnowflakes();
animateSnowflakes();
