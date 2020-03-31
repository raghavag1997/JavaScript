let name='Raghav';
let sirname ='Agarwal';
console.log(name+" "+sirname);

// 1 Function String mEthods
console.log(name.concat(sirname))

console.log(name.length)

console.log(name.toUpperCase())

console.log(name.toLowerCase())

console.log(name.substring(1,3))

console.log(name.slice(0,5))

console.log(name.replace('Raghav','Agarwal'))

console.log(name.split(''))

console.log(name.charAt(3))

console.log(name.indexOf('R'))

test=`<h1> ${name} ${sirname} </h1>`
document.body.innerHTML=test