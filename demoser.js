const express = require('express');
const app = express();
const PORT = 4000;
const path =require('path');

app.use(express.static(path.join(__dirname,"./public")))

app.get('/',(req,res) => {
    console.log(`${res.url} \t ${res.method}`);
    res.sendFile(path.join(__dirname,"views","index.html"))
})





app.listen(PORT,() => {console.log(`Demo server runnong on localhost:${PORT}`)})