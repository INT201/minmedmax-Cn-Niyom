const {template} = require('@babel/core')

function minMedMax(n1, n2, n3) {
    let array1 = [n1, n2, n3];
    let tem;
    for (let i = 0; i < array1.length; i++) {
        for (let j = i + 1; j < array1.length; j++) {
            if (array1[i] > array1[j]) {
                tem = array1[i];
                array1[i] = array1[j];
                array1[j] = tem;
            }
        }
    }
    return {min: array1[0], mid: array1[1], max: array1[2]}
}

console.log(minMedMax(-4, 3, 2));
module.exports = minMedMax

