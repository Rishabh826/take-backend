

const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://rishu411085:XyNLeWrsZkBUIsDR@cluster0.g4z7b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const connectToMongo =()=>{
    mongoose.connect(mongoURI)
  
    .then(() => {
        console.log("DB successfully connected");
    })
    .catch((err) => {
        console.log("DB CONNECTION ISSUES");
        console.error(err);
        process.exit(1);
        })
}
module.exports = connectToMongo;