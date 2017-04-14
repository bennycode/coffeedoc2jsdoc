class TagLine {
  constructor(type, content) {
    this.type = type;
    this.content = content;
  }

  toCoffeeDoc() {
    return `${this.type} ${this.content}`;
  }

  toJSDoc() {
    if (this.type == TagLine.TYPE.PARAM) {
      let currentPosition = this.content.indexOf(' ');
      let name = this.content.substr(0, currentPosition);
      name = name.trim();

      currentPosition = this.content.indexOf('[') + 1;
      let paramType = this.content.substr(currentPosition);
      paramType = paramType.substr(0, paramType.indexOf(']'));
      paramType = paramType.trim();

      let description = this.content.substr(this.content.indexOf(']') + 1);
      description = description.trim();

      let text = `${this.type} {${paramType}} ${name}`;

      if (description) {
        text += ` - ${description}`;
      }

      return text;
    } else if (this.type == TagLine.TYPE.RETURN) {
      let paramType = this.content.substr(this.content.indexOf('[') + 1);
      paramType = paramType.substr(0, paramType.indexOf(']'));
      paramType = paramType.trim();

      let description = this.content.substr(this.content.indexOf(']') + 1);
      description = description.trim();

      let text = `@returns {${paramType}}`;
      if (description) {
        text += ` ${description}`;
      }

      return text;
    } else {
      return `${this.type} ${this.content}`;
    }
  }

  static get TYPE() {
    return {
      OTHER: '@',
      PARAM: '@param',
      RETURN: '@return'
    }
  }
}

module.exports = TagLine;