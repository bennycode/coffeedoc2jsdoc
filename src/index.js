const fs = require('fs');
const lexer = require('coffee-lex');
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

const filePath = 'data/block-comment.coffee';

readFile(filePath)
  .then((code) => {
    const ast = parser.parse(code);
    const tokens = ast.context.sourceTokens;
    tokens.forEach((token) => {
      if (token.type === lexer.SourceType.COMMENT) {
        if (token.start === 0 && source[1] === '!') {
          console.log('shebang comment', token);
        } else {
          console.log('line comment', token);
        }
      } else if (token.type === lexer.SourceType.HERECOMMENT) {
        console.log('block comment', token);
      }
    });
  })
  .catch(console.error);
