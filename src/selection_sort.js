function selection_sort(a) {
  /* a[0] to a[n-1] is the array to sort */
  var i, j, n = a.length;
  var iMin, tmp, finished;

  /* advance the position through the entire array */
  /*   (could do j < n-1 because single element is also min element) */
  for (j = 0; j < n-1; j++) {
    /* find the min element in the unsorted a[j .. n-1] */

    /* assume the min is the first element */
    iMin = j;
    /* test against elements after j to find the smallest */
    for ( i = j+1; i < n; i++) {
      /* if this element is less, then it is the new minimum */
      if (a[i] < a[iMin]) {
        /* found new minimum; remember its index */
        iMin = i;
      }
    }

    if (j === n - 2 && i === n) {
      finished = true;
    }

    if (iMin != j) {
      tmp = a[j];
      a[j] = a[iMin];
      a[iMin] = tmp;
      return finished;
    }
  }
}

export default selection_sort;
