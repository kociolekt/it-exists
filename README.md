# it-exsists

> Check for file/folder/module in node.js

## 2do

* Comments - JSDoc
* tests

## Installation

```bash
$ npm install --save it-exsists
```

## Usage

```javascript
var itExsists = require('it-exsists');

// return module or undefined
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
```
