//                                                  VARIABLES
// ასე შეიძლება შეცვალო const ის მნიშვნელობები
const user1 = { id: 1, name: "MyName1" };
const user2 = { id: 2, name: "MyName2" };

user1.name = user2.name; // Legit!
user1.id = 1000; // Legit !

// შეგიძლია const ით მინიჭებული მნიშვნელობის შეცვლა, მაგრამ სხვა
// ცვლადს ვერ მიანიჭებ
function constArr() {
  const arr = [1, 2, 3];
  arr.push(4); // Legit!
  console.log(arr);
}

/* // ამოაგდებს ერორს, რადგან const ით მინიჭებული ცვლადი
   // არ შეიძლება შეცვალო
function constBlockedFunction() {
    const myList = [1, 2, 3];
    myList = [1, 2, 3, 4]
    console.log(myList);
}
constBlockedFunction();
*/

//                                                  AMBIENT DECLARATION
// declare ის დახმარებით აჩენ ცვლადს, რომლისთვისაც
// მნიშვნელობის მინიჭება აუცილებელი არაა.
// ეს გამოგადგება მაშნ, როცა ცვლადი უკვე სადმე გაწვდილი გაქვს
// მაგალითად, სხვა ფაილში.
// declare let variableDefinedSomewhereElse: number;
// ასევე, მისი დახმარებით შეგიძლია ცვლადს ხელით მიანიჭო
// ტიპი
// let newVariable = variableDefinedSomewhereElse + 1;

// ასევე მუშაობს სხვა ყველაფერზე, მაგალითად ფუნქციებზე
declare function ambientFunction(i: number): void;

function mFunction(i: number) {
  ambientFunction(1);
}
//                                                  HOISTING
// ჯავასკრიპტის თემაა, ყველა var ით აღწერილ ცვლადს
// ზემოთ აყრის(იგულისხმება ფუნქციის ან global scope
// ის დასაწყისი)
x = "not declared before assignment";
var x = "declared after assignment  and all fine";
console.log(x);

// კოდი compile დება და გამოიყურება შემდეგნაირად

// var x: string | undefined = undefined;
// x = "not declared before assignment";
// x = "declared after assignment and all fine";
// console.log(x);

// ეს წესი არ ეხება let და const ცვლადებს

//                                                  SHADOWING
// თუ ფუნქციის შიგნით იგივე სახელის ცვლადი გაქვს
// მაშინ ფუნქციის შიგნით ცვლადი ფუნქციის გარეთ
// აღწერილ ცვლადს გადაფარავს
// ეს ჩანს, for ციკლში, სადაც ბევრჯერ ხმარობ i ს.

// შემდეგი კოდი ამოაგდებს ერორს, რადგან i ფუნქციაში უკვე აღწერილია.
// function f1(i: number) {
//     console.log("Parameter value", i);
//     let i: number = 10;
// }
// f1(0);

// შემდეგი კოდი არ ამოაგდებს ერორს, რადგან i ს
// შეუცვალე ტიპი
function f3() {
  let i: number = 10; // Shadow #1
  if (true) {
    let i: string = "Now a string value";
    console.log("Variable in IF after value:", i);
  }
  console.log("Variable value:", i);
}
f3();

// ესეთი რაღაცაც შეიძლებაო გეუბნებიან და რატო იდკ
function mainFunction3() {
  let innerFunction;
  let listFunctions: number[] = [];
  for (let i = 10; i < 15; i++) {
    innerFunction = function (param1: number) {
      return param1;
    };
    listFunctions.push(innerFunction(i));
  }
  for (let k = 0; k < 5; k++) {
    console.log(listFunctions[k]);
  }
}
mainFunction3();
//                                                  SWITCH
// ბრძანებაა, რომელიც ამოარჩევს ერთ-ერთ შედეგს
//რომელიც დამოკიდებულია შეტანილ მნიშვნელობაზე
function switchFunction(a: number): void {
  switch (a) {
    case 1:
      let variableInCase1 = "test";
      console.log(variableInCase1);
      break;
    case 2:
      let variableInCase2 = "test2";
      console.log(variableInCase2);
      break;
    default:
      console.log("Default");
  }
}
switchFunction(1);
switchFunction(2);
switchFunction(3);
// break ის გარეშე ყველა case ს გააკეთბს, რომელიც
// გადაცემული მნიშვნელობის ჩათვლით, მის შემდეგ მოდის
// ამ კოდის იდეალური ვარიანტი გამოიყურება
// შემდეგნაირად, გირჩევ ეგრე წერო
function switchFunction1(a: number): void {
  switch (a) {
    case 1: {
      let variableInCase1 = "test";
      console.log(variableInCase1);
      break;
    }
    case 2: {
      let variableInCase1 = "test2";
      console.log(variableInCase1);
      break;
    }
  }
}
switchFunction1(1);
switchFunction1(2);

//                                                  STRINGS
// იცი რასაც შვება
let word = "yes!";
let stringInterpolation = `this is a string ${word}`;
console.log(stringInterpolation);

let multiline1 = "Line1\n" + "Line2\n" + "Line3\n";
// იგივეა რაც შემდეგი ჩანაწერი. ` ` როა გაითვალისწინე
let multiline2 = `Line1 
Line2 
Line3`;

console.log(multiline1);
console.log(multiline2);
// საინტერესო თემაა ეს, CUZ შეგიძლია კოდიც კი გაუშვა
// ამ სტრინგში
function getPrice(): number {
  return 100;
}
let description = `The book is about ${
  2 + 5
} chapters and cost ${getPrice()}$.`;
console.log(description);
//                                                  STRING TEMPLATES

// ეს ფუნქცია იღებს სტრინგს და მას ალამაზებს.
// result ს უმატებს სათითაოდ სტრინგის წევრებს და სადაც რიცხ
function analyzeString(literals: TemplateStringsArray, ...placeholders: any[]) {
  let result = "";
  for (let i = 0; i < placeholders.length; i++) {
    result += literals[i];
    result += "*" + placeholders[i] + "*";
  }
  result += literals[literals.length - 1];
  return result;
}

const number = 84;
const number2 = 100;
const endResult = analyzeString`The number is ${number} which is not like the second number ${number2}`;

console.log(endResult);
//                                                  NUMBERS

// შეიძლება რიცხვები სხვადასხვა თვლის სისტემებში შექმნა
let dec: number = 10;
let hex: number = 0x10; // '0x' ნაწილია აქ მნიშვნელოვანი
let octo: number = 0o10;
let bin: number = 0b10;
console.log("Here are 4 numbers", dec, hex, octo, bin);

// არსებობს ერთი განსხვავება. გადაატარე
// მაუსი ცვლადს და წაიკითხე მისი ტიპი
// dec5 არის number, მაგრამ
// dec4 არის 10
// ეს ხდება იმიტომ, რომ typeScript იმახსოვრებს
// dec 4 ს არა როგორც number, არამედ როგორც
// კონკრეტულ რიცხვს(სიმარტივისთვის)
// რადგან მისი შეცვლა არ შეიძ₾ება მაინც
let dec5 = 10;

const dec4 = 10;

// Number ს შეგიძლია მიანიჭო NaN
// ტიპი იგივე დარჩება, მაგრამ value იქნება NaN

let myNumberIsNotANumber: number = NaN;
console.log(myNumberIsNotANumber);
console.log(typeof myNumberIsNotANumber);

// რიცხვის შექმნის დროს მოჟნა ასე გამოყო ათასეულები, ათეულები და ა.შ.
const numericSeparator1 = 560000067;
const numericSeparator2 = 560_000_067;
//                                                  BOOLEAN
// მარტო ესე შვება. არ მიიღებს boolean = 0
let b: boolean = true;
b = !b; // ასე შეგიძლია შემოატრიალო

//TypeScript allows other value types to act like a boolean.
// For example, undefined and null, -0, 0 and NaN will
// return false. This is because JavaScript
// includes many values to be “falsy”.
let x1 = undefined;
let x2 = null;
let x3 = -0;
let x4 = 0;
let x5 = NaN;
let x6 = {};
let x7: any[] = [];

function printTrueOrFalse(b: any | any[]): void {
  if (b) {
    console.log(`The value ${b} is true`);
  } else {
    console.log(`The value ${b} is false`);
  }
}
printTrueOrFalse(x1);
printTrueOrFalse(x2);
printTrueOrFalse(x3);
printTrueOrFalse(x4);
printTrueOrFalse(x5);
printTrueOrFalse(x6);
printTrueOrFalse(x7);
// ეს კოდი არ აგდებს ერორს, რადგან
// მითითებული არ გაქვს ტიპი. boolean რო დაგეწერა
// არ მიიღებდა ამ ცვლადების მნიშვნელობებს

// Boolean object is a wrapper
// ამოპრინტავს {Boolean: "მნიშნნელობა"}
console.log(new Boolean(false)); // False
console.log(new Boolean("false")); // True
console.log(new Boolean("not false")); // True

//                                                  ANY
// TypeScript ში შეიძლება Any ტიპის გამოყენება
// მაგრამ, მას უნდა აარიდო თავი რამდენადაც შეგიძლია,
//  რადგან ის არ არის დაცული და არ აწესებს საზღვრებს
// ცვლადებში ტიპების ცვლილებაზე
let myAnyString: any = 123;
console.log(myAnyString.length);
// ასევე, ის არის უკეთესი, რათა გამარტივდეს კოდის კითვა.
// შეეჩვიე და აღარ გაატრაკო მაგაზე

//                                                  ARRAYS
let a: number[]; // ქმნის array ს, რომელშიც მარტო
// number ტიპის ცვლადები შეიძლება იყოს
let a1: Array<number>; // იგივეა რაც ზემოთ
// შემდეგ კოდს ავტომატურად მიენიჭება number ტიპი

let arrayOfNumber = [1, 2, 3];

// შეიძლება ობიექტი-array ს შექმნაც
let myArray = new Array<number>(); // ამაზეა ბაზარი
printArray(myArray);

// Is the same as:
let myArray2: Array<number> = [];
printArray(myArray2);

// Is the same as:
let myArray3: number[] = [];
printArray(myArray3);

function printArray(a: number[]): void {
  console.log(`Before: ${a}`);
  a.push(1);
  console.log(`After: ${a}`);
}
// immutable arrays

// შემდეგი კოდი აგრებს ერორს, რადგან
// ReadonlyArray<number> ტიპის ცვლადს
// ვერ შეცვლი.
let listს: ReadonlyArray<number> = [1, 2];
// list.push(3);
console.log(listს);
// ასე შეგიძლია შექმნა მსგავსი ცვლადი
let listა: readonly number[] = [1, 2];
// listა.push(3);
console.log(listა);

// ასეთი array ს პლიუსია ის, რომ მასში ვერ შეცვლი
// ცვლადების მნიშვნელობას, რის საშუალებასაც არ იძლევა
// const array. სამაგიეროდ, შეგიძლია ახლიდან შექმნა ეს
// ცვლადი და მასში ახალი მნიშვნელობები ჩააგდო.

const listბ: readonly number[] = [1, 2, 3];
// მიირებ უძრავ array ს

//                                                  NULL AND UNDEFINED
// ეს კოდი, დამოკიდებულია strictNullChecks კომპილატორზე.
// თუ ის არის true, მაშინ ერორი იქნება.
// ავტომატურად undefined და null არ მიენიჭება
// let variableNotInitialized: string;
// console.log(variableNotInitialized);

// შემდეგი კოდი არ იმუშავებს, რადგან Null და
// Undefined არ შეიძლება იყოს number ტიპის ცვლადში

let numberOnlyNotNullOrUndefined: number = 123;
// numberOnlyNotNullOrUndefined = null;
// numberOnlyNotNullOrUndefined = undefined;
console.log(numberOnlyNotNullOrUndefined);

// თუ გინდა ეგეთი კოდის დაწერა, უნდა ქნა ესე:
let numberOrnullOrUndefined: number | null | undefined = 123;
numberOrnullOrUndefined = null;
numberOrnullOrUndefined = undefined;
console.log(numberOrnullOrUndefined);

// ასევე შეგიძლია დაწერო ფუქნციები
function functionWithUndefinedParameter(a: number | undefined, b: number) {}
functionWithUndefinedParameter(1, 2);
functionWithUndefinedParameter(undefined, 2);
// functionWithUndefinedParameter(, 2); // Does not compile

// დაკომენტარებული ნაწილი გამოიწვევდა შეცდომას,
// რადგან undefined უნდა ჩაიწეროს ხელით. თუ ეგ არ გინდა,
// ესე ჩაწერე:
function functionWithQuestionMarkParameter1(a: number, b?: number) {}
functionWithQuestionMarkParameter1(1, 2);
functionWithQuestionMarkParameter1(1, undefined);
functionWithQuestionMarkParameter1(1);

// "?" ის გამო შეიძლება ნებისმიერი ცვლადის გაშვება


//                                                  NEVER

// Never ირ სცარიელი ტიპი, ის არ არის არც ობიექტი
// არც რიცხვი და არ სხვა რამე, და ის შეგიძლია მიანიჭო ცვლადს
type User = 'stand' | 'admin';
function login(user:User){
  switch(user){
    case 'stand':
      return true
    case 'admin':
      return true;
    default: 
    const _unreachable: never = user;
    throw 'wrong user type'
  }
}

//                                                  VOID

// ფუნქცია, რომელიც არ რაბრუნებს მნიშვნელობას
// უნდა იყოს აღნიშნული როგორც void
function functionWithVoidReturnType(): void {
  console.log("This function does not return anything");
}

// სასურველია, რომ void თან ერთად დააბრუნო undefined
// რადგან void იან ფუნქციაში return მნიშვნელობის
// დაბრუნება ერორს აგდებს. ასევე, მეტად თვალსაჩინოა.
function functionWithVoidReturnType1(): void {
  console.log("This function does not return anything");
  return undefined;
}
// შეგიძლია პროსტა return დაწერო
function functionWithVoidReturnType2(): void {
  console.log("This function does not return anything");
  return;
}
// გადაატარე მაუსი ფუნქციებზე და წაიკითხე
// მათი ტიპები, რომლებიც უნდა იყოს void
let voidvar: void = functionWithVoidReturnType2();
let voidvar1: void = functionWithVoidReturnType1();
let voidvar2: void = functionWithVoidReturnType();
//
//                                                  UNKNOWN

// Unknown არის ახალი ტიპი, რომელიც
// TypeScript 3.0 ვერსიიდან არსებობს.
// ის არის უფრო უსაფრთხო, ვიდრე any, რადგან
// მასში შენ ვერ შეასრულებ ოპერაციებს, სანამ
// არ დააზუსტებ, რომელი ტიპის ცვლადია

// ეს არის any ტიპის მაგალითი
let variable1: any;
variable1 = "It is a string";
console.log(variable1.substr(0, 2)); // Output "it"
variable1 = 1;
// console.log(variable1.substr(0,2)) // Crash

// ეს არის unknown ტიპის მაგალითი
// მასში ვერ შეასრულებ ოპერაციებს, სანამ
// არ დააზუსტებ, რომელი ტიპის ცვლადია
let variable2: unknown;
variable2 = "It is a string";
// console.log(variable2.substr(0, 2)); // Does not compile here
variable2 = 1;
// console.log(variable2.substr(0, 2)); // Does not compile here

//იმისათვის რომ იხმარო ეს ფუნქციები, საჭიროა
//დააზუსტო ტიპი.
let variable3: unknown;
variable3 = "It is a string";
let variable3String = variable3 as string; // ამას ვგულისხმობ
console.log(variable3String.substr(0, 2));

// ისევე, როგორც Null და Undefined,
// unknow არის "falsey", ანუ მისი გამოყენება
// შეიძლება არგუმენტად if ოპერატორში
let und: string | undefined = undefined;
if (und) {
  console.log(und);
} else {
  console.log("The value is undefined");
}

// შემდეგი ორი კოდი აკეთბს იგივე რაღაცას, მაგრამ
// ერთი იყენებს if, მეორე კი ??
function getValue(): string | undefined {
  if (Math.random() > 0.5) {
    return undefined;
  }
  return "Good";
}

let value = getValue();
if (!value) {
  value = "Default";
}
console.log(value);

// მეორე
function getValue1(): string | undefined {
  if (Math.random() > 0.5) {
    return undefined;
  }
  return "Good";
}

let value1 = getValue1() ?? "Default";
console.log(value1);
//                                                  ?? OPERATOR

// ?? აკეთბს შემდეგს: თუ მის მარჯვნივ მითითებული
// ცვლადი NULL ან undefined არის, მას მიენიჭება 
// default value, რომელიც მის მარჯვნივაა მითითებული
let x17 = null
let defVal = 'default value'

let result = x17 ?? defVal
//                                                  LITERALS

// ლიტერალი არის კონკრეტული მნიშვნელობა, რომელიც
// ენიჭება ცვლადს. ეს შეიძლება იყოს სტრინგი, რიცხვი,
// და ასე შემდეგ. (გაიხსენე const)
// ის შეიძლება შედგებოდეს სხვადასხვა ტიპების ერთობლობისგან,

// string literal. არჩევს მხოლოდ კონკრეტულ სტრინგს
// რომელიც წინასწარაა მითითბული. სხვა შემთვევაშ ერორს აგდებს
type stringLiteral = "north" | "south" | "east" | "west";
let mydirection: stringLiteral = "north"; // OK
// mydirection:stringLiteral = "yeast" // ერორს იზამს

// number literal. არჩევს მხოლოდ კონკრეტულ რიცხვს
type numberliteral = 1 | 2 | 3 | 4 | 5;
let mynumber: numberliteral = 1;
// let mynumber2:numberliteral = 9; //error

// შერეული ლიტერალი

// შემდეგი კოდი wont compile,

type OptionOpen = true | false | "true" | "false"; // Actuall : boolean | "true" | "false"

function openWindow(option: OptionOpen): void {
  if (option === "true" || option === true) {
  } else if (option === "false" /* || option === false*/) {
  } else {
    //  const c: never = option; // ეს ატრაკებს
  }
}
//                                                  SYMBOL AND UNIQUE SYMBOL

// სიმბოლო არის ცვლადის აღნიშვნის ერთ-ერთი ხერხი
// ის განსხვავდება სტრინგებისგან იმით, რომ
// სიმბოლოები უნიკალურია და არ შეიძლება იყოს იგივე
let v1 = "value1";
let v2 = "value1";
if (v1 === v2) {
  console.log("Equal when string"); // This will print
}
let s1 = Symbol("value1");
let s2 = Symbol("value1");
if (s1 === s2) {
  console.log("Equal when symbol"); // This will not print, they are not equal
}
// ასევე შეიძ₾ება სიმბოლოების გამოყენება ობიექტებში
const prop1 = Symbol();
const obj1 = { [prop1]: "p1" };

// console.log(obj1.prop1); // Does not compile
console.log(obj1[prop1]); // "p1"
// მასზე არ იმუშავებს Object.defineProperty ან
// Object.getOwnPropertyNames. სჭირდება
// getOwnPropertySymbols მარტო სიმბოლოების
// გასატანად ან Reflect.ownKeys() ყველაფრის
// გასატანად

const obj2 = {
  [Symbol("prop1")]: "p1",
  prop1: "p2",
};
console.log(Reflect.ownKeys(obj2)); //

// არსებობენ უნიკალური სიმბოლოებიც
// ისინი განსხვავდებიან იმით, რომ მათი მნიშვნელობა
// არ შეიძლება იყოს იგივე, და მათი ტიპი არის
// typeof(უნიკალური სიმბოლო)
let aSymbol: Symbol = Symbol("Value1");
aSymbol = Symbol("Value2"); // Type is: Symbol

// უნიკალური სიმბოლოების შედარებაც არ შეიძლება
let s5: Symbol = Symbol("s1"); // Type is: Symbol
const s6: Symbol = Symbol("s2"); // Type is: Symbol
const s3: unique symbol = Symbol("s3"); // Type is: typeof(s3)
const s4: unique symbol = Symbol("s4"); // Type is: typeof(s4)

if (s5 === s6) {
  console.log("S5 and S6 are the same symbol"); // Won't print
}

if (s3 === s6) {
  console.log("S3 and S6 are the same symbol"); // Won't print
}

// if (s3 === s4) {
//     // Does not compile
// }

const aSecondSymbol: Symbol = Symbol("Value3"); // Type is: Symbol
const aThirdSymbol: unique symbol = Symbol("Value3"); // Type is: typeof(aThirdSymbol)
//                                                  CASTING
// TypeScript ში შეგიძლია ცვლადის ტიპის შეცვლა
// (cast) as ოპერატორის მეშვეობით.
const unknownType: unknown = "123";
// const castednumber1: number = <number>unknownType;
// <> ეპერატორი აღარ გამოიყენებ, მაგრამ მუშაობს
const castednumber2: number = unknownType as number;
// მიანიჭა unknownType ის მნიშვნელობა, მაგრამ გადაიყვანა
// ის number ტიპში. 

// იმისათვის, რომ ერთი ცნობილი ტიპიდან მეორეში
// გადაიყვანო, როცა მათ შორის overlap არ არის,
//  საჭიროა, რომ ჯერ unknown ტიპში ჩააგდო

const str: string = "123";
const bool: boolean = true;
const castFromString: number = str as unknown as number;
const castFromBoolean: boolean = bool as unknown as boolean;
console.log(castFromString);
console.log(castFromBoolean);

// Type assertion
// როცა ცდილობ TypeScript ში ობიექტის ტიპის
// დაზუსტებას
interface YourType {
  m1: string;
}

let v3 = { m1: "ValueOfM1" } as YourType;
console.log(v3);

// ამის დელიკატურობა გამოირჩევა იმით, რომ
// თუ ცარიელ ობიექტს ასახლებ, მაშინ
// compile მაინც იქნება
interface IMyType {
  m1: string;
  m2: number;
}

let myVariable = {} as IMyType; //

// ვთქვათ გინდა, რომ რაიმე ელემენტი აიღო საიდანმე.
// ეს ელემენტი არ არის ცნობილი TS ისთვის.
// ამოაგდებს შეცდომას, cuz შეიძლება ეს ობიექტი
// იყოს ან NULL ან სხვა რამე, რაც არ გაგვითვალისწინებია,
// ამისთვის შეგიძლია დაწერო ! და გამოიყენო as ოპერატორი
const img = document.querySelector('img')! // ! Null ს აცილებს
const myImg = document.getElementById('#img ') as HTMLImageElement

img.src
myImg.src

// casting restrictions
//                                                  COMENTS
//  "/*!" tells TypeScript to keep the comment while
//  transforming TypeScript into JavaScript.
//  The comment remains present even if the compiler
//  option removeComments is true.

//                                                  ENUMS
// Enum არის ცვლადების ერთობლიობის
// განსაზღვრის საშუალება
enum MyStringEnum {
  ChoiceA = "A",
  ChoiceB = "B",
}
//შერეული enum,
enum MyStringAndNumberEnum {
  ChoiceA, // 0
  ChoiceB = "B",
  ChoiceC = 100,
}

// enum ის გამოყენება
enum MyEnum {
  ChoiceA1,
  ChoiceB1,
  ChoiceC1,
}
let x8: MyEnum = MyEnum.ChoiceA1;
console.log(x8);

enum MyEnum2 {
  ChoiceA2,
  ChoiceB2,
  ChoiceC2,
}
enum MyEnum3 {
  ChoiceA3, // 0
  ChoiceB3 = 100, // 100
  ChoiceC3, // 101
  ChoiceD3 = MyEnum.ChoiceC1, // 2
}
console.log(MyEnum3.ChoiceA3);
console.log(MyEnum3.ChoiceB3);
console.log(MyEnum3.ChoiceC3);
console.log(MyEnum3.ChoiceD3);

// შეიძლება მის შიგნიტ მყოფ ცვლადს მიანიჭო
// მნიშვნელობა ორნაირად:
// constant value: მოდის სხვა enum ისგან
// ან მათემატიკური ქმედებებიდან

// და purely computed value: მოდის ფუნქციიდან

// შემდეგ მაგალითში იქნება ბევრი რამ რაც არ გესმის
enum Power {
  None = 0, // Value 0 in decimal (00 in binary)
  Invincibility = 1 << 0, // Value 1 in decimal (01 in binary)
  Telepathy = 1 << 1, // Value 2 in decimal (10 in binary)
  Invisibility = 1 << 2, // Value 4 in decimal (100 in binary)
  Everything = Invincibility | Telepathy | Invisibility,
}
let power: Power = Power.Invincibility | Power.Telepathy;
console.log("Power values:" + power);
console.log(power & Power.Telepathy);
if (Power.Telepathy === (power & Power.Telepathy)) {
  console.log("Power of telepathy available");
}

//                                                  ACCESSING ENUM VALUES
enum Orientation {
  East,
  West,
  North,
  South,
}
let directionInNumber = Orientation.East; // Access with the Enum
let directionInString = Orientation[0]; // Access the Enum string from number
let directionalNumberOfSouth = Orientation.South;
console.log(directionInNumber);
console.log(directionInString);
console.log(directionalNumberOfSouth);

// სტრინგებიან enum ზე ესე არ გამოვა

enum OrientationString {
  East = "E",
  West = "W",
  North = "N",
  South = "S",
}
let directionInNumber1 = OrientationString.East; // Access with the Enum
// let directionInString = OrientationString[0];  // Access the Enum string from number
// let directionInString2 = OrientationString["E"];  // Access the Enum string from number
console.log(directionInNumber1);
// console.log(directionInString);
// console.log(directionInString2);

// უმჯობესია enum შექმნა const ით
const enum OrientationConst {
  East = "E",
  West = "W",
  North = "N",
  South = "S",
}
// ეს მოუმატებს კოდს სიჩქარეს. reassign აღარ
// შეგეძლება, მაგრამ არცაა საჭირო.
// მაინც შეგიძლია დაამატო მნიშვნელიბები.
let Orientation2;
(function (Orientation) {
  Orientation2[(Orientation2["East"] = 0)] = "East";
  Orientation2[(Orientation2["West"] = 1)] = "West";
  Orientation2[(Orientation2["North"] = 2)] = "North";
  Orientation2[(Orientation2["South"] = 3)] = "South";
})(Orientation2 || (Orientation2 = {}));
let directionInNumber3 = Orientation2.East;
// merging enums
// შეგიძლია enum შექმნა და მერე მასში ჩამატება
// value ების.
enum EnumA {
  ChoiceA,
}
enum EnumA {
  ChoiceB = 1,
}

let variable7: EnumA = EnumA.ChoiceA;
console.log(variable7);
variable7 = EnumA.ChoiceB;
console.log(variable7);
// მნიშვნელოვანია: თუ ორ ცვლადს მიანიჭებ
// ერთსა და იმავე მნიშვნელობას, მაშინ
// მისი დაბრუნებისას ამოიღებს ბოლოს რომელიც მიანიჭე იმას
// + ერთნაირი სახელები არ დაარქვა თუ ძმა ხარ

// namespace ის დახმარებით შეგიძლია
// შექმნა enum ის სტატიკური ფუნქცია
enum Orientation7 {
  East,
  West,
  North,
  South,
}
namespace Orientation7 {
  export function yourFunction() {
    console.log("I am in a Enum");
  }
}
Orientation7.yourFunction();
//                                                  GENERIC

// any ს გამოყენებისას ბრუნდება type = any
// რაც არ არის სასურველი. Generic ის გამოყენებისას
// ბრუნდება ის ტიპი, რომელიც გინდა
function getfirst1<T>(array: T[]) {
  // აქ თუ T[] არ დაწერე,
  // არ უზამს არაფერს array ს წევრებს და მარტო
  // array ზე იმუშავებს, რაც ამ ფუქნციაშ საჭირო არაა
  return array[0];
}
const numbers1 = [1, 2, 3];

function getfirst2(array: any) {
  return array[0];
}
const firstnum = getfirst1(numbers1);
const firstnum2 = getfirst2(numbers1);
// შეგიძლია generic ის გამოძახებისას მიუთითო რა
// ტიპი უნდა დააბრუნოს
const firstnum3 = getfirst1<number>(numbers1);

// ასევე გამოიყენება map ფუნქციასთან ერთად
const map = new Map<number, string>([[14, "asdf"]]);
// შეიძლება ასევე აქ მაპის გადაცემაც, მაგალითად
const map1 = new Map<number, Map<number, string>>();

type ApiRespone<Data>{
  data: Data
  iserror: boolean
}

const response: ApiRespone<{name: string; Age: number}> = {
  data: {
    name: "taso",
    Age: 14,
  },
  iserror: false,
}

// array ებზე ესე მუშაობს
const a2: Array<string> = new Array("abc", "def"); 
const s: string = a2[0]; // No cast required 
console.log(s.substr(0,1)); // Access to string members 

//                                                  GENERIC CLASS

// უმჯობესია, რომ როცა წერ კოდს,
// განსაზღვროო წინასწარ სად რა კლასის გამოყენება
// ან ჩასმა შეიძლება. ამისთვისაა კარგი generic class.

// შემდეგი კოდი არის ამის მაგალითი.
// უმჯობესია ესე წერა cuz სხვა ვარიანტში რთულდება
interface greeter{
  greetings: string
}

class Human implements greeter{
  public humanFunction() {
    console.log("humaning")
  }
  public greetings: string = "hi"
}
class Lion implements greeter{
  public lionfunction(){
    console.log("lion sleeps")
  }
  public greetings: string = "hi"
}
class Tulip {
    public greeting: string = "...";
    public lookingGood() {
        console.log("Snazzy Flower am I");
    }
}
class LivingSpecies<T>{
  public species: T
  constructor (species:T){
    this.species = species
  }
  public getSpecies() {
    return this.species
  }
}
const species1 = new LivingSpecies(new Human());
species1.getSpecies().humanFunction();
const species2 = new LivingSpecies(new Lion());
species2.getSpecies().lionfunction();
const species3 = new LivingSpecies(new Tulip());
species3.getSpecies().lookingGood();
//                                                  GENERIC CONSTRAINT

// მისი დახმარებით საზღვრავ რა იქნება და რა 
// არ შეიძლება რომ იყოს მოცემულ ცვლადში 
interface MyType { // Type that has a single field
    id: number; 
}
interface AnotherType extends MyType {} 
// Another type that has all the field from MyType
function genericFunction<T extends MyType>(p1: T) {} 
// A function that take a generic type that 
// must at least have the fields of MyType

const arg: AnotherType = { id: 1 }; 
// Create an object that is not "MyType"
genericFunction(arg); // This is legit  
// because AnotherType extend MyType, 
// thus has all the required fields

genericFunction({ id: 123 }); // This is legit as well 
// since id is the only required field from MyType 

// genericFunction("doesn't compile") // Doest not compile, not legit.

// აქ არის მაგალითი ისეთი შემთვევისა, როცა
interface myNumber{
  id : number
  id2:number
}
interface anotherNumber{
  id:number
  
}
function genericFunc<T extends myNumber>(p1:T):void{
  console.log(p1.id)
}
genericFunc({
  id : 123, 
  id2 : 1234
  // id3: 1234 // ეს უკვე ერორს ამოაგდებს
})
//
//                                                  GENERIC WITH CONSTRUCTOR FUNCTION
// მთელი მუღამი ისაა, რო კონსტრუქტორი შეზღუდო
// და უთხრა როგორი და რამდენი კლასი უნდა დაემატოს მასში
interface InterfaceWithAConstructor<T>{
  new (param:string)
}
function createinstance<T>(c : InterfaceWithAConstructor<T>, param1:string){
  return new c(param1);
}
class C11 {
    constructor(name: string) { // We can create from createInstance function because 1 parameter and string
        console.log("Initializing class C1 with string: " + name);
      }
    }
const inst1A = createinstance(C11, "Instance 1");
//                                                  GENERIC WITH FUNCTIONS

// ამის მუღამია function ებში შედეგისა
// და შესატანი ცვლადების შეზღუდვა
// პირველი იღებს                array ს და აბრუნებს number ს
function countElementInArray<T>(elements: T[]): number {
    return elements.length;
}
// მეორე იღებს                     array ს და აბრუნებს ან T ს ან undefined ს
function returnFirstElementInArray<T>(elements: T[]): T | undefined {
    if (elements.length > 0) {
        return elements[0];
    }
    return undefined;
}
const arr = [1, 2, 3];
console.log(countElementInArray(arr));
console.log(returnFirstElementInArray(arr));
// unknow ით ეს არ გამოვიდოდა, რადგან ის
// არ დააბრუნებდა რიცხვს. 
// ყოველთვის ჯობია ამის გამოყენება


//                                                  GENERIC COMPARISON

// generic ზე არ მუშაობს typeof, new რამეgeneric, 
// instanceof რამეgeneric.
// მაგრამ შეიძლება მაინც გვინდოდეს 
// ამ ფუნქციონალის გამოყენება.
// ამ შემთხვევაში შეიძლება ხელით მიანიჭო რაიმე
// საიდენტიფიკაციო ინფორმაცია, როგრც კლასის ერთ-ერთი
// ცვლადი.
class IdentificatedGeneric<S> extends Array<S> {
    public id: string; // Enhancement of Array class
    public constructor(id: string) {
        super();
        this.id = id;
    }
}
function concatenate<S, T1 extends IdentificatedGeneric<S>>(list1: T1, list2: T1): T1 {
    if (list1.id === list2.id) { // Comparison to ensure from the same id, possible because both extends IdentificatedGeneric
        const oneList = [...list1, ...list2] as T1;
        return oneList;
    }
    throw Error("Must be the same id");
}

const l1 = new IdentificatedGeneric<string>("l1");
const l2 = new IdentificatedGeneric<string>("l2");
const l3 = new IdentificatedGeneric<number>("l1");
const l4 = new IdentificatedGeneric<string>("l1");

l1.push("1", "2");
l2.push("100", "200");
l3.push(5, 6);
l4.push("500", "600");

// const c1 = concatenate(l1, l2); // Error 1
// console.log(c1);
// const c2 = concatenate(l1, l3); // Error 2
// console.log(c2);
const c3 = concatenate(l1, l4);
console.log(c3); 
//                                                  GENERIC INFERENCE
// ფუქნციაში გადაცემული ცვლადის მიხედვით
// დგინდება T ტიპი. ანუ შეგიძლია რაც გინდა ის 
// გადასცე და ავტომატურად ფორმატად გადააქცევს მას.
function genericInferred<T>(param: T) {}
genericInferred("str"); // T is of type string by inference
genericInferred<string>("str"); // Same as above, no inference 
genericInferred(1);
genericInferred(true);
genericInferred({ custom: "sure" });

// ასევე შეიძლება მისი განზრახ მითითება
function genericInferred1<T extends string>(param: T) {
    return param.length;
}
console.log(genericInferred1("Four"));
// genericInferred(123); // Does not transpile
type UUID = string; // აღწერ custom ტიპს
let id: UUID = "123-456";
console.log(genericInferred1(id));





//                                                  GENERIC DEFAULTS





// ამის მუღამია, რო არ დააზუსტო generic ის
// ზუსტი მნიშვნელობა, მაგრამ მაინც მისცე
// default ი.
interface MyGenericWithDefault<T = string> {
    myTypeWhichIsStringIfNotSpecified: T;
}
const myGeneric11: MyGenericWithDefault<number> = { myTypeWhichIsStringIfNotSpecified: 1 };
const myGeneric21: MyGenericWithDefault = { myTypeWhichIsStringIfNotSpecified: "string" };
const myGeneric31: MyGenericWithDefault<string> = { myTypeWhichIsStringIfNotSpecified: "string" };
// გაითვალისწინე, რომ ერთგან რო აღწერ generic ის 
// default ს, ის შემდეგ ყველგან უნდა არწერო
// სხვა შემთვევაში ერორია. ?????????????
interface InterfaceGenericDefinedTwoPlace<T = string> { // T = string რო მოაცილო არ იმუშავებს
    myProp: T;
}
interface InterfaceGenericDefinedTwoPlace<T> {}
interface InterfaceGenericDefinedTwoPlace {}

let x11: InterfaceGenericDefinedTwoPlace = { myProp: "stringHere" };


//





//                                                  GENERIC AND KEYOF





// extends შეგიძლია გამოიყენო, თუ გინდა
// რომ ერთი generic გახადო მეორეს ქვეტიპი
interface TypeA {
  prop1: string;
  prop2: number;
}
interface TypeB {
  prop1: string;
  prop3: boolean;
}
interface TypeC extends TypeA {
  prop4: number;
}

function printProps<T, K extends T>(p1: T, p2: K): void { // K must have all field from T at minimum
  console.log(p1);
  console.log(p2);
}

let a11: TypeA = { prop1: "p1", prop2: 2 };
let b11: TypeB = { prop1: "p1", prop3: true };
let c11: TypeC = { prop1: "p1", prop2: 2, prop4: 4 };


// printProps(a, b); // Does not transpile because B does not extends A
printProps(a11, c11); 

// შეგიძლია, ასევე, მისცე უფელბა ნებისმიერ
// ობიექტს, რომ შევიდეს სადმე, მაგრამ ამ ობიექტის 
// მხოლოდ კონკრეტული property ები შეუშვა

// აზრზე არ ვარ ამ კოდს რა უნდა და რატო აგდებს შეცდომას. დაახლოებით 1000 ხაზზე გიწერია ეგ და შეასწორე თუ გაარკვევ
interface TypeA {
  prop1: string;
  prop2: number;
}

function printProps1<T, K extends keyof T>(p1: T, p2: K[]): void { // Extends all properties' name of T
  console.log("Printing:");
  p2.forEach(propName => {
    console.log(`Name: ${propName} and value: ${p1[propName]}`);
  });
}

let a12: TypeA = { prop1: "p1", prop2: 2 };

printProps1(a, ["prop1"]);
printProps1(a, ["prop1", "prop2"]);
// printProps(a, ["not", "working"]);





//                                                  FUNCTIONS





//აძინ ხუი დვა რაზა

// ფუნქციას რაიმე variable ს რო მიანიჭებ
// მის საწყის სახელს ვეღარ გამოიყენებ 
// ამ ფუნქციის გასააქტიურებლად
// გამალითისთვის ნახე დაკომენტარებული ნაწილი
function fctNamedFunction1() { // Named Function
  console.log("Named Function 1");
}

let f1 = function fctNamedFunction2() { // Named Function
  console.log("Named Function 2");
};

let f2 = function () { // Anonymous Function
  console.log("Anonymous Function 1");
};

(function () { // Anonymous Function + Automatically invoked
  console.log("Anonymous Function 2");
})();

fctNamedFunction1();
// fctNamedFunction2(); // Cannot call by name
f1();
f2();






//                                                  ANONYMUS AND NAMED FUNCTIONS






//იცი უკვე

// Named Function
function functionName1(){}
functionName1(); // Invocation

// Anonymous Function 1
const pointerToFunction1 = function(){}
pointerToFunction1(); // Invocation

// Anonymous Function 2 + Invocation A.K.A. IIFE
(function(){})();

// არგუმენტების ტიპის დაზუსტება
//  ფუნქციებშიც მუშაობს
function functionWithParameters(arg1: string, arg2: number){}
// ასევე შეიძლება OUTPUT ის დაზუსტებაც
function functionWithTwoReturnType(): boolean | number {
    return 1;
}

// იდკ რითი განსხვავდება c სხვებისგან
// მაგრამ ის never ის მაგივრად void ს აბრუნებსო
let a3 = () => {
    throw new Error("A");
}

let b3 = function() { 
    throw new Error("B");
}

function c() { 
    throw new Error("C");
}

// ორივე შემთვევაში transpilation error რატოა
// class BaseClass {
//     defineMeLater(): never { // Infer void, uncomment never to see the consequence
//         throw new Error("Define me in a subclass");
//     }
// }

// class SubClass extends BaseClass {
//     defineMeLater() {
//         console.log("SubClass code");
//     }
// }

// let c = new SubClass();
// c.defineMeLater();

// arrow function ის მაგალითი
const fatarrow = (p: number): number => { return p * 100; } 





//                                                  INFERENCE IN FUNCTIONS






// პროსტა ფუქნციების წერის სხვადასხვა ტიპები:
const inc = 1;
function myNamedFunction(p: number): number {
    return p + inc;
}
const myAnonymousFunc = function(p: number): number {
    return p + inc;
};
const myAnonymousFunc2 = (p: number): number => {
    return p + inc;
};
const myAnonymousFunc3 = (p: number): number => p + inc;
const myAnonymousFunc4 = (p: number) => p + inc;

// interface ში როცა დებ ფუნქციას, აუცილებელი არაა
// რომ მათი ცვლადების სახელები ერთმანეთს ემთხვეოდეს.
// მაგრამ აუცილებელია, რომ ტიპი იყოს ერთნაირი 
interface myInterface {
  myfunc : (p1:number) => void {}
}

let freshinterface :myInterface = {
  myfunc : (anothernameforP1:number) {
    console.log(`deez nuts slide down yo throat ${anothernameforP1} times`)
  }
}

freshinterface.myfunc(100)



// კაია თუ ძალით გაუწერ რა რომელი ტიპია

const infHello: "hello" = "hello"; // Explicit
const infWord = "world"; // Implicit using inference to "world"

let infHello2: "hello" = "hello"; // Explicit
let infWord2 = "world"; // Implicit using inference to string

let worldString: string = "world";

let windeningToString: string = infHello; // Compile





//                                                  FUNC GENERIC, OPTIONAL PARAM, DEFAULT PARAM





// აზრზე არ ვარ აქ რა ხდება, მაგრამ 
// generic ის მაგალითი უნდა იყოს წესით
// ფუნქციაში
function arrayMap<T, U>(f: (x: T) => U): (a: T[]) => U[] {     
  return a => a.map(f); 
} 
const lengths: (a: string[]) => number[] = arrayMap(s => s.length); ``

// ასევე მოჟნა სხვადასხვანაირად აღწერო 
// optional parameter

function undefinedOptional1(a: number | undefined, b: number) {}
undefinedOptional1(undefined, 1);

// თუ ეს არ გევასება, შეგიძლია გამოიყენო "?"
// მაგრამ, მის შემთხვევაში, undefined და null 
// მხოლოდ იმ შემთვევაში იმუშავებს, თუ მას 
// "|" ოპერატორის დახმარებით მიუთითებ

// optional პარამეტრის მერე აუცილებლად უნდა მოდიოდეს optional
// cuz ცვლადების ჩაწერას რო დაიწყებ, პირველ რიგში optional ს
// მიენიჭება მნშვნელოობა მაინც
function undefinedOptional2F(a?: number, b?: number) {
      
  }
undefinedOptional2F(); 
function undefinedOptional1F(a: number, b?: number) {
      
  }
undefinedOptional1F(1)
undefinedOptional1F(1,2)
  function undefinedOptional3F(a: number, b: number | undefined) {}
// undefinedOptional3F(a); // Doesn't compile, must pass for "b" undefined if not needed


// default value როგორც js ისე
function funcWithDefault(p1: string = "v1", p2?: number, p3 = true) {
    console.log("P1", p1); // v1 since undefined
    console.log("P2", p2); // undefined
    console.log("P3", p3); //boolean by inference
}

funcWithDefault(undefined);

// ამოპრინტე ისე, საინტერესო რაღაცაა.

//





//                                                  FUNCTIONS IN CLASSES





// function წინასართი არ სჭირდება
class MyClass{
    private myFunction1(){}
    public myFunction2(){}
    protected myFunction3(){}
}

// private ფუნქცია ჰგავს # ს, მაგრამ ერთ განსხვავებით:
// js ში გადატანისას, # ით გაწერილი ფუნქციის კლასგარეთ
// გამოყენება იწვევს exception ს.  
// private function does not translate to 
// anything private when transpiled into JavaScript. 

// protected შეგიძლია ქვეკლასებშიც გამოიყენო

// private არ ატრაკებს და ყველგან შეიძლება მისი ხმარება





//                                                  FUNCTIONS AND THIS





// როცა გინდა, რომ ინტერფეისში ფუქნციამ 
// დააბრუნოს მეორე ფუნქცია, რომელსაც 
// შემდგომ გადაეცემა ცვლადი, საბოლოო 
// პასუხს ენიჭება any. ამას რომ თვი ავარიდოთ,
// შეიძლება გამოიყენო generic.

interface MyThisInterface {
    m1: string[];
    m2: number[];
    functionA(): () => string;
}
interface stringterface {
    m1:string[]
}

let vMyThisInterface: MyThisInterface = {
    m1: ["hearts", "spades", "clubs", "diamonds"],
    m2: [1, 2, 3],
    functionA: function() {
        return function(this: stringterface) { // ამ ხაზშია მაგალით ნაჩვენები
            return this.m1[0]; 
        };
    },
};

vMyThisInterface.functionA();

// ასევე, callback function ებში ტრაკდება მაგ თემაზე
// შეგიძლია ასე გამოასწორო ეგ პრობლემა:
interface Family {
    names: string[];
    emotion: string;
    print: () => void;
}
const family: Family = {
    names: ["Patrick", "Alicia", "Melodie"],
    emotion: "love",
    print: function() {
        console.log("print", this); // this = the family object
        // პრობლემა იქმნება, როცა ცდილობ callback ფუნქციაში
        // გამოიყენო this, რადგან ის არ იქნება family ს ინტერფეისის ქვეშ
        // შემდგი დაკომენტარებული ხაზები ამოაგდებს ერორს
        //  return this.names.forEach(function(name: string) {
        //     console.log("forEach", this); // this = implicit any = won't transpile
        // });
        return this.names.forEach(function(this: Family, name: string) { 
          // ამ ხაზში ჩანს, რომ this:family და 
          // name:string ის მითიება საკმარისია 
          // პრობლემების აღმოსაფხვრელად
            console.log("forEach", this);
        }, family);
    },
};
family.print();




//                                                  OVERLOADING FUNCTIONS





// ფუნქციების გადატვირთვა, ანუ ერთი და იგივე
// ფუნქციის სხვადასხვა ტიპის არგუმენტებით
// გამოძახება.
// python ში გაიარე. string და number
// რო შეგიძლია გადასცე ერთდროულად და
// მაინც რომ შესრულდება.
function functionWithOverload(param1: number): boolean;
function functionWithOverload(param1: number, param2: string): string;
function functionWithOverload(param1: number, param2: 
  string = "default", param3?: string): boolean | string { 
    // string = default ზე ამახვილებ ყურადღებას
    if (param3 === undefined) {
        return "string";
    }
    return true;
}
console.log(functionWithOverload(1));





//                                                  STRING LITERALS AND OVERLOADING





// შეგიძლია კონკრეტული სტრინგებისთვის 
// გაწერო სხვადასხვა ფუნქცია
function literalFunc(param:"hello"):string 
function literalFunc(param:"world"):string 
function literalFunc(param: "hello" | "world"): string {
    return param;
}

// მოცემული მაგალითი:

interface SuperHero {
    attackName: string;
}
interface Batman extends SuperHero {
    jumpLength: number;
}
interface SuperMan extends SuperHero {
    flyingSpeed: number;
}

function createSuperHero(name: "batman"): Batman;
function createSuperHero(name: "superman"): SuperMan;
function createSuperHero(name: string): Batman | SuperMan | SuperHero {
    if (name === "batman") {
        return {
            attackName: "Kick",
            jumpLength: 12,
        };
    } else if (name === "superman") {
        return {
            attackName: "Punch",
            flyingSpeed: 120,
        };
    }
    return {
        attackName: "Run",
    };
}
const hero1 = createSuperHero("batman");
console.log(`Batman can jump ${hero1.jumpLength} feet`);
const hero2 = createSuperHero("superman");
console.log(`Superman can fly ${hero2.flyingSpeed} miles per hour`);
//                                                  FUNCTION HEADERS

// ფუნქციის არგუმენტი შეიძლება იყოს ფუნქცია.

function functParams(p1: string, err: (e: Error) => void): void {}
// ფუნქციის გამოყენებისას როგორც გინდა ისე 
// გადასცემ მეორე ფუნქციას არგუმენტად. მაგ:
functParams("test", () => {}); // Parameter e:Error not required
functParams("test", (whatEver: Error) => {}); // Name can be changed
functParams("test", (e: Error) => {});





//                                                  REST OPERATOR





// AKA ...
// მისი დახმარებით შეგიძლია უსასრულო
// რაოდენობის არგუმენტების გადაცემა.
// ეს არგუმენტები ... ის შემთხვევაში, 
// შეგიძლია პირდაპირ თხარო
// თუ ცვლადს მიანიჭებ დარჩენილი
//  არგუმენტების მნიშვნელობას,
// მაშინ array ში უნდა ჩასვა
function functRest(p1: string, ...remaining: string[]): void {}
functRest("p1", "p2", "p3");

function functBefore(p1: string, remaining: string[]): void {}
functBefore("p1", ["p2", "p3"]);

//A function that has a callback as a parameter, 
// that returns nothing, 
// can have a function returning a value.
// მაგ: თუ გაქვს void ფუნქცია, რომელსაც callback ად 
// გადაეცემა ფუნქცია, რომელიც აბრუნებს მნიშვნელობას,
// მაშინ შეგიძლია მაინც დააბრუო 
// მნიშვნელობა, void ის მიუხედავად
function functReturnVoid(f: () => void): void {
    const c: void = f(); // c is "void" but will store a string
    console.log(c); // Print the string from the return of the function in parameter
}
functReturnVoid(() => {
    return "I am a string, not void!"; 
    // Call back return a string but defined 
    // to return void in the definition
}); 
// არ მუშაობს არაფერზე, გარად void ისა.
// თუ ფუნქციამ უნდა დააბრუნოს სტრინგი,
// და ამას ვერ შეძლებს, პიზდეც





//                                                  MAPPED TYPES





// არსებულ ტიპებზე დაფუძნებით ახალი ტიპის შექმნა

// მაგ: ინტერფეისის შექმან, რომელიც არის დაფუძნებული
// სხვა ინტერფეისზე, მაგრამ მისი წევრები არიან optional

// როცა გინდა, რომ ინტერფეისი გახადო read only დ
// The interface that define a structure that allows re-assignment of values 
interface OriginalInterface {
    x: number;
    y: string;
}

// The interface that defines a structure that allows assignment only at creating
interface ReadOnlyOriginalInterface {
    readonly x: number;
    readonly y: string;
}

let variable11: OriginalInterface = { x: 1, y: "2" };
let variable21: ReadOnlyOriginalInterface = { x: 1, y: "2" };

// A function that transform one object to the other type
function mapOriginalInterfaceToBeReadOnly(o: OriginalInterface): ReadOnlyOriginalInterface {
    return o;
}





//                                                  IMMUTABLE DATA WITH READONLY





// readonly ტვინავ რასასც ნიშნავს.

// შემდეგი მაგალით იქნება არა-საკაიფო ვერსია იმ კოდისა,
//რომელიც მის შემდეგ მოვა(ანუ რომელიც ჯობია):
// The interface that we want to have readonly without defining another interface
interface OriginalInterface {
    x: number;
    y: string;
}

// The mapped type that map a generic type with the readonly constraint
type ReadonlyInterface<T> = { readonly [P in keyof T]: T[P] };
// ეს ფუქნცია ქმნის ახალ ტიპს, რომელიც
// არის OriginalInterface, მაგრამ მისი წევრები
// არიან readonly
// შემდეგ კოდში ქმნი ფუნქციას, რომელიც აკეთებს იგივეს,
// მაგრამ იყენებს generic და object.freeze

// Function that convert the object from one type to another
function genericInterfaceToReadOnly<T>(o: T): ReadonlyInterface<T> {
    return Object.freeze(o);
}

const original: OriginalInterface = { x: 0, y: "1" };
const originalReadonly = genericInterfaceToReadOnly(original);
// originalReadonly.x = 3; // error TS2540: Cannot assign to 'x'

//                                                  MAPPING PARTIALLY

// აქცევს ინტერფეისის წევრებს optional ებად
type Partial1<T> = {
    [P in keyof T]?: T[P];
}





//                                                  NULLABLE TYPES





// nullable ტიპები, ანუ ტიპები, 
// რომლებიც შეიძლება იყოს null ან undefined.
// მაგ:
interface Cat {
  age: number;
  weight: number;
  numberOfKitty: number;
}

const cat1: Cat = { age:1, weight: 2, numberOfKitty: 0 };

// NullableCat1 have union with the null type.
// It allows to visualize the dual type.
interface NullableCat1 {
  age: number | null;
  weight: number | null;
  numberOfKitty: number | null;
}
// ზედმეტად ტვინი რომ არ იტყნა, ეს
// კოდი(ზემოთ როა interface) მარტივდება შემდეგნაირად:
type NullableCat = { [P in keyof Cat]: Cat[P] | null };
//მაგრამ, ეს კოდი ჯერ კიდევ არ მუშაობს ყველა ტიპზე
// შემდეგი კოდის დახმარებით, შეგიძლია ნებისმიერი
// ტიპის nullable ინტერფეისი შექმნა
type Nullable<T> = { [P in keyof T]: T[P] | null };

const cat2: Nullable<Cat> = { age: 1, weight: null, numberOfKitty: null };





//                                                  PICK





// გაძლევს უფლებას, რომ ამოირჩიო ტიპის
// property ებისგან შემდგარი ქვესიმრავლე
// ეს კეთდება ახალი ტიპების შექმნითც და 
// inheritence ითაც(ობიექტურად საუკეთესოა),
// მაგრამ, თუ ამსი გაკეთბა დინამურად გინდა
// pick გამოიყენე. ყლეობას იზამ, თუ შექმნი 
// ერთ დიდ ტიპის ბლოკს და მერე pick ით
// დაიწყებ ამორჩევას. მარტო დინამიურის საჭიროებისას
// გამოიყენე ეგ. 

interface animal{
  age:number
  name:string

  maximumdeepness:number
  
  numberOfLEgs:number

  canSwim:boolean
  runningSpeed:number
}
function buyafish(fishentity:Pick<animal, "maximumdeepness" | "age" | "name">){ 
  // აქ pick ის მერე animal რო არ დავწერო შეიძლება? extend რადგან არაა 
  // გამოყენებული, თუ პირველი აიცილებლად უნდა იყოს ინტერფეისი? 
  // შეიძ₾ება, რომ ბევრი ინტერფეისის property ebi amovyaro?
  console.log(fishentity)
}
buyafish({
  age : 1,
  name : 'clownfish',
  maximumdeepness : 3
})

function transformanimalintofish(fishentit:animal) : Pick<animal, "maximumdeepness" | "age" | "name">{
return fishentit
// უფრო ძლიერი კოდი დაწერდა ამას შემდეგნაირად
// return {age:1, name:"fish", maximumdeepness:123}
}
console.log(
    transformanimalintofish({
        age: 1,
        name: "Clown Fish",
        maximumdeepness: 10,
        numberOfLEgs: 0,
        canSwim: true,
        runningSpeed: 0,
    })
);

// კიდე extract და record არის კაი პონტი ამის გასაკეთბლად
// ის მსგავს ელემენტებს ამოარჩვს ორი არგუმენტიდან
// record ქმნის ახალ ტიპს ამოღებული list იდან
// ამის მუღამი ისაა, რომ ყველა field უნდა იყოს 
// extract ის მეორე არგუმენტის

//animal უკვე აღწერილია
interface Human {
    age: number;
    name: string;
}

// Create a Type from the intersection of Animal and HUman that will be of type string
type LivingThing = Record<Extract<keyof animal, keyof Human>, string>; 
// ეს string არის ის მეორე არგუმენტი რომელზეც ვბაზრობდი.
// ყველაფერი იქნება string ამის გამო, ასაკის ცათვლით 
const creature: LivingThing = {
    age: "1",
    name: "John",
};
console.log(creature); 





//                                                  OMIT





// Pick ის საპირისპიროა.

interface Animal {
    age: number;
    name: string;

    maximumDeepness: number;

    numberOfLegs: number;
    canSwim: boolean;
    runningSpeed: number;
}

// Parameter using Omit to remove three fields
function buyAFish(fishEntity: Omit<Animal, "numberOfLegs" | "canSwim" | "runningSpeed" >) {
    console.log(fishEntity);
}

buyAFish({
    age: 1,
    name: "Clown Fish",
    maximumDeepness: 10,
});




//                                                  RECORD





// ახალი ტიპის აგებიას საშუალებას იძლევა 
// სხვა ტიპის წევრებსიგან(მაინც უთითებ წევრების ტიპს)
// Create a type with three string fields
// ჯერ ერთითება წევრები და მერე ტიპი
type RecordType1 = Record<"m1" | "m2" | "m3", string>;
// Instantiate a variable from the type
const x9: RecordType1 = { m1: "s1", m2: "s2", m3: "s3"};
console.log(x);

// ამის გამოყენების მაგალითი:
// A function that need to take all the animal fields but from a string type
function receiveInputFromUser(dataIn: Record<keyof Animal, string>): Animal{
    const wellTypedObject: Animal = {
        age: Number(dataIn.age),
        name: dataIn.name,
        maximumDeepness: Number(dataIn.maximumDeepness),
        numberOfLegs: Number(dataIn.numberOfLegs),
        canSwim: Boolean(dataIn.age),
        runningSpeed: Number(dataIn.runningSpeed),
    }
    return wellTypedObject;
}
console.log(receiveInputFromUser({
    age: "13",
    name:"Fish",
    numberOfLegs: "2",
    maximumDeepness : "123",
    canSwim : "true",
    runningSpeed : "0"
}));

//dataIn: Record<keyof Animal, string> // ეს იგივეა, რაც
//dataIn: Record<"age" | "name" | "maximumDeepness" | "numberOfLegs" | "canSwim" | "runningSpeed", string>





//                                                  EXTRACT





// ამოიღებს საერთო ტიპის ემენებტევს ტიპებიდან
type OnlyArrayType = Extract<string | string[] | number[], unknown[]>;
// ჯერ გადაეცა პიერველი ტიპის წევრები, შემდეგ მეროესი(unknown[])
// რაც უცნობ array ს ნიშნავს
const var1: OnlyArrayType = ["Element1"];
const var2: OnlyArrayType = [1];
// const var3: OnlyArrayType = "No"; 

// უფრო ნათლად ჩანს აქ
interface Animal1 {
    name: string;
    gender: string;
    sound: string;
}
interface Human1 {
    name: string;
    gender: string;
    nickname: string;
}

type LivingThing2 = Extract<keyof Animal, keyof Human>;
function sayMyName(who: Record<LivingThing2, string>): void {
    console.log(who.name +" is of type " + who.gender);
}
const animal2: Animal1 = { name: "Lion", sound: "Rawwwhhh", gender: "Male" };
const human2: Human1 = { name: "Jacob", nickname: "Jaco-bee", gender: "Boy" };
sayMyName(animal2); // idk რა უნდა მარა შეცდომას აგდებს
sayMyName(human2);





//                                                  EXCLUDE





// ამოყრის იმ property ებს, რომლებსაც მიუთითებ
// type LivingThing = Extract<keyof Animal, keyof Human>;
type LivingThing4 = Exclude<keyof Animal, "sound">;
function sayMyName1(who: Record<LivingThing4, string>): void {
    console.log(who.name +" is of type " + who.gender);
}
const animal: Animal = { name: "Lion", sound: "Rawwwhhh", gender: "Male" };
const human: Human = { name: "Jacob", nickname: "Jaco-bee", gender: "Boy" };
sayMyName1(animal);
sayMyName1(human);




//                                                  RETURN TYPE




// ფუნქციის მიერ დაბრუნებული ტიპის გამოტანა
function getName(): string {
    return "Name";
}
type FunctionType = ReturnType<typeof getName>
const varX:FunctionType = "This is a string";
console.log(varX);

// ამის პლიუსი ისაა, რომ თუ შეცვლი ტიპს, შეიცვლება
// მის ქვემოთ რაც წერია იმის შედეგიც. კოდი დაცული იქნება+-

// თუ ფუნქცია ერთ კონკრეტულ ტიპს არ აბრუნებს,
// typescript აკეთებს infer ს და მაინც გეუბნება სწორ პასუხს
// მაგ:
function getSomething() {
    if (Math.random() < 0.5) {
        return {
            cond: "under 0.5",
            typeScript: true,
        };
    } else {
        return {
            cond: 1,
            typeScript: "3.7",
            moreField: true
        };
    }
}
type functionType2 = ReturnType<typeof getSomething>;

// morefield ის მნიშვნელობა functionType2 ში
// არის undefined, რადგან TypeSctipt აბალანსებს 
// კოდს ყველა შესაძლო ამონახსნისთვის

// შემდეგი კოდი number | string ის მაგივრად
// აბრუნებს 1 | "1" , რაც სიმარტივისთვის ხდება
function getSomething2() {
    if (Math.random() < 0.5) {
        return 1;
    } else {
        return "1";
    }
}
type functionType3 = ReturnType<typeof getSomething2>;

// ასინქრონულებთან აბრუნებს ტიპის promise ს
async function asyncFunction(){
    return await Math.random();
}




//                                                  CUSTOM MAP TYPES




// non-nullable. undefuned და null არ შეიძლება

type NoNullValue<T> = T extends null | undefined ? never : T;
// თუ მოცემული ფუნქცია მიიღებს მნიშვნელობას, 
// რომელიც ?never ის უკან წერია, compilation error
// თუ არა და გააგრძელებს ჩვეულებრივად
  
function print<T>(p: NoNullValue<T>): void {
    console.log(p);  
}

print("Test"); // Compile
// print(null); // Does not compile

// adding proeprty conditionally
// თუ სრულდება რაიმე პირობა, დაემატოს property
interface Person {
    name: string;
    dateCreated: Date;
}
interface Animal {
    name: string;
}

// Create a generic Type that add modifiedDate only if dateCreated is present
type Modified<T> = T extends { dateCreated: Date } ? T & { modifiedDate: Date } : never;

const p: Person = { name: "Pat", dateCreated: new Date() };
const a: Animal = { name: "Jack" };

// ModifiedDate present because "Person" has dateCreated
const p2: Modified<Person> = { ...p, modifiedDate: new Date() }; 
console.log(p2.modifiedDate)

// Following line do not transpile because Animal does not have dateCreated
// const a2: Modified<Animal> = { ...p, modifiedDate: new Date() };
// console.log(a2.modifiedDate)




//                                                  TS OBJECTS




// object და Object სხვადასხვა რაღცეებია.
let o1: Object = "I am an Object";
let o2: object = { text: "I am an object" };
let o3: Object = { text: "I am also an Object" }
let o4: object = ["I", "am", "an", "object"];
let o5: Object = ["I", "am", "an", "Object"];

console.log(o1);
// console.log(o2.text); // Does not compile
// console.log(o3.text); // Does not compile
console.log(o4);
console.log(o5);

let curly1 = { text: "An object" };
let curly2: { text: string } = { text: "An object" };
let curly3: {} = { text: "An object" };

console.log(curly1.text);
console.log(curly2.text);
// console.log(curly3.text); // Does not not compile

// object არის ყველა იმ კლასის აღმწერი, 
// რომელიც პრიმიტიული არაა

let create1 = Object.create({ text: "I am a created object" });
let p1 = { text: "I am an object" };
let create2 = Object.create(p);

console.log(create1.text);
console.log(p1.text);
console.log(create2.text);



//                                                  OBJECT LITERALS




// AKA {}
let x13: { x: number; y: string } = { x: 1, y: "2" }; // Below code is similar, but reusable with a type (as interface)
interface MyTypeWithTwoMembers {
    x13: number;
    y13: string;
}
let x14: MyTypeWithTwoMembers = { x13: 1, y13: "2" };

// შეგიძლია წინასწარ არ გაუწერო ტიპი inference ის გამო
// მაგრამ, ამან შეიძლება გამოიწვიოს runtime error ები.
let myObjectTypedWithCurlyType3 = { x13: 1 } as MyTypeWithTwoMembers;
// cast ინგის გარეშე, x არის ანონიმური ტიპი, ანუ ის 
// ბერნაირ ტიპს მიიღებს. თუ მას ჩასვამ ინტერფეისში, 
// ის ამ ინტერფეისის შესაფერისი ცვლადის 
// ტიპს აითვისებს.
// არაა სასურველი, აჯობებს, რომ თავიდანვე აღწერო
// რა ტიპის ცვლადია

// ასევე, შეიძლება AJAX ი შეიცვალოს და აღარ მიიღოს 
// ასეთი ცვლადები.
// {} ით აღწერის ობიექტებს Object ის ყველა
// წევრთან აქვს წვდომა(მეთოდები,...)



//                                                  NEW OBJECT




// new ით შეგიძ₾ია შექმნა ობიექტი.
class MyClassa{
    private value: string;
    constructor(val:string){
        this.value = val;
    }
}
const c4 = new MyClass("ABC");

// ამ მაგალითში ნაჩვენებია instance ის შექმნა
// რაც ნიშნავს new ით ობიექტის შექმნას
// ყველა instance არის უნიკალური და იზოლირებული

const c5 = new MyClassa("ABC");
const c6 = new MyClassa("ABC");
console.log(c5===c6);
c5.value = "1";
console.log(c5.value);
console.log(c6.value);



//                                                  OBJECT AND oBJECT




// Object მოიცავს ყველაფერს, პრიმიტიულების ჩათვლით
// object არის არაპრიმიტიულები(არა Null, number...)
let o: object;
// o = 1; // Primitive = does not work 
o = { a: "123" }; // Anonymous object = work
interface MySchema {
    val: string;
}
let interfaceObject: MySchema = { val: "Test" };
o = interfaceObject; // Typed object = work
// o = null; // Does not work
// o = undefined; // Does not work
// let x = new Array();
// o = x; // "new" object = work

// Object ს აქვს მეთოდები და ფუნქციები, რომლებიც 
// ობიექტებს შეეფერებათ
let x15 = { y: 1 };
let obj: Object = x;
console.log(obj.toString());

// უმჯობესია any და unknown ის მაგივრად იხმარო
// ობიექტი, cuz ფუნქციების საშუალებას იძლევა
print(1);
print({ id: 1 });
print({ id: 2, y: 1 });
print({ id: 3, y: 2 });
function print(o: Object) {
    if (o.hasOwnProperty("y")) {
        console.log(o);
    } else if (typeof o === "number"){
        console.log("Number is " + o);
    }
}




//                                                  INDEX SIGNATURE




// შეგიძლია ობიექტის წევრს მიწვდე 
// [] ეებით, obj.name ის მაგივრად.

// ასე დაწერილი ინტერფეისის მაგალითი
// (აზრზე არ ვარ რა შუაში იყო ეს)
interface MyStringDictionaryWithMembers3 {
    [key: number]: string;
    m1: string;
    m2: number;
    m3: boolean;
    m4: { x: string; y: number };
}

// წევრების ამოღების მაგალითი
let objectIndex: { x: number; y: string } = { x: 1, y: "2" };
objectIndex["x"] = 2;
objectIndex["y"] = "a string";
// objectIndex[0] = 1; // Doesn't transpile
// objectIndex[{ x: 1 }] = 123; // Doesn't transpile
console.log(objectIndex); // { '0': 1, x: 2, y: '2' }


// რაცხა ყლეობაა ეს, რატოა ვერ მივხვდი
interface MyStringDictionaryWithMembers {
    [key: string]: string;
    m1: string;
    // m2: number; // Won't transpile, must be a string
    m2:string
}

interface MyStringDictionaryWithMembers2 {
    [key: string]: string | number;
    m1: string;
    m2: number;
}



// შემდეგი კოდი არ transpile
// თუ არ მოაცილე m2 და | number

interface MyStringDictionaryWithMemberss {
  [key: string]: string;
  m1: string;
}

class MyClass implements MyStringDictionaryWithMemberss {
  [key: string]: string | number;
  m1: string;
  m2: number;
}


// ზოგჯერ დებილი ხარ და წერა არ იცი
// შეიძლება შეგეშლოს და დაწერო არასწორად
// ონიექტის key 
// ამიტომ შეგიძ₾ია შემდეგი რამე ქნა

const Foo = "Foo"; // Constant value
const Bar = "Bar"; // Constant value
const Zaz = "Zaz"; // Constant value

const objectWithConstantProperties = { [Foo]: 100, [Bar]: "hello", [Zaz]: () => {} };

let a22: number = objectWithConstantProperties[Foo];
let b2334: string = objectWithConstantProperties[Bar];

console.log(a12);
console.log(b2334);

// ასევე, გეხმარება შემდეგი პრობლემის არიდებაშ

console.log(objectWithConstantProperties['gay'])
// ეს ამობეჭდავს undefined. ეს შეიძ₾ებოდა typo ყოფიიყო
// ამიტომ, სჯობს ცვლადების გამოყენება.


// ასევე სიმბოლოების გამოყენებაც შეგიძ₾ია, 
// მარა ვერ მივხვდი რას ცვლის
//                              INTERSECTING WITH TYPES, INTERFACES AND GENERICS



// & გამოიყენება INTERSECTION ისაღსანიშნავად

type T1 = { x: string };
type T2 = { y: number };
type T3 = { z: boolean };
type IntersectType1 = T1 & T2 & T3;
type IntersectType2 = T1 & T2;
type IntersectType3 = T3 & T1;
// const inter1: T1 = { x: "x1", y: 2 }; // Won't compile: y does not exist in T1
const inter2: T1 & T2 = { x: "x1", y: 2 }; // Compile 
const inter3: IntersectType2 = { x: "x1", y: 2 }; // Compile

// ანალოგიურად interface ებზე.
interface I1 {
    x: string;
}
interface I2 {
    y: number;
}
interface I3 {
    z: boolean;
}
type IntersectWithInterface = I1 & I2 & I3;
const with3Interfaces: IntersectWithInterface = { x: "1", y: 1, z: true };

//შემდეგი კოდის მაგივრად
interface CombineI1 extends I1, I2, I3 {}
interface CombineI2 extends I1, I2 {}
interface CombineI3 extends I3, I1 {}
// შეგიძლია იხმარო ზემოთ ნახსენები & ები, რათა 
// არ გაწვალდე ახალი ინრტეფეისების შექმნით(inheritence
// ის მაგივრად გვთავაზობენ ამის ხმარებას)




//                                                  LITERAL TYPE, NAWWORING AND CONST




// enum იც შეიძლება იყოს ლიტერალი

// ფუქნციის return type ის დადგენა სხვადასხვა
// ტიპის მონაცემების გადაცემის დროს:
interface Cats {
  kind: "cat", // Discriminant because shared with Dog
  name: string
}

interface Dogs {
  kind: "dog", // Discriminant because shared with Dog
  nickname: string
}

function callMeBy(p: Cats | Dogs): string {
  if (p.kind === "cat") { // In the IF, p is Cat
    return p.name;
  } else if (p.kind === "dog") { // In the IF, p is Dog
    return p.nickname
  }
  return "unknown";
}

const c8: Cats = { kind: "cat", name: "Hello Kitty" }
const d: Dogs = { kind: "dog", nickname: "Snoopy" }

console.log(callMeBy(c8));
console.log(callMeBy(d));
// const vs let in literal type
const literalType1 = "c";    // Type is not string, but "c" 
const literalType2: "c" = "c";  // Same as above 
let literalType3 = "c";    // Type is string 
let literalType4: "c" = "c";    // Type is not string, but "c" 




//                                                  UNION TYPE

// რამოდენიმე ტიპის გაერთიანება
let u1: string | boolean = true; 
type UStringBoolean = string | boolean; 
let u2: UStringBoolean = true; 

// tagged union
// ზოგჯერ, როცა ფუნქციის არგუმენტი შეიძლება იყოს 
// რამოდენიმე სხვადასხვა ნტერფეისი, შეიძლება დაგჭირდეს
// სხვადასხვა რაიმეს შესრულება მათი 
// სხვადასხვა ტიპის მნიშვნელობებისთვის

// მიხვდები შენით რაზეც ვბაზრობ
interface InterfaceA {
    discriminant: "InterfaceA"; // This is not a string type, but InterfaceA type
    m0: number;
}
interface InterfaceB {
    discriminant: "InterfaceB"; // This is not a string type, but InterfaceB type
    m1: string;
}
interface InterfaceC {
    discriminant: "InterfaceC"; // This is not a string type, but InterfaceC type
    m2: string;
}
function unionWithDiscriminant(p: InterfaceA | InterfaceB | InterfaceC) {
    switch (
        p.discriminant // Only common members available
    ) {
        case "InterfaceA":
            console.log(p.m0); // Only InterfaceA members available
            break;
        case "InterfaceB":
            console.log(p.m1); // Only InterfaceB members available
            break;
        case "InterfaceC":
            console.log(p.m2); // Only InterfaceC members available
            break;
    }
}



//                                                  AS CONST

// as const ის დახმარებით, შეგიძლია ტიპი 
// გაყინო, შეგეძ₾ება სხვა მნიშვნელობის მითითება
// მაგრამ ტიპს ვერ შეუცვლი
const v4 = 10;
// v4 = 10; // Does not compile
let v5 = 10 as const;
v5 = 10;

//array ში შეგიძლია უცვლადი წევრებისგან შემდგარი 
// array შექმნა. const myarr ით შექიმნებოდა
// array, რომელშიც ცვლადების შეცვლა შეიძლება
let myArr2 = [1, 2, 3] as const;
// myArr2.push(4); // Does not provide the auto-complete, neither compile.

// ამის გაკეთების უფრო გრძელი გზაა:
let myArr3: readonly [1, 2, 3] = [1, 2, 3];
// Or:
let myArr4: readonly [1, 2, 3];
myArr4 = [1, 2, 3];
// But not:
// myArr4 = [1, 2];

// ობიექტებშიც გამოიყენება
let immutable1 = { id: "1" } as const; 
// immutable1.id = 2; // Does not compile
// immutable1["newprop"] = 2; // Does not compile
console.log(immutable1);

// ვრცელი ვერსია:
let immutable2: {
    readonly id: number
} = { id: 1 };
console.log(immutable2);

// შეგიძლია ობიექტის მხოლოდ რაიმე ნაწილი გახადო immutable
let person = {
  id: 1,
  name: {
    first: "Patrick",
    last: "Desjardins",
    middleName: null
  },
  location: {
    country: "USA",
    state: "CA"
  } as const,
  relatives: [
    {
      id: 2,
      name: {
        first: "Person2",
        last: "Person22",
        middle: "Mid"
      }
    }
  ]
};

person.relatives.push({ id: 2, name: { first: "New", last: "New", middle: "" } });
person.id = 4; 





//                                                  TUPLES

// Tuple ის შესაქმნელად = ის მაგივრად იყენებ : ს.
let numberTuple: [number, number, number];
// იყენებს სხვა ტიპების სინტაქსს

let myTuple: [number, string] = [0, "1"];
myTuple = [1, "test"];
const numberVariable: number = myTuple[0];
const stringVariable: string = myTuple[1];

let secondTuple: readonly [number, number,] = [3, 4];
let firstTuple: Readonly<[number, number]> = [1, 2];
let thirdTuple = [1, 2] as const; 




//                                                  CASTING TYPE



// as და <>, react ის გამო უფრო as უნდა ისწავლო
const x18:number = <number>1
const x19:number = 1 as number

// ამის საშიშროება არის ის, რომ შეგიძლია
// ინტერფეისზწ ცარიელი ობიექტის დაქასთვა

interface ICast1 {
    m1: string;
}
interface ICast2 {
    m1: string;
    m2: string;
}
let icast1: ICast1 = { m1: "m1" };
let icast2: ICast2 = { m1: "m1", m2: "m2" };
let icast3: ICast1 = icast2; // work without cast because of the structure
//icast2 = icast1; // doesn't work, miss a member
let icast4: ICast2 = icast1 as ICast2; // work but m2 undefined
console.log(icast4); // m2 is missing even if not optional

// restrictions 

// განზრახი cast ის გარეშე ვერ დაქასთავ 
// ობიექტს თავისივე ქვეკლასში. და თუ ამას 
// იზამ, მიიღებ ობიექტს, რომელიც მაინც 
// ინარჩუნებს თავის საწყის წევრებს, მიუხედავად
// ახალი ინტერფეისისა.
interface ITypeA {
    m1: string;
}
interface ITypeB extends ITypeA {
    m2: string;
}
interface ITypeC extends ITypeB {
    m3: string;
}
const typea: ITypeA = { m1: "m1" };
const typeb: ITypeB = { m1: "m1", m2: "m2" };
let typeb2: ITypeB = typea as ITypeB; // Work (m2 will be missing!!!)
console.log(typeb2); // No m2

// შეიძლება ასე, შემთვევით, არასასურველი
// ან ზედმეტუ ინფო გააგზავნო მიმღებთნ
let typea2: ITypeA = typeb; // No cast needed
console.log(typea2); // { m1: 'm1', m2: 'm2' } However, only m1 is accessible at compilation




//                                                  KEYOF

//
// Interface's members
interface InterfaceWithMembers {
    id: number;
    title: string;
    createdBy: Date;
}

const members: keyof InterfaceWithMembers = "id"; // Only accept id, title or createdBy

// Type's values
type TypeToKeyOf = "north" | "south" | "east" | "west";
function fKeyOfParameter(direction: TypeToKeyOf) {}
//fKeyOfParameter("no"); // Doesn't compile 
fKeyOfParameter("north");

// idk this oone either

// Interface's members
interface InterfaceWithMembers {
    id: number;
    title: string;
    createdBy: Date;
}
const iWithMembersForKeyOf: InterfaceWithMembers = { id: 1, title: "1", createdBy: new Date() };
function prop<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}
const id1 = prop(iWithMembersForKeyOf, "id"); //the value 1 of type number





//                                                  VARIACE



// covariant --- შეიძლება ჩანაცვლდეს ქვეკლასით

// contrvariant --- შეიძლება ჩანაცვლდეს ზეკლასით

// bivariant --- ორივე

// invariant --- ზუსტად იმავე ტიპის იღებს
interface InterfaceA4 {
  a1: number;
}

interface InterfaceB3 extends InterfaceA4 {
  b2: string;
}

interface InterfaceC3 extends InterfaceB3 {
  c3: boolean;
}

let a4: InterfaceA4 = { a1: 1 };
let b4: InterfaceB3 = { a1: 1, b2: "2" };
let c16: InterfaceC3 = { a1: 1, b2: "2", c3: true };

// b = a; // Error, does not accept supertype
b4 = c16; // Accept subtype





//                                                  IN OPERATOR




interface IN_A {
    m1: number;
    m2: boolean;
}
interface IN_B {
    m3: string;
}

function foo(x: IN_A | IN_B) {
    if ("m1" in x) { // m1 is only in IN_A
        console.log("Type narrowed to IN_A", x.m1, x.m2);
    } else { // IN_B
        console.log("Type narrowed to IN_B", x.m3);
    }
    console.log("A is still IN_A or IN_B");}

foo({ m1: 1, m2: true }); // Implicit IN_A

foo({ m3: "" }); // Implicit IN_B





//                                                  CONDITIONAL TYPE




// ამოწმებს, არის თუ არა გადაცემული 
// ინტერფეისი ან ტიპი გადაცემული სხვა
// ინტერფეისის ან ტიპის ნაწილი

interface TypeA3 {
  kind: "TypeA";
  m1: string;
}
interface TypeB {
  kind: "TypeB";
  m2: number;
}

function fct<T extends TypeA3 | TypeB>(obj: T): T extends TypeA3 ? TypeB : TypeA3 {
  // თუ T extends TypeA3 მაშინ შეასრულე პირველი პირობა(True), თუ false, მაშინ მეორე
  // true როცაა დააბრუნოს TypeB. თუ არა და TypeA3
  return obj as any; // Won't be any
}


let typeA3: TypeA3 = { kind: "TypeA", m1: "abc" };
let returnA: TypeB = fct(typeA3);

// ასევე შეგიძ₾ია generic თან გამოიყენო,
// რათა უარყო რომელიმე ტიპი
type NotUndefined<T> = T extends undefined ? never : T;
// თუ T = undefined, დააბრუნებს never.
// სხვა შემთხვევაში, T ს.

// შემდეგი კოდი ამოყრის ყველა boolean ს

type RemoveBoolean<T> = {
  [Key in keyof T]: boolean extends T[Key] ? never : Key
}[keyof T];

interface Inf1 {
  m1: string;
  m2: boolean;
  m3: number;
}

type RemoveBooleanWithMembers<P> = {
  [Key in RemoveBoolean<P>]: P[Key]
};

type NoBoolean1 = RemoveBoolean<Inf1>; // "m1" | "m3"

//სხვა რაღაცაც

type MyInclude<T, U> = T extends U ? T : never;
type MyExclude<T, U> = T extends U ? never : T;





//                                                  INFER



//ეუბნება TS ს, რომ თავისით დაასკვნას ტიპი.
type GetReturnedType<T> = T extends (...args: any[]) => infer R ? R : T;

function whatIsMyReturnType(): number {
    return 1;
}
// number from 'R'
type TypeFromReturn = GetReturnedType<typeof whatIsMyReturnType>;
const dynamicallyTyped: TypeFromReturn = 1;
// number from 'T'
type TypeFromReturn2 = GetReturnedType<number>;


// შემდეგ კოდშ, infer ის გარეშე,
// მიღებული ცვლადების ტიპი იქნებოდა
// სხვა რამე
// Classes definition
class BaseClass<T extends boolean | number | string> {
  m(p1: T): void { console.log(p1); }
}

class Child1 extends BaseClass<boolean> { }
class Child2 extends BaseClass<string> { }

// Instanciation
const c1 = new Child1();
const c2 = new Child2();

// Invocation
c1.m(true);
c2.m("Test");

// Extraction with infer
type ExtractGeneric<T> = T extends BaseClass<infer U> ? U : T;
type E1 = ExtractGeneric<Child1>  // boolean
type E2 = ExtractGeneric<Child2>  // string



//                                                  MAP




interface Person4 { id: number, name: string };
let myMap = new Map<number, Person4>();
myMap.set(1, { id: 1, name: "First" });
myMap.set(10, { id: 10, name: "Tenth" });

if (myMap.has(10)) {
    console.log(myMap.get(10)!.name);
}

// ! ოპერატორი ეუბნება TS ს, რომ ერორი არ ამოვარდეს





//                                                  THROWING ERROR




function throw1() {
    throw "error in string";
}

function throw2() {
    throw Error("Message Here");
}

function throw3() {
    const err: Error = new Error("Message Here");
    throw err;
}

// throw1();
// throw2();
// throw3();
// პირველი პროსტა სტრინგია და Error 
// ტიპის შვილობილი არაა, რის გამოც
// მასუფრო ბანძი output აქვს



// შეგიძლია Error ზე დაფუძნებით 
// შექმნა შენი ერორის ქვეტიპები/ზეტიპები
class mySpecificError extends Error{
  public data: string
  constructor(data:string, message: string)
}

// სხვადასხვანაირად ერორების გამოძახება

// function withReturn(p1:number) : number | Error {
//    if(wrong){
//         return new Error("My error message");
//    }
//    return "String as expected when all good";
// }

// //

// function withCallback(
//    p1:number, 
//    error:(errMsg: string) => void)
//    :string {
//    if(wrong){
//         error("My error message");
//    }
//    return "String as expected when all good";
// }

// //

// function withPromise(p1: number) 
//    => Promise<Error>{
//    if(wrong){
//         return Promise.reject("My error message);
//    }
//    return Promise.resolve("String as expected when all good");
// }





//                                                  CATCHING SYNC EXCEPTIONS




function throw1(){
  throw('error message string')
}

function throw2(){
  throw Error('message')
}

function throw3(){
  const err:Error = {name:'error', massage:'err message'}
  throw err
}

try{
  throw1()
} catch(e){
  console.log('exception 1', e)
}

try{
  throw2()
} catch(e){
  console.log('err2', e)
}

try {
  throw3();
} catch (e) {
  console.log("Exception 3", e); // Object
}

// Error, Array და Map არ გადასცემენ წესივრად ინფოს
// აუცილებელია, განზრახ მიუთითო მათ instance ებს
// რომელი კალსის უნდა იყვნენ. setPtototypeOf()
// და instanceOf

class ArgumentNullException extends Error {
    constructor(public name: string) {
        super("Argument was undefined");
        Object.setPrototypeOf(this, ArgumentNullException.prototype);
    }
}
class ReferenceException extends Error {
    constructor(public x: number, public y: number) {
        super("Reference was undefined");
        Object.setPrototypeOf(this, ReferenceException.prototype);
    }
}
function throwTwoExceptions(switcher: boolean) {
    if (switcher) {
        throw new ArgumentNullException("Switcher");
    }
    throw new ReferenceException(1, 2);
}
try {
    throw new ArgumentNullException("Switcher");
} catch (ex) {
    if (ex instanceof ArgumentNullException) {
        console.log("I can access name:" + ex.name);
    } else if (ex instanceof ReferenceException) {
        console.log("I can access x and y:" + ex.x + " and " + ex.y);
    }
}

// Bubble Up --- შეცდომა, რომელსაც მესამე 
// მეთოდი გამოიწვევს, უწევს ასვლა მაღლა,
// ჯერ მეორე და შემდეგ პირველ მეთოდიში
// საბოლოოდ, ამ შეცდიმას დაიჭერს
// catch. აზრზე არ ვარ რა შუაში იყო ეს მარა ოკ


function method1() { // Calls method2 which call method3 which throw an error
  method2();
}

function method2() { // Calls method3 which throw an error
  method3();
}

function method3() { // Calling this method will throw an error
  throw Error("Msg from method 3");
}
try {
  method1(); // Call method 1 that call method 2 that call method 3 that throw an error
} catch (e) {
  console.log(e.message);
}

// შეგიძლია მეორე მეთოდშივე დაიჭირო 
// ეს პრობლემა და ასევეე შეგიძლია 
// ის ახლიდან გაუშვა იქვე
function method1ა() {
  method2ა();
}

function method2ა() {
  try {
    method3ა();
  }
  catch (e) {
    console.log("Handled in method 2 but re-throw the ORIGINAL");
    throw e;
  }
}

function method3ა() {
  throw Error("Msg from method 3");
}
try {
  method1ა();
} catch (e) {
  console.log(e.message);
}

// ასევე, შეგიძ₾ია სხვა ერორიც გააშვებინო 
// მეორე მეთოდს
function method1ბ() {
  method2ბ();
}

function method2ბ() {
  try {
    method3ბ();
  }
  catch (e) {
    console.log("Handled in method 2 but re-throw the ORIGINAL");
    throw Error("New Error from Method 2");
  }
}

function method3ბ() {
  throw Error("Msg from method 3");
}
try {
  method1ბ();
} catch (e) {
  console.log(e.message);
}





//                                                  ASYNC EXCEPTIONS




// პირდაპირ promise ის დონეზე უნდა გაუშვა catch

Promise.resolve("value to be in the argument of then")
  .then((response: string) => {
        throw new Error("Error message");
    })
    .catch((err: Error) => {
        console.log("Error Message#2", err.message);
    });

// promise ებს არ ახასიათებთ finally,
// მაგრამ მის მსგავსად შეგიძლია გამოიყენო then,
// რომელიც catch ის მერე მოვა

Promise.resolve("value to be in the argument of then")
    .then((response: string) => {
        throw new Error("Error message");
        return "Test";
    })
    .then((response: string) => {
        console.log("Second then", response);
        return Promise.resolve(response);
    })
    .catch((err: Error) => {
        console.log("Error Message#2", err.message);
    })
    .then((response: string | void) => {
        console.log("Always called", response);
    });



//                                                  AWAIT/ASYNC

// უკეთსი ვერსიაა ერორების დაჭერის
function returnPromise(): Promise<string> {
  const p = Promise.resolve("value to be in the argument of then");
  throw new Error("Error Message");
  return p;
}

async function functionHandlePromise() {
  try {
    await returnPromise();
  }
  catch (err) {
    console.log("Error Message #2", err.message);
  }
  finally {
    console.log("Always called");
  }
}




//                                                  ASSERTION FUNCTIONS



// ამოწმებს, არის თუ არა გადაცემული
// მნიშვნელობა სწორი, თუ არა, 
// assertionError ს აგდებს

// ამის შემდეგ 4-6 ხაზი თუ გაბნევს, 
// ჩაიხედე აღწერის დაბლა და მიხვდები
// რა რატომ არის ეგრე
import * as assert from "assert";

function showLandArea(address, x, y) { // No typê
    assert(typeof address === "string");
    assert(typeof x === "number");
    assert(typeof y === "number");

    console.log(`The house ${address.substr(10)} as an area of ${x * y} meters`)
}
showLandArea("1234 Street ABCDE", 10, 5);
// showLandArea("1234 Street ABCDE", "10", "5"); // Assertion will catch the 10 and 5 as string


// შეგიძლია შენი assertuion ფუნქციების შექმნაც

function assertAddress(address: any): asserts address is string {
    if (typeof address !== "string") {
        throw new Error("Not a string!");
    }
    if(address.length < 3){
      throw new Error("Address must be above 3 characters");
    }
}

function createAddress(newAddress: any): void{
   assertAddress(newAddress);
   // newAddress is a string from that point if a string with 4+ characters
}

//                                                  ALIASES
// // imma just write the key notes, cuz 
// // you already know the gig with this one

// // | ის გამო არ compile დება ეს კოდი.

// // კლასს ვერ მიანიჭებ ეგეთ ტიპს.

// type Person = { name: string } | string;

// class Mother implements Person {
//   name: string = "";
// }

// // ასე მოსულა tho
// type Person = { name: string };
// interface Person2 {
//   name: string;
// }

// class Mother implements Person {
//   name: string = "";
// }

// class Father implements Person2 {
//   name: string = "";
// }

// a type with a union is not extendable
// an interface can extend another interface/type

// ესეთი თემაც მოსულა, რადგან
// ინტერფეისებზე მუშაობ და არა ტიპებზე

interface Person3 { // This interface could be in a third party package
  firstName: string;
}

interface Person3 { // This interface could be in your first party
  lastName: string;
}

let c20: Person3 = { firstName: "First", lastName: "Last" };
console.log(c20)




//                                                  COMPARING VARIABLES


// ts ში 1 == "1" compile error ს იძლევა

// შემდეგი ტოლობა false არის, cuz
// ინიციალიზაცია აქვთ ჩალკე
const value1Object = { m1: "test" }; //Not a primitive type: an object
const value2Object = { m1: "test" }; //Not a primitive type: an object
if (value1Object === value2Object) { // Reference check
    console.log("Should not print this line");
}


// შეიძლება ინტერფეისის გამოყენებისას
// ობექტზე, ამ ობიექტზე ნაკლები 
// წევრი ჰქონდეს ინტერფეისს. ამ დროს 
// compile ხდება, თუ ერთი წევრი მაინც ემთხვევა
interface ParameterType {
  m1: number;
}
interface NotRelatedType {
  m1: number;
  m2: string;
  m3: boolean;
}
interface NotRelatedTypeNoM1Number {
  m1: string; // Same member name thant "ParameterType" interface but the type is string
}

const i1: ParameterType = { m1: 1 };
const i2: NotRelatedType = { m1: 1, m2: "1", m3: true };
const i3: NotRelatedTypeNoM1Number = { m1: "1" };

function IWantParameterType(p: ParameterType): void {}
IWantParameterType(i1);
IWantParameterType(i2);
// IWantParameterType(i3); // Doesn't compile


// გაუგებარი გაქ აქ, Null და undefined ში იყო რაღაც


//სხვა მაგალით რომელიც გაიგე:
// undefined გაეძრობა როგორც false
let value2Boolean1: boolean | undefined = undefined;
let value2Boolean2: boolean | undefined = true;
let value2Boolean3: boolean | undefined = false;
if (!value2Boolean1) {
    console.log("This is false 1");
}
if (!value2Boolean2) {
    console.log("This is false 2");
}
if (!value2Boolean3) {
    console.log("This is false 3");
}

// წაიკითხე კომენტარები
const x20: boolean | undefined = undefined;
if (x20 == undefined) {
    console.log("x undefined");
}
if (x20 == false) { // if strictNullChecks is false it would go in this condition
    console.log("x is false");
}

// ასევე, უმჯობესია, რომ typeof x = "undefined"
// გამოიყენო ამ დროს და შეადარო არა undefined,
// არამედ მისი სახელი
const x: string | undefined = undefined;
if (x === undefined) {
    console.log("x undefined");
}
if (typeof x === "undefined") {
    console.log("x typeof undefined");
}
if (x === void 0) {
    console.log("x void 0");
}\


//                                                  TYPEOF




// ასე შეგიძლია ითხოვო ტიპიერთდან მეორეში
let myObject = { name: "test" };
let myOtherObject: typeof myObject; // Borrow type of the "myObject"
myOtherObject = { name: "test2" };
type TypeFromTypeOf = typeof myOtherObject; // Borrow 



// საინტერესო მომენტია ერთი.
// ვთქვათ, გაქვს ცვლადი, რომეოც შეიძ₾ება
// იყოს undefined, number ან string
// ამ დროს, თუ type check ს გაუკეთებ undefined 
// ზე და ის იქნება false, მაშინ ts დააწვრიებს ამ ტიპს 
// numer და string ამდე, რადგან მან იცის, რომ 
// undefined აღარ იქნება 
function functionCheckTypeOf(param1: number | string | undefined) {
    if (param1 === undefined) { // Check each type, first undefined directly
        console.log("It's undefined");
    } else if (typeof param1 === "number") { // Check primitive with typeof
        console.log("It's a number");
    } else if (typeof param1 === "string") { // Check primitive with typeof
        console.log("It's a string");
    }
}
functionCheckTypeOf(1);
functionCheckTypeOf("1");
functionCheckTypeOf(undefined);

// ინტერფეისებთან საქმე უფრო რთულადაა და მათ
// მერე განვიხილავთ

// instanceof()

// აკეთებს იგივეს რაც typeof მაგრამ კლასებში
// ინტერფეისებზე არ გამოიყენება
class C1 { m1!: string }
class C2 extends C1{ m2!:number }
const c12 = new C2();
if (c12 instanceof C1) {
  console.log("c2 is an instance of C1");
}
if (c12 instanceof C2) {
  console.log("c2 is an instance of C2");
} 

//დაჯე ერთნაირი სტრუქტურა თუ აქვთ,
// მაინც განსხვავებულ კლასებად ჩაითვლებიან
// instanceOf ით.

// ამის მერე გაუგებარი გქონდა ბევრი რამე


// inheritence ის დროს, არ შეიძლება
// რომ სხვადასხვა მნიშვნელობის მქონე ლიტერალები
// გადაეცეს მას, ერთი და იმავე წევრის სახით
interface Human {
  kind: "human";   //ეს და
  height: number;
  weight: number;
}

interface Animal {
  kind: "animal";  //ეს
  color: string;
}


// interface SuperHumanAnimal extends Human, Animal {

// }

// შეგიძლია ინტერფეისების შედარება
type Species = Human | Animal; 
let a21:Species = {kind:'human', height:133, weight:45}
function printData(species: Species): void {
  console.log(species.kind); // Only kind is available
  if (species.kind == "human"){
    console.log(`I am a human with the height of  ${species.height}`);
  } else if (species.kind == "animal"){
    console.log(`I am an animal with the color of  ${species.color}`);
  }
}

printData(a21);


// ასეც შეიძ₾ება გამოიყენო 
interface Branded<TName extends string> {
  kind: TName;
}

type USD = number & Branded<"USD">
type CDN = number & Branded<"CDN">

let money1 = 50 as USD;
let money2 = 20 as CDN;

// if (money1 === money2) {

// ამ კოდის უკეთესი ვერსია იქნება cast ის გარეშე

type supportedCurrencies = 'USD' | "CDN"
interface brandedMoney<Tname extends supportedCurrencies>{
  kind:Tname
}

function getMoney<T extends supportedCurrencies>(amount:number){
  return amount as number & brandedMoney<T>
}
let money3 = getMoney<"USD">(50);
let money4 = getMoney<"CDN">(20);


// A custom user-defined type guard 
// is a function that checks specific 
// parts of the structure of an object 
// to determine if it is one type or another. 

// მოკლედ, ამოწმებს არის თუ არა
// გადაცემული პარამეტრები ობიექტში
// და თუ არის, აბრუნებს true ს.
interface Person1 {
  firstName: string;
  lastName: string;
}

interface Animal2 {
  name: string;
  numberOfLegs: number;
}

let p4: Person1 = {
  firstName: "First",
  lastName: "Last"
};

let p5: Animal2 = {
  name: "Tiger",
  numberOfLegs: 4
};

function isPerson(obj: any): obj is Person1 {
  return obj.firstName !== undefined && obj.lastName !== undefined;
}

console.log(isPerson(p4)); // A Person
console.log(isPerson(p5)); // Not a Person, does not have firstName and LastName

// შეგიძლია აქაც დაწერო ის ფუნქცია რო იყო,
// რომელიც ტიპს ავიწროებდა

function show(p: Person1 | Animal2): void {
  if (isPerson(p)) {
    console.log(`It's a person with a first name: ${p.firstName}, and last: ${p.lastName}`)
  } else {
    console.log(`It's an animal: ${p.name}`)
  }
}
show(p4)
show(p5)

// შეგიძლია ესეთი რაღაცაც დაწერო in ის გამოყენებით
function isPerson1(obj: any): obj is Person {
  return "firstName" in obj;
}

// და მერე ეს გამოიყენო
// show ფუნქციაში პირველი if 
// ის არგუმენტად ან პირდაპირ 
// in გაუშვა მანდ(ჯობია ცალკე ფუნქციად ქნა
// cuz ტვინს მოტყნას 100 ჯერ ჩაწერა)



//                                                  NESTED PROPERTIES

// შემდეგი მიდგომა პრობლემურია
// და მისი კეთესი ვერსია არსებობს
interface MyType1 {
  level1?: {
    level2?: {
      level3?: {
        name: string;
      }
    }
  }
}

let ex1: MyType1 = {
  level1: {
    level2: {
      level3: {
        name: "Good"
      }
    }
  }
}
// შემდეგი კოდი არ გაეშვება, cuz ყველა lvl 
// შეიძლება იყოს undefined, ასე რომ უნდა შეამოწმო
// console.log(ex1.level1.level2.level3.name)
if (ex1.level1 !== undefined
  && ex1.level1.level2 !== undefined
  && ex1.level1.level2.level3 !== undefined) {
  console.log(ex1.level1.level2.level3.name);
}
// მარტო undefined ის მიმართ ამოწმებს, რაც ცუდია

// js ის სპეციფიურობების გამო, შეგიძლია ესეც ჩაწერო:
// if (ex1.level1
//   && ex1.level1.level2
//   && ex1.level1.level2.level3){...}

// ამის უკეთესი ვერსია არის TS ში

// ? ოპერატორის დახმარებით
// მოწმდება მნიშვნელობები.
// თუ არის undefined ან null
// დააბრუნებს undefined, თუ
// სხვა რამეა, აბრუნებს მნიშვნელობას
interface MyType2 {
  level1?: {
    level2?: {
      level3?: {
        name: string;
      }
    }
  }
}

let ex2: MyType2 = {
  level1: {
    level2: {
      level3: {
        name: "Good"
      }
    }
  }
}

console.log(ex2?.level1?.level2?.level3?.name);
let exUndef: MyType2 = {
  level1: {
    level2: undefined
  }
}

console.log(exUndef ?.level1 ?.level2 ?.level3 ?.name);

// შემდეგი ფუნქცია ამუშავდება მხოლოდ მაშინ,
// როცა optional პარამეტრი არსებობს
interface MyType3 {
  action: (s: string) => void;
}

let ex4: MyType3 = {
  action: (s: string) => { console.log(`Run ${s}`); }
}

function execute(name: string, operation?: MyType3): void {
  operation?.action(name);
}

execute("Fast", ex4);
execute("Slow");


// ?? არის საინტერესო ოპერატორი.
// თუ მარცხენა ნაწილი undefined ან null არის
// ასრულებს მარჯვნივ მითითებულ პირობას

interface Options {
  opt1: number;
  opt2: boolean;
}
function myFunction(id: number, options?: Options): void {
  let optionsOrDefault: Options = options ?? { opt1: -1, opt2: false };

  console.log(`myFunction with id ${id}`);
  if (optionsOrDefault.opt2) {
    console.log(`--> Has option 1 with value ${optionsOrDefault.opt1}`);
  }
}

myFunction(1);
myFunction(2, { opt1: 2, opt2: true });
myFunction(3, { opt1: 3, opt2: false });

// ofc, შეგიძ₾ია ფუნქციის აღწერისას გაუშვა 
// default value 
// function myFunction(id: number, options: Options = { opt1: -1, opt2: false }): void

// თუ გინდა, რომ ფუქნციამ დააბრუნოს
// რიცხვი, მაგრამ არის შანსი, რომ ის
// აბრუნებს undefined, შეგიძლია ?? გამოიყენო

function operation(): number | undefined {
  return Math.random() > 0.5 ? 500 : undefined;
        // თუ 0.5 ზე მეტია აბრუნებს 500 ს, თუ ნაკლები udefined
} // აბრუნებს რიცხვს ან undefined

let x22: number = operation() ?? -1;
console.log(x22);




//                                                  FOR-IN



// ახსნას არ საჭიროებს, აბრუნებს ნომრებს(მერამდენეა)
// can be used on objects as well
let list1: (number | string)[] = [1, 2, 3, "a", "b", "c"];
for (let i in list1) { // Loop all indexes, not values
    console.log(i); // Print: 0, 1, 2, 3, 4, 5
}

// for - of
// პითონის for i in list ს ჰგავს. არ მუშაობს ობიექტზე
let list2: (number | string)[] = [1, 2, 3, "a", "b", "c"];
for (let i of list2) { // Loop all values
    console.log(i); // 1, 2, 3, "a", "b", "c"
}
// forEach აქაც არის
let list3: (number | string)[] = [1, 2, 3, "a", "b", "c"];
list3.forEach((v: string | number, index: number, array: (string | number)[]) => {
    console.log("Value " + v + " at position " + index);
}); 
// პირველი წევრი არის წევრი, მეორე არის ინდექსი და მესამე არის array ს ტიპი



//არ ვიცი აქ value რას შვება, სხვა მხრივ
// პროსტა for loop არის object ზე



//                                                  ASYNC ITERATION




// Step 1 (Older version of TypeScript only)
(<any>Symbol).asyncIterator = Symbol.asyncIterator || Symbol.for("Symbol.asyncIterator");
// Step 2
function delay(ms: number): Promise<void> {
    return new Promise<void>(resolve => {
        setTimeout(resolve, ms);
    });
}
function getRandomSetChars(): string {
    const random = 1 + Math.floor(Math.random() * 5);
    let wordString = "";
    for (let i = 0; i < random; i++) {
        const letter = 97 + Math.floor(Math.random() * 26);
        wordString += String.fromCharCode(letter);
    }
    return wordString;
} 
// Step 3
async function* getRandomSetsChars(): AsyncIterableIterator<string> {
    for (let i = 0; i < 10; i++) {
        yield getRandomSetChars(); // return a random set of char
        await delay(200); // wait
        yield* [getRandomSetChars(), getRandomSetChars()]; // return two random sets of char
    }
}
// Step 4
async function addWordsAsynchronously() {
    for await (const x of getRandomSetsChars()) {
        console.log("Iterator loop:" + x);
    }
}
addWordsAsynchronously();



//                                                  ARRAYS


const arrskip1 = [0, , , 3, 4]; // Skipped array

arrskip1.forEach(i => {
    console.log("{" + i + "}");
});
console.log("This is undefined:" + arrskip1[1]);

// შეგიძ₾ია მინიჭების ოპერატორის დროსაც ქნა ეგრე
// C[1] = 200
// c[5] = 300
// გადაახტი 0,2,3,4 ს

// just like in python
let swap1 = 1; 
let swap2 = 2; [swap1, swap2] = [swap2, swap1]; 
console.log(swap1, swap2); 

//                                                  OBJECTS


// დესტრუქტურიზაცია ქვია, ცვლადს მიანიჭე შესაბამისი 
// ცვლადები ობიექტში(სახელი უნდა შეესაბამებოდეს)
const objToDesctruct1 = { destr1: 1, destr2: "2", destr3: true };
let { destr1, destr3} = objToDesctruct1; // Destructuration
console.log(destr3);


const objToDesctruct2 = { destr1: 1, destr2: "2", destr3: true };
let { destr2, ...remainingObjDestr1 } = objToDesctruct2;
console.log(remainingObjDestr1); // Does not have destr1

const objToDesctruct3 = { destr1: 1, destr2: "2", destr3: true };
let { destr1: newName } = objToDesctruct3; 
console.log(newName); 

// შეგიძ₾ია default value მიუთითო
const objToDesctruct4 = { destr1: 1, destr2: undefined, destr3: true };
let { destr2: newName2 = "default" } = objToDesctruct3;
console.log("Using default if undefined: ", newName2); // default

//                                                  ... OPERATOR

const arrOneToBeSpread = [1, 2, 3]; 
const arrTwoToBeSpread = [4, 5, 6, 7]; 
const mergedArrCopy = [...arrOneToBeSpread, ...arrTwoToBeSpread]; 

console.log(mergedArrCopy);


// same shit with objects
const objToClone = { prop1: 1, prop2: "2" }; 
const clonedObject = { ...objToClone }; 

console.log(objToClone === clonedObject); // Not the same



// იმის მაგივრად რომ ჩააკოპიროს innterobject ის 
// მნიშვნელობა, არეფერენსებს, მაგიტომ ერთი
// და იგივეა === ისთვის
const objToClone1 = { prop1: 1, prop2: "2", innerObject: { prop2: "3" } };
const clonedObject1 = { ...objToClone1 };
console.log(objToClone1.innerObject === clonedObject1.innerObject); // Same





// შეგიძლია დამატებითი რაღაცეებიცშეიტანო კოპირების დროს
const objToClone2 = { prop1: 1, prop2: "2" }; 
const clonedObject2 = { ...objToClone }; 
const clonedObjectWithMore = { ...objToClone2, prop3: "3", prop4: false }; 
console.log(clonedObjectWithMore);


// override 
const objToClone4 = { prop1: 1, prop2: "2" }; 
const clonedObjectWithMore2 = { ...objToClone4, prop2: "Override" }; 
console.log(clonedObjectWithMore2); 


// ამ დროს გადავა, მაგრამ კლასის შემთვევაშ არა
const objToCloneWithFunction = {
    prop1: 1,
    prop2: "2",
    funct1: function () {
        console.log("Prop1:", this.prop1);
    },
};
const clonedObjectWithoutFunc = { ...objToCloneWithFunction };
console.log(clonedObjectWithoutFunc); //{ prop1: 1, prop2: '2', funct1: [Function: funct1] }
clonedObjectWithoutFunc.funct1(); // Print 1
console.log(clonedObjectWithoutFunc.funct1 === objToCloneWithFunction.funct1);
objToCloneWithFunction.prop1 = 10000;
objToCloneWithFunction.funct1(); // Print 10000

// კალსის შემთვევა
class ClassToClone {
    public funct1() {
        console.log("Props1:", this.prop1);
    }
    constructor(public prop1: number, public prop2: string) {}
}
const classToClone = new ClassToClone(1, "2");
const classCloned = { ...classToClone };
console.log(classCloned); //{ prop1: 1, prop2: '2' }

// ამას რომ თავი აარიდო, ცვლადს მიანიჭე ეს ფუქნცია
// public funct2 = () => { console.log("Props1:", this.prop1); }




//                                                  BANG OPERATOR


//არ გამოიყენება პროექტებში, ამგრამ კაია რომ იცოდე
// ! ზეა ბაზარი
function functionForBang(s: string | undefined): void {
    // console.log("The first letter is ", s.charAt(0)); // Doesn't compile
    console.log("The first letter is ", s!.charAt(0)); // Crash but compile
    const v1 = s; // v1 type is string | undefined
    const v2 = s!; // v2 type is string
}
functionForBang(undefined);

// ამ დროს მოჟნა გამოყენება


let deferedInitialezVariable!: number[];
initialize();
deferedInitialezVariable.push(4);

function initialize(): void {
    deferedInitialezVariable = [0, 1, 2, 3];
}




//                                                  NAMESPACE, EXPORT


namespace namespace1 {
    export let variable_ns1: number = 1;
}

namespace namespace1 {
    export let variable_ns1_also: number = 2;
}

namespace namespace2 {
    export let variable_ns2: number = 3;
}

console.log(namespace1.variable_ns1);
console.log(namespace1.variable_ns1_also);
console.log(namespace2.variable_ns2);




//                                                  MODULES


// აგდია ერთ ფაილში, export უდნდა რომ
// ხელმისაწვდომი გადხეს მისი წევრები
let R1 = 5
export{R1}

let R2 = 10
export{R2 as k}

export const module1_variable1 = "test"; 
export interface module1_interface1 { m1: string; } 

// import
// export * from "./module1"; 

// import { module1_variable1, module1_interface1 } from "./module1"; 
// import * as EverythingFromModule1 from "./module1"; 


// export ის default ის დაყენებაც მოჟნა
// იდკ რაშია საერთოდ საჭრო, მაგრამ არსებობს
// ამბობენ ყლეობაა და ეცადე არ გამოიყენოო

// //One file named "module4.ts" 
// interface module4Interface { m1: string } 
// export default module4Interface; 
 
// // Another file 
// import Def from "./module4"; 
// const defModule4: Def = { m1: "A string" }




//                                                  LAZY LOADING


// ?????????????????????????????????????????






//                                                  IMPORT SHORTCUTS






// ????????????????????????????????????????????
//                                                  ARRAYS
//                                                  ARRAYS
//                                                  ARRAYS
//                                                  ARRAYS
//                                                  ARRAYS
//                                                  ARRAYS

// //???????????????????????????????????????????????????????????????????????????????????????????????????????????
// // რას შვება აქ DECLARE
// declare function ambientFunction(i: number): void;

// function myFunction(i: number) {
//   ambientFunction(1);
// }

// function mainFunction4() {
//   let innerFunction2;
//   let listFunctions2 = [];
//   for (let i = 10; i < 15; i++) {
//     innerFunction2 = function (param1: number) {
//       return param1;
//     };
//     listFunctions2.push(innerFunction2(i)); // ეს კოდი გადმოვიტანე მასალებიდან, მაგრამ მაინც ერორს აგდებს
//   }
//   for (let k = 0; k < 5; k++) {
//     console.log(listFunctions2[k]);
//   }
// }

// // მეშვიდე თავში იყო, ვერ გავიგე როგორ მუშაობს, ცვლადების ნაწილშ ვიბნევი. როგორ გამოვიდა, რომ for ის გაშვების
// // მერე არ ხდება რამე დიდი არეულობა და ყველაფერი(რიცხვები) ჯდებიან თავის ადგილზე
// // function analyzeString(literals: TemplateStringsArray, ...placeholders: any[]) {
// //     let result = "";
// //     for (let i = 0; i < placeholders.length; i++) {
// //         result += literals[i];
// //         result += "*" + placeholders[i] + "*";
// //     }
// //     result += literals[literals.length - 1];
// //     return result;
// // }

// // const number = 84;
// // const number2 = 100;
// // const endResult = analyzeString`The number is ${number} which is not like the second number ${number2}`;

// // console.log(endResult);



// //

// //

// //
// // undefined vs null ში "?" ის თემა ვერ გაიგე კარგად

// // never ის თემა მთლიანად

// // Unknown ის ctrl+f "In case you need to display a value in an object that has many"

// // რატომ აგდებს else ერორს(does not compile)
// // type OptionOpen = true | false | "true" | "false"; // Actuall : boolean | "true" | "false"

// // function openWindow(option: OptionOpen): void {
// //    if(option === "true" || option === true){

// //   } else if (option === "false" /* || option === false*/){

// //    } else{
// //      const c: never = option;
// //    }
// // }

// // casting resrictions ვერ გავიგე






// // generic with construction functions
// // სად უწესდება აქ კონსტრუქტორს შეზღუდვა?
// interface IMyInterfaceWithConstructor<T> {
//     new(param: string): T; // Force to have a constructor with the signature of 1 parameter that is a string
// }

// function createInstance<T>(ctor: IMyInterfaceWithConstructor<T>, param1: string): T { // Create a new type T
//     return new ctor(param1);
// }

// class C1 {
//     constructor(name: string) { // We can create from createInstance function because 1 parameter and string
//         console.log("Initializing class C1 with string: " + name);
//     }
// }

// class C2 {
//     constructor(name: string) { // We can create from createInstance function because 1 parameter and string
//         console.log("Initializing class C2 with string: " + name);
//     }
// }

// const inst1 = createInstance(C1, "Instance 1");
// const inst2 = createInstance(C2, "Instance 2");

// generic comparison

// generic ის ბოლო
// აზრზე არ ვარ ამ კოდს რა უნდა და რატო აგდებს შეცდომას. დაახლოებით 1000 ხაზზე გიწერია ეგ და შეასწორე თუ გაარკვევ
// interface TypeA {
//   prop1: string;
//   prop2: number;
// }

// function printProps1<T, K extends keyof T>(p1: T, p2: K[]): void { // Extends all properties' name of T
//   console.log("Printing:");
//   p2.forEach(propName => {
//     console.log(`Name: ${propName} and value: ${p1[propName]}`);
//   });
// }

// let a12: TypeA = { prop1: "p1", prop2: 2 };

// printProps1(a, ["prop1"]);
// printProps1(a, ["prop1", "prop2"]);



// anon and named funcs
// იდკ რითი განსხვავდება c სხვებისგან
// მაგრამ ის never ის მაგივრად void ს აბრუნებსო
// let a31 = () => {
//     throw new Error("A");
// }

// let b311 = function() { 
//     throw new Error("B");
// }

// function c111() { 
//     throw new Error("C");
// }



// uncomment never წერია, მარა ორივე შემთხვევაში transpile error ს აგდებს
// class BaseClass {
//     defineMeLater(): never { // Infer void, uncomment never to see the consequence
//         throw new Error("Define me in a subclass");
//     }
// }

// class SubClass extends BaseClass {
//     defineMeLater() {
//         console.log("SubClass code");
//     }
// }

// let c = new SubClass();
// c.defineMeLater();

// ფუნქციების მეოთხე თავის პირველივე მაგალითია. აზრზე არ ვარ აქ რა ხდება
//  function arrayMap<T, U>(f: (x: T) => U): (a: T[]) => U[] {     
//   return a => a.map(f); 
// } 
// const lengths: (a: string[]) => number[] = arrayMap(s => s.length); ``

// function relationship with this
// რატომ არ დასჭირდა this ს ტიპის მითთება, თუ წინა მაგალითში ეს საჭირო იყო
//     interface Family {
//         names: string[];
//         emotion: string;
//         print: () => void;
//     }
// const family: Family = {
//     names: ["Patrick", "Alicia", "Melodie"],
//     emotion: "love",
//     print: function() {
//         console.log("print", this); // this = the family object
//         return this.names.forEach((name: string) => {
//             console.log("forEach", this); 
//         });
//     },
// };
// family.print();

// mapped module ბოლო თემა conditionalები

// object ის მესამე ნაწილი


// KEYOF რო არის variable advanced ში, იმაში იყო ეს 
// Interface's members
// interface InterfaceWithMembers {
//     id: number;
//     title: string;
//     createdBy: Date;
// }

// const members: keyof InterfaceWithMembers = "id"; // Only accept id, title or createdBy

// // Type's values
// type TypeToKeyOf = "north" | "south" | "east" | "west";
// function fKeyOfParameter(direction: TypeToKeyOf) {}
// //fKeyOfParameter("no"); // Doesn't compile 
// fKeyOfParameter("north");





// tipescript inference

//infer ის ნაწილი

// try/ecept ასინქრონულებზე


//type checking, first one, Null and undefined with boolean first one

// isntanceof ის რაღაცეები ვერ გაიგე ტექსტში
\


// async iterations
// Step 1 (Older version of TypeScript only)
// (<any>Symbol).asyncIterator = Symbol.asyncIterator || Symbol.for("Symbol.asyncIterator");
// Step 2
// function delay(ms: number): Promise<void> {
//     return new Promise<void>(resolve => {
//         setTimeout(resolve, ms);
//     });
// }
// function getRandomSetChars(): string {
//     const random = 1 + Math.floor(Math.random() * 5);
//     let wordString = "";
//     for (let i = 0; i < random; i++) {
//         const letter = 97 + Math.floor(Math.random() * 26);
//         wordString += String.fromCharCode(letter);
//     }
//     return wordString;
// } 
// // Step 3
// async function* getRandomSetsChars(): AsyncIterableIterator<string> {
//     for (let i = 0; i < 10; i++) {
//         yield getRandomSetChars(); // return a random set of char
//         await delay(200); // wait
//         yield* [getRandomSetChars(), getRandomSetChars()]; // return two random sets of char
//     }
// }
// // Step 4
// async function addWordsAsynchronously() {
//     for await (const x of getRandomSetsChars()) {
//         console.log("Iterator loop:" + x);
//     }
// }
// addWordsAsynchronously();




// lazy loading

// import shortcuts



// index ებში ეს იყპ და რა უნდა ვერ ვხვდები
// interface MyStringDictionaryWithMemberss {
//   [key: string]: string;
//   m1: string;
//   m2: number
// }