// variable = 1;
// variable === 0
//   ? 1
//   : variable === 1
//   ? 0 // otherwise if value is equivalent to 1, assign it 0
//   : variable === -1
//   ? 0 // otherwise if value is equivalent to -1, assign it 0
//   : variable; // Finally, if no case passes, assign it back the original value
// console.log("variable:", variable);

// //

// var arr3 = new Array(12); // Assign an array of 12 size to arr3\

//
// var arr1 = [1, 2, 3]; // Assign an array of 3 eleement to arr1
// var arr2 = new Array(); // Assign an empty array to arr2
// // Print Array.prototype before adding any prototype
// console.log(`Initial Array.prototype:`, Array.prototype);
// // Add lol property to Array.prototype
// Array.prototype.lol = "Ha Ha Ha";
// // Add loooool property to Array.prototype
// Array.prototype.loooool = "Muahahahahaha";

// console.log(`New Array.prototype:`, Array.prototype);
//

//
// var arr = [1, 2, 3, 4]; // Assign an array of elements to arr
// console.log("intial arr:", arr); // Add zero to list without deleting
// var add = arr.splice(0, 0, 0);
// console.log("arr after addition:", arr);
// console.log("elements removed in addition:", add);
// // remove 3 elements from index 1 onwards
// var remove = arr.splice(1, 3);
// console.log("arr after removal:", arr);
// console.log("elements removed in removal:", remove);
// // remove 1 element from index 1 and add 1, 2 and 3
// var replace = arr.splice(1, 1, 1, 2, 3);
// console.log("arr after replacement:", arr);
// console.log("elements removed in replacement:", replace);
//

//
// მესამე შემთხვევა
var i = 0;
var count = 0;
for (name = "i", loop = "loop"; i < 5; i += 2, count++) {
  console.log(name, loop, i); // print name, loop and i
}
console.log("count value:", count);

//აქ ჩანს, რომ შეიძლება 1 ზე მეტი ცვლილების ჩადგმა for ციკლში.
//

//
var arr = [10, 25, 7, 100, 20]; // initialise arr
// iterate array from start to end
arr.forEach((x) => console.log(x));
console.log("indexing complete");

//
var func1 = (a) => ({ 1: a }); // arrow function creating object
var func2 = (a) => {
  return { 1: a };
}; // arrow function creating object
//

//
// აბრუნებს ფუნქციიდან ფუნქციას

function foo() {
  // Create function taking sum as argument
  function printCompleted() {
    console.log("This is new Function!");
  }
  return printCompleted;
}

var newFunc = foo(); // invoke foo and assign returned value to newFunc var
console.log("foo exited"); // print to signify completion of foo
console.log("invoking newFunc");
newFunc(); // invoke returned function from foo through variable newFunc

//

//
var arr = [10, 20, 30, 40, 50]; // initialise an array and assign to arr
var val = arr.find((a) => a > 20); // find element greater than 20
console.log("element greater than 20:", val); // print element returned by find

var arr = [10, 20, 30, 40, 50]; // initialise an array and assign to arr
var val = arr.find((a) => a > 20); // find element greater than 20
console.log("element greater than 20:", val); // print element returned by find

// findIndex method finds the index of the first element

// map method is used to apply a function to each
// element and it returns an array
var arr = [10, 20, 30, 40, 50]; // initialise an array and assign to arr
var arr1 = arr.map((a, b) => a * 2 + ` ${b}`); // double the element in the array
console.log("arr:", arr); // print original array
console.log("doubled array:", arr1); // print doubled array

//

//

// regex is used to find a string in a larger string

//კვადრატული ფრჩხილები ეძებენ range ში.
//[...] ნებისმიერი ფრჩხილებში მითითებული character
//[^...] არცერთი ფრჩხილებში მითითებული chatracter
//[0-9] 0-9 ს შორის ნებისმიერი რიცხვი
//[a-z] პატარა a დან პატარა z ს ჩათვლით
//[A-Z] დიდი A დან დიდი Z ს ჩათვლით
//[a-Z] პატარა a დან დიდი Z ს ჩთვლით

//p+    p უნდა არსესბობდეს ერთხელ ან მეტჯერ
//p*    p უნდა არსებობდეს 0 ჯერ ან მეტჯერ
//p?    p მაქსიმუმ 1 უნდა იყოს
//p{n}  p უნდა არსებობდეს sequence ში n ჯერ
//p{m,n}  p უნდა არსებობდეს sequence ში მინიმუმ m ჯერ და მაქსიმუმ n ჯერ
//p$    p უნდა იყოს სტრინგის ბოლოში
//^p    p უნდა იყოს სტრინგის დასაწყისში

//p(?=q)    p ს მაშინვე უნდა მოყვებოდეს q
//p(!=q)    p ს მაშნვე არ უნდა მოჰქყვებოდეს q
//p(?<=q)   p მდე უნდა იყოს მაშნვე q
//p(?<!q)   p მე არ უნდა იყოს მაშინვე q

//Alphanumeric
// \0   NULL
// \t   tab
// \n   აბზაცი
// \v   ვერტიკალური tab
// \f   form feed character(შემდეგი გვერდის აღმნიშვნელი)
// \r   კურსორს აბრუნებს ხაზის დასაწყისში

// .    ნებისმიერი გარდა newline-ის
// \s   ნებისმიერი whitespace character [space, tab, new line, form feed]
// \S   ნებისმიერი non-whitespace character
// \d   ნებისმიერი digit character [0-9]
// \D   ნებისმიერი non-digit character
// \w   ნებისმიერი word character [a-z, A-Z, 0-9, _]
// \W   ნებისმიერი non-word character

var randregex = /[a-d]/; // Create regex to match a, b, c or d

var anotherregex = RegExp("[a-d]*"); // Create regex to match a, b, c or d

var randregex = /[a-d]/; // Create regex to match a, b, c or d

var anotherregex = RegExp("[a-d]*"); // Create regex to match a, b, c or d

console.log(regex1, regex2); // Print the regex variables
// randregex and anotherregex are the same regex

// i    case insensitive matching
// g    global matching (find all matches)
// m    multiline matching (find matches in multiple lines)
// ესენი იწერება regex-ის ბოლოს
var regex1 = /asd/i;
var regex2 = RegExp("asd", "i");
//

//

// __proto__ გაარჩიე კიდე

//

//

//costructor funcs
//ფუნქციები, რომლებიც ქმნიან ობიექტებს,
function FunctionName(parameter1, parameter2) {
  //all the properties of the object are initialized here
  //functions to be provided by objects are defined here
}
function Employe(name, age, salary) {
  this.name = name;
  this.age = age;
  this.salary = salary;
  this.setage = (newage) => {
    console.log(`setting ${this.age} to ${newage}`);
    this.age = newage; // set age of employee
  };
  this.company = "baddragon";
}
var Emplo = new Employe("John", 25, 50000);
Emplo.setage(30);
console.log(Emplo.age);

Employe.planet = "Earth"; // try adding property planet

var employee1 = new Employe("Mark", 20, "Manager"); // create Employee object
var employee2 = new Employe("Bob", 30, "Accountant"); // create Employee object

employee1.gender = "male"; // add property gender
// Print Employee object assigned to employee1 and employee2
console.log(`employee names: ${employee1.name}, ${employee2.name}`);
console.log(`employee planet: ${employee1.planet}, ${employee2.planet}`);
console.log(`employee gender: ${employee1.gender}, ${employee2.gender}`);
// კაროჩე, ეს აქ იმიტომ ჩავსვი, რომ დაგანახო, რო შექმნილ function ს(Employee)
//ვერ დაუმატებ ახალ property-ს, მაგრამ ამ ფუნქციით შექმნილ ობიექტს, კი.

Employe.prototype.name = "Bill";
var employee1 = new Employe("Mark", 20, "Manager"); // create Employee object
var employee2 = new Employe("Bob", 30, "Accountant"); // create Employee object
// Print Employee objects prototype objects
console.log(employee1.name, employee2.name);
console.log(Employe.prototype);
console.log(
  `employee protoypes: ${employee1.__proto__}, ${employee2.__proto__}`
);
console.log(
  `protoype equalities: ${employee1.__proto__ === employee2.__proto__}`
);
// პროტოტიპის მეთოდი ამატებს property-ს ან მეთოდს ყველა ობიექტს,
// რომელიც ამ ფუნქციითა შექმნილი, მაგრამ არა თვით ფუნქციას.
// სადმე სხვაგან რო შექმნი პროტოტიპს, უკვე სხვა ობიექტზეც იმუშავებს.

//

//

// class ებსაც გადახედე
//

//

//

// სტატიკური მეთოდებიც ნახე

//

//

// Inheritance ი გავიწყდება

//

//

////ერთი ფუნქციის პროტოტიპების გამოყენება მეორე ფუნქციაში.
// function Human(_name, _age) {
//   // Properties assignment passed as arguments
//   this.name = _name;
//   this.age = _age;
//   // Property assigned by constructor function
//   this.arms = 2;
//   this.legs = 2;
// }

// function Employee(_name, _age, _designation) {
//   // Properties assignment passed as arguments
//   Human.call(this, _name, _age);
//   this.designation = _designation;
//   // Method
//   this.setAge = (newage) => {
//     console.log(`setting age from ${this.age} to ${newage}`);
//     this.age = newage;
//   };
//   // Property assigned by constructor function
//   this.company = "Amazon";
// }
// var employee1 = new Employee("Mark", 20, "Manager"); // create Employee object
// // create new property in the prototype object for all objects to inherit
// Employee.prototype.gender = "male";
// Human.prototype.feet = 2;
// // print objects
// console.log(employee1.name, " is ", employee1.gender);
// console.log(employee1.name, " is ", employee1.age);
// console.log(employee1.name, " has ", employee1.arms, " arms");
// console.log(employee1.name, " has ", employee1.feet, " feet");
// // თუ call ის მერე დაამატებ human ს პროტოტიპებს, არ დამატებული
// // პროტოტიპები არ აისახება იმ ფუნქციაში, რომელშიც call გამოიძახე

// // ამის გამოსასწორებლად, იხმარე შემდეგი სინტაქსი:

// function Human(_name, _age) {
//   // Properties assignment passed as arguments
//   this.name = _name;
//   this.age = _age;
//   // Property assigned by constructor function
//   this.arms = 2;
//   this.legs = 2;
// }

//

//

// class childClassName extends parentClassName {
//   //body containing constructor and methods
//   constructor(parameter1, parameters) {
//     // call constructor of parent class
//     super(parameter1);
//     // initialise properties of child class
//   }
// }
// // არ დაგავწიწყდეს, რომ super ი არ არის საკმარისი,
// // კონსტრუქტორის გამოძახებისას მაინც უნდა მიუთითო super ში
// // მოსათითებელი property ები.

//

//
// // JSON მაინც ტექსტია, იმისათვის რომ ობიექტი JSON ფორმატში
// // გადაიყვანო, საჭიროა, რომ JSON.parse()
// // ეს მეთოდი იღებს string ობიექტს არგუმენტად და
// // აბრუნებს JavaScript ობიექტს.
// var obj_json = '{"name": "Ali", "age": 3}'; // string representation of JSON text
// var object_translated = JSON.parse(obj_json); // Parse JSON text
// // Print types and values of obj_json and object_translated
// console.log("obj_json: ", obj_json);
// console.log("object after parsing: ", object_translated);
// console.log("type of obj_json: ", typeof obj_json);
// console.log("type of object_translated: ", typeof object_translated);

// // შეგიძლია JSON.stringify() მეთოდი გამოიყენო,
// // რათა JavaScript ობიექტი JSON ფორმატში გადაიყვანო.
// var object = { name: "Ali", age: 3 }; // JavaScript object assigned to object
// var json_obj = JSON.stringify(object); // convert JavaScript object into JSON text
// // Print types and values of object and json_obj
// console.log("object: ", object);
// console.log("object after JSON.stringify: ", json_obj);
// console.log("type of object: ", typeof object);
// console.log("type of json_obj: ", typeof json_obj);
//

//

//

// //  შეგიძლია გამოიყენო ფუნქციის კომპოზიცია,
// // ის აბრუნებს ახალ ფუნქციას, რომელიც
// // მითითებული ფუნქიების გაერთიანებულია.
// const compose = (f, g) => (x) => f(g(x)); // function composition of two functions
// const Double = (x) => x * 2;
// const Square = (x) => x * x;

// // function composition
// var output_final = compose(Square, Double)(3);
// console.log(output_final);
// // ჯერ გააორმაგა, მერე კვადრატში აიყვანა.
// const cmpose =
//   (...fns) =>
//   (x) =>
//     fns.reduceRight((y, f) => f(y), x);
// const duble = (x) => x * 2;
// const sqare = (x) => x * x;
// // ... არის ოპერატორი, ტომელიც გადასცემს array ში
// // იმ ფუნქციებს, რომლებსაც შევიყვანთ,
// // და ანიჭებს მათ ცვლადს fns.

// // შიდა ფუნქცია იყენებს reduceRight მეთოდს,
// // რათა მარჯვნიდან მარცხნივ გაუყვეს fns array ს,
// // და გამოიძახოს თითოეული ფუნქცია, რიგრიგობით.
// // reduceright მეთოდი ამ ფუნქციებს გადასცემს x -ს,
// // function composition

// // The reduceRight method processes these functions from right to left,
// // where y is the current accumulated value (initially x),
// // and f is the current function to apply.
// // The result of f(y) becomes the new accumulated
// // value for the next iteration,
// // effectively composing the functions together.
// var output_final = cmpose(sqare, duble)(2);
// console.log(output_final);

//

//

//ASYNC, Promises and ASYNC ERRORS
//

//
// WEB PAGE INTERACTIONS/LISTENERS
//

//

//

//

//

//

//

//

//

//

//

//

//

//

//

//

//

//

//

//

//

//

//

//

//

//

//

//

//

//

//

//

//

//

//

//
