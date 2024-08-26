/* Classes */

/*

JavaScript is an object oriented programming language. Everything in JavScript is an object, with its properties and methods. We create
class to create an object. A Class is like an object constructor, or a "blueprint" for creating objects. We instantiate a class to create an
object. The class defines attributes and the behavior of the object, while the object, on the other hand, represents the class.
Once we create a class we can create object from it whenever we want. Creating an object from a classis called class instantiation.
In the object section, we saw how to create an object literal. Object literal is a singleton. If we want to get a similar object, we have to write
it. However, class allows to create many objects. This helps to reduce amount of code and repetition of code.

*/

//Defining a classes

/* To define a class in JavaScript we need the keyword class, the name of a class in CamelCase and block code(two curly brackets). Let us
create a class name Person. */

//syntax
class ClassName {
  //class code
}

//Class Instantiation

/* To create an object from a class, we use the new keyword followed by the class name. Let us create an object from the class Person. */

class First {
  //class code
}

let firstClass = new First();
console.log(firstClass);

//Constructor

/* The constructor is a builtin function which allows as to create a blueprint for our object. The constructor function starts with a keyword
constructor followed by a parenthesis. Inside the parenthesis we pass the properties of the object as parameter. We use the this keyword to
attach the constructor parameters with the class.
The following Person class constructor has firstName and lastName property. These properties are attached to the Person class using this
keyword. This refers to the class itself. */

class Person {
  constructor(firstName, lastName, country = "Kenya") {
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
  }
}

let person = new Person("John", "Doe");
console.log(person);

//let us create many person object using the Person class
let person2 = new Person("Jane", "Doe", "Uganda");
let person3 = new Person("Tom", "Smith", "Tanzania");

console.log(person2);
console.log(person3);

//Class Methods

/* A class can have methods. A method is a function that is attached to a class. We can call a method on an object. Let us create a method
called fullName() that returns the full name of a person. */

class Customer {
  constructor(firstName, lastName, country = "Turkey") {
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
    this.skills = []; //properties with initial value
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let customer = new Customer("John", "Doe");
console.log(customer.getFullName());
console.log(customer);

/* A method could be regular method or a getter or a setter.*/

//Getter and Setter

/* A getter is a method that gets the value of a specific property. A setter is a method that sets the value of a specific property. */

class Person2 {
  constructor(firstName, lastName, country = "Turkey") {
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
    this.skills = [];
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get getSkills() {
    return this.skills;
  }

  set setSkills(skill) {
    if (Array.isArray(skill)) {
      this.skills.push(...skill);
    } else {
      this.skills.push(skill);
    }
  }
  getStudentInfo() {
    let fullName = this.getFullName();
    return `I am ${fullName}. I am from ${
      this.country
    }. I have these skills: ${this.skills.join(", ")}`;
  }

  // this is a static method
  static getTimeStamp() {
    return Date.now();
  }
}

let person4 = new Person2("Furkan", "Bircan");
console.log(person4.getFullName());
console.log(person4.getSkills);
person4.setSkills = ["HTML", "CSS", "JavaScript"];
console.log(person4.getSkills);

console.log(person4.getStudentInfo());

//Static Method

/* A static method is a method that is called on the class itself, not on the object instance. A static method is defined using the static
keyword. Let us create a static method called displayMessage() that displays a message. */

console.log(Person2.getTimeStamp()) // we can not call a static method on an object instance. We can call it on the class itself.

//Inheritance

/* Inheritance is a mechanism in which a new class is created from an existing class. The new class is called a derived class or child class.
The existing class is called a base class or parent class. The derived class inherits the properties and methods of the base class. The
derived class can also have its own properties and methods. Inheritance allows us to reuse the code. */

//Syntax
class DerivedClass extends Person {
  //class code
}

//Example

class Teacher extends Person2 {
    teach () {
        return "I can teach";
    }
}

class Student extends Person2 {
    learn () {
        return "I can learn";
    }
}

let teacher = new Teacher("John", "Doe");
console.log(teacher.getFullName());
console.log(teacher.teach());

let student = new Student("Jane", "Doe");
console.log(student.getFullName());
console.log(student.learn());

//Overriding Methods

/* A derived class can override a method of the base class. Let us override the getStudentInfo() method of the Person2 class in the Student
class. */

class Student2 extends Person2 {
    constructor (firstName, lastName,gender,country = "Turkey") {
        super(firstName, lastName, country);
        this.gender = gender
    }
    //overriding the learn() method
    learn () {
        return "I can learn and code";
    }

    //overriding the getStudentInfo() method
    getStudentInfo() {
        let fullName = this.getFullName();
        return `I am ${fullName}. I am from ${
          this.country
        }. I am a student. I have these skills: ${this.skills.join(", ")} and I am a ${this.gender}`;

        //return super.getStudentInfo() + ` and I am ${this.gender}`;
      }
}

let student2 = new Student2("Jane", "Doe","Male");
console.log(student2.getFullName());
console.log(student2.learn());
student2.setSkills = ["HTML", "CSS", "JavaScript"];
console.log(student2.getStudentInfo());


