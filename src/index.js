
exports.min = function min (array) {
    if (array == undefined || arguments[0] == undefined || array.length == 0 )
    {
        return 0;
    } 
  return Math.min.apply(null, array);
}

exports.max = function max (array) {
    if (array == undefined || arguments[0] == undefined || array.length == 0 )    {
        return 0;
    } 
    return Math.max.apply(null, array);
}

exports.avg = function avg (array) {
    if (array == undefined || arguments[0] == undefined || array.length == 0 )    {
        return 0;
    } 
    let sum = 0;
    for (let elem of array)
    {
        sum += elem;
    }
  return sum/array.length;
}
