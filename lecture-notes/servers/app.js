const express = require("express");
const app = express();
var router = express.Router();
const mainRoutes = require("./controllers/mainRoutes");

const PORT = 4000;


app.set('view engine', 'ejs');


app.use(mainRoutes)

app.listen(PORT, () => {
    console.log(`server listens on port ${PORT}`);
})
