import express from "express";

const user_router = express.Router()

user_router.get("/", (req, res) =>{
    res.json({
        message: "all users displayed"
    });
});

user_router.get("/:id",(req, res) => {
    res.json({
        user_id : req.params.id
    });
});

export default user_router;