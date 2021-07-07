const express = require("express");
const app = express();

app.listen(6758, () => console.log(`listening to port 6758`));
app.use(express.static("public"));
