function getRecords3(records) {
  // Sub-Optimal approach

  // Time Complexity O(n)
  // linear time

  // get only the first, mid and last item
  // get data from caching service (aws cache)

  var firstItemIdx = 0;
  var midItemIdx = Math.floor(records.length / 2);
  var lastItemIdx = records.length - 1;

  var findItems = [firstItemIdx, midItemIdx, lastItemIdx];

  var pointer = 0;
  var target = findItems[pointer];

  for (var i = 0; i < records.length; i++) {
    if (i === target) {
      if (pointer == 2) return "ok";
      pointer++;
      target = findItems[pointer];
    }
  }

  return "error";
}

// export
module.exports = getRecords3;
