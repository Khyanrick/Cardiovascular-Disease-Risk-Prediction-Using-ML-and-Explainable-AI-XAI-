import express from "express";

const prediction_route = express.Router();

prediction_route.get("/history", (req, res) => {
    res.json({
        message: "prediction history",
        filters: req.query
    });
});

prediction_route.post("/", (req,res)=>{
    res.status(201).json({
        message: "prediction subbmitted successfully!"
    });
});

export default prediction_route;