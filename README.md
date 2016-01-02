# it-exsists

> Check for file/folder/module in node.js

## Installation

```bash
$ npm install --save it-exsists
```

## Usage

```javascript
var itExsists = require('it-exsists');

// check for module in node_modules dir
// returns module or undefined
var myModule = itExsists('module-name');
if (myModule) {
  // good
  myModule('do magic!');
} else {
  // bad
}

// return path stats or undefined
if (!itExsists.pathSync('./tmp')) {
  // bad
  require('fs').mkdirSync('./tmp');
} else {
  // good
}
if (!itExsists.pathSync('./package.json')) {
  // bad
} else {
  // good
}

// return path stats or undefined
itExsists.pathAsync('./tmp', function(stats) {
  if (!stats) {
    // bad
    require('fs').mkdir('./tmp', function() {
      // after
    });
  } else {
    // good
  }
});
itExsists.pathAsync('./package.json', function(stats) {
  if (!stats) {
    // bad
  } else {
    // good
  }
});
```

## Changelog

[View on github](https://github.com/tomek-f/it-exsists/blob/master/changelog.md).
