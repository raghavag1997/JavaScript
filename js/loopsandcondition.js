// This file is for understanding if else swith and loops 
//if else

let age=19
if (age===19)
{
    console.log(`Your age is ${age} `)
}
else
{
    console.log(`I dont know your age`)
}

//Switch case statement
marks=12
switch (marks) {
    case age=19:
        console.log("Hi")
        break;
    default:
        console.log("Not Found");
}

//For loop 
for (let i = 0; i < 10; i++) {
    console.log(i)
}

//for loop with Break 
for (let i = 0; i < 10; i++) {
    if ( i ===5)
    {
        break;
    }
    console.log(i)
}

//while loop
let j=0 
while (j<5) {
    console.log(j)
    j=j+1
}

//dowhile loop
k=0
do {
    console.log(k)
    k=k+1
} while (k<5);

//loops for iterating array and objects

//for array 

let arr=['a','b','c','d','e']
arr.forEach(function(element){
    console.log(element)
});

//it can de with for loop also

for (let index = 0; index < arr.length; index++) {
    console.log(arr[index])
}


//for objects
let obj={
    name: 'Raghav',
    RollNo: '15EJICS089',
    University: 'RTU'
}
for (let key in obj) {
    console.log(key + ': ' + obj[key])
}

