var itExsists = require('../');

itExsists.pathAsync('./tmp', function(stats) {
  console.log('./tmp', !!stats);
});

itExsists.pathAsync('../package.json', function(stats) {
  console.log('../package.json', !!stats);
});

module.exports = 111;
