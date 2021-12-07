var arr = [10, 20, 30];
var sum = 0;

function recAdd(arr, i) {
  var n = arr.length;
  if (i === n) {
    return sum;
  } else {
    sum += arr[i];
    return recAdd(arr, i + 1);
  }
}

var op = recAdd(arr, 0);
console.log(op);
