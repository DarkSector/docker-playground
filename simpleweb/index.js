const express = require("express");
const app = express();

app.get('/', (request, response) => {
    response.send("Hello, there");
})


app.listen(8081, () => {
    console.log("listening on port 8081");
})
