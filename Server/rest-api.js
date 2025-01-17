var express = require("express");
var cors = require("cors");
var mongoClient = require("mongodb").MongoClient;


// const stripe = require("stripe")("sk_test_51QcKtjQpXkT48pRJywzV1nUgNwSdAC0gX9doinaicGAxm8JEA5pJJKhAUderLRv1UYLfupMo8dHLTD7nCyNA3SRI00BX0DUh15");

const multer = require('multer');
const path = require('path');

// Configure storage for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploadsdatabase/'); // Directory where files will be stored
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to file name
    },
  });
  
const upload = multer({ storage });

var conString = "mongodb://127.0.0.1:27017";

var app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());


// app.post("/create-checkout-session", async (req, res) => {
//     try {
//       const session = await stripe.checkout.sessions.create({
//         payment_method_types: ["card"],
//         line_items: [
//           {
//             price_data: {
//               currency: "usd",
//               product_data: {
//                 name: "Example Product",
//               },
//               unit_amount: 1000, // Price in cents
//             },
//             quantity: 1,
//           },
//         ],
//         mode: "payment",
//         success_url: "http://localhost:3000/success",
//         cancel_url: "http://localhost:3000/cancel",
//       });
  
//       res.json({ id: session.id });
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   });


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
        patientName: req.body.patientName,
        mobileNo: parseInt(req.body.mobileNo),
        specialization: req.body.specialization,
        doctor: req.body.doctor,
        date: new Date(req.body.date),
        slot: req.body.slot,
        status: req.body.status,
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
         database.collection("appointments").find({UserName:req.params.username}).toArray().then(documents=>{
             res.send(documents);
             res.end();
         });
    });
});

app.get("/view-task/:id", (req, res)=>{
     
    var id= (req.params.id);
     // var id = parseInt(req.params.id);
    // { if value is in normalize. form we have to use parseInt } 

    mongoClient.connect(conString).then(clientObject => {
         var database = clientObject.db("suraj-HealthCare");
         database.collection("appointments").find({patientName:id}).toArray().then(documents=>{
            res.send(documents);
            res.end();
         });
    });
});

app.delete("/delete-task/:id", (req, res)=>{
    var id = (req.params.id);

    // var id = parseInt(req.params.id);
    // { if value is in normalize. form we have to use parseInt }


    mongoClient.connect(conString).then(clientObject => {
        var database = clientObject.db("suraj-HealthCare");
        database.collection("appointments").deleteOne({patientName:id})
        .then(()=>{
             console.log('Appointment Deleted');
             res.end();             
        })
    });
})

//=======================Admin Dashboard=================================

app.get("/admin-login", (req, res)=>{
     
    mongoClient.connect(conString).then(clientObject => {
         var database = clientObject.db("suraj-HealthCare");
         database.collection("admin").find({}).toArray().then(documents=>{
             res.send(documents);
             console.log(`user Admin-login Successfully`)
             res.end();
         });
    });
});

app.get('/get-appointments', (req,res) => {

    mongoClient.connect(conString).then(clientObject => {
        var database = clientObject.db("suraj-HealthCare");
        database.collection("appointments").find({}).toArray().then(documents=>{
            res.send(documents);
            console.log(`appointments fetch successfully....!`)
            res.end();
        });
   });

})

app.post("/add-doctors",upload.single('file'), (req, res)=>{
     
    var doctor = {
        DoctorName: req.body.DoctorName,
        DoctorEmail: req.body.DoctorEmail,
        Password: req.body.Password,
        Experience: req.body.Experience,
        Fees:req.body.Fees,
        Speciality:req.body.Speciality,
        Education:req.body.Education,
        Address_1:req.body.slot1,
        Address_2:req.body.slot2,
        file:req.body.file
    }

    mongoClient.connect(conString).then(clientObject => {
         var database = clientObject.db("suraj-HealthCare");
         database.collection("alldoctors").insertOne(doctor).then(()=>{
              console.log(`Doctor Added Successfully..!!!`);
              res.end();
         });
    });
});

app.get('/get-doctors-list', (req,res) => {

    mongoClient.connect(conString).then(clientObject => {
        var database = clientObject.db("suraj-HealthCare");
        database.collection("alldoctors").find({}).toArray().then(documents=>{
            res.send(documents);
            console.log(`doctor list asccessed successfully..!`)
            res.end();
        });
   });

})

app.get("/view-doctor/:id", (req, res)=>{
     
    var id= (req.params.id);
     // var id = parseInt(req.params.id);
    // { if value is in normalize. form we have to use parseInt } 

    mongoClient.connect(conString).then(clientObject => {
         var database = clientObject.db("suraj-HealthCare");
         database.collection("alldoctors").find({DoctorName:id}).toArray().then(documents=>{
            res.send(documents);
            res.end();
         });
    });
});

app.delete("/delete-doctor/:id", (req, res)=>{
    var id = (req.params.id);

    // var id = parseInt(req.params.id);
    // { if value is in normalize. form we have to use parseInt }


    mongoClient.connect(conString).then(clientObject => {
        var database = clientObject.db("suraj-HealthCare");
        database.collection("alldoctors").deleteOne({DoctorName:id})
        .then(()=>{
             console.log('Appointment Deleted');
             res.end();             
        })
    });
})



//---------------------Doctor-Login-------------------------------------

app.get("/get-all-doctors", (req, res)=>{
     
    mongoClient.connect(conString).then(clientObject => {
         var database = clientObject.db("suraj-HealthCare");
         database.collection("alldoctors").find({}).toArray().then(documents=>{
             res.send(documents);
             console.log(`Doctor Login Successfully`)
             res.end();
        });
    });
});



app.post("/save-prescription/:appointmentId", async (req, res) => {
    const { appointmentId } = req.params;
    const { patientName, diagnosis, medicines, advice } = req.body;

    try {
        // Save prescription in your database
        const prescription = new PrescriptionModel({
            appointmentId,
            patientName,
            diagnosis,
            medicines,
            advice,
            createdAt: new Date(),
        });

        await prescription.save();
        res.status(200).send("Prescription saved successfully.");
    } catch (error) {
        console.error(error);
        res.status(500).send("Failed to save prescription.");
    }
});




app.listen(6060);
console.log(`Welcome Suraj server has been updated`)
console.log(`Server Started : http://127.0.0.1:6060`);
