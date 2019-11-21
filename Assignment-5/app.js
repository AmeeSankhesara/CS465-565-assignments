// import express (after npm install express)
const express = require('express');
//middleware 
const bodyParser = require('body-parser');

// create new express app and save it as "app"
const app = express();

// server configuration
const PORT = 8080;

app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json())

// create a route for the app
app.get('/',function(req,res){
  res.set({ 'Content-Type': 'text/html' });
  res.sendfile("index.html");
});

app.post('/submit',function(req,res){
  console.log(req.body);
  res.write("name : "+req.body.name+"\n"+"email : "+req.body.Email+"\n"+"comment : "+req.body.comment);
  res.end(); 
});

// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});