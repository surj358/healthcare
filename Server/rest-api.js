var express = require("express");
var cors = require("cors");
var mongoClient = require("mongodb").MongoClient;

var conString = "mongodb://127.0.0.1:27017";

var app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.post("/register-user", (req, res)=>{
     
    var user = {
        UserName: req.body.UserName,
        Password: req.body.Password,
        Email: req.body.Email,
        Mobile: req.body.Mobile
    }

    mongoClient.connect(conString).then(clientObject => {
         var database = clientObject.db("suraj-HealthCare");
         database.collection("users").insertOne(user).then(()=>{
              console.log(`User Registered`);
              res.end();
         });
    });
});


app.get("/get-users", (req, res)=>{
     
    mongoClient.connect(conString).then(clientObject => {
         var database = clientObject.db("suraj-HealthCare");
         database.collection("users").find({}).toArray().then(documents=>{
             res.send(documents);
             console.log(`user Login demo checked`)
             res.end();
         });
    });
});

app.post("/add-task", (req, res)=>{
     
    var task = {
        Appointment_Id: parseInt(req.body.Appointment_Id), 
        Title: req.body.Title,
        Description: req.body.Description,
        Date: new Date(req.body.Date),
        PatientName: req.body.PatientName,
        UserName: req.body.UserName
    }

    mongoClient.connect(conString).then(clientObject => {
         var database = clientObject.db("suraj-HealthCare");
         database.collection("appointments").insertOne(task).then(()=>{
              console.log(`Appointment Book Successfully..!!!`);
              res.end();
         });
    });
});
app.get("/view-tasks/:username", (req, res)=>{
     
    mongoClient.connect(conString).then(clientObject => {
         var database = clientObject.db("suraj-HealthCare");
         database.collection("appointments").find({UserId:req.params.user_id}).toArray().then(documents=>{
             res.send(documents);
             res.end();
         });
    });
});

app.get("/view-task/:id", (req, res)=>{
     
    var id= parseInt(req.params.id);
    mongoClient.connect(conString).then(clientObject => {
         var database = clientObject.db("suraj-HealthCare");
         database.collection("appointments").find({Appointment_Id:id}).toArray().then(documents=>{
             res.send(documents);
             res.end();
         });
    });
});

app.delete("/delete-task/:id", (req, res)=>{
    var id = parseInt(req.params.id);
    mongoClient.connect(conString).then(clientObject => {
        var database = clientObject.db("suraj-HealthCare");
        database.collection("appointments").deleteOne({Appointment_Id:id})
        .then(()=>{
             console.log('Task Deleted');
             res.end();
        })
    });
})

//=======================Admin Dashboard=================================

app.get("/get-doctors", (req, res)=>{
     
    mongoClient.connect(conString).then(clientObject => {
         var database = clientObject.db("suraj-HealthCare");
         database.collection("doctors").find({}).toArray().then(documents=>{
             res.send(documents);
             console.log(`user Login demo working`)
             res.end();
         });
    });
});

app.get('/get-appointments', (req,res) => {

    mongoClient.connect(conString).then(clientObject => {
        var database = clientObject.db("suraj-HealthCare");
        database.collection("appointments").find({}).toArray().then(documents=>{
            res.send(documents);
            console.log(`appointments working..!`)
            res.end();
        });
   });

})

app.post("/add-doctors", (req, res)=>{
     
    var doctor = {
        Appointment_Id: parseInt(req.body.Appointment_Id), 
        Title: req.body.Title,
        Description: req.body.Description,
        Date: new Date(req.body.Date),
        PatientName: req.body.PatientName,
        UserName: req.body.UserName
    }

    mongoClient.connect(conString).then(clientObject => {
         var database = clientObject.db("suraj-HealthCare");
         database.collection("doctors").insertOne(doctor).then(()=>{
              console.log(`Doctor Added Successfully..!!!`);
              res.end();
         });
    });
});

app.listen(6060);
console.log(`Welcome Suraj`)
console.log(`Server Started : http://127.0.0.1:6060`);
