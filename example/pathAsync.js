var itExsists = require('../');

itExsists.pathAsync('./tmp', function (stats) {
  if (stats) {
    console.log('./tmp', !!stats); // true
    console.log('./tmp', stats); // stats
  } else {
    console.log('no ./tmp dir');
  }
});

itExsists.pathAsync('../package.json', function (stats) {
  if (stats) {
    console.log('../package.json', !!stats); // true
    console.log('../package.json', stats); // stats
  } else {
    console.log('no ../package.json file');
  }
});
