# Shopify Backend Challege

## Installation and Dependencies

This backend is coded in node.js. To install, visit the [official website](https://nodejs.org/) and follow installation instructions.

Once you have done that, installing dependencies is as easy as `npm install`.

To run the server, you can type `npm start` from the home directory, or `node server/app.js`. The app defaults listens on localhost port 8080, which it will log to the console. To change this, you can export the environment variable PORT.

## Usage

```
POST /customer
```

Queries a corresponding backend endpoint at https://backend-challenge-winter-2017.herokuapp.com/customers.json and processes the outputs, displaying the list of invalid
customer data on the specified page. 


Expects the following query string:
```
    ?pagenum=3
```
If pagenum is not specified, defaults to 0.


Returns data in the following format:

    invalid_customers": [
      {
        "id": 11,
        "invalid_fields": [
          "name"
        ]
      },
      {
        "id": 15,
        "invalid_fields": [
          "newsletter"
        ]
      }
    }
