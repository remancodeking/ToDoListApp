const mongoose = require('mongoose');
const doenv = require("dotenv")
const env = doenv.config()
main().then(()=>{
    console.log('connectd...')
}).catch(err =>{ 
  console.log('connection problem')
  console.log(err)
});

async function main() {
  await mongoose.connect(process.env.DATABAST_URl);
}

module.exports =  main