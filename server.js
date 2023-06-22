const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const colors = require("colors")
const dotenv = require("dotenv")
const path = require("path")
const connectDB = require("./config/connectDB")

dotenv.config();
connectDB();

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/api/v1/users' , require("./routes/userRoutes"));

app.use("/api/v1/transections", require("./routes/transectionRoutes"));

app.use(express.static(path.join(__dirname , './client/build')))

app.get('*' , function(req,res){
    res.sendFile(path.join(__dirname , './client/build/index.html'));
})

const PORT=8080 || process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
});



