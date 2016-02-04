var itExists = require('../');
var tmpExsists = itExists.pathSync('./tmp');
var packageJsonExsists = itExists.pathSync('../package.json');

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

console.log('./tmp', !!itExists.pathSync('./tmp')); // true/false
console.log('../package.json', !!itExists.pathSync('../package.json')); // true/false

console.log('./tmp', itExists.pathSync('./tmp')); // stats/undefined
console.log('../package.json', itExists.pathSync('../package.json')); // stats/undefined
