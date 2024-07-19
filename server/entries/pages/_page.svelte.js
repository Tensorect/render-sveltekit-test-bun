import { k as attr, l as stringify, h as escape_html, m as bind_props, e as pop, p as push, o as ensure_array_like } from "../../chunks/index.js";
import * as marked from "marked";
import DOMPurify from "dompurify";
function html(value) {
  var open = "<!---->";
  return `${open}${value}<!---->`;
}
function Message($$payload, $$props) {
  push();
  let message = $$props["message"];
  let username = $$props["username"];
  let deleteMessage = $$props["deleteMessage"];
  function formatMessage(content) {
    let escapedContent = DOMPurify.sanitize(content);
    let htmlContent = marked.parse(escapedContent, { async: false });
    return htmlContent;
  }
  $$payload.out += `<div${attr("class", `message ${stringify(message.username === username ? "own" : "other")} svelte-1cemtwd`)}><div class="message-content svelte-1cemtwd"><strong>${escape_html(message.username)}:</strong> ${html(formatMessage(message.content))}</div> <div class="message-timestamp svelte-1cemtwd">${escape_html(new Date(message.timestamp).toLocaleTimeString())}</div> `;
  if (message.username === username) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button class="delete-btn svelte-1cemtwd">Delete</button>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { message, username, deleteMessage });
  pop();
}
function MessageList($$payload, $$props) {
  push();
  let messages = $$props["messages"];
  let username = $$props["username"];
  let deleteMessage = $$props["deleteMessage"];
  $$payload.out += `<div class="messages-wrapper svelte-122usky"><div class="messages svelte-122usky" id="message-container">`;
  if (messages.length === 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="welcome-message svelte-122usky"><h2 class="svelte-122usky">Welcome to Chat-App-XYZ</h2> <p class="svelte-122usky">Start chatting to see your messages appear here!</p></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    const each_array = ensure_array_like(messages);
    $$payload.out += `<div class="message-list svelte-122usky"><!--[-->`;
    for (let $$index = 0; $$index < each_array.length; $$index++) {
      const message = each_array[$$index];
      Message($$payload, { message, username, deleteMessage });
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]--></div></div>`;
  bind_props($$props, { messages, username, deleteMessage });
  pop();
}
function MessageInput($$payload, $$props) {
  push();
  let username = $$props["username"];
  let ws = $$props["ws"];
  let users = $$props["users"];
  let addMessage = $$props["addMessage"];
  let currentMessage = "";
  let isLiveMode = false;
  $$payload.out += `<div class="input-area svelte-iqx5hw"><input${attr("value", currentMessage)} placeholder="Type your message here" class="svelte-iqx5hw"> <button${attr("disabled", isLiveMode, true)} class="svelte-iqx5hw">Send</button> <button${attr("class", `svelte-iqx5hw ${stringify([""].filter(Boolean).join(" "))}`)}>${escape_html("Start Live")}</button></div>`;
  bind_props($$props, { username, ws, users, addMessage });
  pop();
}
function ChatContainer($$payload, $$props) {
  push();
  let username = $$props["username"];
  let ws = $$props["ws"];
  let messages = [];
  let users = [];
  function updateMessages(data) {
    const existingMessageIndex = messages.findIndex((m) => m.id === data.id);
    if (existingMessageIndex !== -1) {
      messages[existingMessageIndex] = data;
    } else {
      messages = [...messages, data];
    }
    messages = messages;
  }
  function deleteMessage(id) {
    ws.send(JSON.stringify({ type: "delete", id }));
    messages = messages.filter((m) => m.id !== id);
  }
  function addMessage(messageData) {
    updateMessages(messageData);
  }
  {
    if (ws) {
      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.type === "message" || data.type === "live") {
          updateMessages(data);
        } else if (data.type === "delete") {
          messages = messages.filter((m) => m.id !== data.id);
        } else if (data.type === "userList") {
          users = data.users;
        }
      };
    }
  }
  $$payload.out += `<div class="chat-container svelte-139af06">`;
  MessageList($$payload, { messages, username, deleteMessage });
  $$payload.out += `<!----> `;
  MessageInput($$payload, { username, ws, users, addMessage });
  $$payload.out += `<!----></div>`;
  bind_props($$props, { username, ws });
  pop();
}
function _page($$payload, $$props) {
  push();
  let username = "";
  let ws;
  $$payload.out += `<main class="svelte-1uaxr0p">`;
  ChatContainer($$payload, { username, ws });
  $$payload.out += `<!----></main>`;
  pop();
}
export {
  _page as default
};
