# it-exsists

> Check for file/folder/module in node.js

## 2do

* Comments - JSDoc

## Installation

```bash
$ npm install --save it-exsists
```

## Usage

```javascript
var itexsists = require('it-exsists');

// return module or undefined
var module = itexsists('module-name');
if (module) {
  module('do magic!');
}

// return path stats or undefined
if (!itexsists.path('./tmp')) {
  require('fs').mkdirSync('./tmp');
}
```
