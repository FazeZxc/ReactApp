import express, { json } from "express";
import jwt from "jsonwebtoken";
const jwtPassword = "1221";
import { string } from "zod";
import cors from 'cors';
import { connect } from "mongoose";
const app = express();
import {register} from "./controllers/auth.js";
import authRoutes from "./routes/auth.js";
import bodyParser from "body-parser";
// import { initializeApp } from "firebase/app";

app.use(cors());
connect("mongodb+srv://admin:4FACSGhrpRSyzznp@cluster0.h2cynok.mongodb.net/");

const { sign } = jwt ;
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());

app.use("/auth" , authRoutes);



app.use(json());

app.post("/auth/register", register);



app.listen(3000, function (err) {
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", 3000);
}
)