const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require("path");

const db = require("./config/mongoose-connection");


// routes import
const ownersRouter = require("./routes/ownersRouter");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");

// Middleware for parsing JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");


// Routes
app.use("/owners", ownersRouter)
app.use("/users", usersRouter)
app.use("/products", productsRouter)



app.listen(3000);