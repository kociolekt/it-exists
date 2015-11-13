var fs = require('fs');

function itExsist(someModule) {
  try {
    return require(someModule);
  } catch (e) {
    // undefined
    return;
  }
}

itExsist.pathSync = function(path) {
  try {
    return fs.statSync(path);
  } catch (e) {
    // undefined
    return;
  }
};

itExsist.pathAsync = function(path, cb) {
  fs.stat(path, function(err, stats) {
    if (err) {
      // undefined
      cb();
    }
    cb(stats);
  });
};

module.exports = itExsist;
