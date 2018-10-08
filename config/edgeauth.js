var EdgeGrid = require("edgegrid");

module.exports = (path, section) => {
  // Supply the path to your .edgerc file and name
  // of the section with authorization to the client
  // you are calling (default section is 'default')
  new EdgeGrid({
    path: path,
    section: section
  });
};
