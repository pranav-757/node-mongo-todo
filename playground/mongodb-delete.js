const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err){
    return console.log('unable to connect to server');
  }
  console.log('connected to server');
  //deleteMany
  // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) =>{
  //   console.log(result);
  // })

  db.collection('Users').deleteMany({age:25}).then((result) =>{
    console.log(result);
  });
  db.collection('Users').findOneAndDelete({_id: new ObjectID('5a6f6303bdfb217e08731ec4')}).then((result) =>{
    console.log(result); // returns deleted doc
  })
//  db.close();
});
