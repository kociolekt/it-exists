var itExsists = require('../');
var tmpExsists = itExsists.pathSync('./tmp');
var packageJsonExsists = itExsists.pathSync('../package.json');

if (tmpExsists) {
  console.log('./tmp', !!tmpExsists); // true
  console.log('./tmp', tmpExsists); // stats
} else {
  console.log('no ./tmp dir');
}

if (packageJsonExsists) {
  console.log('../package.json', !!packageJsonExsists); // true
  console.log('../package.json', packageJsonExsists); // stats
} else {
  console.log('no ../package.json file');
}

console.log('./tmp', !!itExsists.pathSync('./tmp')); // true/false
console.log('../package.json', !!itExsists.pathSync('../package.json')); // true/false

console.log('./tmp', itExsists.pathSync('./tmp')); // stats/undefined
console.log('../package.json', itExsists.pathSync('../package.json')); // stats/undefined
