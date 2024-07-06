let array=[1,2,5,6,4];
//array.length=0;
console.log(array);

let arr=new Array("1");
console.log(arr);


//using for loop for array iteration
for(let i=0;i<array.length;i++){
    console.log(array[i]);

}
let politicians=["cbn","ntr","kcr","ktr"];
politicians[2]="santhosh";
for(let x=0;x<politicians.length;x++){
    console.log(politicians[x]);
}
let evennumbers=[2,4,6,8,10] ;
for(let a=0;a<evennumbers.length;a++){
    console.log(evennumbers[a]*5);
}
let i=0;
while(i<array.length){
    console.log(array[i]);
    i++
}
let j=0;
while(j<arr.length){
console.log(arr[j]);
j++;
}
let k=0;
while(k<politicians.length){
    console.log(politicians[k]);
    k++
}
let x=0;
while(x<evennumbers.length){
    console.log(evennumbers[x]);
    x++
}
let a=0;
do{
    console.log(array[a]);
    a++;
}while(a<array.length);
let z=0;
do{
    console.log(arr[z]); 
    z++;

}while(z<arr.length);
let b=0;
do{
    console.log(politicians[b]);
    b++;
}while(b<politicians.length);
let c=0;
do{
    console.log(evennumbers[c]);
    c++;
}while(c<evennumbers.length);
for(let el of array){
    console.log(el);
}
for(let el of arr){
    console.log(el);
}
for(let el of politicians){
    console.log(el);
}
for(let el of evennumbers){
    console.log(el);
}
for(let el in array){
    console.log(el);
}
for(let el in arr){
    console.log(el);
}
for(let el in politicians){
    console.log("abc-",el);
}
for(let el in evennumbers){
    console.log(el);
}






