const http = window.require("http").createServer(res => res.writeHead(404));
const io = window.require("socket.io")(http);

const clientNsp = io.of("/client");
const appNsp = io.of("/app");

clientNsp.on("connection", socket => {
  console.log("omg someone connected");
  socket.on("newBookmark", data => appNsp.emit("newBookmark", data));
});

appNsp.on("connection", socket => {
  console.log("app connected");
  socket.on("disconnect", () => console.log(":("));
});

http.listen(9876, () => {
  console.log("listening on *:9876");
});
