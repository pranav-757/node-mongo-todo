const mongoose = require('mongoose');
mongoose.Promise = global.Promise; // tells mogoose we will be using buit-in promises and not the 3rd party library

mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
