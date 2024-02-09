const express = require('express');
const app = express();
const port = 3000;

//create a miidleware varibale to define a function for middleware
const loggerMiddleware = (req,res,next)=>
{
    console.log(`Request URL:${req.url}`);
    next();

};

//registered our middleware
app.use(loggerMiddleware);

//route handler function.
app.get('/output',(req,res)=>
{
res.send("welcome to express session and the widdleware passe the request");
}
);

//server code
app.listen(port,()=>
{
    console.log(`app is running at http://localhost:${port}`)
})