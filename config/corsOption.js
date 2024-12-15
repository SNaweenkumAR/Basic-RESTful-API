

//permission 
const Whitelist = [ 'http://www.yoursite.com' , 'http://127.0.0.1.:5500' , 'http://localhost:3000/' ];
const corsOption = {
    origin : (origin,callback) => {
        if(Whitelist.indexOf(origin) !== -1 || !origin){
            callback(null,true);
    }  else{
        callback(new Error('Not allowed by CORS'));
    }
},
 optionsSuccessStatus:200
}

module.exports= corsOption