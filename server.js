const http = require("http");
const app = require("./app");
const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

const IP = "192.168.0.107";

const start = () => {
  try {
    server.listen(PORT, IP, () => {
      console.log(`🚀 [SERVER] is running on port http://${IP}:${PORT}`);
    });
  } catch (error) {
    console.log(`⚠️ [ERROR], ${error}`);
  }
};

start();
