// 1. calculateDiscount
function calculateDiscount(price,discount){
    return price - (price * (discount / 100));
}

// 2. mergeArrays 
function mergeArrays(arr1, arr2){
    return [...arr1, ...arr2];
}

// 3. logArgument
// function logArguments(...args){
//     console.log(args);
// }

// 4. createMessage




//5. sum
function sum(a, b, c){
    return a + b + c;
}  

// 6. createUserProfile function
function createUserProfile(username, age = 25, country = "Unknown"){
    return{
        username: username,
        age: age,
        country: country
    };
}
  
console.log('Discount: ' + calculateDiscount(100,10))
console.log('Arrays: ' + mergeArrays([1, 2], [3, 4])); 
console.log('Sum: ' + sum(10,20,30));
console.log(createUserProfile("Bin"));