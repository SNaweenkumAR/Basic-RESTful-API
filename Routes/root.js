const express=require('express');
const router = express.Router();
const path=require('path');



router.get('^/$|/index(.html)?',(req,res) => {        //regular expression ^ - denotes or working like or
    console.log(`${req.url} \t ${req.method}`);
    res.sendFile(path.join(__dirname,'..','views','index.html'));
});
router.get('/new-page(.html)?',(req,res) => {  // ()? => if its is exist or not it will be ok
    console.log(`${req.url} \t ${req.method}`);
    res.sendFile(path.join(__dirname,'..','views','new-page.html'));
});
router.get('/old-page(.html)?',(req,res) => {  // ()? => if its is exist or not it will be ok
    console.log(`${req.url} \t ${req.method}`);
    res.redirect(301,'new-page.html');
    //redirect => we will mention its 301
    //301 => permanently change location status
    //302 => temporary change the location 
});

module.exports = router;