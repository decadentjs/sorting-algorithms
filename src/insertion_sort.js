function insertion_sort(a, resume) {
  var x, i, j, n = a.length;
  var i0 = resume && resume.i || 1;
  for (i = i0; i < n; i++) {
    x = resume && resume.x || a[i];
    j = resume && resume.j !== undefined ? resume.j : i;
    while (j > 0 && a[j-1] > x) {
      a[j] = a[j-1];
      a[j-1] = x;
      j--;
      if (j > 0) {
        return {
          finished: i === n,
          ranges: [[0, i]],
          i: i,
          j: j,
          x: x
        };
      }
    }
    return {
      finished: i === n,
      ranges: [[0, i]],
      i: i + 1
    };
  }
  return {
    finished: true
  };
}

export default insertion_sort;
