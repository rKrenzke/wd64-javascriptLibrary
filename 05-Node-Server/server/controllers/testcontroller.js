var express = require('express');
const sequelize = require('../db');
var router = express.Router();
var TestModel = sequelize.import('../models/test');


/**************************************
 * Controller Method #1: Simple Response
 **************************************/
router.post('/one', function(req, res){
    res.send("Test 1 went through!")
});

/**************************************
 * Controller Method #2: Persisting Data
 **************************************/
router.post('/two', function(req, res){
    let testData = "Test data for endpoint two";
    
    TestModel.create({
            testdata: testData
        }).then(dataFromDatabase => {
            res.send("Test two went through!")
        }).catch((error) => {
            console.log(error)
        })
});

/**************************************
 * Controller Method #3: req.body
 **************************************/
router.post('/three', function(req, res){
    var testData = req.body.testData.item;

    TestModel.create({
        testdata: testData
    })
    res.send("Test three went through!")
    console.log("Test three went through!")
});

//STEP 4 - Use this with Postman
router.post('/four', function(req, res){
    var testData = req.body.testData.item;
    TestModel
        .create({
            testdata: testData
        })
        .then(
            function message() {
                res.send("Test 4 went through!")
            }
        );
});

//Route 5: Return Data in a Promise
router.post('/five', function(req, res){
    var testData = req.body.testData.item;
    TestModel
    .create({
        testdata: testData
    })
    .then(
        function message(data) {
            res.send(data);
        }
    );
})

//Route 6: Return response as JSON
router.post('/six', function(req, res){
    var testData = req.body.testData.item;
    TestModel
    .create({
        testdata: testData
    })
    .then(
        function message(testdata) {
            res.json({
                testdata: testdata
            });
        }
    );
})

//Route 7: Handle Errors
router.post('/seven', function(req, res){
    var testData = req.body.testData.item;
    TestModel
    .create({
        testdata: testData
    })
    .then(
        function createSuccess(testdata) {
            res.json({
                testdata: testdata
            });
        },
        function createError(err){
            res.send(500, err.message);
        }
    );
})

module.exports = router;

// let contact = {
//     user: 'Ryan',
//     email: 'icelandicViking@gmail.com'
// };

// let projects = ['Project 1', 'Project 2', 'Project 3'];
// let myContacts = [{user: 'Rozz', email: 'banagrang@gmail.com'}, {user: 'Aeodan', email: 'theImposter@gmail.com'}, {user: 'Stevesie', email: 'theHumanCalculator@gmail.com'}];

// router.get('/', function (req, res){
//     res.send('Hey! This is a test route!');
// });

// router.get('/about', function (req, res){
//     res.send('Hey! This is an about route!');
// });

// router.get('/contact', function (req, res){
//     res.send(contact);
// });

// router.get('/projects', function (req, res){
//     res.send(projects);
// });

// router.get('/mycontacts', function (req, res){
//     res.send(myContacts);
// });

