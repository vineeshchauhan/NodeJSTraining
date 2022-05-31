var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

var http = require('http').Server(app)
var io = require('socket.io')(http);


app.use(express.static(__dirname));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

var dbURL = 'mongodb+srv://sa:kronites@cluster0.6ydbk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

var Message = mongoose.model('Message',{
    name: String,
    message: String
})


var messages = [
   // {name:'Vineesh',message:'Hello Gaurav'},
   // {name:'Gaurav',message:'Hello Vineesh'}
]

app.get('/message', (req,res) => {  
    Message.find({},(err,messages) => {
        res.send(messages)
    })
    
})

app.post('/message', (req,res) => {
    var message = new Message(req.body);
    message.save((err) => {
     if(err)
        sendStatus(500)
    
        //console.log("body"+req.body);
       // messages.push(req.body);
        io.emit('message',req.body);
        res.sendStatus(200,req.body);
    })
})

io.on('connection',(socket) => {
    console.log('a user connected');
})

mongoose.connect(dbURL, (err) => {
    console.log('DB is connected',err)
})

var server = http.listen(3000, () => {
    console.log('server is listening to port', server.address().port);
});