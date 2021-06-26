let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');
c.fillRect(100, 100, 300, 300);
c.fillRect(200, 200, 300, 300);
c.fillRect(300, 300, 300, 300);