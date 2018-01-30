var mongoose = require('mongoose');
var Todo = mongoose.model('Todo',{
  text:{                 //here we specify various properties
    type: String,         //like type, whether field is mandatory or not etc
    required:true,       // setting text:{} will cause error due type mismatch
    minlength: 6         //but text:23 or text:true mongoose will typecast these
  },                     // to string
  completed: {
    type: Boolean,
    default: false
  },
  completedAt:{
    type: Number,    //for unix date type, mongodb already stores timestamp in form of id
    default: null
  }
});

module.exports = {Todo};
