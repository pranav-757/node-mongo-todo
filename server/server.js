// const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
//
// mongoose.connect('mongodb://localhost:27017/TodoApp'); //even if database doesn't exist at this point
 //there is no problem. Also mongoose/mongodb will not create new database at this point
 //it will be created when first entry is saved

 // var todoDoc = new Todo({
 //   text: 'Cook Dinner'   // since no field is mandatory we can create doc with just one filed
 // });
 //
 // todoDoc.save().then((doc) =>{
 //   console.log(doc);  // __v in doc signifies version of model
 // }, (e) =>{
 //   console.log('unable to add doc');
 // })

 // var todoDoc2 = new Todo({
 //   text: 'Cooking Breakfast',
 //   completed: true,
 //   completedAt: 9
 // });
 //
 // todoDoc2.save().then((doc) => {
 //   console.log(JSON.stringify(doc, undefined,2));
 // }, (e) => {
 //   console.log('unable to add doc');
 // })

var express = require('express');
var bodyParser = require('body-parser');

var mongooose = require('./db/mongoose');
var {Todo} = require('./models/todo');
var User =  require('./models/users');

var app = express();

app.use(bodyParser.json()); //this retruns a function that is used as midlleware
app.post('/todos',(req,res)=>{
  var t1 = new Todo({
    text: req.body.text,
    completed:req.body.completed
  });
  t1.save().then((doc)=>{
        res.status(200).send(doc);
  }, (e)=>{
    res.status(400).send(e);
  });
});
app.listen(3000, ()=>{
  console.log('started to-do server');
})
