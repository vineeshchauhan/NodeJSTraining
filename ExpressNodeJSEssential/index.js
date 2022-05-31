import express from "express";
import data from './data/mock.json' assert {type: "json"};;
const app = express();

const PORT = 3000;

//Using the public folder at the root
app.use(express.static("public"))

//Using the images at the route /images 
app.use("/images",express.static("images"))
//GET
app.get('/',(req,res) => {
    //res.send('This is a GET request at /')
    res.json(data);
});


//GET route handlers
app.get('/handler',(req,res,next) => {
    //res.send('This is a GET request at /')
    //res.json(data);
    next();
}, (req,res) => {
    res.json(data)
});

//GET Redirect
app.get('/redirect',(req,res) => {
    //res.send('This is a GET request at /')
    //res.json(data);
    res.redirect("https://www.google.com")
});

//This is out get with routing parameters
app.get('/class/:id',(req,res) => {
    //res.send('This is a GET request at /')
    //res.json(req.params);
    const studentId = Number(req.params.id);

    const student = data;

    student.filter((stud) => {
        if(stud.id === studentId){
            res.send(`The name of the student with id ${studentId} is ${stud.first_name} ${stud.last_name}`);
        }
    })
});

//route chaining

app.route("/class").get((req,res) => {
    res.send("It is get")
}).post((req,res) => {
    res.send("It is post")
}).put((req,res) => {
    res.send("It is put")
})
 
//POST
app.post('/create',(req,res) => {
    res.send('This is post request at /create')
});

//PUT
app.put('/update',(req,res) => {
    res.send('This is put request at /update')
});

//DELETE
app.delete('/delete',(req,res) => {
    res.send('This is delete request at /delete')
});

app.listen(PORT,() => {
    console.log(`The server is running on the port ${PORT}!`);
});