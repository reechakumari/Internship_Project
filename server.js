const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

//connect to mongoose
mongoose.connect("mongodb+srv://Reecha:Reecha@123@cluster0.ido6s.mongodb.net/Asset_DB", 
{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true  
});

//require route
app.use("/", require("./routes/noteRoute"));

app.listen(3001, function() {
    console.log("express server is running on port 3001");
})

