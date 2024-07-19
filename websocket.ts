import { serve } from "bun";

const clients = new Map();

function broadcastUserList() {
  const userList = Array.from(clients.values());
  const message = JSON.stringify({ type: 'userList', users: userList });
  for (const [client, _] of clients) {
    client.send(message);
  }
}

const server = serve({
  port: 3000,
  fetch(req, server) {
    if (server.upgrade(req)) {
      return;  // Handle WebSocket connection
    }
    return new Response("Upgrade to WebSocket");
  },
  websocket: {
    open(ws) {
      console.log("WebSocket connection opened");
    },
    message(ws, message) {
      const data = JSON.parse(message);
      
      if (data.type === 'join') {
        clients.set(ws, data.username);
        broadcastUserList();
      } else if (data.type === 'message' || data.type === 'live') {
        for (const [client, _] of clients) {
          if (client !== ws) {
            client.send(message);
          }
        }
      } else if (data.type === 'delete') {
        for (const [client, _] of clients) {
          client.send(message);
        }
      }
    },
    close(ws) {
      clients.delete(ws);
      broadcastUserList();
      console.log("WebSocket connection closed");
    },
  },
});

console.log(`WebSocket server listening on port ${server.port}`);
