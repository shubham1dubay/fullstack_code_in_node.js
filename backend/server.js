import dotenv from "dotenv";
import express from "express";
dotenv.config();

const app = express();

app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      titel: "joke1",
      content: "this is joke1",
    },
    {
      id: 2,
      titel: "joke2",
      content: "this is joke2",
    },
    {
      id: 3,
      titel: "joke3",
      content: "this is joke3",
    },
    {
      id: 4,
      titel: "joke4",
      content: "this is joke4",
    },
    {
      id: 5,
      titel: "joke5",
      content: "this is joke5",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
