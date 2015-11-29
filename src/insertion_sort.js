function insertion_sort(a) {
  var x, i, j, n = a.length;
  var finished = false;
  for (i = 1; i < n - 1; i++) {
    x = a[i];
    j = i;
    while (j > 0 && a[j-1] > x) {
      a[j] = a[j-1];
      j = j - 1;
      return finished;
    }
    a[j] = x;
  }
}

export default insertion_sort;
