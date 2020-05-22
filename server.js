const serverPort = 5000;

const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = express.Router();
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "admin") {
    // 登陆成功
    res.send({ status: 0, data: { userid: 10000 } });
  } else {
    // 登陆失败
    res.send({ status: 1, msg: "用户名或密码不正确" });
  }
});

router.get("/testGet", (req, res) => {
  res.send({ status: 0, data: JSON.stringify(req.query) });
});

router.post("/testPost", (req, res) => {
  res.send({ status: 0, data: JSON.stringify(req.body) });
});

app.use("/api", router);

app.listen(serverPort, () => {
  console.log(`服务器启动成功, 请访问: http://localhost:${serverPort}`);
});
