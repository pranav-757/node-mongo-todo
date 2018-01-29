const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err){
    return console.log('unable to connect to server');
  }
  console.log('connected to server');
// db .collection('Todos').find({completed: true}).toArray().then((docs) =>{
//   console.log(JSON.stringify(docs, undefined,2));
// }, (err) => {
//   console.log('unable to find data');
// });
//
// db .collection('Todos').find({
//   _id: new ObjectID('5a6ee232bdfb217e08731908')
// }).toArray().then((docs) =>{
//   console.log(JSON.stringify(docs, undefined,2));
// }, (err) => {
//   console.log('unable to find data');
// });

db .collection('Todos').find().count().then((count) =>{
  console.log(count);
}, (err) => {
  console.log('unable to find data');
});
//  db.close();
});
