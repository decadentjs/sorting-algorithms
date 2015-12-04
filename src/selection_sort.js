function selection_sort(a, state) {
  /* a[0] to a[n-1] is the array to sort */
  var i, j, n = a.length;
  var jMin, tmp, finished;
  var i0 = state && state.i || 0;
  var jMin0, j0;

  /* advance the position through the entire array */
  /*   (could do i < n-1 because single element is also min element) */
  for (i = i0; i < n - 1; i++) {
    /* find the min element in the unsorted a[i .. n-1] */
    jMin0 = state && state.jMin || i;
    j0 = state && state.j !== undefined ? state.j : i;
    /* assume the min is the first element */
    jMin = jMin0;
    /* test against elements after i to find the smallest */
    for ( j = j0 + 1; j < n; j++) {
      /* if this element is less, then it is the new minimum */
      if (a[j] < a[jMin]) {
        /* found new minimum; remember its index */
        jMin = j;
      }

      if (j < n - 1) {
        return {
          i: i,
          j: j,
          jMin: jMin,
          finished: finished
        };
      }
    }

    if (i === n - 2 && j === n) {
      finished = true;
    }

    if (jMin != i) {
      tmp = a[i];
      a[i] = a[jMin];
      a[jMin] = tmp;

      return {
        i: i + 1,
        j: i + 1,
        jMin: i + 1,
        finished: finished
      };
    }

    return {
      i: i + 1,
      j: i + 1,
      jMin: i + 1,
      finished: finished
    };
  }
}

export default selection_sort;
