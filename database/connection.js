import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
//compass connection code
// mongoose
//   .connect("mongodb://localhost:27017/linktree", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("database connected");
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const url = process.env.URI;

const connectionParams = {
  useNewUrlParser: true,

  useUnifiedTopology: true,
};
mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log("Connected to the database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. n${err}`);
  });
