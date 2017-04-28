class TagLine {
  constructor(type, content) {
    this.content = content;
    this.type = type;
    this.parameter = {
      description: undefined,
      name: undefined,
      type: undefined
    };
    this.coffeeDoc = `${this.type} ${this.content}`;
    this.jsDoc = this.getJSDoc();
  }

  getCoffeeDoc() {
    return this.coffeeDoc;
  }

  lintParamType(type) {
    if (['Boolean', 'Number', 'String'].includes(type)) {
      type = type.toLowerCase();
    }

    if (type.toLowerCase() === 'integer') {
      type = 'number';
    }

    return type;
  }

  getJSDoc() {
    if (this.type == TagLine.TYPE.PARAM) {
      let currentPosition = this.content.indexOf(' ');
      let name = this.content.substr(0, currentPosition);
      name = name.trim();
      this.parameter.name = name;

      currentPosition = this.content.indexOf('[') + 1;
      let paramType = this.content.substr(currentPosition);
      paramType = paramType.substr(0, paramType.indexOf(']'));
      paramType = paramType.trim();
      this.parameter.type = this.lintParamType(paramType);

      let description = this.content.substr(this.content.indexOf(']') + 1);
      description = description.trim();
      this.parameter.description = description;

      let text = `${this.type} {${this.parameter.type}} ${this.parameter.name}`;

      if (description) {
        text += ` - ${this.parameter.description}`;
      }

      return text;
    } else if (this.type == TagLine.TYPE.RETURN) {
      let paramType = this.content.substr(this.content.indexOf('[') + 1);
      paramType = paramType.substr(0, paramType.indexOf(']'));
      paramType = paramType.trim();
      paramType = paramType || 'undefined';
      this.parameter.type = this.lintParamType(paramType);

      let description = this.content.substr(this.content.indexOf(']') + 1);
      description = description.trim();
      this.parameter.description = description;

      let text = `@returns {${this.parameter.type}}`;
      if (description) {
        text += ` ${this.parameter.description}`;
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
