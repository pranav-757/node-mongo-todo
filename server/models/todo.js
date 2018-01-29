var mongoose = require('mongoose');
var Todo = mongoose.model('Todo',{
  text:{                 //here we specify various properties
    type: String,         //like type, whether field is mandatory or not etc
    required:true
  },
  completed: {
    type: Boolean
  },
  completedAt:{
    type: Number    //for unix date type, mongodb already stores timestamp in form of id
  }
});

module.exports = {Todo};
