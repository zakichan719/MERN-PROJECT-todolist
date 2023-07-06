const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()
 


const routes = require("./routes/ToDoRoute");

const app = express();
const PORT =  process.env.port || 5000





app.use(express.json());
app.use(cors());

//mongodb
  
mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Mongodb Connected..."))
    .catch((err) => console.error(err));
// Routes
app.use(routes);


// ... define your routes and middleware ...

app.listen(PORT, () => console.log(`Server is running on port   ${PORT}`));
