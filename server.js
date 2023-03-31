const http = require("http");
const app = require("./app");
const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

const start = () => {
  try {
    server.listen(PORT, () => {
      console.log(`🚀 [SERVER] is running on port http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(`⚠️ [ERROR], ${error}`);
  }
};

start();
