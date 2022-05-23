function cacheRecords() {
  var records = [];
  for (var i = 1; i <= 1000000; i++) {
    records.push({ name: "Christian Cale", age: 22, address: "Metro Manila" });
  }
  return records;
}

// export
module.exports = cacheRecords;
