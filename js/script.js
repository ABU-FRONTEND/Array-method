// function push(arr, newItem) {
// arr[arr.length] = newItem
// return arr
// }
// console.log(push(["aaa"], "abujan"));


let arr = ["abdusamad", "latipov"]
let str = "abdusamad"

// function pop(arr) {
//    let emptyArr = []
//    for (let i = 0; i < arr.length - 1; i++){
//       emptyArr[i] = arr[i]
//    }
//    return emptyArr
// }
// console.log(pop(arrrr));



// function unShift(arr, item){
//    let arr2 = [];
//    for (let i = 0; i < arr.length; i++) {
//        arr2[i+1] = arr[i];
//    }
//    arr2[0] = item
//    return arr2;
//    }
// console.log(unShift(arrrr, "abdusamad"));




// function Shift(arr){
//    let arr2 = [];
//    for (let i = 0; i < arr.length - 1; i++) {
//        arr2[i] = arr[i+1]
//    }
//    return arr2
//    }
// console.log(Shift(arrrr));



function join(arr, item) {
   let res = ''
   for(let i = 0; i < arr.length; i++){
      res += arr[i] + item
   }
   return res
}
console.log(join(arr, " "));

// function join(arr) {
//    let res = []
//    for(let i = 0; i < arr.length; i++){
//       res[i] = arr[i]
//    }
//    return res
// }
// console.log(join(str));