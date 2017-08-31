var express         = require('express');
var settings        = require('../settings/address');
var request         = require('request');

var app = module.exports = express();


// endpoint for GET /customers, processes invalid customers from shopify api
app.get('/customers',function(req,res){
   
  var pageNum = (req.query.pagenum || 0);
  var reqAddress = settings.address + pageNum;

  request.get(
      reqAddress,
      function (error, response, body) {
          if (!error && response.statusCode == 200) {
              process(res, body);
          }
      }
  );
  
});


// utility function, validates customers and sends data via res object
var process = function(res, dataStr){

  data = JSON.parse(dataStr);
  var types = {};
  
  // defensive, check that the object we got back does indeed have a 'validations' array
  if (data.validations){

    data.validations.forEach(function(element){

      // get keys in dictionary -- check that they're not prototype properties
      for (var key in element) {
        if (element.hasOwnProperty(key)) {

          // add each required to a dictionary of parameter checkups
          types[key] = element[key];

          // if required is present and true, append to a seperate array also
          /*if (element[key].required){
            requiredKeys.push(key);
          } */
        }
      }
    });
  }

  response = {};
  response.invalid_customers = [];

  // defensive, check that data we got back does indeed have customers
  if (data.customers){

    // validate each customer
    data.customers.forEach(function(customer){
      var errRecord = {};
      var invalid = [];

      for (var key in types) {
        if (types.hasOwnProperty(key)) {

          // if required field is not in customer, it's an error
          if (types[key].required && !customer.hasOwnProperty(key)){
            invalid.push(key);

          } else if (customer.hasOwnProperty(key)){

            if (types[key].type && typeof(customer[key]) != types[key].type){
              invalid.push(key);
            } else if (types[key].length && typeof(customer[key]) != 'string'){
              invalid.push(key);
            } else if (types[key].length && types[key].length.min && types[key].length.min > customer[key].length){
              invalid.push(key);
            } else if (types[key].length && types[key].length.max && types[key].length.max < customer[key].length){
              invalid.push(key);
            }
          }
        }
      }

      // if not empty array
      if (invalid.length != 0){
        var errRecord = {};
        errRecord.id = customer.id;
        errRecord.invalid_fields = invalid;

        response.invalid_customers.push(errRecord);
      }
    });

  }
  
  res.json(response);
}