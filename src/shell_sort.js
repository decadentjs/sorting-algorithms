import swap from './swap.js';

// Sort an array a[0...n-1].
var gaps = [701, 301, 132, 57, 23, 10, 4, 1];

function shell_sort(a, resume) {
  var gap, i, i0, j, j0, temp, len = a.length;

  // Start with the largest gap and work down to a gap of 1
  for (gap in gaps) {
    gap = resume && resume.gap || gaps[gap];
    if (gap > len) {
      return {
        finished: false,
        gap: gaps[gaps.indexOf(gap) + 1]
      };
    }
    // Do a gapped insertion sort for this gap size.
    // The first gap elements a[0..gap-1] are already in gapped order
    // keep adding one more element until the entire array is gap sorted
    i0 = resume && resume.i || gap;
    for (i = i0; i < len; i += 1) {
      // add a[i] to the elements that have been gap sorted
      // save a[i] in temp and make a hole at position i
      temp = resume && resume.temp !== undefined ? resume.temp : a[i];
      // shift earlier gap-sorted elements up until the correct location for a[i] is found
      j0 = resume && resume.j !== undefined ? resume.j : i;
      for (j = j0; j >= gap && a[j - gap] > temp; j -= gap) {
        a[j] = a[j - gap];
        return {
          finished: false,
          gap: gap,
          ranges: gap === 1 && [[0, i]],
          temp: temp,
          i: i,
          j: j - gap
        };
      }
      // put temp (the original a[i]) in its correct location
      a[j] = temp;
      return {
        finished: false,
        ranges: gap === 1 && [[0, i + 1]],
        gap: gap,
        i: i + 1
      };
    }
    return {
      finished: gaps.indexOf(gap) === gaps.length - 1,
      gap: gaps[gaps.indexOf(gap) + 1]
    };
  }

  return {
    finished: true
  };
}

export default shell_sort;
