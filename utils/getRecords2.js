function getRecords2(records) {
  // OPTIMAL APPROACH
  // Divide and conquer approach

  // Time Complexity - O(log n)
  // logarithmic time

  // get only the first, mid and last item
  // get data from caching service (aws cache)

  var firstItemIdx = 0;
  var midItemIdx = Math.floor(records.length / 2);
  var lastItemIdx = records.length - 1;

  var findItems = [firstItemIdx, midItemIdx, lastItemIdx];

  var pointer = 0;
  var target = findItems[pointer];

  // start, end, mid is also an index
  var start = 0;
  var end = records.length - 1;
  var mid = Math.floor((start + end) / 2);
  while (true) {
    if (mid < target) start = mid + 1;
    else if (mid > target) end = mid - 1;

    if (mid === target) {
      if (pointer == 2) return "ok";

      // update target
      pointer++;
      target = findItems[pointer];

      start = 0;
      end = records.length - 1;
      mid = Math.floor((start + end) / 2);
      continue;
    }
    mid = Math.floor((start + end) / 2);
  }

  return "error";
}

// export
module.exports = getRecords2;
