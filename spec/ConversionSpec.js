const coffeedoc2jsdoc = require('../src/index');
const fs = require('fs');

describe('Converter', () => {
  const converter = coffeedoc2jsdoc.Converter;

  describe('CoffeeDoc to JSDoc', () => {

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

  });

});
