let arr1 = ["A", true, 2];

console.log("\n******** Push and Pop ********\n");
console.log(arr1.push("new  value"));
console.log(arr1);
console.log(arr1.push(4));
console.log(arr1);
console.log(arr1.push("Oba"));
console.log(arr1);

console.log(arr1.pop());
console.log(arr1);
console.log(arr1.pop());
console.log(arr1);

console.log("\n******** Shift and unshift ********\n");
console.log(arr1.unshift("new value"));
console.log(arr1);
console.log(arr1.unshift(7));
console.log(arr1);
console.log(arr1.unshift(777575));
console.log(arr1);

console.log(arr1.shift());
console.log(arr1);

console.log("\n******** Concat ********\n");
let arr2 = ["B", false, 3];
let newArr = arr1.concat(arr2);
let newArr2 = arr2.concat([1, 2, 3]);
console.log(newArr);
console.log(newArr2);