const express = require('express');
const app = express();
const port = 3000;
// setting the view engine for pug template
app.set('view engine', 'pug');
app.use(express.static('public'));//mention our sataic files will be in the public folder

//route for the view engine for the pug

app.get('/',(req,res)=>
{
    res.render('index',
    {title:'express with pug template engine', message:"welcome to pug world"}
    
    );
})

//start the server

app.listen(port,()=>
{
    console.log(`app is running at http://localhost:${port}`)
});