//--HOMEWORK--HOMEWORK--HOMEWORK--HOMEWORK--HOMEWORK--HOMEWORK

// Edabit challenges
// Challenge 1:
function spelling(str) {
	return str.split('').map((_, i) => str.slice(0, i+1));
}
console.log(spelling('home'));

// Challenge 2: ??????
// function charIndex(word, char) {
//     let firstIndex;
//     let lastIndex;
//     if(!word.includes(char)){
//         return('undefinedc');
//     }
// }

// console.log(charIndex('goodbye', 'y'));

// Challenge 3:
// const arr = ['cherry', 'apple', 'banana', 'cherry', ]
// function removeDups(arr) {
//     return arr.filter((item, index) => arr.indexOf(item) === index);
// }

// console.log(removeDups(arr));

// Challenge 4:
// const arr = [1, 2, 3, 4, 5, 6];
// function mirror(arr) {
//     let reversedPart = arr.slice(0, arr.length-1).reverse();
//     return resultMirror = arr.concat(reversedPart);

// }
// console.log(mirror(arr));

// Challenge 5:
// let num = [123456789];
// let result;
// function reverseArr(num) {
//     return result = String(num).split('').reverse().map(Number);
// }
// console.log(reverseArr(num));

// Challenge 6:
// const names = ['bOb', 'keylie', 'SAID', 'akmaL'];

// function capMe(names) {
//     return names.map((name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
// }

// console.log(capMe(names));


// Challenge 7:
// let str = '13,5k 4k 33k 40 750'
// function transformUpvotes(str) {
//     return str.split(' ').map((number) => {

//         if(number.includes('k')){
//             return parseFloat(number) * 1000;
//         }else{
//             return parseInt(number);
//         }

//     });
// }

// console.log(transformUpvotes(str));

// Challenge 8: 
// function reverseImage(arr) {
//     let innerArr = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i].length === 1){
//             innerArr.push(arr[i]);
//         }else{
//             innerArr.push(arr[i].reverse());
//         }
//     }
//     return innerArr
// }

// console.log(reverseImage([
//     [1, 0, 0],
//     [0, 1, 0],
//     [0, 0, 1],
// ]));

// Challenge 9: ??


// Challenge 10: ???


// Challenge 11:
// function sumOddAndEven(arr) {
// 	let [even, odd] = [0, 0]
// 	arr.forEach(i => i%2 ? odd += i : even += i);
// 	return [even, odd];
// }

// Challenge 12:
// const arr = ['apple', 'banana', 'cherry', 'apple', 'cherry'];
// function findIndex(arr, n) {
//     return arr.indexOf(n)
// }
// console.log(findIndex(arr, 'apple'));

// Challenge 13:
// function word(s) {
//     const numberMap = {
//         zero: 0,
//         one: 1,
//         two: 2,
//         three: 3,
//         four: 4,
//         five: 5,
//         six: 6,
//         seven: 7,
//         eight: 8,
//         nine: 9,
//         ten: 10,
//     }
//     return numberMap[s]
// }

// console.log(word('three'));

// Challenge 14:
// const str = ['23.4', '12.5', '12.5', '12.5']
// function toNumberArray(str) {
//     return str.map(num => +num)
// }

// console.log(toNumberArray(str));

// HOMEWORK--HOMEWORK--HOMEWORK--HOMEWORK--HOMEWORK--HOMEWORK


// PRACTISE

// Challenge: pad():
// const studentId = '1234';
// console.log(studentId.padStart(6, '0' ));

// Object Challenge:
// const name = 'Heygi';

// const person = {
//     name: 'John',
//     age: 30,
//     hobbies: ['reading', 'music', 'sports'],
//     address: {
//         street: '50 main st',
//         city: 'Boston',
//         state: 'MA'
//     },
//     getInfo: () => {
//         return `User's name: ${this.name}`
//     }
// }
// console.log(person.getInfo());

// IIFE FUNCTION:
// const word = 'Hello'
// ;(function(){
//     const name = 'Heygi';
//     console.log(name);
// })();

// ;(()=>{
//     const name = 'Heygi';
//     console.log(name);
// })()


// CONSTRUCTOR FUNCTION :
// function Person(name, age, country) {
//     this.ism = name;
//     this.yosh = age;
//     this.davlat = country;
//     this.getInfo = () => {
//         console.log(`${this.ism} is ${this.yosh} years old, and lives in ${this.davlat}.`);
//     }
// }

// let person1 = new Person("Helen", 23, 'Qatar');

// console.log(person1.getInfo());



// JWT

/*
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWdlIjoyMywiaWF0IjoxNTE2MjM5MDIyfQ
_gL1gYMeC3UvsyN2lzdDy4R_jrEQCuKNWZ4gzKzF0M0
*/

// JSON | parse() => convert string to object | atob() => translates
// let userData = 'eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWdlIjoyMywiaWF0IjoxNTE2MjM5MDIyfQ';
// console.log(JSON.parse(atob(userData)));

// Word version
// let word = 'Hello';
// console.log(JSON.stringify(word)); // double string

// Object version
// let user = {
//     name: 'Kei',
//     age: 23,
// }

// console.log(user);
// console.log(JSON.stringify(user)); // freezed like zip

// let user = {
//         name: 'Kei',
//         age: 23,
//     }

// let v1 = JSON.stringify(user);
// let v2 = JSON.parse(v1);
// console.log(v1);
// console.log(v2);


// Array version
// let fruits = ['apple', 'pear', 'banana'];

// let v1 = JSON.stringify(fruits);
// let v2 = JSON.parse(v1);
// console.log(v1);
// console.log(v2);


// Split
// let userEmail = 'hojiakbar7796@mail.ru';
// let cutVersion = userEmail.split('@')
// console.log(cutVersion[0]);

// Reverse a number
// let num = 1234148
// let reversedNum = String(num).split('').reverse().map((number) => +number);
// let reversedNum = String(num).split('').reverse().map(function(number) {return +number});
// let reversedNum = String(num).split('').reverse();

// let sum = [];
// for(let i = 0; i < reversedNum.length; i++){
//     sum.push(+reversedNum[i])
// }

// console.log(sum);

// FINDING LETTER LENGTH:
// let sentence = 'How are you?'
// let numOfLetters = sentence.split('').filter(i => i != ' ').length;
// console.log(numOfLetters);

// Sorting numbers

// let ranNumbers = [2,1,44,22,6,9,4];
// let sortedNum = ranNumbers.sort((a, b)=> a-b);

// console.log(sortedNum);

// let ranNumbers = [2,1,44,22,6,9,4];
// let sortedNum = ranNumbers.sort((a, b)=> b-a);

// console.log(sortedNum);


// INDEXOF:

// let arr = ['apple' , 'banana' , 'cherry'];
// let word = 'apple';

// console.log(arr.indexOf('cherry'));
// console.log(word.indexOf("e"));

// // INCLUDES
// let word = 'helloh';
// console.log(word.includes('h',word.indexOf('l')+1));


// challenge

// object tartiblash