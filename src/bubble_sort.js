import swap from './swap.js';

function bubble_sort(a, resume) {
  var i, j, tmp, swapped, n = a.length;
  var finished = false;

  var i0 = resume && resume.i || 0;
  for (i = i0; i < n; i++) {
    swapped = resume && resume.swapped || false;
    var j0 = resume && resume.j !== undefined ? resume.j : n;
    for (j = j0; j > i; j--) {
      if (a[j] < a[j-1]) {
        swap(a, j, j-1);
        swapped = true;
      }
      return {
        finished: false,
        ranges: [[0, i - 1]],
        i: i,
        j: j - 1,
        swapped: swapped
      };
    }
    if (!swapped) {
      break;
    }
    return {
      finished: false,
      ranges: [[0, i]],
      i: i + 1,
      swapped: swapped
    };
  }
  return {
    finished: true
  };
}

export default bubble_sort;
