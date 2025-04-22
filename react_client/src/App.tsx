import { useState } from 'react';
import './App.css'
function App() {
  
  //State to Track the Socket Connection
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<String[]>([]);
  const [userMessage, setUserMessage] = useState<String>("");

  return <div></div>;
}

export default App
