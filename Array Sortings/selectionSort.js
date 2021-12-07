var arr = [53, 6, 1, 43, 76, 83, 4, 0];

function selectionSort(arr) {
  var n = arr.length;
  for (i = 0; i < n - 1; i++) {
    var min = i;
    for (j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      var temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

console.log(selectionSort(arr));
