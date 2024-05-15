const mongoose = require("mongoose");
const dot = require("dotenv");
const list = require("./todo");
dot.config();
async function backEnd() {
    try {
        await mongoose.connect(process.env.connectdb, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}
const todoSchema = mongoose.Schema({
    task: String,
});
const todo = mongoose.model("todo", todoSchema);
todo.insertMany(list)
    .then(() => console.log("Data sent"))
    .catch((err) => console.error("Error sending data:", err));
module.exports = {
    connectdb: backEnd,
    model: todo,
};

