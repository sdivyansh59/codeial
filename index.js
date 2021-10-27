
const express = require('express');
const app = express();
const port = 8000;
const cookieParser = require('cookie-parser');

app.use(express.urlencoded());
app.use(cookieParser());

const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
app.use(express.static('./assets'));

// app.use(expressLayouts);
// exteact style and script from sub pages into the layout
// app.set('layout extractStyle', true);
// app.set('layout extractScript', true);


// view engine
app.set('view engine', 'ejs');
app.set('views', './views');


// use express  router
app.use('/', require('./routes/index.js'));



app.listen(port, function(err) {
    if(err){
        console.log(`Error in running the server: ${err}`);
        return;
    }
    console.log(`Server is running on port : ${port}`);
})