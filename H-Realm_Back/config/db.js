import { mongoose } from "mongoose";
const url = "mongodb+srv://Clement:ouiouibaguette@cluster0.jpwzpin.mongodb.net/?retryWrites=true&w=majority";
const db = mongoose.connection;

mongoose.connect(url);
db.on("error", (err) => console.log(err));
db.on("open", () => console.log("Connected to DATABASE"));

export default { db };