const express = require("express");
const { connectdb,model } = require("./mongoose");
const route = require("./routes")
const app = express();
const cors = require("cors")
app.use(cors())
function getted(){
    return model.db.readyState === 1
}
app.use("/",route)
app.get("/ping", (req, res) => {
    const ret = getted();
    const cra = ret?"successfully":"not successful";
    response.send(cra)
    // return res.send("connected");
});
app.listen(4000, () => {
    connectdb()
    console.log("This is Express.js file.");
});


