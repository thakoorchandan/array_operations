var arr = [5, 3, 6, 3, 100, 1, 34, 6, 78];

function max(arr) {
  let max = arr[0];

  for (i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

console.log(max(arr));
