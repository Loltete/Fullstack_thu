const res = require("express/lib/response");

const promise = new Promise((resolve,reject)=>{
    const res = false
    if (res){
        resolve('Rosolved')
    }else{
            reject(console.error('Fatal Error'));
        }
})

promise.then(
    (res) => console.log(res),
    (err) => console.log(err)
)