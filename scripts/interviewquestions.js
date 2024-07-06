//function to create a reverse string by using for loop?
function reverseString(str){
    let reversed="";
    for(i=str.length-1;i>=0;i--){
        reversed+=str[i];
    }
    return reversed;
}
console.log(reverseString("python"));
function arraystring(num){
    let x="";
    for(let i=num.length-1;i>=0;i--){
        x+=num[i];
    }
    return x;

}
console.log(arraystring("mango,banana"));
//removing duplicate array items by using for each
let array=[1,2,3,1,2];
let y=[];
array.forEach(element => {
    if(!y.includes(element)){
        y.push(element); 
    }
    
});
console.log(y);
//removing duplicate array items by using for of?
function duplicate(j){
    let b=[];
    for(let k of j){
        if(b.indexOf(k)===-1){
            b.push(k);
        }
    }
    console.log(b);

}
duplicate(array);
//removing duplicate array items by using set new
function functionname(params) {
    let z=[...new Set(params)];
    console.log(z);
    
}
functionname(array);
const number = parseInt(prompt(5));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
 