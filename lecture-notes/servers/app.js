const express = require("express");
const app = express();
var router = express.Router();
const mainRoutes = require("./controllers/mainRoutes");
app.use(express.static(__dirname))

const PORT = 4000;

app.set('view engine', 'ejs');

app.use(mainRoutes)

app.listen(PORT, () => {
    console.log(`server listens on port ${PORT}`);
})
