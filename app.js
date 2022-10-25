const express = require("express");
const cookieParser = require("cookie-parser");
const { sequelize } = require("./models");
const app = express();
const cors = require("cors");
const router = require("./routes");

app.use(
  cors({
    origin: '*',
    credential: true,
  })
);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use([
  express.json(),
  express.urlencoded({ extended: false }),
  cookieParser(),
]);


app.use("/", router);

app.listen(3000, () => {
  console.log("서버가 켜졌어요!");
});
