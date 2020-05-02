const express = require('express');
const redis = require('redis');


const app = express();

const client = redis.createClient({
    host: "redis-server", // interesting because it's a service
    port: 6379
});

// set the visits to 0 first
client.set('visits', 0);

app.get("/", (req, res) => {
    client.get('visits', (err, visits) => {
        res.send(`Number of visits is ` + visits);
        client.set('visits', parseInt(visits) + 1);
    });
});

const port = 8081;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});