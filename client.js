let app = angular.module('HandleDesignApp', [])

let canvas = document.getElementById('tutorial');
let c = canvas.getContext('2d');

app.controller('HandleDesignController', [function(){
    console.log( 'in handle design controller');
    let self = this;
    self.message='Hello you!';

    self.color1='';
    self.color2='';

    self.boxPattern = function (color1, color2) {
        let bw = 400;
        let b16 = bw / 16;
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
    }//end box

    self.verticalStripPattern = function (color1, color2) {
        let bw = 400;
        let b16 = bw / 16;
        let pattern1 = [-16, -15, -12, -11, -8 ,-7 ,-4 ,-3 , 0, 1, 4, 5, 8, 9, 12, 13, 
            16, 17, 20, 21, 24, 25, 28, 29, 32, 33, 36, 37, 40, 41, 44, 45, 48, 49, 
            52, 53, 56, 57, 60, 61, 64, 65, 68, 69, 72, 73, 76, 77];


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
                if (pattern1.includes(i / b16 + j/(b16))) {
                    c.fillStyle = color1;
                } else {
                    c.fillStyle = color2;
                }
                c.fill();
            };//end for i 
        }//end for j
    }//end vertical strip
}])