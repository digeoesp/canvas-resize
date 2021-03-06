let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext('2d');

// square
// c.fillStyle = 'rgba(255, 0 , 0 , 0.5)';
// c.fillRect(100, 100, 300, 300);
// c.fillStyle = 'rgba(255, 0 , 0 , 1.5)';
// c.fillRect(200, 200, 300, 300);
// c.fillStyle = 'rgba(255, 0 , 0 , 1)';
// c.fillRect(300, 300, 300, 300);

// Line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(400, 600);
// c.lineTo(200, 300);
// c.strokeStyle = 'blue';
// c.stroke();


///////////////////////
// arc and circle
//arc takes in an x, y, and radius, startAngle, endAngle
//startAngle: do not take degrees they take radiance, at what angle would we like to start drawing our arc
//endAngle: how long would you like the arc to go on for
// c.beginPath();
// c.arc(500, 500, 30, 0, Math.PI * 2, false)
// c.strokeStyle = 'pink'
// c.stroke();
// //creating a function to generate a random color
function getRandomColour() {
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);

    return "rgb(" + red + "," + green + "," + blue + " )";
}

// //for loop circles
for (let i = 0; i < 1000; i++) {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    c.beginPath();
    c.arc(x, y, 10, 0, Math.PI * 2, false);
    c.strokeStyle = 'black';
    c.stroke();

}
////////////////
// Moving circle
//
// let x = Math.random() * innerWidth;
// let y = Math.random() * innerHeight;
// let dx = (Math.random() - 0.5) * 30;
// let dy = (Math.random() - 0.5) * 30;
// let radius = 30;
let mouse = {
    x: undefined,
    y: undefined
}
let maxRadius = 40;
let minRadius = 2;

let colorArray = [
    '#E6AD47',
    '#997EF0',
    '#7BD938',
    '#F03E32',
    '#30CDE6',
]
window.addEventListener('mousemove', function (e) {
    mouse.x = e.x;
    mouse.y = e.y;
    console.log(mouse)
})
window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();

});

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color;
        c.fill();


    }

    this.update = function () {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;

        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;

        }

        this.x += this.dx;
        this.y += this.dy;
        //interactivity
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50
            && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            if (this.radius < maxRadius) {
                this.radius += 1;
            }
        } else if (this.radius > this.minRadius) {
            this.radius -= 1;
        }


        this.draw();

    }
}

let circleArray = [];

function init() {

    circleArray = [];
    for (let i = 0; i < 1000; i++) {
        let radius = Math.random() * 8 + 1;
        let x = Math.random() * (innerWidth - radius * 2) + radius;
        let y = Math.random() * (innerHeight - radius * 2) + radius;
        let dx = (Math.random() - 0.5) * 3;
        let dy = (Math.random() - 0.5) * 3;
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }

}

function animate() {
    //calls itself to create a loop
    requestAnimationFrame(animate);
    //clears the canvas everytime it gets called
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }

};
animate();
init();
