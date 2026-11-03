import express from "express" ;

const auth_router = express.Router();

auth_router.post("/login",(req,res) => {
    res.json({
        status: "login route working"
    });
});

auth_router.post("/register", (req,res) => {
    res.json({
        status: "register route working"
    });
});

export default auth_router;
