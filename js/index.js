//                                                          PRINT
/*

process.stdout.write("hello world")
console.log('hello world')


//                                                          VARIABLES


var variable;
variable = 15;
console.log(variable);

//or

var variable_2 = 15
console.log(variable_2)


var variable_1 = 1; // ფუნქციის გარეთ თუ მიეცი მნიშვნელობა, მიიღებს გლობალურ სახეს,
// თუ ფუნქციაში, მაშინ მარტო მაგ ფუნქციაშ იმუშვებს. ფუნქციაში სადაც არ უნდა ჩაწერო, ფუნქციის ზემოთ ავარდება აღსრულების დროს. 
// ამით ბევრჯერ შეგიძლია ერთ ცვლადს მიანიჭო მნიშვნელობა.

let variable_2 = 2; // უახლოეს {} ში ჩაჯდება, არ დაიწყებს მუშაობას სანამ მისი შესაფერისი კოდის ხაზი არ მოვა. ვერ ანიჭებს ერთ 
// ცვლადს მნიშვნელობას ბევრჯერ.

const variable_3 = 3; // უახლოეს {} ში ჩაჯდება,  არ დაიწყებს მუშაობას სანამ მისი შესაფერისი კოდის ხაზი არ მოვა. 
// ვერ შეცვლი საერთოდ

variable_4 = 4; // მინიჭების ოპერატორია მარა რაღტომღც გამოცხადების გარეშე მუშაობს.
// გლობალურად გააჩენს ცვლადს და არაა რეკომენდირებული

console.log(variable_1); // printing variable_1
console.log(variable_2); // printing variable_2
console.log(variable_3); // printing variable_3
console.log(variable_4); // printing variable_4


var a = variable_1
process.stdout.write(a)


//                                                          ARITHMETIC OPERATORS


var add = 1 + 1; // add 1 with 1 and assign to add
var minus = 3 - 2; // subtract 3 from 2 and assign to minus
var mult = 2 * 5; // multiply 2 with 5 and assign to mult
var div = 10 / 2; // divide 10 by 2 and assign to div 
var rem = 10 % 3; // take remainder of 10 by 3 and assign to rem
var expo = 2 ** 3; // take 2 to the power of 3 and assign to expo
var incr = 5; // assign 5 to incr
incr++; // increment the value of incr by one and assign to incr
var decr = 5; // assign 5 in decr
decr--; // decrement the value of decr by one and assign to decr

console.log("Add:",add); // print add
console.log("Subtract:", minus); // print minus
console.log("Multiply:", mult); // print mult
console.log("Division:",div); // print div
console.log("Remainder:",rem); // print rem
console.log("Exponentiation:",expo); // print expo
console.log("Increment:",incr); // print incr
console.log("Decrement:",decr); // print decr


//                                                          COMPARING OPERATORS


// პითონის სტანდარტების გარდა, არის კიდევ 2, === და !== რომლებიც ამოწმებენ არა მხოლოდ მნიშვნელობას, არამედ მონაცემის Type საც.

var var1 = 1; // store value of 1 in var1
var var2 = 1; // store value of 1 in var 2
var var3 = '1'; // store a char type 1 in var3 
var var4 = 2; // store 2 in var4

console.log("is 1 equal to 1 ? :", var1 == var2);
console.log("is 1 equal to '1' ? :" ,var1 == var3);
console.log("is 1 not equal to 1 ? :", var1 != var2);
console.log("is 1 not equal to 2 ? :" ,var1 != var4);
console.log("is 2 greater than 1 ? :",var4 > var1);
console.log("is 1 greater than or equal to 1 ? :",var1 >= var2);
console.log("is 1 lesser than 2 ? :",var1 < var4);
console.log("is 1 lesser than or equal to '1' ? :",var1 < var3);


//                                                          LOGICAL OPERATORS


//&& - AND; || - OR, ! - NOT

console.log("True AND True :",true && true); // should print true
console.log("True AND False :",true && false); // should print false
console.log("True OR False :",true || false); // should print true
console.log("False OR False :",false || false); // should print false
console.log("True AND NOT True :",true && !true); // should print false


//                                                          ASSIGNMENT OPERATORS


var var1 = 10;
var1 += 5;
console.log("var1 + 5 =",var1); // 10 + 5 = 15
var1 -= 5;
console.log("var1 - 5 =",var1); // 15 - 5 = 10
var1 *= 2;
console.log("var1 x 2 =",var1); // 10 * 2 = 20
var1 /= 2;
console.log("var1 / 2 =",var1); // 20 / 2 = 10
var1 %= 3;
console.log("var1 % 3 =",var1); // 10 % 3 = 1


//                                                          

var x = 4
var y = 15
var ans = (4+15)*2
console.log(ans)

var ans = 1234
ans += ans%10



//                                                          TYPES


typeof     // ამოწმებს რა ტიპიც ცვლადია გადაცემული

var bool_true = true; // initialize variable to true
var bool_false = new Boolean(false);
var bool_true = 1 == 1; // initialize variable to true
var bool_false = 1 != 1; 



var num1 = 10e5; // initialize variable to 1000000
var num2 = new Number(2e-3); // initialize variable to 0.002

//  NOTE: NaN === NaN is false, even though they are the same value.(NaN means "Not a Number")
//  NOTE: 0 === -0 and -0 === 0 is true, but they are different values.

//  NOTE: The null type has only one value: null. Let’s see it in action below. null represents nothing
var num1 = null; // initialize variable to null
console.log('The values are:',num1);
console.log('The types are:',typeof(num1)); 
// although the typeof function shows that it is of type object, it is not. It is a primitive type.
// For legacy reasons, the typeof will show that null is of type object.
 

//UNDEFINED is a value assigned to variables that have not been assigned a value. it has obly one value
var num1; // initialize variable without assignment
var num2 = undefined; // initialize variable to undefined

console.log('The values are:',num1,num2);
console.log('The types are:',typeof(num1),typeof(num2)); 

// NOTE: The difference between null and undefined types can be confusing. null expresses a lack of identification 
// while undefined represents a lack of assignment of the variable.


//                                                          STRING


var str1 = "String-1"; // initialize str1 to "String-1"
var str2 = new String("String-2"); // initialize str2 to "String-2"
var str3 = new String(1234); // initialize str3 to "1234"
console.log('The values are:',str1, str2, str3);
console.log('The types are:',typeof(str1),typeof(str2),typeof(str3)); 

// "a", 'a' მოჟნა და ემატება `a` რომელიც იდეაში ფორმატირების ფუნქციის პონტია პითონიდან
var str1 = "Str1"; // initialize str1 to "String-1"
var str2 = new String("Str2"); // initialize str2 to "String-2"
var str1_2 = `str1:${str1} and str2:${str2}`;
var expression = `Total strings:${1+1}`;

console.log(str1_2);
console.log(expression);

console.log('The types are:',typeof(str1),typeof(str2),typeof(str1_2)); 


//                                                          SYMBOL


// The symbol type allows us to include unique identifiers in code.
// This particular type may not seem important ,
// but we use it when we need to have a value in code that is
// unique to the scope of a program.

var sym1 = Symbol(); // initialize variable to symbol
var sym2 = Symbol(); // initialize variable to symbol

console.log("The values are:", sym1, sym2);

console.log("The types are:", typeof sym1, typeof sym2);

console.log("Are they equal?", sym1 == sym2, sym1 === sym2);

// NOTE: For symbol we don’t use the new keyword at initialization 
// because it’s implementation does not have a constructor.


//                                                          OBJECTS


// mutable values in JavaScript. To access their 
// property or data, use . or [] operators.

var obj = {}; // Declare our object

console.log('Our object:',obj);
console.log('Type of our object:',typeof(obj));

var obj = {name : "obj" , 'age': 20};
// defining properties and assigning values using . operator
obj.number = 13; 
// defining properties and assigning values using [] operator
obj['obj2'] = {name : "deez nuts" , "age": 21} ;
//print value and type of obj
console.log('Our object:',obj);
console.log('Type of our object:',typeof(obj));

{
    var objective = {name : 'bum ass mf' , 'age' : 199 , 'interests' : 'none', 
        'objectives' : 'get some bitches, solve world hunger, pay to drug lord before he funkytowns you'}  
}
console.log(objective)

var obj = {name : "obj", number: 13, obj2: {} }; // Declare our object
var num_obj = obj['number'];
var name = obj.name;

console.log('Our object:',obj);
console.log('Type of our object:',typeof(obj));
console.log(`obj['number']: ${obj['number']} , ${num_obj}`);
console.log(`obj.name: ${obj.name} , ${name}`);
console.log(`types: ${typeof(obj['number'])}, ${typeof(num_obj)}`);



//                                                          MUTABILITY


var a = [1, 2 , 'hello']
a[0] = 'gay'            //reassigning a value in a variable with multiple values
console.log(a)

var obj =  new Date() // create a Date obj and assign to obj

console.log(obj); // print obj
console.log(obj.getFullYear()); // print getFullYear method of date

var arr1 = new Array(1,2,"hello"); // create an Array obj and assign to arr1
var arr2 = ["hello",2,1];

console.log("arr1:",arr1);
console.log("arr2:", arr2);
console.log(`type of arr1: ${typeof(arr1)} and arr2: ${typeof(arr2)}`);

arr2.sort(); // sort the array
console.log("sorted arr2:",arr2);
console.log("lenght of arr2:",arr2.length);


//                                                          COERCION AND CONVERSION


console.log(1 + '1' , typeof(1 + '1')); // prints a string value AUTOMATICALLY
console.log(null == 'null', typeof(null == 'null')); // prints a boolean value

//var str_version = new String(<Original Value>).valueOf();  //why does not this work

//var str_version = (<Original Value>) + ''; //better way, but why does mot this work

var num = 1; // initialize num to 1
var boolean = true; // initialize boolean to true
var nul = null; // initialize nul to null
var undef = undefined; // initialize undef to undefined
// Explicit type conversion into string below 
var str_num = new String(num).valueOf(); // number to string
var str_bool = new String(boolean).valueOf(); // boolean to string
var str_nul = new String(nul).valueOf(); // null to string 
var str_undef = new String(undef).valueOf(); // undefined to string

// Print all variables and their types after type conversion
console.log("num:", str_num, " - type:",typeof(str_num) );
console.log("boolean:", str_bool, " - type:",typeof(str_bool) );
console.log("nul:", str_nul, " - type:",typeof(str_nul) );
console.log("undef:", str_undef, " - type:",typeof(str_undef) );

// NOTE: Alternatively, you can use the JSON.stringify() function to convert to string.

var num = 1; 
var str = 'true'; 
var nul = null; 
var undef = undefined; 

// Explicit type conversion into boolean below 
var bool_num = new Boolean(num).valueOf(); // number to Boolean
var bool_str = new Boolean(str).valueOf(); // string to Boolean
var bool_nul = new Boolean(nul).valueOf(); // null to Boolean 
var bool_undef = new Boolean(undef).valueOf(); // undefined to Boolean
// Print all variables and their types after type conversion

console.log("num:", bool_num, " - type:",typeof(bool_num) );
console.log("str:", bool_str, " - type:",typeof(bool_str) );
console.log("nul:", bool_nul, " - type:",typeof(bool_nul) );
console.log("undef:", bool_undef, " - type:",typeof(bool_undef) );

// NOTE: Using Boolean('false') will give you true. For strings, 
// only Boolean('') will give you false.

var str = '1000'; // initialize str to '1000'
var boolean = true; // initialize boolean to true
var nul = null; // initialize nul to null
var undef = undefined; // initialize undef to undefined
// Explicit type conversion into number below 

var num_str = new Number(str).valueOf(); // number to Number
var num_bool = new Number(boolean).valueOf(); // boolean to Number
var num_nul = new Number(nul).valueOf(); // null to Number 
var num_undef = new Number(undef).valueOf(); // undefined to Number
// Print all variables and their types after type conversion
console.log("str:", num_str, " - type:",typeof(num_str) );
console.log("boolean:", num_bool, " - type:",typeof(num_bool) );
console.log("nul:", num_nul, " - type:",typeof(num_nul) );
console.log("undef:", num_undef, " - type:",typeof(num_undef) );

// NOTE: At times, in this case undefined, NaN is being returned 
// and of number type but shows that the value is not a legal number.
// NOTE: You can alternatively use parseInt() and parseFloat() 
// functions to explicitly convert strings to number types.


//                                                          STATIC VS DYNAMIC TYPE CHECKING


// Static type checking - The most generic way of defining types,
// static type checking occurs before the code is run.

// Dynamic type checking-Dynamic type checking is the process 
// where type is checked and assigned during run time. 
// This happens on the fly.
// JavaScript uses this technique.

// Weakly-typed languages make conversions between unrelated types 
// implicitly, while a strongly-typed language usually does not allow 
// implicit conversions between unrelated types.




//                                                          CONDITIONALS


if (true) {
    console.log("print deez nuts on yo face")
}
else if (false) {
    console.log("print deez nuts on yo face")
}
else {
    console.log("print deez nuts on yo face")
}
  
// NOTE: Adding {} after an if(), else if(), 
// or else is not necessary. In fact, 
// you can write code without the curly brackets. 
// However, without {} only the first line goes 
// immediately after it is executed. 
// The curly brackets allow us to execute multiple lines of code. 
// These also make code visually easier to see 
// the conditional’s execution.

// Ternary operations- a shortcut to an if-condition which executes 
// expressions depending on whether the condition is true or false.

variable = 1;
variable = variable === 0 ? 1 : 0; // 1 if variable is 0, else 0
console.log('variable:', variable);

variable = variable === 0 ? 1 // if value is equivalent to 0, assign it 1
    : variable === 1 ? 0 // otherwise if value is equivalent to 1, assign it 0
    : variable === -1 ? 0 // otherwise if value is equivalent to -1, assign it 0
    : variable; // Finally, if no case passes, assign it back the original value
console.log('variable:', variable);

// NOTE: The series of conditionals using ternary operators is broken down 
// into multiple lines for visualization purposes. The user may write 
// the series of expressions within a single line.
var numb = -12
var increased_ans = 1 + (numb <0 ? numb * -1 : numb)
console.log(ans)

let test = false;
console.log( test? "Test Passed!" : "Test Failed!");

let check = false;
// Regular if condition
if (check)
  console.log("True branch");
else
  console.log("False branch");

// Ternary operators alternate
check ? console.log("True branch"): console.log("False branch");


// NOTE: The limitation of using ternary operators is 
// that you cannot leave the else condition empty. 
// Both the true and false branches need to be populated 
// when using ternary operators.

//                                                          ARRAYS


// Some properties special to arrays in JavaScript are as follows:

// They are dynamic. They can be sparse or dense.
// They are objects and so are mutable.
// They have methods and properties to make managing elements more convenient.

var arr = new Array(); // Assign arr an empty array object
var arr2 = []; // Assign an empty array to arr2
var arr3 = new Array(12) // Assign an array of 12 size to arr3
console.log(arr, arr2, arr3) // Print array 

var arr1 = new Array(1, -2, "3"); // Create an array object and assign to arr1
var arr2 = [4, 5, "6", true]; // Create an array object and assign to arr2
console.log(arr1,arr2)

// NOTE: Declaring an array as new Array(10) would create an empty array of size 
// 10 and not an array containing only one element 10. To declare an array
// with just one element, use square brackets syntax instead: [10].

var arr1 = [1, 2, 3, 4]; // assign an Array object to arr1
var first= arr1[0]; // assign the first element of arr1 to first
var last = arr1[3]; // assign the last element of arr1 to last
console.log(arr1, first, last); // Print array, first and last

var arr1 = [1, 2, 3, 4];
console.log(arr1); // Print initial array
arr1[0] = 5; // assign 5 to arr1 index 0
console.log(arr1); // Print updated array

var arr3 = new Array(12) // Assign an array of 12 size to arr3

arr2[0] = 5; // assign 0 index of arr2 to 5
arr3[0] = 6; // assign 0 index of arr3 to 6
arr4[0] = 7; // assign 0 index of arr4 to 7

console.log(arr1, arr2, arr3, arr4); // Print all arrays

var arr1 = [1, 2, 3, 4, 5]; // assign array of 5 elements to arr1
var arr2 = new Array(100); // assign an array of size 100 to arr2
var arr3 = new Array(9, 10); // assign array with 2 eleements to arr3
console.log(`arr1 size:`, arr1.length); // print length of arr1
console.log(`arr2 size:`, arr2.length); // print length of arr2
console.log(`arr3 size:`, arr3.length); // print length of arr3

// The prototype property is the property of the global Array 
// constructor itself. It allows you to add custom properties 
// and methods to the global Array.

var arr1 = [1, 2, 3]; // Assign an array of 3 eleement to arr1
var arr2 = new Array() // Assign an empty array to arr2
// Print Array.prototype before adding any prototype
console.log(`Initial Array.prototype:`,Array.prototype)
// Add lol property to Array.prototype
Array.prototype.lol = 'Ha Ha Ha';
// Add loooool property to Array.prototype
Array.prototype.loooool = 'Muahahahahaha';

// Print Array.prototype to see it's value
console.log(`New Array.prototype:`,Array.prototype)
// Print Array.lol to see if lol is a property of Array

// The push() and pop() methods of an array allow you to respectively 
// insert or remove an element from the end of the array.
var arr1 = [1, 2, 3, 4]; // Assign an array of 4 elements to arr1
// Print the array and length of arr1
console.log(`arr1 length:${arr1.length}`);
console.log(`arr1:`, arr1, `\n`);

var push = arr1.push(20); // Insert 20 at the end of the arr1
// Print the array and length of arr1
console.log(`arr1 length:`,arr1.length, `push value:`, push );
console.log(`arr1:`,arr1,`\n`);

var pop = arr1.pop(); // Remove the last element of arr1
// Print the array and length of arr1

// The unshift() and shift() methods of an array allow you to insert 
// or remove an element from the beginning of the array respectively

var arr1 = [1, 2, 3, 4]; // Assign an array of 4 elements to arr1
// Print the array and length of arr1
console.log(`arr1 length:${arr1.length}`);
console.log(`arr1:`, arr1, `\n`);

var unshift = arr1.unshift(20); // Insert 20 at the start of the arr1
// Print the array and length of arr1
console.log(`arr1 length:`,arr1.length, `unshift value:`, unshift );
console.log(`arr1:`,arr1,`\n`);

var shift = arr1.shift(); // Remove the first element of arr1
// Print the array and length of arr1

// The toString() method returns a string representation of the array.
// Let’s see this in action in the code widget below.

var arr = [1, 2, 3, 4]; // Assign an array of elements to arr
// Call toString method and assign to str_arr
var str_arr = arr.toString();

console.log('arr type:',typeof arr,'str_arr type:',typeof str_arr);
console.log('arr:',arr,'str_arr:',str_arr);

var arr = [1, 2, 3, 4]; // Assign an array of elements to arr

// Print array along with it's type
console.log('Before Slice:');
console.log('arr:',arr);

var arr1 = arr.slice();
var arr2 = arr.slice(1);     //პირველიდან შემდგომ ყველას აიღებს
var arr3 = arr.slice(1,1);
var arr4 = arr.slice(0, -1);  //ბოლოდან აკლებს ერთს
// NOTE: When you pass a negative number to a method where 
// it expects an index (line 11), the method takes the 
// position from the end of the array.
// 
console.log('After Slice:');
console.log(`original arr: ${arr}`);
console.log('arr1:', arr1);
console.log('arr2:', arr2);
console.log('arr3:', arr3);
console.log('arr4:', arr4);

// The splice() method is a method used to add or 
// remove a sub-array of elements from the array.
// The splice() method returns the removed elements 
// from the array after modifying the original array.

//  array.splice(startIndex, removeCount, item1, item2, .., itemN)                !!!!!!!!!!!!!!!!!!!!!!


var arr = [1, 2, 3, 4]; // Assign an array of elements to arr
console.log("intial arr:", arr);     // Add zero to list without deleting
var add = arr.splice(0 , 0, 0); 
console.log("arr after addition:",arr);
console.log("elements removed in addition:",add);
// remove 3 elements from index 1 onwards
var remove = arr.splice(1, 3); 
console.log("arr after removal:",arr);
console.log("elements removed in removal:",remove);
// remove 1 element from index 1 and add 1, 2 and 3
var replace = arr.splice(1, 1, 1, 2, 3); 
console.log("arr after replacement:",arr);
console.log("elements removed in replacement:",replace);

console.log("arr:",arr);


// The concat() method merges two arrays and returns 
// a copy of the merged arrays. The method does not modify 
// either array passed as arguments or the array 
// of the object’s method.

var arr1 = [1, 2, 3]; // Assign an array of 3 elements to arr1
var arr2 = [4, 5]; // Assign an array of 2 elements to arr2
// Merge arr1 and arr2 and assign to corresponding variables
var merged1 = arr1.concat(arr2); 
var merged2 = arr2.concat(arr1);
var merged3 = Array.prototype.concat(arr1, arr2);
// Print each array after merging
console.log("After concat:");
console.log("arr1:", arr1, "arr2:", arr2);
console.log("merged1:", merged1);
console.log("merged2:", merged2);
console.log("merged3:", merged3);


//                                                          MULTI DIMANSIONAL ARRAYS


var new_arr = []
var arr = [1, 2, 3, 4]; // Single-dimensional array
console.log("arr:", arr, "arr length:",arr.length);

new_arr.push(arr); // push arr into new_arr
console.log("new_arr:",new_arr, "new_arr length:",new_arr.length);

var arr = []; // Empty array assigned to arr
arr.push(new Array(2)); // Push 2 sized array 
arr.push(new Array(2)); // Push 2 sized array 

console.log("arr:", arr);
// Print the outer dimension length
console.log("outer dimension:", arr.length)
// Print the length of each element of the array
console.log("inner dimension:", arr[0].length, arr[1].length);

var arr = [["Car", 2000], ["Truck", 500], ["Bike", 6500]];
console.log(arr);
//to access a certain variable, you must use the following syntax
console.log(arr[0][0]); // Car
console.log(arr[0][1]); // 2000
// the first number is the position of the built in array and 
// the second nuber is the dimension of the array, 
// out of which you have to chose a certain number
// to get a certain value

// To add a new row, append another array so that the final 
// two-dimensional array is as follows.

var arr = [["Car", 2000], ["Truck", 500], ["Bike", 6500]]; // Create array
console.log(arr); // Print entire array
var new_row = ["Scooter", 1500]; // Create new row
console.log("new row:", new_row); // Print the row to be added

arr.push(new_row); // push the new array to the end of arr
console.log("Updated arr:",arr); // Print the updated arr

// To add a new column, we push the element in each row so the overall dimensions 
// of the multi-dimensional array increase consistently like this.

var arr = [["Car", 2000], ["Truck", 500], ["Bike", 6500]]; // Create array
console.log(arr); // Print entire array
var row0_col = ["Toyota", "Nissan"];
var row1_col = ["Ford"];
var row2_col = ["Honda"];
// Push each element into each row of arr
arr[0].push(row0_col);
arr[1].push(row1_col);
arr[2].push(row2_col);

console.log("new arr:",arr); // print the final arr


//                                                          while loops


var count = 0; // assign 0 to variable count
while (count < 5){
    console.log("count",++count); // increment then print count
}
console.log("Program has ended with count:", count);

//another way to make a while loop:

var count = 0; // assign 0 to variable count
var shouldRun = true;
while (shouldRun === true){
    console.log("count",++count); // increment then print count
    if(count === 5){ // Check if count value is 5
        shouldRun = false; // assign false to shouldRun
    }
}
console.log("Program has ended with count:", count);

// do/while loops execute a set of instructions before 
// checking the condition and then continue executing while 
// the condition is true.

var count = 0; // assign 0 to variable count
do{
    console.log("count",++count); // increment then print count
}while (count < 5)
console.log("Program has ended with count:", count);
// პლიუსი ისაა, რომ ჯერ ასრულებს ბრძანებას და მერე ამოწმებს პირობას.
// count რო 10 ყოფილიყო მაინც ამოპრინტავდა


//                                                          for loops


// iterator will not execute if the condition in condition 
// fails and the for loop doesn’t enter the instructions block.

for(var i = 0; i < 5; i++){
    console.log(i); // print i value
}

// მეორე შემთხვევა
var i = 0;  // for ის გარეთ აღწერა ცვლადი
for(; i < 5;){
    console.log(i++); // i ს ცვლილება შიგნითვე ხდება
}

// მესამე შემთხვევა
var i = 0;
var count = 0;
for(name = "i", loop = "loop"; i < 5; i+=2, count++){
    console.log(name, loop, i); // print name, loop and i
}
console.log("count value:",count);

//აქ ჩანს, რომ შეიძლება 1 ზე მეტი ცვლილების ჩადგმა for ციკლში.



//                                                          CONTINUE AND BREAK


// same shit as in python
for(var i = 0; i < 10; i++){ // For loop to make 10 iterations
    if (i % 2 === 0){ // See if even number
        continue; // continue to next iteration
    }
    console.log('i value', i); // Print i value
}
console.log('Program ended.') // Print statement to tell the program ended

for(var i =0; i < 5; i++){ // For loop to make 5 iterations
    console.log('iteration #', i+1); // Print iteration number
    break; // break statement
    console.log('Will not execute');
}
console.log('Program ended.') // Print statement to tell the program ended

for(var i = 0; i < 10; i++){ // For loop to make 10 iterations
    if (i % 7 === 0 && i !== 0){ // მარტო IF ის გამო ჩვადგდე ეს. 
    // დებილი ნუ ხარ და ნუ გავიწყდება &&
        break; // continue to next iteration
    }
    console.log('i value', i); // Print i value
}
console.log('Program ended.') // Print statement to tell the program ended



//                                                       ITERATING ARRAYS   


var arr = [10, 25, 7, 100, 20]; // initialise arr
// iterate array from start to end
for(var i = 0; i < arr.length; i++){
  console.log(arr[i]);
}
console.log("indexing complete");

while (i < arr.length){
    console.log(arr[i]);
    i++;
}

var arr = [10, 25, 7, 100, 20]; // initialise arr
// iterate array from end to start
for(var i = arr.length - 1; i >= 0; i--){
  console.log(arr[i]);
}
console.log("indexing complete");

var arr = [
    [10, 25, 7],
    [100, 20, 53],
    [1, 12, 13]
   ]; // Initialise arr
// iterate each element
for(var i = 0; i < arr.length; i++){
    for (var j = 0;j < arr[i].length; j++){
        console.log(arr[i][j]);
    }
    console.log("row ended.");
}   

// The forEach method of an array works much like a loop. 
// The forEach method applies a function for 
// each element of the array.

var arr = [10, 25, 7, 100, 20]; // initialise arr
// iterate array from start to end
arr.forEach(x => console.log(x));
console.log("indexing complete");




//                                                          ITERATING OBJECTS


// Object.keys method gives an array of keys for a certain object
var obj = {'one': 1, 'two': 2, 'three': 3}; // initialise an object
console.log(Object.keys(obj)); // Print keys

// Object.values method gives an array of values of a certain object

var obj = {'one': 1, 'two': 2, 'three': 3}; // initialise an object
console.log(Object.values(obj)); // Print values

// Object.entries method gives an array of arrays with each inner 
// array consisting of the key and value of a certain object.

var obj = {'one': 1, 'two': 2, 'three': 3}; // initialise an object
console.log(Object.entries(obj)); // Print entries

var obj = {'one': 1, 'two': 2, 'three': 3}; // initialise an object
var keys = Object.keys(obj); // Create an array of keys of obj

for(var i = 0; i < keys.length; i++){
    console.log("key:",keys[i], "value:",obj[keys[i]]); // print key and value
}

//უკეთსი გზა ამისთვის არის in ოპერატორის გამოყენება
var obj = {'one': 1, 'two': 2, 'three': 3}; // initialise an object

for(var i in obj){
    console.log("key:",i, "value:",obj[i]); // print key and value
}





//                                                          FUNCTIONS


// Define function that takes the sum of two numbers
function sum(a , b){
    console.log('Taking sum in the function'); // print to see function execute
    var ans = a + b; // assign sum of a and b to ans
    return ans; // return ans as output
}

var var1 = 5; // assign 5 to var1
var var2 = 6; // assign 6 to var2
var var3 = sum(var1, var2); // call sum and assign the output to var3
console.log(var3); // print the value of var3
var var3 = sum; // assign sum to var3. it does what you think it does
console.log(var3(var1, var2)); // print the value of var3 after invocation

// სხვანაირად რო მიანიჭო var3 სფუნქცია
var var3 = function (a , b){
    console.log('Taking sum in the function'); // print to see function execute
    var ans = a + b; // assign sum of a and b to ans
    return ans; // return ans as output
}
// Any instruction written after the return statement
// in the function is not executed. 
// The function exits as soon as the return
// statement is executed.

// უცვლადო ფუნქცია
function getName(){
    console.log('getName function executed'); // print to see function execute
    return 'Jack'; // return string 'Jack'
}

var var3 = getName(); // assign 'Jack' to var3
console.log(var3); // print the value of var3
// Invoking a function without arguments when arguments are
//  required will give an undefined value for each argument.

// We call functions nested when some function is 
// declared inside another function.

function outer (a){ // This is the outer function
    console.log("Outer function executed with arg",a);
    function inner(b){ // This is the inner function 
      console.log("Inner function executed with arg:",b);
      return; // Exit inner function
    }
    inner(a); // Call inner function declared above 
    return; // Exit outer function
  }
outer(1); // Call outer function declared above
//   //When we call the outer function, 
// it executes and declares an entire function called inner. 
// It then calls the inner function  
// while giving the same passed argument a.



//                                                          ARROW FUNCTIONS


// უფრო მარტივად გასაააზებელია. იდეაში პითონის ლამბდა ფუნქციაა 

var func = (a, b) => a + b; // arrow function assigned to func to add a and b
console.log("Sum of 1 and 3:" , func(1,3)); // print func with arguments 1 and 3 


var func = (a, b) => { // Create arrow function for taking sum of two numbers
    var sum = a + b; // take sum of a and b and assign to sum variable
    return sum; // return sum
}
console.log("Sum of 1 and 3:" , func(1,3)); // print func with arguments 1 and 3 

// NOTE: Arrow functions are also called anonymous 
// functions as they are unnamed functions.

var func = a  => a * 2; // func assigned to arrow function which doubles argument a
console.log("Double of 5:" , func(5)); // print func with arguments 5

var func =  () => console.log("Hello"); // arrow function that prints hello
func(); // Call the arrow function through variable func

// რადგანაც ობიექტის აღმნიშნავი და ფუნქციის შიდა ნაწილის აღმნიშნავი 
// {}ერთი და იგივეა, შემდეგი სიტნაქსი ინდა იხმარო,
// როცა ობიექტებთან მუშაობ
var func1 = a  => ({'1' : a }); // arrow function creating object
var func2 = a  => { return {'1' : a }}; // arrow function creating object

console.log("Object with '1' property as 'OK':" , func1('OK')); // print object
console.log("Object with '1' property as 'OK':" , func2('OK')); // print object
// NOTE: If we wrote the above code as var func = a => {'1': a };, 
// it would throw an error as JavaScript expects 
// the parentheses to contain instructions for the body of the function.



//                                                         FUNCTION AS AN ARGUMENTS


// Functions can be passed into other functions by being passed as arguments. 
// This is because functions in JavaScript are objects
// higher-order functions take as arguements or return other functions
// callback functions is passed as an argument 

function printHello (){ // Function to print "Hello"
    console.log("Hello");
}

function foo (func){ // Create function taking another function as argument
    console.log("in foo function");
    console.log("calling func");
    func(); // invoke the function passed as argument
    console.log("finished calling");
    console.log("returning");
}
// here was an example of a callback function

//pass an anonymous function as an argument.

function foo (func){ // Create function taking another function as argument
    console.log("in foo function");
    console.log("calling func");
    func(); // invoke the function passed as argument
    console.log("finished calling");
    console.log("returning");
}

foo(function (){ // create function
    console.log("Hello")
    }); // invoke foo and pass printHello as argument

// pass an arrow function (cleaner anonymous function) as an argument.
function foo (func){ // Create function taking another function as argument
    console.log("in foo function");
    console.log("calling func");
    func(); // invoke the function passed as argument
    console.log("finished calling");
    console.log("returning");
}

foo(() => console.log("Hello")); // invoke foo and pass printHello as argument


//                                                          FUNCTIONS AS RETURN OBJECTS

// აბრუნებს ფუნქციიდან ფუნქციას

function foo (){ // Create function taking sum as argument
    function printCompleted(){
        console.log("This is new Function!");
    }
    return printCompleted;
}

var newFunc = foo (); // invoke foo and assign returned value to newFunc var
console.log("foo exited"); // print to signify completion of foo
console.log("invoking newFunc"); 
newFunc(); // invoke returned function from foo through variable newFunc

// return arrow function
function foo (){ // Create function taking sum as argument
    return () => console.log("This is new Function!"); // return arrow function
}

var newFunc = foo (); // invoke foo and assign returned value to newFunc var
console.log("foo exited"); // print to signify completion of foo
console.log("invoking newFunc"); 
newFunc(); // invoke returned function from foo through variable newFunc


//                                                          ARRAY METHODS

// Methods of an object are property names assigned to functions. 
// These methods can be invoked to execute the function.
// Now, let’s take a look at different methods.

// forEach method is used to iterate an array in loops.

var arr = [10, 20, 30, 40, 50]; // initialise an array and assign to arr
arr.forEach((val, ind, array) => { // arrow function to print arguments
    console.log("Value:", val, " Index:", ind, " arr:",array); // print values
    });
console.log(arr); // print array assigned to arr

// ეს მხოლოდ მეორე პარამეტრს იყენებს
var arr = [10, 20, 30, 40, 50]; // initialise an array and assign to arr
arr.forEach((_, ing) => { // arrow function that uses only the second argument
    console.log(" Index:", ing, " Val:",arr[ing]); // print values
    });
console.log(arr); // print array assigned to arr 
// '_' is used to ignore the first argument in the arrow function

//შეგიძლია პროსტა ფუნქციაც ჩაწერო აქ arrow function-ის მაგივრად

var arr = [10, 20, 30, 40, 50]
function print(val, _, _) {
    console.log('value :', val) }
arr.forEach(print); // call the function to print values


// filter method is used to filter out elements of an array
var arr = [10, 20, 30, 40, 50] 
arr1 = arr.filter(val =>val >20)
console.log(arr1)

// some or every method is used to check if any or all 
// elements of an array satisfy a condition respectively.


// The find method finds the first element in an array, 
// starting from the first index
// If no element in the array gives true value by the 
// callbackfn function, then undefined is returned 

var arr = [10, 20, 30, 40, 50]; // initialise an array and assign to arr
var val = arr.find(a => a > 20); // find element greater than 20
console.log("element greater than 20:",val); // print element returned by find 

var arr = [10, 20, 30, 40, 50]; // initialise an array and assign to arr
var val = arr.find(a => a > 20); // find element greater than 20
console.log("element greater than 20:",val); // print element returned by find 

// findIndex method finds the index of the first element

// map method is used to apply a function to each 
// element and it returns an array
var arr = [10, 20, 30, 40, 50]; // initialise an array and assign to arr
var arr1 = arr.map((a,b) => a * 2 + ` ${b}`); // double the element in the array
console.log("arr:",arr); // print original array
console.log("doubled array:",arr1); // print doubled array 


// ერთ ელემენტამდე მიიყვანს სიას რაღცა ფუნქციის გამოყენებით
var arr = [10, 20, 30, 40, 50]; // initialise an array and assign to arr
var val = arr.reduce((prev, curr) => prev + curr); // reduce element to sum
console.log("arr:",arr); // print original array
console.log("reduced val:",val); // print element returned by reduce 
// თუ ერთი წევრია, ერთ წევრს დააბრუნებს. თუ არცერთი, ერორს
// reduceRight method is used to reduce the array from right to left.             !!!!!!!!!!!!!!!!

// აქ არის ერთ-ერთი გამოყენება. იპოვის რამდენი სტრინგია სიაში
var arr = ['Hello', 1, true, NaN, 'Bye']; // initialise an array of elements
var countArr = arr.map(ele => typeof ele === 'string' ? 1 : 0); // map to 0 and 1
var sum = countArr.reduce((prev, curr)=> prev + curr); // reduce for sum
console.log("arr:",arr); // print original array
console.log("array from map:", countArr); // print array returned from map method
console.log("number of Strings:",sum); // print number of strings 
//same shit but more compact:
var arr = ['Hello', 1, true, NaN, 'Bye']; // initialise an array of elements
var sum = arr.map(ele => {
    return typeof ele === 'string' ? 1 : 0 // map to 0 and 1
    }).reduce((prev, curr)=> prev + curr); // reduce to find sum
console.log("arr:",arr); // print original array
console.log("number of Strings:",sum); // print number of strings 

//დაითვალე რამდენი ელემენტია სიაში:
var arr = [
    [1, 2, 3, 4],
    [1, 2],
    [1, 2, 3, 4, 5, 6],
    [],
]; // initialise a two-dimensional array
var sum = arr.map(ele => {
    return ele.length // length of array
    }).reduce((prev, curr)=> prev + curr); // find sum
console.log("arr:",arr); // print original array
console.log("number of elements:",sum); // print number of elements in 2D array


//                                                          SCOPES

// a variable with a global scope is used by
// every part of the code
// a variable with a local scope is used only in the
// function or block it is declared in

var a = 10; // variable a assigned to 10
var func = function () {
  // outermost function
  var b = 20;
  console.log("a and b is accessible (outer):", a, b);
  var innerFunc = function () {
    // innermost function
    console.log("a and b is accessible (innner):", a, b);
  };
  innerFunc();
  return;
};
func(); // invoke function func
console.log("only a is accessible (global):", a);
// console.log(b) //გაუშვი და ერორი იქნება

// NOTE: Variables declared with let or const
// cannot be redeclared in the same local scope
// using const or let. The two tokens prevent re-declaration
// which potentially reduces errors.
// The difference is that cost doesn’t allow reassignment,
// while let does.

//                                                        BLOCK SCOPES

// {}_ში მოქცეულია და ეგაა. const და let არ გადიან ამის გარეთ,
// var გადის.
var a = 10; // variable a assigned to 10
if (a === 10) {
  let b = 6; // variable b assigned to 6 using let
  var c = 7; // variable c assigned to 7 using var
  // a, b and c accessible inside block scope
  console.log("a, b and c accessible (block scope)", a, b, c);
}
// in global scope on a and c accessible
console.log("a and c accessible (global scope)", a, c);
// console.log(b) //გაუშვი და ერორი იქნებ

// Block scope is a subset of the function scope
// because the function scope is also bound
// by the curly bracket {}.

//                                                        LEXICAL SCOPES

// nothing much. it’s just a fancy name for the fact that
// the scope of a variable is determined by where it is declared
// and can not be accesed by a function, that is not in the same scope.
// the outermost scope cant access the variable of the innermost scope

//                                                        MODULE SCOPE

// კაროჩე, შეიცავენ წინასწარ გაწერილ ბრძნებებს,
// რომლებიც DEFAULT ად არ არის ჯავასკრიპტში
// და უნდა იმპორტირდეს

// ამაში ჩაწერილი ცვლადიები და ფუნქციები შეიძ₾ება ერთსა
// და იმავე global scope ში იყოს, მაგრამ მაინც არ
// იქნება ერთმანეთისთვის ხელმისაწვდიმი,
// if not stated otherwise

import { printHello } from "./practice";
printHello(); // Call printHello function from practice.js file
// (the otehr file in thsi folder)

// NOTE: Modules use import/export usually in JavaScript Babel.
// In node.js, use require statements instead.
// This is mostly the same, except the require statement
// will import the entire module.

//                                                          REGULAR EXPRESSIONS

// regex is a sequence of characters that form a search pattern
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

console.log(regex1, regex2); // Print the regex variables
// randregex and anotherregex are the same regex

// i    case insensitive matching
// g    global matching (find all matches)
// m    multiline matching (find matches in multiple lines)
// ესენი იწერება regex-ის ბოლოს
var regex1 = /asd/i;
var regex2 = RegExp("asd", "i");

//                                                          REGEX OBJECTS

//btw regexes are objects in js, so you can use them as such

var regex = /[a-b]+/i; // Create a regex and assign to regex
console.log('exec on "Abc123":', regex.exec("Abc123"));
// ეს ვერ დაწვი პირველ წაკითვაზე და მაინც გეუბნები.
// console.log ის მერე რო გიწერია str, არის უბრალოდ გაფორმება
// და მასზე არ ხდება არანაირი ოპერაცია.
console.log('exec on "123":', regex.exec("123"));
console.log('exec on "ABC":', regex.exec("ABC"));
// regex.exec() method returns an array of matched values
// თუ ვერ იპოვა მსგავსება, აბრუნებს Null-ს

//                                                          REGEX AND STRING METHODS

// search method returns the index of the first match
// if not found, it returns -1
let main_strin = "WorldHello!"; // Assign string to variable main_string
let inde1 = main_string.search("hello"); // search for "hello"
let inde2 = main_string.search("Hello"); // search for "Hello"
let inde3 = main_string.search(/hello/i); // search for "Hello"
console.log("Index of string 'hello':", index1); // print index after search
console.log("Index of string 'Hello':", index2); // print index after search
console.log("Index of string through regex:", index3); // print index after search
// RegEx ის დახმარებით მარტივდება search ის გამოყენება,
// ამ შემთვევაში "i" ხდის case insensitive-ს,

let main_string = "HelloWorld!"; // Assign string to variable main_string
// Repace "hello" with goodbye
let replace1 = main_string.replace("hello", "Goodbye");
let replace2 = main_string.replace("Hello", "Goodbye");
let replace3 = main_string.replace(/hello/i, "Goodbye");

console.log("Replacement of string 'hello':", replace1); // print after replace
console.log("Replacement of string 'Hello':", replace2); // print after replace
console.log("Replacement of string for regex:", replace3); // print after replace
// ასევე შეგიძლია replace მეთოდის გამოყენება RegEx თან ერთად


//                                                          OBJECT ORIENTED PROGRAMMING

// yk the bullshit, so lets get over it
// რაც არ იცი :
// ყველა ობიექტს აქვს პროტოტიპი, რომელსაც obj.__proto__
// მეთოდით იგებ. აქ ვერ მიწვდები პროტოტიპს, მაგრამ შეგიძლია
// ბრაუზერში იჩალიჩო მაგაზე. თუ ამოპრინტვას ეცდები,
// {} ცარიელი ობიექტი იქნება შედეგი

let vehicle = { wheels: 4 }; // object assigned to variable named vehicle
let car = {
  seats: 5,
  __proto__: vehicle, // __proto__ property assigned to vehicle
}; // object assigned to variable named car
console.log(`vehicle:`, vehicle, vehicle.__proto__);
console.log(`car:`, car, car.__proto__);
console.log(`vehicle seat:`, vehicle.seats);
console.log(`car wheels:`, car.wheels);

// __proto__ property is used to access the prototype of an object
// and it is used to inherit properties from the prototype object.
// მოკლედ, vehicle გახდა car ის მშობელი, car კი vehicle ის შვილი

// რა მოხდებოდა, თუ car ს საკუთრი wheels ქონოდა?
let vehicle = { wheels: 4 }; // object assigned to variable named vehicle
let car = {
  seats: 5,
  __proto__: vehicle, // __proto__ property assigned to vehicle
  wheels: 6,
}; // object assigned to variable named car

// Print all objects and __proto__ property for each variable
console.log(`vehicle:`, vehicle, vehicle.__proto__);
console.log(`car:`, car, car.__proto__);
console.log(`car wheels:`, car.wheels);
// __proto__ მოწმდება მაშნ, როცა car ს wheels არ აქვს,
//__proto__ ზე უნდა იყოს მინიჭებული prototype obj, obj ან Null

Object.getPrototypeOf(car);
Object.setPrototypeOf(car, protato); // protato ს მნიშვნელობა მიენიჭება car

let vehicle = { wheels: 4 }; // object assigned to variable named vehicle
let car = { seats: 5 }; // object assigned to variable named car

Object.setPrototypeOf(car, vehicle);
// Print all objects and __proto__ property for each variable
console.log(`vehicle:`, vehicle, Object.getPrototypeOf(vehicle));
console.log(`car:`, car, Object.getPrototypeOf(car));
console.log(`car wheels:`, car.wheels);
// წინაზე რო იყო car და vehicle, ამ მეთდების დახმარებით ასე იწერება.


//                                                          CONSTRUCTOR FUNCTIONS
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

// დაამუღამე კარგად ეგენი, გული მიგრძნობს, რომ ყველაფერს ეგ წყვეტს.
// prototype object is assigned to all object’s __proto__ property
// created using the constructor function Employee. Check out the code below.
// Print Employee objects prototype objects
console.log(
  `employee protoypes: ${employee1.__proto__}, ${employee2.__proto__}`
);
console.log(
  `protoype equalities: ${employee1.__proto__ === employee2.__proto__}`
);
console.log(
  `protoype equalities: ${Employe.prototype === employee2.__proto__}`
);
console.log(Employe, Employe.__proto__, Employe.prototype);
// Employee.prototype is equivalent to the __proto__ property of the
// object created through the Employee constructor function.

//                                                          CLASSES

//same shit as functions but different

// Additional functions (methods) available in the objects can
// be defined inside the constructor function’s body or
// in the body of the class. see the code below for an example
class Employee {
  constructor(_name, _age, _designation) {
    this.name = _name;
    this.age = _age;
    this.designation = _designation;
    // Method
    this.setAge = (newage) => {
      console.log(`setting age from ${this.age} to ${newage}`);
      this.age = newage;
    };
    // Property assigned by constructor function
    this.company = "Amazon";
  }
  // Methods defined outside the constructor
  printAge() {
    console.log(`${this.name} is ${this.age} years old`);
  }
}

var employee1 = new Employee("Mark", 12, "Manager"); // create Employee object
//note, that "new" is used
// Print Employee object assigned to employee1
console.log(`employee1 name: ${employee1.name} age: ${employee1.age}`);
console.log(`employee1 company: ${employee1.company}`);
employee1.setAge(20); // call method to set age of employee1
console.log(`employee1 name: ${employee1.name} age: ${employee1.age}`);
// Call printAge method for employee1
employee1.printAge();

//                                                          STATIC METHODS
// მოკლედ, სტატიკური მეთოდი ეკუთვნის კლასს და არა ობიექტს.
// ანუ, თუ კლასს static მეთოდი აქვს, მაშინ ეს მეთოდი
// კლასის ყველა ობიექტს ეკუთვნის და არა კონკრეტულ ობიექტს.

class Employeee {
  constructor(_name, _age, _designation) {
    this.name = _name;
    this.age = _age;
    this.designation = _designation;
    // Method
    this.setAge = (newage) => {
      console.log(`setting age from ${this.age} to ${newage}`);
      this.age = newage;
    };
    // Property assigned by constructor function
    this.company = "Amazon";
  }
  // Methods defined outside the constructor
  printAge() {
    console.log(`${this.name} is ${this.age} years old`);
  }
  // აგერაა static მეთოდი, რომელიც ეკუთვნის Employee კლასს
  static compareAge(employee_1, employee_2) {
    return employee_1.age - employee_2.age;
  }
}

var employee1 = new Employeee("Mark", 12, "Manager"); // create Employee object
var employee2 = new Employeee("Tom", 30, "Accountant"); // create Employee object
// Check for compareAge method for an employee object
console.log("employee1 objects method 'compareAge:'", employee1.compareAge);
console.log("Employee class method 'compareAge:'", Employeee.compareAge);
// Call method
console.log("compareAge method:", Employeee.compareAge(employee2, employee1));
// classes have the same features relating to prototypes.
// The key difference is that the static methods reside inside the class.

//                                                          DATA PROTECTION

// ტვინი რო არ ვტყნა, მალავს ან იცავს მონაცემებს property ებს.

// intetrnal properties მარტო class და კონსტრუქტორის ფუნქციაში
// უნდა იყვნენხელმისაწვდომი, მის გარეთ კიდევ - მიუწვდომელი.
// ამისთვის, საკმარისია, რომ კონსტრუქტორის ფუნქციაში
// var _age = age; დაწერო this._age ის ნაცვლად
// "_" სილამაზისთვისაა და შიდა ცვლადებს ასახავს
function Employee(name, age, designation) {
  // Properties assignment passed as arguments
  this.name = name;
  var _age = age;
  this.printAge = () => {
    console.log(`${this.name} is ${_age} years old`);
  };
}
employee1 = new Employee("Mark", 12, "Manager");
console.log("employee1 age:", employee1.age, employee1._age);
//_age ს ვერ აწვდები, მაგრამ შეგიძლია შექმნა მეთოდი(კლასშივე) და
// ამ მეთოდით ამოპტინტო ან გამოიტანო ეს ცვლადი
employee1.printAge();

//                                                          INHERITANCE

// შვილობილს მშობლის property ები გადააქვს.

// hierarchical inheritance --- როცაერთ კლასს
// რამოდენიმე მშობელი კლასი აქვს(class B არის class A და class C-ს შვილი)

// prototypal inheritance --- ობიექტის უნარი,
// რომ მემკვიდრეობით მიიღოს თვისებები  სხვა
// ობიექტებისგან prototype property-ს გამოყენებით.
let vehicle = { wheels: 4 }; // object assigned to variable named vehicle
let car = {
  seats: 5,
  __proto__: vehicle, // __proto__ property assigned to vehicle
}; // object assigned to variable named car
console.log(`vehicle:`, vehicle, vehicle.__proto__);
console.log(`car:`, car, car.__proto__);
console.log(`vehicle seat:`, vehicle.seats);
console.log(`car wheels:`, car.wheels);
// ესე შეგიძლია უსასრუოდ გააგრძელო. რამეს რომ
//__proto__ : car მივცე, vehicle და car ის
// property ები გადაეცემა.
// __proto__ ეძებს იმ property ებს, რომლების
// საწყის კლასს არ აქვს გაწერილი.
// თუ მან ვერ იპოვა ვერაფერი
// null ს დააბრუნებს

//                                                          CALL METHOD

//ერთი ფუნქციის პროტოტიპების გამოყენება მეორე ფუნქციაში.
function Human(_name, _age) {
  // Properties assignment passed as arguments
  this.name = _name;
  this.age = _age;
  // Property assigned by constructor function
  this.arms = 2;
  this.legs = 2;
}

function Employee(_name, _age, _designation) {
  // Properties assignment passed as arguments
  Human.call(this, _name, _age);
  this.designation = _designation;
  // Method
  this.setAge = (newage) => {
    console.log(`setting age from ${this.age} to ${newage}`);
    this.age = newage;
  };
  // Property assigned by constructor function
  this.company = "Amazon";
}
var employee1 = new Employee("Mark", 20, "Manager"); // create Employee object
// create new property in the prototype object for all objects to inherit
Employee.prototype.gender = "male";
Human.prototype.feet = 2;
// print objects
console.log(employee1.name, " is ", employee1.gender);
console.log(employee1.name, " is ", employee1.age);
console.log(employee1.name, " has ", employee1.arms, " arms");
console.log(employee1.name, " has ", employee1.feet, " feet");
// თუ call ის მერე დაამატებ human ს პროტოტიპებს, არ დამატებული
// პროტოტიპები არ აისახება იმ ფუნქციაში, რომელშიც call გამოიძახე

// ამის გამოსასწორებლად, იხმარე შემდეგი სინტაქსი:

function Human(_name, _age) {
  // Properties assignment passed as arguments
  this.name = _name;
  this.age = _age;
  // Property assigned by constructor function
  this.arms = 2;
  this.legs = 2;
}

function Employee(_name, _age, _designation) {
  // Properties assignment passed as arguments
  Human.call(this, _name, _age);
  this.designation = _designation;
  // Method
  this.setAge = (newage) => {
    console.log(`setting age from ${this.age} to ${newage}`);
    this.age = newage;
  };
  // Property assigned by constructor function
  this.company = "Amazon";
}
Employee.prototype = Object.create(Human.prototype); // ამ სინტაქსზეა საუბარი
Employee.prototype.constructor = Employee; // create constructor property

var employee1 = new Employee("Mark", 20, "Manager"); // create Employee object
// create new property in the prototype object for all objects to inherit
Employee.prototype.gender = "male";
Human.prototype.feet = 2;
// print objects
console.log(employee1.name, " is ", employee1.gender);
console.log(employee1.name, " is ", employee1.age);
console.log(employee1.name, " has ", employee1.arms, " arms");
console.log(employee1.name, " has ", employee1.feet, " feet");
// All properties of the previous object assigned to
// Employee.prototype will be lost by assigning the new object.

//                                                          CLASS INHERITANCE

// extends ით შეგიძლია მიუთითო ერთ კალსი მეორის მშობლად
// ამის შედეგად, ყველა property მშობლისა იქნება ხელმისაწვდომი(!)
// შვილობილ კლასში

// შემდეგ, თუ გინდა, რომ გაააქტიურო ეს property ები
// გამოიყენე super ბრძნება
class childClassName extends parentClassName {
  //body containing constructor and methods
  constructor(parameter1, parameters) {
    // call constructor of parent class
    super(parameter1);
    // initialise properties of child class
  }
}
// არ დაგავწიწყდეს, რომ super ი არ არის საკმარისი,
// კონსტრუქტორის გამოძახებისას მაინც უნდა მიუთითო super ში
// მოსათითებელი property ები.

//სრული სინტაქსი აგერაა:
class Human {
  constructor(_name, _age) {
    // Properties assignment passed as arguments
    this.name = _name;
    this.age = _age;
    // Property assigned by constructor function
    this.arms = 2;
    this.legs = 2;
  }
}

class Employee extends Human {
  constructor(_name, _age, _designation) {
    // Properties assignment passed as arguments
    // this.name = _name;
    // this.age = _age;
    super(_name, _age); // use super to use properties from Human class
    this.designation = _designation;
    // Property assigned by constructor function
    this.company = "Amazon";
  }
  // Method
  setAge(newage) {
    console.log(`setting age from ${this.age} to ${newage}`);
    this.age = newage;
  }
}

var employee1 = new Employee("Mark", 20, "Manager"); // create Employee object
// print objects
console.log(employee1.name, " is ", employee1.age);
console.log(employee1.name, " has ", employee1.arms, " arms");

//                                                          JSON- JAVASCRIPT OBJECT NOTATION
// მჩატე და text based ენაა, რომელიც გამოიყენება ინფოს
// ტექსტურ ფორმატში დასამახსოვრებლად. გამოიყენება server
// და browser ს შორის ინფოს გასაცვლელად(ზოგადად,
// ტექსტური ინფოს გასაცვლელად). ნებისმიერი ობიექტის
// JSON ფორმატში გადაყვანა შეგიძლია.

// JSON ობიექტების შესაქმნელად javascript ის ობიექტების
// შექმნისავითა. ასევე მას შეუძლია Array ების შექმნა პირდაპირ.
// სხვა სიტყვებით, {} და [] გამოიყენება აქაც.
// JSON მაინც ტექსტია, იმისათვის რომ ობიექტი JSON ფორმატში
// გადაიყვანო, საჭიროა, რომ JSON.parse()
// ეს მეთოდი იღებს string ობიექტს არგუმენტად და
// აბრუნებს JavaScript ობიექტს.
var obj_json = '{"name": "Ali", "age": 3}'; // string representation of JSON text
var object_translated = JSON.parse(obj_json); // Parse JSON text
// Print types and values of obj_json and object_translated
console.log("obj_json: ", obj_json);
console.log("object after parsing: ", object_translated);
console.log("type of obj_json: ", typeof obj_json);
console.log("type of object_translated: ", typeof object_translated);

// შეგიძლია JSON.stringify() მეთოდი გამოიყენო,
// რათა JavaScript ობიექტი JSON ფორმატში გადაიყვანო.
var object = { name: "Ali", age: 3 }; // JavaScript object assigned to object
var json_obj = JSON.stringify(object); // convert JavaScript object into JSON text
// Print types and values of object and json_obj
console.log("object: ", object);
console.log("object after JSON.stringify: ", json_obj);
console.log("type of object: ", typeof object);
console.log("type of json_obj: ", typeof json_obj);

//                                                          CURRY FUNCTIONS

var add = function (a) {
  return function (b) {
    return a + b;
  };
};
// console.log(add(a,b)); <- incorrect call

// calling one function at a time
var func_add_2 = add(1); // return a function which adds 1 to the argument
var final_output = func_add_2(5);
console.log(final_output);
// add(1) აბრუნებს ფუნქციას, რომელშიც ჩაწერილია 1, როგორც a. ის პასუხს არ აბრუნებს.
// func_add_2(5) არის ფუნქცია, რომელიც დააბრუნა add(1) ფუნქციამ.
// func_add_2(5) აბრუნებს 1 + 5 = 6. ანუ. ის აბრუნებს რიცხვს.

// more direct approach
final_output = add(1)(5);
console.log(final_output);

//                                                        FUNCTION COMPOSITION

// ფუნქციის კომპოზიცია ნიშნავს ერთი ფუნქციის შედეგის მეორე ფუნქციაში
// გადაცემას.

const double = (x) => x * 2;
const square = (x) => x * x;
// Traditional approach
var output1 = double(2);
var output2 = square(output1);
console.log(output2);
// variant two
var output_final = square(double(2));
console.log(output_final);

// ეს მაინც გრძელია და ტვინს ტყნავს.

// ამიტომ, შეგიძლია გამოიყენო ფუნქციის კომპოზიცია,
// ის აბრუნებს ახალ ფუნქციას, რომელიც
// მითითებული ფუნქიების გაერთიანებულია.
const compose = (f, g) => (x) => f(g(x)); // function composition of two functions
const Double = (x) => x * 2;
const Square = (x) => x * x;

// function composition
var output_final = compose(Square, Double)(3);
console.log(output_final);
// ჯერ გააორმაგა, მერე კვადრატში აიყვანა.
const cmpose =
  (...fns) =>
  (x) =>
    fns.reduceRight((y, f) => f(y), x);
const duble = (x) => x * 2;
const sqare = (x) => x * x;
// ... არის ოპერატორი, ტომელიც გადასცემს array ში
// იმ ფუნქციებს, რომლებსაც შევიყვანთ,
// და ანიჭებს მათ ცვლადს fns.

// შიდა ფუნქცია იყენებს reduceRight მეთოდს,
// რათა მარჯვნიდან მარცხნივ გაუყვეს fns array ს,
// და გამოიძახოს თითოეული ფუნქცია, რიგრიგობით.
// reduceright მეთოდი ამ ფუნქციებს გადასცემს x -ს,
// function composition

// The reduceRight method processes these functions from right to left,
// where y is the current accumulated value (initially x),
// and f is the current function to apply.
// The result of f(y) becomes the new accumulated
// value for the next iteration,
// effectively composing the functions together.
var output_final = cmpose(sqare, duble)(2);
console.log(output_final);
//                                                      PIPE FUNCTIONS

// The implementation is the same as the compose function,
// except it uses the reduce method rather than
// using reduceRight method, thus reversing
// the order of function invocations.
// function composition using pipe of any number of functions
const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((y, f) => f(y), x);
const double = (x) => x * 2;
const square = (x) => x * x;

// function pipe
var output_final = pipe(square, double)(2);
console.log(output_final);
//                                                      SOLVING FOR SUB-PROBLEMS
function power(base, power) {
  if (power === 0) {
    // Basecase # 1
    // directly solve the problem
    return 1;
  } else if (power === 1) {
    // Basecase # 2
    // directly solve the problem
    return base;
  } else {
    // Recursive case
    // solve sub-problem
    // sub problem is multiplying it to the base one less value of power
    var sub_solution = power_helper(base, power - 1); //dont overthink it
    // პროსტა მაგალითა, რომელშც x^a = x^(a-1) * x
    var solution = sub_solution * base;
    return solution;
  }
}
// base არის ის მომენტი, როცა შეგიძლია
// პირდაპირ ამოიღო პასუხი,

// sub-problem ის მომენტია, როცა
// ამოხსნის ჯერ ერთ ნაწილს პოულობ,
// შემდეგ კი მეორეს.

//                                                      RECURSION
// Direct recursion happens when a function calls
// itself directly in its body or definition.
// Indirect recursion is when two or more functions
// call themselves indirectly from each other.
*/
//                                                      WEB PROGRAMMING

//                                                      JAVASCRIPT INLINE WITH HTML

//                                                      SCRIPT TAG

/*
<html>
  <head></head>
  <body>
    <h1> Test Page </h1>
    <p> Can this page be any more interactive?</p>
    <script>
      // add 'Yes' to string document.getElementsByTagName('p')[0].innerHTML +=
      ' Yes!'
    </script>
  </body>
</html>;
*/
// HTML ში sctipt tag გამოიყენება რაღაცეების დასამატებლად,
// სხვა არაფრის თქმა არ შემიძლია, that's it.

//                                                      JAVASCRIPT FILE ALONGSIDE HTML

/*
<html>
  <head>
  </head>
  <body>
    <h1> Test Page </h1>
    <p> 
      Can this page be any more interactive?
    </p>
    <script src="index.js"></script>
  </body>
</html>

//ამის მერე მოდის უკვე ის ჯავასკრიპტ ფაილი, რომელიც გამოიძახე ამ კოდში

// add 'Yes' to string
document.getElementsByTagName("p")[0].innerHTML += " Yes!";
*/

//                                                          DOM - DOCUMENT OBJECT MODEL

// ინახავს visible object ების ინფოს
// გამოიყენება დოკუმნტში არსებულ ინფოსთან და თვითონ დოკუმენტთან
// სამუშაოდ.

// document ობიექტში შენახულია ინფო ყველაფერზე, რაც
// ვებ გვერდზეა.

// Document --- root node for all documents
// DocumentType --- document type definition (DTD) (e.g., HTML, XHTML)
// Element --- represents a tag ("body")
// attr --- attribute of a tag
// Text --- represents the content of a node ("Hello World")
// comment --- represents comments in the document

// Query element
// ეძებს ელემენტს
// NodeList --- class, that is a collection of nodes (elements)
// it can be traversed, indexed and manipulated
// it is not an array, but it has similar properties
getElementByTagName(tagName); // gets NodeList by tag name
getElementById(id); // gets ndoelist by id
getElementsByClassName(className); // gets nodelist by class name
//
X.firstChild; // gets first child of the node
X.lastChild; // gets last child of the node
x.childNodes; // gets all child nodes of the node
x.parentNode; // gets parent node of the node
x.previousSibling; // gets previous sibling of the node
x.nextSibling; // gets next sibling of the node
//
x.createElement(tagName); // creates a new element with the given tag name
x.createTextNode(text); // creates a new text node with the given text
//

//                                                          ASYNCHRONUS PROGRAMMING
// BLOCKING CODE --- კოდის ის ნაწილი, რომელიც აფერხებს კოდის შესრულების მსვლელობას
function complete() {
  console.log("function completed!");
  return;
}
setTimeout(complete, 2000.0);
// ხელოვნურად უქმნი შეფერხებას, 2000 მილიწამით
console.log("Calling after setTimeout");

//                                                          ASYNC FILES
const fs = require("fs");
console.log(fs);
// ეს არის მოდული, რომელიც ასინქრონულად გვამუშავებს ფაილებთან
fs.readFile("file.txt", "utf8", (err, data) => {});
// გადაეცემა დირექროეია, OPTIONS და CALLBACK
// ფუნქცია, რომელიც გამოიძახება
// როცა ფაილი წაიკითხება

// გამოყენება:

const fs = require("fs"); // import fs module
fs.readFile("sample.txt", "utf8", function (err, data) {
  if (err === null) {
    // error check
    console.log("File content:");
    console.log(data); // print file data
  } else {
    console.log("error reading file"); // error so print this
  }
});
console.log("Called file read");
// print after calling fs.readFile function

//                                                     NESTED CALLBACKS

// ერთი ცალლბაცკ ფუნცტიონ მეორეში რომ ჩასვა.
// ხუთ წამში შეასრულებს მითთებულ nested ფუნქციას, იმის მაგივრად,
// რომ შეასრულოს ეს ფუნქცია და 5 წამში გააკეთოს მისი საწყისი ფუნქცია

const fs = require("fs"); // import fs module
// set time out for 5 seconds
setTimeout(function () {
  console.log("five seconds complete");
  // read file in callback of setTimeout
  fs.readFile("sample.txt", "utf8", function (err, data) {
    if (err === null) {
      // error check
      console.log("File content:");
      console.log(data); // print file data
    } else {
      console.log("error reading file"); // error so print this
    }
  });
}, 5000); // 5000ms = 5 seconds

console.log("all functions called"); // print after calling all function

//                                                PROMISES

// გამოიყენება უფრო ლამაზი ასინქრონული კოდის დასაწერად
// და nested callback hell ის თავიდან ასაცილებლად
var func = function (resolve, reject) {
  // add tasks synchronous or asynchronous
  if (/*Everything works as expected */ x == 9) {
    resolve(/* return value */);
  } else {
    reject(/* return value */);
  }
};
// თუ ფუნქცია წარმატებით შესრულდა, resolve
// გამოვა პასუხად თუ არა, reject

//
// func გადაეცემა promise ში, რომელიც შემდეგ გამოიყენება
// .then() მეთოდში, რომელიც ასრულებს ფუნქციას,
// რომელიც გადაეცემა მას, როცა ფუნქცია წარმატებით შესრულდება
var func = function (resolve, reject) {
  setTimeout(function () {
    // in callback call resolve function
    console.log("in setTimeout callback");
    resolve("Timed out for five seconds");
    // not using reject as not catering error handling for now
  }, 5000); // setTimeout for 5 seconds
};
var callbackfn = function (value) {
  console.log("In callbackfn and printing value:");
  console.log(value); // print the value received
};
var promise = new Promise(func); // create Promise with func
promise.then(callbackfn); // run promise with callback in then method
// NOTE: The tasks in the then() method are executed with a higher
// priority than those in the callback queue.
/*  // func ის resolve გადაეცემა dosomething1 ს და ასე შემდეგ
promise(func)
 .then(doSomething1)
 .then(doSomething2)
 .then(doSomething3);
*/

// სინქრონული ფუნქციის მაგალითი just because
var func = function (resolve, reject) {
  // function for promise creation
  console.log("in func");
  resolve(10);
};
var syncTask1 = function (val) {
  // first then method task
  console.log("in task 1 with val:", val);
  return val + 1;
};
var syncTask2 = function (val) {
  // second then method task
  console.log("in task 2 with val:", val);
  return val + 1;
};
var promise = new Promise(func); // create promise with func function
promise // call promise by adding .then method to it
  .then(syncTask1) // invoke syncTask1 with value passed to resolve
  .then(syncTask2) // invoke syncTask2 with value retured by syncTask1
  .then((val) => {
    // adding arrow function directly
    console.log("End of the chain with val:", val);
  });

//აქ კი არის მაგალითი ასინქრონული ფუნქციის
const fs = require("fs"); // import fs module
// create function which returns a promise
// promise is for setTimeout for `time` milliseconds
var getPromise = function (time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(`timed out for ${time}ms`); // return string using resolve
    }, time);
  });
};

var promise = getPromise(5000); // get promise for 5000 seconds
console.log("Start promise"); // print before invoking .then method

promise
  .then((val) => {
    console.log("in then block#1 and received:", val);
    // return new Promise which readss file
    return new Promise((resolve, reject) => {
      // read file and resolve in the callback of file read
      fs.readFile("sample.txt", "utf8", (err, data) => {
        if (err === null) {
          console.log("file read complete");
          resolve(data); // return data read data in resolve
        }
      });
    });
  })
  .then((val) => {
    console.log("in then block#2 and received:", val);
    return getPromise(2000); // return the promise returned from getPromise
  })
  .then((val) => {
    console.log("in then block#3 and received:", val);
    console.log("end of chain.");
  });
//

// promise.all('array of promises')
// აკეთებს ყველა promise ს, აბრუნებს array ს,
// რომელიც შეიცავს ყველა promise ს
// value(იგივე ამონახსნი) არის.
const fs = require("fs");
var readFile_promise = function (filename) {
  return new Promise((resovle, reject) => {
    fs.readFile(filename, "utf8", (err, data) => {
      if (err === null) resovle([filename, data]);
    });
  });
};
var promiseList = [
  readFile_promise("file1.txt"),
  readFile_promise("file2.txt"),
  readFile_promise("file3.txt"),
];
Promise.all(promiseList).then((arr) => {
  console.log("worked");
  var max = arr.reduce((prev, curr) => {
    return prev[1].length > curr[1].length ? prev : curr;
  });
  var min = arr.reduce((prev, curr) => {
    return prev[1].length < curr[1].length ? prev : curr;
  });
  console.log("largest file:", max[0]);
  console.log("smallest file:", min[0]);
});

//                                                   ASYNC

// async ტ თუ აღწერ ცვლადს, მიიღებ ფუნქციას,
// რომელიც უკეთ მუშაობს ასინქრონულ კოდთან
var func1 = async function () {
  return 1;
};
console.log(func1); // async function
console.log(func1()); // promise
func1().then((val) => {
  // invoke promise
  console.log(val); // get value
});
// ეს კოდი დუდამ დააბრუნებს promise ს, რომელშიც
// იქნება გახვეული საწყისი return 1
// ამ ფუნქციის მნიშვნელობა შეგიძლია
// .then() მეთოდით გამოიძახო

//                                                   AWAIT
// await ფუნქცია, რომელიც უნდა იყოს async ფუნქციის შიგნით
// ის აჩერებს კოდის შესრულებას, სანამ promise არ დასრულდება
var func = async function () {
  let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("timeout1 for 3 seconds");
      resolve("done");
    }, 3000);
  });

  await promise1;
  console.log("promise compelete");
};

//                                                  ERROR HANDLING
// same shit as try/except in python
try {
  console.log("entered try block");
  undefinedFunc(); // invoke undefined func
  console.log("invoked func in try block"); // will not be executed
} catch (err) {
  console.log("entered catch block");
  console.log("Err:", err);
  console.log("Printed error");
}
//throw ქმნის ერორს. same as raise in python
try {
  throw "Will not execute anything";
  console.log("entered try block");
  undefinedFunc(); // invoke undefined func
  console.log("invoked func in try block"); // will not be executed
} catch (err) {
  console.log("entered catch block");
  console.log("Err:", err);
  console.log("Printed error");
}

//                                                  ASYNC ERRORS
// ამ დროს ერორების გადამოწმება ხდება callback შივე.
const fs = require("fs");
// readFile that doesn't exist
fs.readFile("content.txt", "utf8", (err, data) => {
  // callback function
  if (err) {
    // add error handling code here
    console.log("Err:", err);
  } else {
    console.log("data: ", data);
  }
});
//                                                  PROMISE ERRORS
// ამას თავისი catch მეთოდი აქვს დაჟე
promise.then(callbackfn).catch(errHandlingfn);
// reject ის შედეგი უნდა დაითრიო და გადახვიდე
// მაგ:
var readFile_promise = new Promise((resolve, reject) => {
  // readFile that doesn't exist
  fs.readFile("content.txt", "utf8", (err, data) => {
    // callback function
    if (err) {
      reject(err); // reject err
    } else {
      resolve(data); // resolve data
    }
  });
});

readFile_promise
  .then((val) => {
    // callback function for promise
    console.log("data: ", val); // print value
  })
  .catch((err) => {
    // error handling
    console.log("Err:", err); // print error
  });
// თუ მოხდება ერორი სადმე მაინც, პირდაპირ
// .catch მეთოდში გადადის
// შეგიძლია იგივე ქნა, ოღონდ async/await ში
async function readFile() {
  try {
    const data = await fs.promises.readFile("content.txt", "utf8");
    console.log("data: ", data);
  } catch (err) {
    console.log("Err:", err);
  }
}
// same shit as synchronious

//                                                  WEB PAGE EVENTS
// element.addEventListener(event, callbackfn);
// click, load, და სხვა რაღაცეების მიმართ
// შეგიძლია ვებ გვერდი გახადო მგრძნობიარე.

/* ამით შეგიძლია ნახო, დააჭირეს თუ არა მოცემულ ელემენტს
var element = window
                .document
                .getElementsByTagName('p')[0];
element.addEventListener('click', ()=>{
    console.log('clicked');
})
*/

/* // ამით კიდევ, ჩაიტვირთა თუ არა გვერდი. 
window.addEventListener('load', ()=>{
    console.log('loaded');
})
*/
/* // შეგიძლია გადააბა promise და event
var promise = new Promise ((resolve, reject)=>{
    window.addEventListener('load', ()=>{
        resolve('loaded');
    })
})
promise.then(val => console.log(val));
*/
/* // async function შიც შეგიძლია გაუშვა
async function loaded(){
    var promise = new Promise ((resolve, reject)=>{
        window.addEventListener('load', ()=>{
            resolve('loaded');
        })
    })
    var value = await promise; // wait for event
    console.log(value); // print resovled value
}
loaded(); // invoke function
*/
//

//

//

//
//                                                          ??????????????????????????

//    "?" what does it do?

/*


var ans = {'id' : new Number(id).valueOf(),
    'aviable' : new Boolean(aviable).valueOf(),
    'count' : new Number(count).valueOf(), 
    'name' : new string(name).valueOf(), 
    'author' : new string(author).valueOf()
                                                    }







  
var var3 = sum; function

function foo (func){ // Create function taking another function as argument
    console.log("in foo function");
    console.log("calling func");
    func(); // invoke the function passed as argument
    console.log("finished calling");
    console.log("returning");
}


//why is "new" used in the constructor function, when creating a new object?

//javascript OOP ს inheritance in functions და inheritance in classes ვერ გაიგე საერთოდ.
//solution review, maze solver, 5th task, last task.

/*
function power(base, power)
{
    if(power === 0){
        // Basecase # 1
        // directly solve the problem
        return 1;
    }
    else if(power === 1){
        // Basecase # 2
        // directly solve the problem
        return base;
    }
    else{
        // Recursive case
        // solve sub-problem
        // sub problem is multiplying it to the base one less value of power
 
        var sub_solution = power_helper(base, power -1);    // რა არის Power_helper, საიდან გაეძრო და სად არის მისი აღწერა?
 
        var solution =  sub_solution * base;
        return solution;
    }
}
*/
// ჰელპერ ფუნქციები (რეკურსია js module ში) ვწრ გაიგე საერთოდ.

//excercise pascal triangle გააკეთე მერე

//DOM
//appendchild?????
//x.insertbefore?????
//x.replacechild?????
//x.removechild?????

// webdev "know your browser"

// settimeout რო გამოვიყენე
function setX(x) {
  return (x = 2);
}
var x = 1;
for (var i = 0; x == 1; i++) {
  console.log(i);
  x = setTimeout(() => {
    return 2;
  }, 10000);
}
// ამ ფუნქციაში, მხოლოდ 1 წრე შესრულდა, რატო?
