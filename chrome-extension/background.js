/* global io */
const socket = io("http://localhost:9876/client");

chrome.browserAction.onClicked.addListener(tab => {
  const { url, title } = tab;
  console.log(url);
  console.log(title);
  console.log(socket);
  socket.emit("newBookmark", { url, title });
});
