const fs = require('fs');
const coffeedoc2jsdoc = require('./index');

function readFile(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, {encoding: 'utf8', flag: 'r'}, function(error, data) {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}

readFile('data/block-comment.coffee')
  .then((code) => {
    const comment = coffeedoc2jsdoc(code);
    console.log(comment.getJSDoc());
  })
  .catch(console.error);

