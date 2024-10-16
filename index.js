require("dotenv").config();
let express = require("express");
let app = express();
let path = require("path");
let cookieParser = require("cookie-parser");
let verifyToken = require("./utils/verify");
let homeRouter = require("./routes/routeHome");
let signupRoute = require("./routes/routeSignup");
let signinRoute = require("./routes/routeSignin");
let verifyRoute = require("./routes/routeVerify");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//connect database
const coonectDb = require("./db/bgmiRooms");
coonectDb(process.env.BGMI_ROOM_DB_URL);

//Middlewares
app.use(express.static("views"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/api", verifyToken);

//Routes
app.use(homeRouter);
app.use("/signup", signupRoute);
app.use("/signin", signinRoute);
app.use("/verify", verifyRoute);
app.use("/public", express.static("public"));
app.get("/api", (req, res) => {
  res.end("You are verified!");
});

let PORT = 80 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`server started at port: ${PORT}...`);
});
