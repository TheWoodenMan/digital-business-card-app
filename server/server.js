var createError = require("http-errors");
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");
const postRoutes = require("./routes/posts");
const React = require("react");
const cors = require("cors");

// test react app

const testAPIRouter = require("./routes/testAPI");

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

app.use(cors());

// Passport config
require("./config/passport")(passport);

//Connect To Database
connectDB();

//Using  JSX for views
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

//Static Folder
app.use(express.static("../public"));
app.use(express.static("../client"));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logging
app.use(logger("dev"));

//Use forms for put / delete
app.use(methodOverride("_method"));

// Setup Sessions - stored in MongoDB
app.use(
	session({
		secret: "keyboard cat",
		resave: false,
		saveUninitialized: false,
		store: new MongoStore({ mongooseConnection: mongoose.connection })
	})
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Use flash messages for errors, info, ect...
app.use(flash());

//Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes);
app.use("/post", postRoutes);

// React test routes

app.use("/testAPI", testAPIRouter);

//Server Running
app.listen(process.env.PORT || 3000, () => {
	console.log("Server is running, you better catch it!");
});
