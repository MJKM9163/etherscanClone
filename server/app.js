const express = require("express");
const router = require("./routes");
const cors = require("cors");

const app = express();
const port = 4000;
const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use("/", router);

app.listen(port, () => {
  console.log(`서버 ${port}로 연결 완료`);
});
