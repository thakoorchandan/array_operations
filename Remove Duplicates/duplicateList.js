var arr = [1, 1, 1, 2, 2, 3, 3, 4, 3, 2, 1];

// One way
function removeDuplicate(arr) {
  return arr.filter((el, i) => arr.indexOf(el) === i);
}

// Another way
function removeDup(arr) {
  let x = {};
  arr.forEach(function (i) {
    if (!x[i]) {
      x[i] = true;
    }
  });
  return Object.keys(x);
}

console.log(removeDuplicate(arr));
console.log(removeDup(arr).map(Number));
