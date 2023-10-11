"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */

app.use(express.json());

// Router
app.use(require("./app/routes/todo"));

/* ------------------------------------------------------- */
// Database Connection:
const { dbConnection } = require("./app/dbConnection");
dbConnection();

// errorHandler
app.use(require("./app/errorHandler"));
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
