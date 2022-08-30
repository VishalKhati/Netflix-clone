const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movie");
const listRoute = require("./routes/list");

dotenv.config();

main().catch((err) => console.log(err));

async function main() {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB conn"))
    .catch((err) => console.log(err));
}

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/list", listRoute);
app.listen(8900, () => {
  console.log("Backend");
});
