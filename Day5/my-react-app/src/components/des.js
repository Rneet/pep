// const user = {
//     regno: 100,
//     name: 'John Doe',
//     age: 32,
// };

// let { name, ...rest } = user;

// console.log('Name:', name);
// console.log(rest);

// export default user;

function myfun(val){
    console.log(val(), "This is a function");
}
function callback(){
    console.log("This is a callback function");
    return "This is a callback function";
}
myfun(callback);