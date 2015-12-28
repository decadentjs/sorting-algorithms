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
  var ret, start = resume && resume.i !== undefined ? resume.i : iParent(a.length - 1);

  while (start >= 0) {
    ret = siftDown(a, start, a.length - 1, resume);
    if (ret.sifted) {
      start--;
    }
    ret.i = start;
    if (start >= 0) {
      return ret;
    }
  }

  return {
    finished: false,
    heapified: true
  };
}

function siftDown(a, start, end, resume) {
  var root = resume && resume.j !== undefined ? resume.j : start, child, swp;
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
      return {
        finished: false,
        j: root
      };
    }
  }
  return {
    finished: false,
    sifted: true
  };
}

function heap_sort(a, resume) {
  if (!(resume && resume.heapified)) {
    return heapify(a, resume);
  }

  var end = resume && resume.i !== undefined ? resume.i : a.length - 1;

  while (end > 0) {
    if (!resume || resume.sifted) {
      swap(a, end, 0);
      end--;
      delete resume.sifted;
    }
    var ret = siftDown(a, 0, end, resume);
    ret.heapified = true;
    ret.i = end;
    return ret;
  }
  return {
    heapified: true,
    finished: true
  };
}

export default heap_sort;
