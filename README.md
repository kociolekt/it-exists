# it-exists

> Check for file/folder/module in node.js

## Installation

```bash
$ npm install --save it-exists
````

## Usage

```javascript
var itExists = require('it-exists');

// check for module in node_modules dir
// returns module or undefined
var myModule = itExists('module-name');
if (myModule) {
  // good
  myModule('do magic!');
} else {
  // bad
}

// return path stats or undefined
if (!itExists.pathSync('./tmp')) {
  // bad
  require('fs').mkdirSync('./tmp');
} else {
  // good
}
if (!itExists.pathSync('./package.json')) {
  // bad
} else {
  // good
}

// return path stats or undefined
itExists.pathAsync('./tmp', function(stats) {
  if (!stats) {
    // bad
    require('fs').mkdir('./tmp', function() {
      // after
    });
  } else {
    // good
  }
});
itExists.pathAsync('./package.json', function(stats) {
  if (!stats) {
    // bad
  } else {
    // good
  }
});
```

## Changelog

[View on github](https://github.com/tomek-f/it-exists/blob/master/changelog.md).
