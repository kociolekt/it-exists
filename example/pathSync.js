var itExsists = require('../');

console.log('./tmp', !!itExsists.pathSync('./tmp'));
console.log('../package.json', !!itExsists.pathSync('../package.json'));
