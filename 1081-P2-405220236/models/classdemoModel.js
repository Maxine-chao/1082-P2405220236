const cdb = require('../utils/calssdatabase');

module.exports = class ClassDemo {
  constructor(id, name, description, pic) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.pic = pic;
  }

  // READ
  static fetchClassDemo() {
    return cdb.execute('SELECT * FROM demo');
  }

};
