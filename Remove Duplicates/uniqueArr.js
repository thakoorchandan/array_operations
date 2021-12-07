function uniq_fast(a) {
  var seen = {};
  var out = [];
  var len = a.length;
  var j = 0;
  for (var i = 0; i < len; i++) {
    var item = a[i];
    if (seen[item] !== 1) {
      seen[item] = 1;
      out[j++] = item;
    }
  }
  return out;
}

var arr = [1, 1, 1, 2, 2, 3, 3, 4, 3, 2, 1];

console.log(uniq_fast(arr));
