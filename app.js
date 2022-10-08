const express = require("express");
const app = express();

app.use(express.json())

const users = require('./routes/users')

app.use('/user',users);


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
