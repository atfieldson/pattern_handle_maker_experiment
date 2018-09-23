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
        let pattern1 = [0, 1, 2, 3, 5, 6, 7, 8, 13 ];
        let pattern2 = [3, 8, 9, 10, 11, 13, 14, 15, 16];
        let pattern3 = [0, 2, 7, 11, 16];
        let pattern4 = [1, 6, 8, 10, 15];
        let pattern5 = [0, 5, 9, 14, 16];
        // let pattern6 = [0, 5, 6, 7, 8, 10, 11, 12, 13];
        let row1 =  [-10, -5, 0, 5, 10, 15];
        let row2 = [-9, -4, 1, 6, 11, 16];
        let row3 = [-8, -3, 2, 7, 12, 17];
        let row4 = [-7, -2, 3, 8, 13, 18];
        // let row5 = [4];
        //row 5 is the else 
        for (j = -b16*16; j <= b16 * 40; j += b16 * 2) {
            for (let i = -b16*8; i <= bw*2; i += b16) {
                console.log('hello');
                c.beginPath();
                c.moveTo(i, i + j + 2*b16 );
                c.lineTo(i - b16 , i + j + b16); 
                c.lineTo(i, i + j);
                c.lineTo(i + b16, i + j + b16)
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
                        if (pattern2.includes(i / b16)) {
                            c.fillStyle = color1;
                        } else{
                            c.fillStyle = color2;
                        }
                    }else if ( row3.includes( j/ (b16*2) )){                       
                        if (pattern3.includes(i / b16)) {
                            c.fillStyle = color1;
                        } else{
                            c.fillStyle = color2;
                        }
                    }else if ( row4.includes( j/ (b16*2) )){                       
                        if (pattern4.includes(i / b16)) {
                            c.fillStyle = color1;
                        } else{
                            c.fillStyle = color2;
                        }
                    } else {
                        if (pattern5.includes(i / b16)) {
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
        let pattern1 = [0, 1, 3, 5, 8, 9, 11, 13, 16];
        let pattern2 = [1, 3, 4, 7, 9, 11, 12, 15];
        let pattern3 = [1, 4, 5, 7, 9, 12, 13, 15];
        let pattern4 = [0, 3, 5, 7, 8, 11, 13, 15, 16];
        let row1 = [-16, -12, -8, -4, 0, 4, 8, 12, 16, 20, 24, 28, 32, 36];
        let row2 = [-15, -11, -7, -3, 1, 5, 9, 13, 17];
        let row3 = [-14, -10, -6, -2, 2, 6, 10, 14, 18];
        // let row4 = []
        for (j = -b16*16; j <= b16 * 40; j += b16 * 2) {
            for (let i = -b16*8; i <= bw*2; i += b16) {
                console.log('hello');
                c.beginPath();
                c.moveTo(i, i + j + 2*b16 );
                c.lineTo(i - b16 , i + j + b16); 
                c.lineTo(i, i + j);
                c.lineTo(i + b16, i + j + b16)
                c.closePath();
                c.stroke();
                    if ( row1.includes( j/ (b16*2) )){                       
                        if (pattern1.includes(i / b16)) {
                            c.fillStyle = color1;
                        } else{
                            c.fillStyle = color2;
                        }
                    }else if ( row2.includes( j/ (b16*2) )){
                        if (pattern2.includes(i / b16)) {
                            c.fillStyle = color1;
                        } else{
                            c.fillStyle = color2;
                        }
                    }else if ( row3.includes( j/ (b16*2) )){                       
                        if (pattern3.includes(i / b16)) {
                            c.fillStyle = color1;
                        } else{
                            c.fillStyle = color2;
                        }
                    }else{                       
                        if (pattern4.includes(i / b16)) {
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
        let pattern1 = [0, 1, 4, 5, 8, 9, 12, 13, 16];
        let pattern2 = [0, 3, 4, 7, 8, 11, 12, 15, 16]
        let rowPattern1 = [-12, -8, -4, 0, 4, 8, 12, 16, 20]
        let rowPattern2 = [-11, -7, -3, 1, 5, 9, 13, 17, 21]
        let rowPattern3 = [-10, -6, -2, 2, 6, 10, 14, 18, 22]

        for (j = -b16*16; j <= b16 * 40; j += b16 * 2) {
            for (let i = -b16*8; i <= bw*2; i += b16) {
                console.log('hello');
                c.beginPath();
                c.moveTo(i, i + j + 2*b16 );
                c.lineTo(i - b16 , i + j + b16); 
                c.lineTo(i, i + j);
                c.lineTo(i + b16, i + j + b16)
                c.closePath();
                c.stroke();
                //only need 2 patterns here, but we do need four
                //row
                if (rowPattern1.includes(j / (b16 * 2))) {
                    if (pattern1.includes(i / b16)) {
                        c.fillStyle = color1;
                    } else {
                        c.fillStyle = color2;
                    }
                } else if (rowPattern2.includes(j / (b16 * 2))){
                    if (pattern2.includes(i / b16)) {
                        c.fillStyle = color1;
                    } else {
                        c.fillStyle = color2;
                    }
                } else if (rowPattern3.includes(j / (b16 * 2))){
                    if (pattern1.includes(i / b16)) {
                        c.fillStyle = color1;
                    } else {
                        c.fillStyle = color2;
                    }
                } else {
                    if (pattern2.includes(i / b16)) {
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
        let pattern1 = [0, 1, 4, 5, 8, 9, 12, 13, 16];


            for (j = -b16*16; j <= b16 * 40; j += b16 * 2) {
                for (let i = -b16*8; i <= bw*2; i += b16) {
                    console.log('hello');
                    c.beginPath();
                    c.moveTo(i, i + j + 2*b16 );
                    c.lineTo(i - b16 , i + j + b16); 
                    c.lineTo(i, i + j);
                    c.lineTo(i + b16, i + j + b16)
                    c.closePath();
                    c.stroke();
                if (pattern1.includes(i / b16)) {
                    c.fillStyle = color1;
                } else {
                    c.fillStyle = color2;
                }
                c.fill();
            };//end for i 
        }//end for j
    }//end vertical strip
}])