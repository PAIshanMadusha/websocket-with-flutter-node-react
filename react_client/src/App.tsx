import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<{ text: string; self: boolean }[]>([]);
  const [userMessage, setUserMessage] = useState<string>("");

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:4000");
    ws.onopen = () => {
      console.log("Connected to the Server!");
      setSocket(ws);
    };
    ws.onmessage = (event) => {
      if (event.data instanceof Blob) {
        const reader = new FileReader();
        reader.onload = () => {
          const text = reader.result as string;
          setMessages(prev => [...prev, { text, self: false }]);
        };
        reader.readAsText(event.data);
      } else if (typeof event.data === "string") {
        setMessages(prev => [...prev, { text: event.data, self: false }]);
      }
    };
    ws.onclose = () => {
      console.log("Disconnected from the Server");
      setSocket(null);
    };
    ws.onerror = (error) => {
      console.error(error);
      ws.close();
    };
    return () => {
      ws.close();
    };
  }, []);

  const handleSendMessage = () => {
    if (userMessage.trim() !== "") {
      socket?.send(userMessage);
      setMessages((prev) => [...prev, { text: userMessage, self: true }]);
      setUserMessage("");
    }
  };

  if (!socket) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl font-bold">Connecting to Server...</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-4">
      <h1 className="text-4xl font-bold mb-6 text-blue-800">💬 Simple Chat App</h1>
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-4 flex flex-col">
        <div className="flex-1 overflow-y-auto mb-4 space-y-2 h-96">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.self ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs p-3 rounded-lg ${
                  message.self
                    ? 'bg-blue-500 text-white rounded-br-none'
                    : 'bg-gray-200 text-gray-800 rounded-bl-none'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-grow border border-gray-300 rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-black mr-2"
            placeholder="Type your message..."
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 text-white px-6 rounded-r-lg hover:bg-blue-600 transition-all"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
