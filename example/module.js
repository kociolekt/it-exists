var itExsists = require('../');
var customCrazyModule = itExsists('custom-crazy-module');
var url = itExsists('url-lolo');
var sth = itExsists('sth', true); // module/noop

if (url) {
  url('so sth');
} else {
  console.log('bad day');
}

console.log(sth);
sth('do sth'); // sth happens or not

if (customCrazyModule) {
  customCrazyModule('do sth');
} else {
  console.log('bad day');
}

console.log('custom-crazy-name', !!itExsists('custom-crazy-name')); // true/false
console.log('url', !!url); // true/false
