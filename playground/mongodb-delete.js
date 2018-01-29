const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err){
    return console.log('unable to connect to server');
  }
  console.log('connected to server');
  //deleteMany
  db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) =>{
    console.log(result);
  })
//  db.close();
});
