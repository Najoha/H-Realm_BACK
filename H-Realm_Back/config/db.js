const { default: mongoose } = require("mongoose");
//const MONGO_URI = "mongodb+srv://Clement:ouiouibaguette@cluster0.jpwzpin.mongodb.net/?retryWrites=true&w=majority"
const MONGO_URI = "mongodb+srv://ME:oui@h-realm.uadxt.mongodb.net/?retryWrites=true&w=majorityy"

const db = mongoose.connection;

exports.connect = () => {
    mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("Successfully connected to database")
    })
    .catch((error) => {
        console.log("database connection failed. exiting now...");
        console.error(error);
        process.exit(1);
    })
}

/*mongoose.connect(MONGO_URI);
db.on("error", (err) => console.log(err));
db.on("open", () => console.log("Connected to DATABASE"));


module.exports = { db };*/