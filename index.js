const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const express = require("express");
const { connect } = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database connection
async function connectToDB() {
  try {
    await connect(process.env.MONGODB_URL);
    console.log("MongoDB is connected");
  } catch (error) {
    console.log("MongoDB connected failed:", error.message);
  }
}

connectToDB();

// Router
const { Role1 } = require("./routes/role1Route");
const { Stuff2 } = require("./routes/stuff2Route");
const { stuffRole } = require("./routes/stuff_roleRoute");
const { Stage4 } = require("./routes/stage4Route");
const { Branch5 } = require("./routes/branch5Router");
const { Group6 } = require("./routes/group6Router");
const { groupStuff } = require("./routes/group_stuff7Router");
const { Lesson8 } = require("./routes/lesson8Router");
const { LidStatus9 } = require("./routes/lid_statusRouter9");
const { ReasonLid10 } = require("./routes/reason_lid10Router");
const { Lid11 } = require("./routes/lid11Router");
const { Student12 } = require("./routes/student12Router");
const { StudentGroup13 } = require("./routes/student_group13Router");
const { StudentLesson14 } = require("./routes/studentLesson14Router");
const { Payment15 } = require("./routes/payment15Router");
app.use("/role1", Role1);
app.use("/stuff2", Stuff2);
app.use("/stuff_role", stuffRole);
app.use("/stage4", Stage4);
app.use("/branch5", Branch5);
app.use("/group6", Group6);
app.use("/group_stuff", groupStuff);
app.use("/lesson8", Lesson8);
app.use("/lidStatus9", LidStatus9);
app.use("/reasonLid10", ReasonLid10);
app.use("/lid11", Lid11);

app.use("/student12", Student12);
app.use("/studentGroup13", StudentGroup13);
app.use("/studentLesson14", StudentLesson14);
app.use("/payment15", Payment15);

// Swagger
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Role1 API",
      version: "1.0.0",
      description: "API Documentation using Swagger",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
