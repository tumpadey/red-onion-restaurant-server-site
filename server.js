
const mongoose = require("mongoose");
const app = require('./app');
const PORT = 8000;
// const DB = process.env.DATABASE;
const config = {
  dbUrl: "mongodb://127.0.0.1:27017/redonion",
};

const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

// db connection
mongoose.connect(config.dbUrl, dbOptions, (err) => {
  if (err) console.log("Failed to connect database");
  console.log("Database connected");
});
// app.get("/a", (req, res) => {
//   res.send("hello");
// });

app.listen(PORT, () => console.log(`Server is running on the port:${PORT}`));
