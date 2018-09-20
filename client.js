let app = angular.module('HandleDesignApp', [])

let canvas = document.getElementById('tutorial');
let c = canvas.getContext('2d');

app.controller('HandleDesignController', [function(){
    console.log( 'in handle design controller');
    let self = this;
    self.message='Hello you!';

    self.color1='green';
    self.color2='blue';

    self.egyptianEyePattern = function (color1, color2) {
        let bw = 400;
        let b16 = bw / 16;
        let pattern1 = [0, 1, 2, 3, 5, 6, 7, 8, 13, 17, 22, 24, 26, 31];
        let pattern2 = [3, 8, 9, 10, 11, 13, 14, 15, 16];
        let pattern3 = [0, 2, 7, 11, 16];
        let pattern4 = [1, 6, 8, 10, 15];
        let pattern5 = [0, 5, 9, 14, 16];
        let row1 = [-20, -15, -10, -5, 0, 5, 10, 15, 20, 25];
        let row2 = [-19, -14, -9, -4, 1, 6, 11, 16, 21];
        let row3 = [-18, -13, -8, -3, 2, 7, 12, 17, 22];
        let row4 = [-17, -12, -7, -2, 3, 8, 13, 18, 23, 28]
        //row 5 is the else 
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
                    //The egyptian eye does not function like Emerald did, 
                    //when row 1 completes its first 16, it actually turns into row4, 
                    //then row2, then row5, then row3, THEN row 1 again.  May need longer 
                    //arrays, as I can't subract or add 16 to the 'row if's' like I could have 
                    //done with emerald, as this pattern seems to run on a factor of 8? (16x(the five rows))
                    //Also, I still think there is some positioning that I am not taking into account, 
                    //the first 5 rows are correct, then it gets off.
                    if ( row1.includes( j/ (b16*2) )){                       
                        if (pattern1.includes(i / b16)){
                            c.fillStyle = color1;
                        } else{
                            c.fillStyle = color2;
                        }
                    }else if ( row2.includes( j/ (b16*2) )){
                        if (pattern2.includes(i / b16 - 2)) {
                            c.fillStyle = color1;
                        } else{
                            c.fillStyle = color2;
                        }
                    }else if ( row3.includes( j/ (b16*2) )){                       
                        if (pattern3.includes(i / b16 -4)) {
                            c.fillStyle = color1;
                        } else{
                            c.fillStyle = color2;
                        }
                    }else if ( row4.includes( j/ (b16*2) )){                       
                        if (pattern4.includes(i / b16 -6)) {
                            c.fillStyle = color1;
                        } else{
                            c.fillStyle = color2;
                        }
                    } else{
                        if (pattern5.includes(i / b16 -8)) {
                            c.fillStyle = color1;
                        } else{
                            c.fillStyle = color2;
                        }
                    }                                   
                c.fill();
            };//end for i 
        }//end for j
    }//end emerald
    
    self.emeraldPattern = function (color1, color2) {
        let bw = 400;
        let b16 = bw / 16;
        let pattern1 = [-7 ,-5 ,-3 , 0, 1, 3, 5, 8, 9, 11, 13, 16, 17, 19, 21, 24, 25, 27, 29, 32, 33, 35, 37, 40, 41, 43, 45];
        let pattern2 = [-7, -5, -4, -1, 1, 3, 4, 7, 9, 11, 12, 15, 17, 19, 20, 23, 25, 27, 28, 31, 33, 35, 36, 39, 41, 43, 44, 47];
        let pattern3 = [-7, -4, -3, -1, 1, 4, 5, 7, 9, 12, 13, 15, 17, 20, 21, 23, 25, 28, 29, 31, 33, 36, 37, 39, 41, 44, 45, 47];
        let pattern4 = [-8, -5, -3, -1, 0, 3, 5, 7, 8, 11, 13, 15, 16, 19, 21, 23, 24, 27, 29, 31, 32];
        let row1 = [-16, -12, -8, -4, 0, 4, 8, 12, 16, 20, 24, 28, 32, 36];
        let row2 = [-15, -11, -7, -3, 1, 5, 9, 13, 17];
        let row3 = [-14, -10, -6, -2, 2, 6, 10, 14, 18];
        // let row4 = []
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
                    if ( row1.includes( j/ (b16*2) )){                       
                        if (pattern1.includes(i / b16)) {
                            c.fillStyle = color1;
                        } else{
                            c.fillStyle = color2;
                        }
                    }else if ( row2.includes( j/ (b16*2) )){
                        if (pattern2.includes(i / b16 - 2)) {
                            c.fillStyle = color1;
                        } else{
                            c.fillStyle = color2;
                        }
                    }else if ( row3.includes( j/ (b16*2) )){                       
                        if (pattern3.includes(i / b16 -4)) {
                            c.fillStyle = color1;
                        } else{
                            c.fillStyle = color2;
                        }
                    }else{                       
                        if (pattern4.includes(i / b16 -6)) {
                            c.fillStyle = color1;
                        } else{
                            c.fillStyle = color2;
                        }
                    }                                    
                c.fill();
            };//end for i 
        }//end for j
    }//end emerald
    
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