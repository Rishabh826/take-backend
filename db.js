

const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://user1:test@cluster0.ufr73.mongodb.net/?authSource=https%3A%2F%2Fcloud.mongodb.com%2Fv2%2F66b9f339b912f25059e45bba%23%2Fclusters%2Fdetail%2FCluster0";
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