import http from "http";
import { createServer } from "http";

import app from "./server";
let currentApp = app;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3001, () => {
  console.log("Listening on port 3001");
});

if (module.hot) {
  module.hot.accept(["./server"], () => {
    server.removeListener("request", currentApp);
    server.on("request", app);
    currentApp = app;
  });
}
