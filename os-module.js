//OS Module
const os=require('os')

//info about current user
const user=os.userInfo()
console.log(user)

//method returns system uptime in seconds
console.log(`The system uptime is ${os.uptime} seconds`)

const currentOS={
    name:os.release(),
    release:os.release(),
    freeMem:os.freemem(),
    totalMem:os.totalmem(),
}
console.log(currentOS)