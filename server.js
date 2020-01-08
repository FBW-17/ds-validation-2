const express = require('express');
const app = express();
const {check, validationResult} = require("express-validator")

app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// ADD JOURNAL ENTRY FORM
app.get('/register', (req, res) => {
    let strForm = `
        <h1>Register</h1>
        <form action="/register" method="POST">
            <label for="email">Email</label><br />
            <input type="text" id="email" name="email" />
            <br />
            <label for="password">Password</label><br />
            <input type="password" id="password" name="password" />
            <br />
            <button type="submit">Register</button>
        </form>
    `
    res.send(strForm)
})

app.post('/register', 
    check("email").isEmail(), 
    check("password").isLength({min: 4, max: 10}),
    (req, res) => {
    
    console.log(req.body)

    const errors = validationResult(req)

    if(!errors.isEmpty()) {
        return res.send(errors)
    }

    res.send(req.body)
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

//Run app, then load http://localhost:3000 in a browser to see the output.