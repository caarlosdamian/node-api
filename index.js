import express from "express";
import bodyParser from "body-parser";
import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5010;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
