const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./userRoutes");

app.use(cors());
app.use(express.json());

app.use("/user", userRoutes);

app.listen(8000, () => console.log(`Server started at port 8000...`));
