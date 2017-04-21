const lexer = require('coffee-lex');
const parser = require('decaffeinate-parser');

const Comment = require('./jsdoc/Comment');
const TagLine = require('./coffeedoc/TagLine');

function parseBlockComment(block) {
  const BLOCK_COMMENT_DELIMITER = '###';
  const LINE_SEPARATOR = '\n';

  let innerBlock = block.substr(block.indexOf(LINE_SEPARATOR) + LINE_SEPARATOR.length);
  innerBlock = innerBlock.substr(0, innerBlock.lastIndexOf(BLOCK_COMMENT_DELIMITER));
  innerBlock = innerBlock.trim();

  const jsDocComment = new Comment(true);

  const array = innerBlock.split(LINE_SEPARATOR);
  for (let i in array) {
    const line = array[i].trim();
    let content = line;

    if (line.startsWith('@')) {
      const tagName = line.substr(0, line.indexOf(' '));
      content = new TagLine(tagName, line.substr(line.indexOf(' ') + 1));
    }

    jsDocComment.addContent(content);
  }

  return jsDocComment;
}

module.exports = {
  Comment: Comment,
  Converter: {
    toJSDoc: function(code) {
      const ast = parser.parse(code);
      const tokens = ast.context.sourceTokens;
      const comments = [];

      tokens.forEach((token) => {
        if (token.type === lexer.SourceType.COMMENT) {
          if (token.start === 0 && ast.context[1] === '!') {
            // console.log('shebang comment', token);
          } else {
            // console.log('line comment', token);
          }
        } else if (token.type === lexer.SourceType.HERECOMMENT) {
          const {start, end} = token;
          const block = code.substr(start, end);
          const comment = parseBlockComment(block);
          comments.push(comment);
        }
      });
      return comments;
    }
  },
  TagLine: TagLine,
};
