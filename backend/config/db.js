const mongoose = require("mongoose")

const connectDB = async() =>{
    try{
        mongoose.set('strictPopulate', false);
        const conn = await mongoose.connect(process.env.MONGO_URI ,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    .then(()=>{
        console.log("Mongo DB connected")
    })
    
    } catch(error){
        console.log(error.message)
        process.exit()
    }
    
}

module.exports = connectDB