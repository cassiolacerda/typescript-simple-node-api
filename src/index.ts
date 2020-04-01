/**
 * Environment
 */
require("dotenv").config();

/**
 * Dependencies
 */
import * as express from "express";
import * as mongoose from "mongoose";
import * as bodyParser from "body-parser";
import Routes from "./routes/Crm";

/**
 * Express
 */
const app = express();
app.use(express.static("public"));

/**
 * DB
 */
mongoose.connect(process.env.DATABASE_URL, {
  useMongoClient: true
});

/**
 * Parsers
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * Routes
 */
Routes(app);

/**
 * Server
 */
app.listen(3000, () => console.log("server started"));
