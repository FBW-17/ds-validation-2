# Validation - Exercise #2 - Express Validator

In this exercise we are going to introduce express validator. We will use it to check incoming form data. We will assure the sent data is how we expect it to be to secure the integrity of our database data.

## Validate form data with express validator

Continue working on your previous exercise code OR copy your previous server.js file to here and repeat the installation of express.

* Install express-validator => `npm i express-validator`

* Import the function "check" and "validationResult" from the express validator package at the top of your server.js file

* Adapt your POST route "/register"
    * Append the following chain of checks (=chain of middleware) to validate email and password
        * email must be present and needs to be an actual email
        * password needs to be min 4 and max 10 characters
    * Add validation in your route
        * Perform validation by `const errors = validationResult(req)`
        * Check if there are errors using `errors.isEmpty()`
            * If so: Return these as json to the client
            * If not: Return the received form data to the client

* Testing
    * Call your /register form in the browser and sent data
    * Sent correct data first to test if your POST route still works
    * Now send incorrect data, e.g. an email without an @ sign
    * Check if you get back an error response
    * Now test wrong entries for the password field too!
