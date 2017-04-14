const fs = require('fs');
const parser = require('decaffeinate-parser');
const path = require('path');

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

function writeFile(file, message) {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, message, {encoding: 'utf8', flag: 'w+'}, function(error) {
      if (error) {
        reject(error);
      } else {
        resolve(path.resolve(file));
      }
    });
  });
}

const filePath = 'data/ConversationRepository.coffee';

readFile(filePath)
  .then((code) => {
    const program = parser.parse(code);
    const json = JSON.stringify(program, null, 2);
    return writeFile('data/output.json', json);
  })
  .catch(console.error);

/*
 let program = parse('add = (a, b) -> a + b');
 let assignment = program.body.statements[0];
 let fn = assignment.expression;

 console.log(fn.parameters.map(param => param.data)); // [ 'a', 'b' ]
 */