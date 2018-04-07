var fs = require('fs');
var path = require('path');

var getWordCount = function(filePath, callback) {
  fs.readFile(filePath, 'utf-8', function(err, data) {
    if (err) {
      callback(err, null);
      return;
    }

    var wordCount = data.trim().split(' ').length;
    callback(null, wordCount);
  });
};

var getTotalWordCount = function(filePathOne, filePathTwo, callback) {
  // YOUR CODE HERE
  fs.readFile('./fileOne.txt', 'utf-8', function(err,filePathOne) {
  	if (err) {
  		callback(err,null);
  		return
  	} else {
  		callback(filePathOne);
  	}
  });

  fs.readFile('./fileTow.txt', 'utf-8', function(err,filePathTwo) {
  	if (err) {
  		callback(errr,null);
  		return;
  	} else {
  		callback(filePathTwo);
  	}
  });
};

module.exports = getTotalWordCount;