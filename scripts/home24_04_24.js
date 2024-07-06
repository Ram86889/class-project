//removing duplicate array using foreach method

let x=["apple","banana","mango","guava","mango","apple"]; 
let y=[];
x.forEach(element => {
    if(!y.includes(element)){;
    y.push(element);
    }
     
});
console.log(y);
//removing duplicate array using for loop
function getUnique(a){
    
    let z = [];
    
    // loop through array
    for(let i of a) {
        if(z.indexOf(i) === -1) {
            z.push(i);
        }
    }
    console.log(z);
}

const array = [1, 2, 3, 2, 3];

// calling the function
// passing array argument
getUnique(array);
function functionname(k){
    let c=[]
    for(let j of k){
        if(c.indexOf(j)=== -1){
            c.push(j);
        }
    }
    console.log( "abc",c);
}
functionname(x);
// program to remove duplicate value from an  by using set method

function getUnique(c){

    // removing duplicate
    let uniqueArr = [...new Set(c)];

    console.log(uniqueArr);
}


// calling the function
getUnique(array);