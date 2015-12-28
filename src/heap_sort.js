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
  // console.log('entry: heapify:', a, resume);
  var ret, start = resume && resume.i !== undefined ? resume.i : iParent(a.length - 1);

  while (start >= 0) {
    ret = siftDown(a, start, a.length - 1, resume);
    if (ret.sifted) {
      start--;
    }
    ret.i = start;
    if (start >= 0) {
      // console.log('heapify:', ret);
      return ret;
    }
  }

  // while (start >= 0 && !(resume && resume.sifted)) {
  //   var ret = siftDown(a, start, a.length - 1, resume);
  //   ret.i = start--;
  //   console.log(ret);
  //   return ret;
  // }

  ret = {
    finished: false,
    heapified: true
  };
  // console.log('heapify:', ret);
  return ret;
}

function siftDown(a, start, end, resume) {
  // console.log('entry: siftDown:', a, start, end, resume);
  var ret, root = resume && resume.j !== undefined ? resume.j : start, child, swp;
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
      ret = {
        finished: false,
        sifted: true
      };
      // console.log('siftDown:a:', ret);
      return ret;
    }
    else {
      swap(a, root, swp);
      root = swp;
      ret = {
        finished: false,
        j: root
      };
      // console.log('siftDown:b:', ret);
      return ret;
    }
  }
  ret = {
    finished: false,
    sifted: true
  };
  // console.log('siftDown:c:', ret);
  return ret;
}

function heap_sort(a, resume) {
  if (!(resume && resume.heapified)) {
    return heapify(a, resume);
  }

  // return {
  //   finished: true
  // };

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
