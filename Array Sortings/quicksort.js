var arr = [345, 34, 53, 234, 2, 423, 2];

function quickSort(arr, left, right) {
  left = left || 0;
  right = right || arr.length - 1;
  const pivot = partition(arr, left, right);
  if (left < pivot - 1) {
    quickSort(arr, left, pivot - 1);
  }
  if (right > pivot) {
    quickSort(arr, pivot, right);
  }
  return arr;
}

function partition(arr, left, right) {
  const pivot = Math.floor((left + right) / 2);

  while (left <= right) {
    while (arr[left] < arr[pivot]) {
      left++;
    }
    while (arr[right] > arr[pivot]) {
      right--;
    }
    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return left;
}

console.log(quickSort(arr));
