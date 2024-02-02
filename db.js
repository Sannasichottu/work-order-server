const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(`MongoDB is connected to the host : ${process.env.PORT}`)
  })
}

module.exports = connectDatabase

// module.exports = () => {
//     const connectionParams = {
//         useNewUrlParser : true,
//         useUnifiedTopology:true
//     };
//     try {
//         mongoose.connect(process.env.DB, connectionParams);
//         console.log("Connect to database successfully")
//     } catch (error) {
//         console.log(error);
//         console.log("Could not connect")
//     }
// }