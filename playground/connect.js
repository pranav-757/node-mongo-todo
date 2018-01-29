const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err){
    return console.log('unable to connect to server');
  }
  console.log('connected to server');
//db argument in callback provides many functions
  db.collection('Todos').insertOne({
    text: 'something new',
    completed: false
  }, (err, result) => {
    if(err){
    return  console.log('unable to insert document', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  })

  db.collection('Users').insertOne({
    name: 'Pranav Gupta',
    age: 25,
    location: 'Noida'
  }, (err, result) => {
    if(err){
    return  console.log('unable to insert document', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  })
  db.close();
});
