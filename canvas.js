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
// function getRandomColour() {
//     var red = Math.floor(Math.random() * 255);
//     var green = Math.floor(Math.random() * 255);
//     var blue = Math.floor(Math.random() * 255);

//     return "rgb(" + red + "," + green + "," + blue + " )";
// }

// //for loop circles
// for (let i = 0; i < 1000; i++) {
//     let x = Math.random() * window.innerWidth;
//     let y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x, y, 10, 0, Math.PI * 2, false);
//     c.strokeStyle = getRandomColour();
//     c.stroke();

// }
////////////////
// Moving circle
//

let x = 00;
let y = 200;
function animate() {
    //calls itself to create a loop
    requestAnimationFrame(animate);
    //clears the canvas everytime it gets called
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.beginPath();
    c.arc(x, 200, 30, 0, Math.PI * 2, false)
    c.strokeStyle = 'black'
    c.stroke();
    //incriments the circle by one and moves to the right
    x += 1;
};
animate()
