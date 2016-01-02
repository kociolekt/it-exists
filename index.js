/**
 * @fileoverview check for file/folder/module in node.js
 * @author Tomek Fijoł
 */
'use strict';

// node file system
var fs = require('fs');

/**
 * function that does nothing
 * @returns undefined
 */
function noop() {
  // nothing here
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * check for module
 * @param {string} moduleName - module name from node_modules
 * @param {boolean} returnNoop - return noop function instead od undefined
 * @returns {module|undefined} module or undefined
 */
function itExsist(moduleName, returnNoop) {
  try {
    return require(moduleName);
  } catch (e) {
    if (returnNoop) {
      return noop;
    }
    // else undefined
  }
}

/**
 * check for path sync
 * @param {string} path - check this path
 * @returns {Object|undefined} path stats or undefined
 */
itExsist.pathSync = function (path) {
  try {
    return fs.statSync(path);
  } catch (e) {
    // return undefined
  }
};

/**
 * check for path async
 * @param {string} path - check this path
 * @param {pathAsync~requestCallback} cb - callback for async function
 */
itExsist.pathAsync = function (path, cb) {
  fs.stat(path, function (err, stats) {
    if (err) {
      // return undefined
      cb();
      //end
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
