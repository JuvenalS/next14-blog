console.log("Simulated ChatBot script loaded");

window.initializeChatBot = () => {
    const chatbox = document.createElement("div");
    chatbox.textContent="Chatbot UI here";
    chatbox.style.position = "fixed";
    chatbox.style.bottom = "10px";
    chatbox.style.right = "10px";
    chatbox.style.backgroundColor = "lightgrey";
    chatbox.style.color = "black";
    chatbox.style.padding = "5px";
    document.body.appendChild(chatbox);
};