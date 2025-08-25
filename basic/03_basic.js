// conversion of data types
let age=45
let score="33"// 33 like a number but in double quote then that is string
let up="33abc"
console.log(typeof age)
console.log(typeof score) // both showing number data type
//now how to convert string to number and number to string
let valuenumber=String(age)//change from number to string
let scorenumber=Number(score)//change form string to number
console.log(typeof valuenumber)
console.log(typeof scorenumber)
console.log(scorenumber);
let upscore=Number(up)// that one convert in number but value show nan(not a number)
console.log(typeof upscore)
console.log(upscore)//output not a number(nan)
//Nan : unique value is js when we try to convet string to number but value not a pure number then show nan that one flaw in js thats why many time use typescript for typecasting.
//beacuse in js show nan like 3abc is string then convert in number but complie convert the string but value show nan beacues not a pure number

let hero=null
let herro=Number(hero)//output 0
console.log(typeof herro)//convert to number
console.log(herro)//null output 0
let kk=undefined
let kkk=Number(kk)//output nan not a number
console.log(kkk)