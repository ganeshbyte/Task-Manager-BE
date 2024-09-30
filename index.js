import express from "express";
import tasksRoutes from "./routes/tasks.routes.js";
import { connectToDB } from "./db/connect.js";
import "dotenv/config";
import { notFound } from "./middlewares/not-found.js";
import { errorHandlerMiddleware } from "./middlewares/errorHandler.js";
const app = express();

const port = 3000;

//middlware for parse json data.
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1/tasks", tasksRoutes);
app.use(notFound);

app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectToDB(process.env.MONGO_URL);
    console.log("Connected to the DB...");

    app.listen(port, () => {
      console.log("Server Listening on port ", port);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
