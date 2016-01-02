var itExsists = require('../');
var customCrazyModule = itExsists('custom-crazy-module');
var url = itExsists('url');

if (url) {
  url('so sth');
} else {
  console.log('bad day');
}

if (customCrazyModule) {
  customCrazyModule('so sth');
} else {
  console.log('bad day');
}

console.log('custom-crazy-name', !!itExsists('custom-crazy-name')); // true/false
console.log('url', !!url); // true/false
