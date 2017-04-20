const coffeedoc2jsdoc = require('../src/index');
const fs = require('fs');

describe('Converter', () => {
  const converter = coffeedoc2jsdoc.Converter;

  describe('toJSDoc', () => {

    it('converts a CoffeeDoc block comment into a JSDoc 3 equivalent', (done) => {
      fs.readFile('./samples/sample-1.coffee', 'utf8', (error, data) => {
        if (error) {
          done.fail(error);
        } else {
          const comment = converter.toJSDoc(data)[0];
          expect(comment).toBeDefined();
          expect(comment.tagReturns.type).toBe(coffeedoc2jsdoc.TagLine.TYPE.RETURN);
          done();
        }
      });
    });

    it('handles multiple block comments', (done) => {
      fs.readFile('./samples/sample-2.coffee', 'utf8', (error, data) => {
        if (error) {
          done.fail(error);
        } else {
          const comments = converter.toJSDoc(data);
          expect(comments.length).toBe(2);

          const firstComment = comments[0];
          const secondComment = comments[1];

          const expected = `/**\n * Construct a new asset for the asset service.\n * @param {Object} config - Asset configuration\n * @returns {undefined} No return value\n */`;
          expect(firstComment.getJSDoc()).toBe(expected);

          done();
        }
      });
    });

  });

});
