var itExists = require('../');
var customCrazyModule = itExists('custom-crazy-module');
var url = itExists('url-lolo');
var sth = itExists('sth', true); // module/noop

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

console.log('custom-crazy-name', !!itExists('custom-crazy-name')); // true/false
console.log('url', !!url); // true/false
