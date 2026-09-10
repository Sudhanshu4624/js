// for

// for (let i = 0; i < 11; i++) {
//     const element = i;
//     console.log(element);
    
// }

for (let i = 1; i < 11; i++){
    // console.log(`Multiples of ${i}`);
    for (let j = 1; j < 11; j++) {
        // console.log(`${i} * ${j} = ${i*j}`);
        
        
    }
   
}

// let newArray = ['mango','banana','kiwi','apple']

// for (let index = 0; index < newArray.length; index++) {
//     const element = newArray[index];
//     console.log(element);
    
// }

// break and continue
// for (let index = 1; index <= 10; index++) {
//     if (index == 6) {
//         console.log(`SIXER DETECTED`);
//         break
//     }
//     console.log(`THE index VALUE IS ${index}`);
   
// }
for (let index = 1; index <= 10; index++) {
    if (index == 6) {
        console.log(`SIXER DETECTED`);
        continue
    }
    console.log(`THE index VALUE IS ${index}`);
   
}