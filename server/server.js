// const mongoose = require('mongoose');
// var {Todo} = require('./models/todo');
// var {User} =  require('./models/users');
//mongoose.Promise = global.Promise;  //to tell mongoose that we r usng builtin promises
//mongoose.connect('mongodb://localhost/TodoApp'); //even if database doesn't exist at this point
 //there is no problem. Also mongoose/mongodb will not create new database at this point
 //it will be created when first entry is saved

 // var todoDoc = new Todo({
 //   text: 'Cook'   // since no field is mandatory we can create doc with just one filed
 // });
 //
 // todoDoc.save().then((doc) =>{
 //   console.log(doc);  // __v in doc signifies version of model version
 // }, (e) =>{
 //   console.log('unable to add doc',e);
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
 //   console.log('unable to add doc', e);
 // })

// var newUser = new User({
//    email: ' prnavgupta1992@yahoo.in  '
// });
// newUser.save().then((doc)=>{
//   console.log('new doc saved', doc);
// }, (e)=>{
//   console.log(e);
// });

var express = require('express');
var bodyParser = require('body-parser');

var mongooose = require('./db/mongoose');
var {Todo} = require('./models/todo');
var User =  require('./models/users');

var app = express();

app.use(bodyParser.json()); //this retruns a function that is used as midlleware
app.post('/todos',(req,res)=>{

  if( Array.isArray(req.body)) {
    req.body.forEach((doc) =>{
      var t1 = new Todo({
        text: doc.text,
        completed: doc.completed
      });
      t1.save().then((saved_doc)=>{
            res.status(200).send(saved_doc); // since we are sending back response
      }, (e)=>{                  //only one doc is printed in response but all docs
        res.status(400).send(e); // get inserted
      });
    });
  } else{
    var t1 = new Todo({
      text: req.body.text,
      completed:req.body.completed
    });
    t1.save().then((doc)=>{
          res.status(200).send(doc);
    }, (e)=>{
      res.status(400).send(e);
    });
  }
});
app.listen(3000, ()=>{
  console.log('started to-do server');
})
