const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err){
    return console.log('unable to connect to server');
  }
  console.log('connected to server');
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5a5e4646cd1d2ce3e8dca162")
  // },
  // {
  //   $set: {
  //     completed: false
  //   }
  // },{
  //   returnOriginal: false
  // }).then((result) =>{
  //   console.log(result);
  // })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5a5d5251055ff60c48ff8091")
  },
  {
    $set: {
      name: "Pranavg"
    },
     $inc:{
       age: 2
     }
  },{
    returnOriginal: false
  }).then((result) =>{
    console.log(result);
  })
//  db.close()
});
