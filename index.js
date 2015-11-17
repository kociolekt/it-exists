/**
 * @fileoverview check for file/folder/module in node.js
 * @author Tomek Fijoł
 */
'use strict';

var fs = require('fs');

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * check for module
 * @param {string} module name
 * @returns {module|undefined} module or undefined
 */
function itExsist(someModule) {
  try {
    var a = require(someModule);
    return a;
  } catch (e) {
    // undefined
    return;
  }
}

/**
 * check for path sync
 * @param {string} path - check this path
 * @returns {Object|undefined} path stats or undefined
 */
itExsist.pathSync = function(path) {
  try {
    return fs.statSync(path);
  } catch (e) {
    // undefined
    return;
  }
};

/**
 * check for path async
 * @param {string} path - check this path
 * @param {pathAsync~requestCallback} cb - callback for async function
 */
itExsist.pathAsync = function(path, cb) {
  fs.stat(path, function(err, stats) {
    if (err) {
      // undefined
      cb();
      return;
    }
    cb(stats);
  });
};

/**
 * callback from pathAsync function
 * @callback pathAsync~requestCallback
 * @returns {Object|undefined} path stats or undefined
 */

module.exports = itExsist;
