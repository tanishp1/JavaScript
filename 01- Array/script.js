// 1. push

// let arr  = [1,2]
// arr.push(3);
// console.log(arr);
 
// 2. pop

// let arr = [1, 2, 3]
// arr.pop();
// console.log(arr)

// 3. shift

// let arr = [1, 2, 3]
// arr.shift();
// console.log(arr)

// 4. unshift 

// let arr =  [2, 3]
// arr.unshift(1);
// console.log(arr)

// 5. map

// let arr = [1, 2, 3]
// let newArr = arr.map(function(val){
//     return val * 2;
// })
// console.log(newArr);

// 6.filter

// let arr = [1, 2, 3, 4]
// let newArr = arr.filter(function(val){
//     if(val % 2 == 0 ){
//         return val;
//     }
// })
// console.log(newArr);

// 7. reduce

// let arr = [ 1, 2, 3]
// let newArr = arr.reduce((accumulator, val)=> {
//     return accumulator + val;
// },0)
// console.log(newArr)

// 8. forEach

// let arr = [1, 2, 3]
// arr.forEach(function(val){
//     return val;
// })
// console.log(arr);

// 9. find

// let arr = [1, 2, 3]
// let newArr = arr.find(function(val){
//     if(val == 2){
//         return val;
//     }
// })
// console.log(newArr);

// 10. sort

// let arr = [1, 2, 3, 5, 4]
//  let newArr = arr.sort((a ,b)=> b - a )
// console.log(newArr);

// 11. slice

// let arr = [ 1, 2, 3, 4, 5]
// let newArr = arr.slice(1, 4);
// console.log(newArr);

// 12. splice

let arr = [1, 2, 3, 4]
 arr.splice(1, 2, 'a', 'b');
console.log(arr)