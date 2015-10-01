function Person (firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.getFullName = function () {
    return this.firstname + " " + this.lastname;
};

var john = new Person("Shawn", "Price");
console.log(john);

var jane = new Person("Jane", "Simpson");
console.log(jane);

Person.prototype.getFormalFullName = function(){
  return this.lastname + ", " + this.firstname;
};

console.log(jane.getFormalFullName());