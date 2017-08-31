// Imports and important variables
// ----------------------------------------
// Imported modules
var express     = require('express');
var app         = express();
var apiRouter   = express.Router();

var settings    = require('./settings/settings');
var filter        = require('./routes/filter');

// External variables and addresses
var port        = process.env.PORT || 8080;
var encryptKey  = 'same';



// Setting up routes
// -------------------------------------

// Everything under our apiRouter is accessed at /
app.use('/',apiRouter);

// Apply "settings" (Console debugging, bodyparsing, CORS headers)
apiRouter.use(settings);

// filter routes are under filter module
apiRouter.use(filter);


// Start the server
// ---------------------------------------
app.listen(port);
console.log('Application running on port:' + port);