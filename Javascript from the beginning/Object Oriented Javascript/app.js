// // Person constructor
// function Person(name, dob) {
//   this.name = name;
//   // this.age = age;
//   this.birthday = new Date(dob);
//   this.calculateAge = function() {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   }
// }

// // const brad = new Person("Brad", 36);
// // const john = new Person("John", 22);

// // console.log(john.age);

// const brad = new Person("Brad", "9-10-1981");
// console.log(brad.calculateAge());

// // String

// const name1 = "Jeff";
// const name2 = new String("Jeff");


// console.log(typeof name1);

// if(name2 === "Jeff") {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

// // Numbers
// const num1 = 5;
// const num2 = new Number(5);

// // Boolean
// const bool1 = true;
// const bool2 = new Boolean(true);

// // Function
// const getSum1 = function(x, y) {
//   return x + y;
// }

// // Object
// const john1 = {name: "John"};
// const john2 = new Object({name: "John"});
// console.log(john1);

// Object.prototype
// Person.prototype

// function Person(firstName, lastName , dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.birthday = new Date(dob);
  // this.calculateAge = function() {
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
// }

// // Calculate age
// Person.prototype.calculateAge = function() {
//   const diff = Date.now() - this.birthday.getTime();
//   const ageDate = new Date(diff);
//   return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

// // Get full name
// Person.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// }

// Person.prototype.getsMarried = function(newLastName) {
//   this.lastName = newLastName;
// }

// const john = new Person("John", "Doe", "8-12-90");
// const mary = new Person("Mary", "Johnson", "March 20 1978");

// console.log(mary);
// console.log(john.calculateAge());
// console.log(mary.getFullName());
// mary.getsMarried("Jones");
// console.log(mary.getFullName());

// Prototype inheritance

// // Person constructor
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// // Greeting
// Person.prototype.greeting = function() {
//   return `Hello there ${this.firstName} ${this.lastName}`;
// }

// const Person1 = new Person("John", "Doe");
// // console.log(Person1.greeting());

// // Customer constructor
// function Customer(firstName, lastName, phone, membership) {
//   Person.call(this, firstName, lastName);

//   this.phone = phone;
//   this.membership = membership;
// }

// // Inherit the Person prototype methods
// Customer.prototype = Object.create(Person.prototype);

// // Make customer.prototype return Customer()
// Customer.prototype.constructor = Customer;

// // Create customer
// const customer1 = new Customer("Tom", "Smith", "555-555-5555", "Standard");
// console.log(customer1);

// // Customer greeting
// Customer.prototype.greeting = function() {
//   return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
// }


// console.log(customer1.greeting());

// const personPrototypes = {
//   greeting: function() {
//     return `Hello there ${this.firstName} ${this.lastName}`;
//   },
//   getsMarried: function(newLastName) {
//     this.lastName = newLastName;
//   }
// }

// const mary = Object.create(personPrototypes);
// mary.firstName = "Mary";
// mary.lastName = "Williams";
// mary.age = 30;
// mary.getsMarried("Thompson");

// console.log(mary.greeting());

// const brad = Object.create(personPrototypes, {
//   firstName: {value: "Brad"},
//   lastName: {value: "Traversy"},
//   age: {value: 36}
// });


// // ES6 Classes 
// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
//   }

//   greeting() {
//     return `Hello there ${this.firstName} ${this.lastName}`
//   }

//   calculateAge() {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   }

//   getMarried(newLastName) {
//     this.lastName = newLastName;
//   }

//   static addNumbers(x, y) {
//     return x + y;
//   }
// }

// const mary = new Person("Mary", "Williams", "11-3-1980");
// mary.getMarried("Johnson");
// console.log(Person.addNumbers(1,2));

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost() {
    return 500;
  }
}

const john = new Customer("John", "Doe", "555-555-5555", "Standard");

console.log(john.greeting());

console.log(Customer.getMembershipCost());








