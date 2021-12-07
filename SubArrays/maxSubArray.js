var arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maxSubArray(arr) {
  if (arr.length === 1) return arr[0];

  let maximum = arr[0];
  let accum = arr[0];

  for (i = 1; i < arr.length; i++) {
    let calc = Math.max(arr[i], accum + arr[i]);
    if (calc > maximum) maximum = calc;
    accum = calc;
  }

  return maximum;
}

console.log(maxSubArray(arr));
