import express from "express";
import userRoutes from "./routes/user.routes.js"
import authRoutes from "./routes/auth.routes.js"
import predictionRoutes from "./routes/prediction.routes.js";

//creating a new express instense
const app = express();

//Middleware to parse incomming JSON

app.use(express.json()); // .use defines a middleware (built in express one in this case)

//Custom Middleware
app.use((req, res, next) => {
    console.log(`${req.method} , ${req.url}`);
    next();
});

app.use((req, res, next) => {
    console.log("Middleware 2: Processing request");
    req.requestTime = new Date().toISOString(); //adding new variable requestTime to req
    next();
});

app.use((req, res, next) => {
    console.log("Middleware 1: Request received");
    next();
});

//Mounting user routes
app.use("/api/users",  userRoutes );
app.use("/api/auth", authRoutes);
app.use("/api/predictions", predictionRoutes);


//HTTP routing

app.get("/api/health", (req, res) =>{
    res.status(200).json({
        status: "success",
        message: "Backend is running",
        requestTime: req.requestTime
    });
});

app.get("/status", (req, res) =>{
    res.status(200).json({
        status: "running"
    });
});

app.get("/users/:id", (req,res) => {
    const user_id = req.params.id;
    res.json({
        status: "user retireved successfully ",
        user_id: user_id
    });
});

app.post("/users", (req, res) =>{
    const username = req.body.username;
    const user_email = req.body.user_email;

    res.status(201).json({
        status: "User created successfully",
        username,
        user_email
    });


});





export default app;