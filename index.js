// represent the api we're building
const express = require('express');
const app = express();

// run app on this port
const PORT = 8080;

// tell express to use json as its middleware parsing method
app.use(express.json())

// start api on server
app.listen(
    PORT,
    () => console.log(`alive on http://localhost:${PORT}`)
);

// app.get creates the api endpoint
// function 
app.get('/tshirt', (request, response) => {
    response.status(200).send({
        tshirt: 'this',
        size: 'large'
    })
});

// create new api endpoint for tshirt that allows posting
// capture dynamic values
app.post('/tshirt/:id', (request, response) => {
    const { id } = request.params;
    const { logo } = request.body;

    if (!logo) {
        response.status(418).send({message: 'We need a logo!'})
    }

    response.send({
        tshirt: `🔥 with your ${logo} and ID of ${id}`,
    })
});

app.get('/tshirt/:id', (request, response) => {
    const { id } = request.params;
    const { logo } = request.body;

    response.status(200).send({
        tshirt: `shirt with your logo: ${logo} and ID: ${id}`,
    })
});