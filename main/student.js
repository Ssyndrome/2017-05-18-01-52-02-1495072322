let Person = require('./person')
// Write your code here
module.exports = function Student(name,age,klass){
  Person.apply(this,arguments);
	this.klass = klass;
	this.introduce = function(){
		return("My name is "+name+". I am "+age+" years old. I am a Student. I am at Class "+klass+".");
	};
};
