console.log("MATH FUNCTIONS")
console.log(Math.sqrt(400))
console.log(Math.sin(90))
console.log(Math.round(35.6127))
console.log(Math.exp(4))
console.log(Math.floor(Math.random()*10)+1) //Random numbers between 1 to 10. randon function returns values between 0 to 1
console.log(Math.sign(-32))
console.log(Math.log2(32))
console.log(Math.floor(35.54345))
console.log(Math.ceil(35.54345))
console.log(Math.floor(-35.54345))
console.log(Math.ceil(-35.54345))

console.log("STRING FUNCTIONS")
let str="Hello World"
console.log(str.length)
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.replace('e','s'))
console.log(str.replace('World', 'Divyanshu'))
console.log(str.indexOf('l'))
console.log(str.split())
console.log(str.split())
console.log(str.split(""))
console.log(str.split(" ").length)
console.log(str.search("Hello")) // It will give the index if match is found (hence, 0 here)
console.log(str.search("hi")) // 0 here as no match found
console.log(str.concat(". How are you?"))
console.log(str.slice(3,6)) // It will take the string from 3rd index till 5th index

console.log("DATE FUNCTIONS")
console.log(new Date())
let mydate = new Date();
let strDate = '2020-06-12'
console.log(new Date(strDate))
console.log(mydate.getDate())
console.log(mydate.getDay())
console.log(mydate.getFullYear())
console.log(mydate.getTime())
console.log(mydate.getUTCHours())
console.log(mydate.getTimezoneOffset())
console.log(mydate.getUTCHours())

console.log("ARRAY FUNCTIONS")
let arr = [15, 43, 7, 24, 59]
console.log(arr)
console.log(arr.sort())
console.log(arr.indexOf(43))
arr.push(44)
console.log(arr) // Pushed 44 in the array
arr.sort() // Sorted the array again
arr.pop() // Popped he last digit out of the array
console.log(arr) // Popped the last digit out of the array
// console.log(arr.splice(2,4)) // It will take the element from 2nd to 4th index including 2 and 4, i.e., index 2, 3 and 4 will be printed. It modifies the array.
// console.log(arr)
console.log(arr.slice(2,4)) // This will not modify the array and will show the elements from 2 to 4, excluding 4, i.e., index 2 and 3 will be printed.
console.log(arr)

console.log("OBJECT FUNCTIONS")
let emp= {name:'Divyanshu', id:1720, salary:45000}
console.log(emp)
console.log(emp.name)
console.log(emp.salary)
