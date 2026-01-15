import { Router } from "express";

const router = Router();

router.get(["/about", "/info"], (req, res) => {
    res.status(200).json({
        message: "Campus directory routes",
        routes: ["GET /", "GET /about|/info", "GET /:id", "GET /search?city=&open=&program="]
    })
});

export default router;