import express from "express";
import http from "http";
import Router from "./router.js";
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', "GET, PUT, POST, PATCH");
    res.header('Access-Control-Allow-Headers', "Content-Type");
    next();
})
app.use(Router)
app.get("/", (req, res)=>res.send("API levantada"))
http.createServer(app).listen(process.env.PORT || 3010)
