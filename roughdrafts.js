

function draw() {
    let bw = 400;
    let b16 = bw / 16;
    let color1 = 'green';
    let color2 = 'grey';
    let pattern1 = [-12, -11, -8, -7, -4, -3, 0, 1, 4, 5, 8, 9, 12, 13, 16, 17, 20, 21, 24, 25];
    let pattern2 = [2, 3, 6, 7, 10, 11, 14, 15, 18, 19, 22, 23, 26, 27];
    let rowPattern = [-8, -7, -4, -3, 0, 1, 4, 5, 8, 9, 12, 13, 16, 17]

    for (j = -b16 * 16; j <= b16 * 40; j += b16 * 2) {
        for (let i = -b16 * 8; i <= bw + j; i += b16) {
            console.log('hello');
            c.beginPath();
            c.moveTo(i - j, i + b16 * 2);
            c.lineTo(i - j - b16, i + b16);
            c.lineTo(i - j, i);
            c.lineTo(i - j + b16, i + b16)
            c.closePath();
            c.stroke();
            if (rowPattern.includes(j / (b16 * 2))) {
                if (pattern1.includes(i / b16 - j / (b16 * 2))) {
                    c.fillStyle = color1;
                } else {
                    c.fillStyle = color2;
                }
            } else {
                if (pattern2.includes(i / b16 - j / (b16 * 2))) {
                    c.fillStyle = color1;
                } else {
                    c.fillStyle = color2;
                }
            }
            c.fill();
        };//end for i 
    }//end for j




    // for (let i = 0; i <= bw ; i += b16) {
    //     console.log('hello');
    //     c.beginPath();
    //     c.moveTo(i, i + b16*2);
    //     c.lineTo(i - b16, i +b16 );
    //     c.lineTo(i, i );
    //     c.lineTo(i + b16, i + b16)
    //     c.closePath();
    //     c.stroke();
    //     if (pattern1.includes(i / b16)) {
    //         c.fillStyle = color1;
    //     } else {
    //         c.fillStyle = color2;
    //     }
    // c.fill();
    // };//end for 

    // for (let i = b16*2; i <= bw + b16*2; i += b16) {
    //     console.log('hello');
    //     c.beginPath();
    //     c.moveTo(i - b16*2, i + b16*2);
    //     c.lineTo(i - b16*3, i +b16 );
    //     c.lineTo(i -b16*2, i );
    //     c.lineTo(i - b16, i + b16)
    //     c.closePath();
    //     c.stroke();
    //     if (pattern1.includes(i / b16 - 1)) {
    //         c.fillStyle = color1;
    //     } else {
    //         c.fillStyle = color2;
    //     }
    // c.fill();
    // };//end for 

    // for (let i = b16*4; i <= bw + b16*4; i += b16) {
    //     console.log('hello');
    //     c.beginPath();
    //     c.moveTo(i - b16*4, i + b16*2);
    //     c.lineTo(i - b16*5, i +b16 );
    //     c.lineTo(i -b16*4, i );
    //     c.lineTo(i - b16*3, i + b16)
    //     c.closePath();
    //     c.stroke();
    //     if (pattern2.includes(i / b16 - 2)) {
    //         c.fillStyle = color1;
    //     } else {
    //         c.fillStyle = color2;
    //     }
    // c.fill();
    // };//end for 

    // for (let i = b16*4; i <= bw + b16*6; i += b16) {
    //     console.log('hello');
    //     c.beginPath();
    //     c.moveTo(i - b16*6, i + b16*2);
    //     c.lineTo(i - b16*7, i +b16 );
    //     c.lineTo(i -b16*6, i );
    //     c.lineTo(i - b16*5, i + b16)
    //     c.closePath();
    //     c.stroke();
    //     if (pattern2.includes(i / b16 - 3)) {
    //         c.fillStyle = color1;
    //     } else {
    //         c.fillStyle = color2;
    //     }
    // c.fill();
    // };//end for 





    // for (let i = b16; i <= bw + b16; i += b16) {
    //         console.log('hello');

    //         c.beginPath();
    //         c.moveTo(i , i - b16*2);
    //         c.lineTo(i + b16, i -b16);
    //         c.lineTo(i , i );
    //         c.lineTo(i - b16, i - b16);
    //         c.closePath();
    //         c.stroke();
    //        //can't figure out why this won't work, it seems to work above. 
    //        if ( i == b16 || i == b16*2 || i== b16*5 || i==b16*6 || i==b16*9 || i==b16*10 || i==b16*13 || i==b16*14) {
    //         c.fillStyle= color1;
    //         } else {
    //         c.fillStyle= color2;
    //         };
    //         c.fill();
    //     }

};//end draw



