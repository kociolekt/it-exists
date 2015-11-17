var itExsists = require('../');

console.log('custom-crazy-name', !!itExsists('custom-crazy-name'));
console.log('url', !!itExsists('url'));

// why not!!!
console.log('../package.json', !!itExsists('../package.json'));
console.log('./pathAsync.js', !!itExsists('./pathAsync.js'));
