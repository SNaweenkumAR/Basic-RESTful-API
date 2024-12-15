const express =require('express');
const app=express();
const path = require('path');
const {logger} = require('./Middleware/logEvents');
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const errorHandler = require('./Middleware/errorHandler')
const corsOption = require('./config/corsOption')

//from logevents
app.use(logger);

//cors - cross origin resource sharing
app.use(cors(corsOption));


//to encode the url
app.use(express.urlencoded({extended:false}))
//to encode the json
app.use(express.json())
//to encode the 
app.use('/',express.static(path.join(__dirname,"./public")))
// app.use('/subdir',express.static(path.join(__dirname,"./public")))


app.use('/',require('./Routes/root'));
app.use('/subdir',require('./Routes/subdir'));
app.use('/employee',require('./Routes/api/employee'));

//get the file | '/'=> path url
app.all('*',(req,res)=>{

    res.status(404);
    //accept that defint its type 
    if(req.accepts('html')){
    res.sendFile(path.join(__dirname,'views','404.html') )
    }
    else if(req.accepts('json')){
        res.json({"error":"404 page not found"})
    }
    else{
        req.type('txt').send("404 Not Found")
    }
   
});
app.use(errorHandler)

app.listen(PORT,()=>{console.log(`server launch on localhost:${PORT}`)});

