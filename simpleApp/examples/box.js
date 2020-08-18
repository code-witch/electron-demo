const canvas = document.getElementById('main-canvas');
let ctx = canvas.getContext('2d')
ctx.fillStyle = 'dodgerblue';
ctx.fillRect(50,50,50,25);
// check devTools, this is v v v v dangerous,
// as this is being ran via a eval()
console.log(require('fs').readdirSync('.'));