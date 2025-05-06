import express from "express";
import { connectToDatabase } from "./dbConfig.js";
import router from "./routes/emailDb.js";

const app = express();
const port = 3000;

app.use(express.json());
connectToDatabase();

app.get("/", (req, res) => {
  res.send("The email server is up and connected to email DB !");
});
app.use("/api", router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
