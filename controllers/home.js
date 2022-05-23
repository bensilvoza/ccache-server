// libraries
var express = require("express");

// utils
const cachedRecords = require("../utils/cacheRecords");
const getRecords1 = require("../utils/getRecords1");
const getRecords2 = require("../utils/getRecords2");
const getRecords3 = require("../utils/getRecords3");

async function home(req, res) {
  var approachID = req.body.approachID;
  var selectedApproach = undefined;

  if (approachID == 1) {
    selectedApproach = getRecords1;
  } else if (approachID == 2) {
    selectedApproach = getRecords2;
  } else {
    selectedApproach = getRecords3;
  }

  // get average running time
  var totalRunningTime = 0;
  var records = cachedRecords();

  for (var i = 0; i < 100; i++) {
    const startTime = performance.now();

    var response = selectedApproach(records);
    if (response == "error") return "error";

    const endTime = performance.now();
    totalRunningTime = totalRunningTime + (endTime - startTime);
  }

  res.json({ averageTime: totalRunningTime / 100 });
}

module.exports = {
  home,
};
