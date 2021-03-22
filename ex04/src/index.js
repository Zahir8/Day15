const milili = [10, 25, 4];

function myArr(mili){
    'use strict';
    let temp;
    temp = mili[0];
    mili[0] = mili[2];
    mili[2] = temp;

    let temp2;
    temp2 = mili[1];
    mili[1] = mili[2];
    mili[2] = temp2;

    return mili;


}
console.log(myArr(milili));
module.exports = myArr;