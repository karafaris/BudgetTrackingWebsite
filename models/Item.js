
const mongoose = require('mongoose');

var expense = "Bills";
var expense_amount =100;

// Create a new instance of the Mongoose schema to define shape of each document
const budget = new mongoose.Schema({

  expense: { type: String, required: true },
  amount: {type: Number,required: true},
  // Use built in date method to get current date
  lastAccessed: { type: Date, default: Date.now },
});

// Using mongoose.model() to compile a model based on the schema


const Item = mongoose.model('Item', budget);


const handleError = (err) => console.error(err);


/*Item
  .create({
    expense: expense,
    amount: expense_amount
  })
  .then(result => console.log('Created new document', result))
  .catch(err => handleError(err));*/


  module.exports =  Item ;

  
  