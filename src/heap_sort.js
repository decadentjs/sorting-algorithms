import swap from './swap.js';

function iParent(i) {
  return Math.floor((i-1) / 2);
}

function iLeftChild(i) {
  return 2*i + 1;
}

function iRightChild(i) {
  return 2*i + 2;
}

function heapify(a, resume) {
  var start = resume && resume.i || iParent(a.length - 1);

  while (start >= 0) {
    siftDown(a, start, a.length - 1, resume);
    start--;
    return {
      i: start,
      finished: false
    };
  }

  return {
    finished: false,
    heapified: true
  };
}

function foo() {
  var bar =1 ;
}

function siftDown(a, start, end, resume) {
  var root = resume && resume.i || start, child, swp;
  while (iLeftChild(root) <= end) {
    child = iLeftChild(root);
    swp = root;
    if (a[swp] < a[child]) {
      swp = child;
    }
    if (child + 1 <= end && a[swp] < a[child+1]) {
      swp = child + 1;
    }
    if (swp === root) {
      return {
        finished: false,
        sifted: true
      };
    }
    else {
      swap(a, root, swp);
      root = swp;
    }
    return {
      finished: false,
      i: root
    };
  }
}

function heap_sort(a, resume) {
  if (!(resume && resume.heapified)) {
    return heapify(a, resume);
  }

  var end = resume && resume.end || a.length - 1;

  while (end > 0) {
    swap(a, end, 0);
    end--;
    siftDown(a, 0, end);
    return {
      finished: false,
      end: end
    };
  }
  return {
    finished: true
  };
}

export default heap_sort;
