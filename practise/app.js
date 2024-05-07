// 1:
// function Oson1(a) {
//     this.a = a
//     this.autputA = function () {
//         return this.a;
//     }
// }

// let o1 = new Oson1('Hello')
// let o2 = new Oson1(20)
// console.log(o1.autputA());
// console.log(o2.autputA());

// 2:
// function Oson2(a, b) {
//     a,
//     b,
//     this.summa = function(){
//         return a + b;
//     }
// }
// const o3 = new Oson2(4, 6);
// console.log(o3.summa());

// 3:
// function PlusMinus(a) {
//     a,
//     this.show = function() {
//         if(a > 0){
//             return `${a}: psitive`;
//         }else{
//             return `${a}: negative`;
//         }
//     }
// }
// const a = new PlusMinus(-2);
// console.log(a.show());

// 4: 
// add my