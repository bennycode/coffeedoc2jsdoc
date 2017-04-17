// TODO: It's bad bractice to use a require here... Create a mapper instead!
const TagLine = require('./../coffeedoc/TagLine');

class Comment {
  constructor(sortTags = true) {
    this.sortTags = sortTags;

    this.head = '/**';
    this.body = [];
    this.tail = ' */';

    this.tagParameters = [];
    this.tagReturns = undefined;
    this.tagOthers = [];
  }

  addContent(content) {
    if (content && content.getJSDoc) {
      if (content.type == TagLine.TYPE.PARAM) {
        this.tagParameters.push(content);
        this.tagParameters.sort(function(aTagLine, anotherTagLine) {
          return aTagLine.parameter.name.localeCompare(anotherTagLine.parameter.name);
        });
      } else if (content.type == TagLine.TYPE.RETURN) {
        this.tagReturns = content;
      } else {
        this.tagOthers.push(content);
      }
    } else {
      this.body.push(content);
    }
  }

  getJSDoc(lineSeparator = '\n') {
    let text = this.head;

    this.body.forEach((content) => {
      text += `${lineSeparator} * ${content}`;
    });

    this.tagOthers.sort((a, b) => {
      return a.getJSDoc().localeCompare( b.getJSDoc());
    });
    this.tagOthers.forEach((content) => {
      text += `${lineSeparator} * ${content.getJSDoc()}`;
    });

    if(this.tagParameters) {
      text += `${lineSeparator} *`;
      this.tagParameters.forEach((content) => {
        text += `${lineSeparator} * ${content.getJSDoc()}`;
      });
    }

    if(this.tagReturns) {
      text += `${lineSeparator} * ${this.tagReturns.getJSDoc()}`;
    }

    text += `${lineSeparator}${this.tail}`;
    return text;
  }
}

module.exports = Comment;
