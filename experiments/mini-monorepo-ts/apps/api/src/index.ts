import express from "express";
import { getSeal } from "@mini/shared";
const app=express();
app.get("/",(req,res)=>res.send(getSeal()));
app.listen(8888,()=>console.log("server run on http://localhost:8888"));
