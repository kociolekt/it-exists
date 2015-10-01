var
  itExsist = function(mod) {

    try {
      return require(mod);
    } catch (e) {
      return;
    }

  };

itExsist.path = function(path) {

  try {
    return require('fs').statSync(path);
  } catch (e) {
    return;
  }

};

module.exports = itExsist;
