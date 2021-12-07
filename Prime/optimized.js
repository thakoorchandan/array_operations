const isPrime = (num) => {
  var s = Math.sqrt(num);
  for (i = 2; i <= s; i++) if (num % i == 0) return false;
  return num > 1;
};

for (j = 0; j < 20; j++) {
  if (isPrime(j)) {
    console.log(j);
  }
}
