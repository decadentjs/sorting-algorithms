function bubble_sort(a, resume) {
  var i, tmp, swapped, n = a.length;
  var finished = false;
  do {
    swapped = false;
    resume = resume || 1;
    for (i = resume; i<= n-1; i++) {
      if (a[i-1] > a[i]) {
        tmp = a[i-1];
        a[i-1] = a[i];
        a[i] = tmp;
        swapped = true;
        return {
          finished: finished,
          resume: i
        };
      }
    }
  } while(!swapped);

  return {
    finished: true
  };
}
//
// procedure bubbleSort( A : list of sortable items )
//    n = length(A)
//    repeat
//      swapped = false
//      for i = 1 to n-1 inclusive do
//        /* if this pair is out of order */
//        if A[i-1] > A[i] then
//          /* swap them and remember something changed */
//          swap( A[i-1], A[i] )
//          swapped = true
//        end if
//      end for
//    until not swapped
// end procedure
export default bubble_sort;
