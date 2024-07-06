const data = [{name: 'santhossh', age: 25}, {name:"ganesh", age: 23},{name: "lucky", age: 21}];
for(let x of data){
    x.number=8688952574;
    x.schoolname="sps";
    console.log(x);
}
//using for each method on array
data.forEach(y=> {
    y.collage="scs"
    console.log(y);
    
});

const numbers=[1,2,3,4,5,6,7,8,9,10];
const evennumbers=numbers.map((item,index,numbers)=>{
if(item%2==0){
    return index;

};
});
console.log("evennumbers",evennumbers)
const evennumber=numbers.filter((item,index,numbers)=>{
    if(item%2==0){
        return item;
        
    };
    
})
console.log("evennumbers-",evennumber);



// create an object
// const person = {
//     fullName: "santhosh Naik",
//     position: "Software Developer",
//     age: 26
// };
// person['number'] = 7093946332;
// person.email = "santhuceo19@gmail.com";
// console.log(person);
// console.log(person['fullName']);

// what is map? => an array method - iteration, callback function
// callback examble
// const displayOne = () => {
//     console.log("this is display one");
// };

// const displayTwo = (x) => {
//     console.log("this is is display two");
//     x();
// };

// displayTwo(displayOne);
const newData = data.map((item, index, data)=>{
    let newItem = item.age * 7 + index;
    let newName = item.name + " JavaScript Developer";
    return {newItem, newName};
});
console.log("newData____", newData);