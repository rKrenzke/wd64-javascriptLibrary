require('dotenv').config();

var express = require('express'); //1
var app = express(); //2
var test = require('./controllers/testcontroller');
var user = require('./controllers/usercontrollers');
var sequelize = require('./db');
//1 Here we require the use of the express npm package that we've installed in our dependencies
//2 We create an instance of express. We're actually firing off a top-level express() function, a function exported by the Express module. This allows us to create an Express app.
//3 app.listen will use express to start a UNIX socket and listen for connections on the given path. This method is identical to Node's http.Server.listen().
//4 The given path is localhost:3000
//5 We call a callback function when the connection happens with a simple console.log


sequelize.authenticate().then(async () => {
    console.log('DB CONNECTED');
    sequelize.sync();
})
.catch((e) => {
    console.log('Server Crashed, oops');
})
app.use(express.json());
app.use('/test', test);
app.use('/api/user', user);

// app.get('/api/test', function(req, res){
//     res.send("This is data from the /api/test endpoint. It's from the server.")
// });

//3         //4
app.listen(3000, function(){
    console.log('Hey Man!!') //5
});