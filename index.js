import express from "express";
import tasksRoutes from "./routes/tasks.routes.js";

const app = express();

const port = 3000;

//middlware for parse json data.
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1/tasks", tasksRoutes);

app.listen(port, () => {
  console.log("Server Listening on port ", port);
});
