var arr = [-5, -199, 0, 5, 3, 6, 3, 100, 1, 34, 6, 78];

function min(arr) {
  var min = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
}

console.log(min(arr));
