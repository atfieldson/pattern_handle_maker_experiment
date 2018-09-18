console.log('in client js');


let canvas = document.getElementById('tutorial');
let c = canvas.getContext('2d');

function draw() {
    let bw = 400;
    let bh = 800;
    let p = 0;

    let b16 = bw / 16;
    let color1 = 'blue';
    let color2 = 'yellow';
    let pattern1 = [0, 1, 4, 5, 8, 9, 12, 13, 16];

    for (let i = 0; i <= bw + b16; i += b16) {
        console.log('hello');
        c.beginPath();
        c.moveTo(i, i);
        c.lineTo(i + b16, i + b16);
        c.lineTo(i, i + b16 * 2);
        c.lineTo(i - b16, i + b16)
        c.closePath();
        c.stroke();
        if (pattern1.includes(i / b16)) {
            c.fillStyle = color1;
        } else {
            c.fillStyle = color2;
        }
        c.fill();
        
        for (let i = b16; i <= bw + b16; i += b16) {
            console.log('hello');
            
            c.beginPath();
            c.moveTo(i , i - b16*2);
            c.lineTo(i + b16, i -b16);
            c.lineTo(i , i );
            c.lineTo(i - b16, i - b16);
            c.closePath();
            c.stroke();
           //can't figure out why this won't work, it seems to work above. 
           if ( i == b16 || i == b16*2 || i== b16*5 || i==b16*6 || i==b16*9 || i==b16*10 || i==b16*13 || i==b16*14) {
            c.fillStyle= color1;
            } else {
            c.fillStyle= color2;
            };
            c.fill();
        }

     };
}

draw();
