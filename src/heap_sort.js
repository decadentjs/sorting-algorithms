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

function heapify(a) {
  var start = iParent(a.length - 1);

  while (start >= 0) {
    siftDown(a, start, a.length - 1);
    start--;
  }
}

function siftDown(a, start, end) {
  var root = start, child, swap;
  while (iLeftChild(root) <= end) {
    child = iLeftChild(root);
    swap = root;
    if (a[swap] < a[child]) {
      swap = child;
    }
    if (child + 1 <= end && a[swap] < a[child+1]) {
      swap = child + 1;
    }
    if (swap === root) {
      return;
    }
    else {
      swap(a, root, swap);
      root = swap;
    }
  }
}

function heap_sort(a, resume) {
  heapify(a);

  var end = a.length - 1;

  while (end > 0) {
    swap(a, end, 0);
    end--;
    siftDown(a, 0, end);
  }
}

export default heap_sort;
