const mongoose = require('mongoose');

const database =  async () => {
await mongoose.connect(process.env.DB_URL)
.then(()=>{
    console.log("mongodb connected");
})
.catch((e)=>{
    console.log('failed');
    console.log(e);
})
}
module.exports = database;