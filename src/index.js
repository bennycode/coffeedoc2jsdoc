const fs = require('fs');
const lexer = require('coffee-lex');
const parser = require('decaffeinate-parser');
const path = require('path');
const TagLine = require('./TagLine');

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

function parseBlockComment(block) {
  const BLOCK_COMMENT_DELIMITER = '###';
  const LINE_SEPARATOR = '\n';

  let innerBlock = block.substr(block.indexOf(LINE_SEPARATOR) + LINE_SEPARATOR.length);
  innerBlock = innerBlock.substr(0, innerBlock.lastIndexOf(BLOCK_COMMENT_DELIMITER));
  innerBlock = innerBlock.trim();

  const contents = [];

  const array = innerBlock.split('\n');
  for (let i in array) {
    const line = array[i].trim();

    if (line.startsWith('@')) {
      const tagName = line.substr(0, line.indexOf(' '));
      const content = new TagLine(tagName, line.substr(line.indexOf(' ') + 1));
      if (content.toJSDoc()) {
        contents.push(content.toJSDoc());
        console.log(`CoffeeDoc: ${content.toCoffeeDoc()}`);
        console.log(`JSDoc: ${content.toJSDoc()}`);
      }
    } else {
      contents.push(line);
    }
  }

  console.log('/**');
  contents.forEach((content) => {
    console.log(` * ${content}`);
  });
  console.log(' */');
}

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
        const {start, end} = token;
        const block = code.substr(start, end);
        parseBlockComment(block);
      }
    });
  })
  .catch(console.error);
