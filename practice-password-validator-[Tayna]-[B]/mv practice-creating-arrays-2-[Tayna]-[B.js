mv practice-creating-arrays-2-[Tayna]-[B]
let myArray = newArray(7);
myArray.fill("Hello");
console.log(myArray);
let myArray = new Array(7).fill("Hello");
myArray.fill("Hi", 0, 3);
console.log(myArray);
let myArray = newArray(5);
for(let i =0; i < myArray.length; i++) {
    myArray[i] = i * 10;
}
console.log(myArray);
