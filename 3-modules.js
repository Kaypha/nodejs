//GLOBALS-NO WINDOW
//__dirname-path to current directory
//__filename-file name
//require- function to use modules
//module-info about current module/file
//process-info about env where the program is being executed
require('./mind-grenade')
console.log(__dirname)
setInterval(()=>{
    console.log('Hello World')
}, 1000)

//Modules-Encapsulated code(only share minimal)
//Every file in node is a module 
const John='John'
const sayHi=(name)=>{
    console.log(`Hello There ${name}`)
}
sayHi('Susan')
sayHi(John)