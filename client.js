console.log('in client js');


let canvas = document.getElementById('tutorial');
let c = canvas.getContext('2d');

function draw() {
    let bw = 400;
    let bh = 800;
    let p = 0;

    let b16 = bw / 16;
    let b8 = bw / 8;
    let hypotenuse = Math.sqrt((b16 * b16) + (b16 * b16));
    let color1 = 'blue';
    let color2 = 'yellow';


    for (let i = 0; i <= bw + b16; i += b16) {
        c.moveTo(i, i);
        c.lineTo(i + b16, i + b16);
        c.lineTo(i, i + b16 * 2);
        c.lineTo(i - b16, i + b16)
        c.closePath();
        c.fill();
        c.stroke();
        if (i / 16 == 1 || 2 || 3) {
            c.fillStyle = color1;
        } else {
            c.fillStyle = color2
        }  
    };



    // c.moveTo(0, 0);
    // c.lineTo( b16, b16);
    // c.lineTo( 0, b8);
    // c.closePath();
    // c.fillStyle= color1;
    // c.fill();
    // c.stroke();

    // c.moveTo( b16, b16);
    // c.lineTo(b8,b8 );
    // c.lineTo(b16, (b8+b16));
    // c.lineTo(0, b8);
    // c.closePath();
    // c.fill();
    // c.fillStyle= color1;
    // c.stroke();

    // c.moveTo( b8, b8);
    // c.lineTo( (b8 + b16) ,  (b8 + b16) );
    // c.lineTo(b8, b8*2);
    // c.lineTo(b16, b8+b16);
    // c.closePath();
    // c.fill();
    // c.fillStyle= color2;
    // c.stroke();

    // for (let x = 0; x <= bw*(bh/bw + 1); x += bw/8) {
    //     c.moveTo( p, bh-x);
    //     c.lineTo(x, bh);
    // };

    // for (let x = 0; x <= bh*2; x += bw/8) {
    //     c.moveTo(bw, bh-x);
    //     c.lineTo(bw -x, bh );
    // }

    // c.strokeStyle = "black";
    // c.stroke();
}

draw();