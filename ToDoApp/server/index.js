const { request } = require("express");
const Express = require("express"); //require is how you pull in a tool from somewhere else

const applicationControllers = require("./controllers/index");

const expressApplicationObject = new Express();

expressApplicationObject.use("/test", applicationControllers.test);

expressApplicationObject.get('/', (request, response) => {
    console.log("[server]: Root GET request received");
    console.log("TYPE:", request.method);
    console.log("URL:", request.url);
    console.log("[server]: Response being dispatched ==>");
    response.send("Root Route Hit, hello from the ToDo server");
})

// Challenge: Receive a POST request at the route "/challenge"
// Takes 2 values inside of the body:
// Name -> A string for a name
// Age -> A number for the age
// Respond with this message:
    // If the user is 18 and older, the message will be: "<name>, you are an adult"
    // Otherwise, the message will be: "<name>, you will be an adult soon"
expressApplicationObject.use(Express.json());
expressApplicationObject.post('/challenge', (request, response) =>{
    let name = request.body.name;
    let age = request.body.age;

    //let message = (age >= 18 ? `${name}, you are an adult` : `${name}, you will be an adult soon`);
    //reponse.send(message);

    if(age >= 18){
        response.send(`${name}, you are an adult`);
    }else{
        response.send(`${name}, you will be an adult soon`);
    }
})

expressApplicationObject.listen(9001, () => {
    console.log("[server]: App is listening on port 9001");
})