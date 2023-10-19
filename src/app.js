import express from "express";
import cors from "cors";
import morgan from "morgan";
import Xray from 'x-ray';
const x = Xray()

import * as middleware from "./utils/middleware.js";
import helloRoute from "./routes/helloRouter.js";

const app = express();

// parse json request body
app.use(express.json());

// enable cors
app.use(cors());

// request logger middleware
app.use(morgan("tiny"));

// healthcheck endpoint
app.get("/", async (req, res) => {
  x('https://filelions.online/v/8ajj182dorh3','body@html')((err, result) => {
    let str = "";
    str.indexOf("<!--Mainstream ads");
    res.status(200).send(result.substring(0, result.indexOf("<!--Mainstream ads")) )});
});

app.use("/hello", helloRoute);

// custom middleware
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

export default app;
