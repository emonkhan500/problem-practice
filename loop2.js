// let i=0
//  while( i<=200){
//     if(i===100){
//         break
//     }
//     console.log(i);
//     i++
//  }

//  closure
// function outer() {
//   let count = 0;

//   function inner() {
//     count++;
//     console.log(count);
//   }

//   return inner;
// }

// const counter = outer(); // outer() runs and returns inner()
// counter(); // 1



// 
const original = [1, 2, 3];

// Using spread operator
// const copy1 = [...original];

// Using slice()
const copy2 = original.slice(2);
console.log(copy2);


let i = 1;
while( i <=200){
    if(i===100){
        break
        
    }
    console.log(i)
    i++;
}