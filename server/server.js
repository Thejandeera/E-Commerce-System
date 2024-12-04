const express = require('express');
const { default: mongoose } = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require ('cors');

mongoose.connect('mongodb+srv://thejan1010:E7CB_96c7@cluster0.t7pvi.mongodb.net/').then(()=>console.log('MongoDB Connected..!')).catch(error=>console.log(error));


const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors ({
        origin : 'http://localhost:5173/',
        methods : ['GET','POST','Delete','PUT'],
        allowedHeaders : [
            "Content-Type",
            "Authorization",
            "Cache-Control",
            "Express",
            "Pragma"
        ],credentials : true
    })
)
app.use(cookieParser());
app.use(express.json());
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
