function getRecords1(records) {
  // OPTIMAL APPROACH

  // Time Complexity - O(1)
  // constant time

  // get only the first, mid and last item
  // get data from caching service (aws cache)

  var firstItemIdx = 0;
  var midItemIdx = Math.floor(records.length / 2);
  var lastItemIdx = records.length - 1;

  if (records[firstItemIdx] == undefined) return "error";
  if (records[midItemIdx] == undefined) return "error";
  if (records[lastItemIdx] == undefined) return "error";

  return "ok";
}

// export
module.exports = getRecords1;
