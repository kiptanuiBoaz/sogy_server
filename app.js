const express = require("express");
const app = express();
const cors=require('cors')

app.use(cors())

app.use(express.json())

app.post('/customers', function (req, res) {
    console.log(req.body);
    res.send();
});



const PORT = process.env.PORT || 8080;

app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
