let Person = require('./person')
module.exports = class Student extends Person{
  super(name,age);
  this.klass = klass;
introduce(){
  return("My name is "+name+". I am "+age+" years old. I am a Student. I am at Class "+klass+".");
  };
};
