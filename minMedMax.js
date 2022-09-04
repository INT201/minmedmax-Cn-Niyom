const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
    let minMedMaxResult = { min: n1, mid: n2, max: n3 };
    let tem;
    if(minMedMaxResult.min > minMedMaxResult.mid)
    {
        tem = minMedMaxResult.min;
        minMedMaxResult.min = minMedMaxResult.mid;
        minMedMaxResult.mid = tem;
    }
    if(minMedMaxResult.min > minMedMaxResult.max)
    {
        tem = minMedMaxResult.min;
        minMedMaxResult.min = minMedMaxResult.max;
        minMedMaxResult.max = tem;
    }
    if(minMedMaxResult.mid > minMedMaxResult.max)
    {
        tem = minMedMaxResult.max;
        minMedMaxResult.max = minMedMaxResult.mid;
        minMedMaxResult.mid = tem;
    }
    return minMedMaxResult;
}
console.log(minMedMax(4,3,2));
module.exports = minMedMax
