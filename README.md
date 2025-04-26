# 💬 Websocket-With-Flutter-Node-React: Simple Chat App

A simple real-time chat app built with Flutter, React, and a Node.js WebSocket server. This project demonstrates the power of WebSocket communication across mobile and web platforms using a lightweight Node.js backend.

---

## 📋 Features:

- ✅ Send and receive messages in real-time.
- ✅ Differentiate between sent and received messages.
- ✅ Flutter and React clients can communicate.
- ✅ Built with clean, simple, and scalable code. 
- ✅ Demonstrates WebSocket integration for mobile and web.

---

## 🛠️ Project Structure:

```
├── websocket-with-flutter-node-react      # 🎯 Main Project Folder.
    ├── flutter_client                     # 📱 Can send and receive messages.
    ├── react_client                       # 💻 Can send and receive messages.
    └── node_backend                       # 🔌 Handles WebSocket communication between clients.
```

---

## ⚙️ Tech Stack:
The following tech stack is used in this project:

| Parts            | Technologies Used |
|------------------|--------------------|
| Flutter Client   | Flutter, WebSocket Channel |
| Node Backend     | Node.js, Express, WS (WebSocket), TypeScript |
| React Client     | React, Vite, TailwindCSS |

---

## 📦 Dependencies:
The following dependencies are used in this project:

### 📱 Flutter Client:
```yaml
dependencies:
  web_socket_channel: ^3.0.3
```

### 💻 React Client:
```json
"dependencies": {
  "@tailwindcss/vite": "^4.1.4",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "tailwindcss": "^4.1.4"
},
"devDependencies": {
  "@eslint/js": "^9.22.0",
  "@types/react": "^19.0.10",
  "@types/react-dom": "^19.0.4",
  "@vitejs/plugin-react": "^4.3.4",
  "eslint": "^9.22.0",
  "eslint-plugin-react-hooks": "^5.2.0",
  "eslint-plugin-react-refresh": "^0.4.19",
  "globals": "^16.0.0",
  "typescript": "~5.7.2",
  "typescript-eslint": "^8.26.1",
  "vite": "^6.3.1"
}
```

### 🧱 Node Backend:
```json
"dependencies": {
  "@types/cors": "^2.8.17",
  "@types/express": "^5.0.1",
  "@types/node": "^22.14.1",
  "@types/ws": "^8.18.1",
  "cors": "^2.8.5",
  "dotenv": "^16.5.0",
  "express": "^5.1.0",
  "ts-node": "^10.9.2",
  "typescript": "^5.8.3",
  "ws": "^8.18.1"
}
```

---

## 🚀 How to Run the Project:
#### Clone the repository:

```sh
https://github.com/PAIshanMadusha/websocket-with-flutter-node-react.git
```
#### Navigate to the project directory:

```sh
websocket-with-flutter-node-react
```

---

### 1. 🧱 Start the Node WebSocket Server:

#### Navigate to the **Backend** directory:
```bash
cd node_backend
```

#### Install dependencies:
```bash
npm install
```

#### Start the backend server:
```bash
npm run dev
```

#### ✅ If the server starts successfully, you should see in the terminal: `Server is Running On Port: 4000.`

---

### 2. 📱 Run the Flutter Client:

#### Navigate to the **Flutter Client** directory:
```bash
cd flutter_client
```

#### Install dependencies:
```bash
flutter pub get
```

#### Update the WS URL in the Flutter client-side:

- Open `flutter_client\lib\services\chat_service.dart`.
- Replace the **WS URL** on **line 5** (e.g., `"ws://192.168.8.150:4000"`) with your **IP address**.

**How to find your IP address**:
- Open **Command Prompt** on your Windows machine.
- Type `ipconfig` and press Enter.
- Look for the **IPv4 Address** under the **Wireless LAN adapter Wi-Fi** section and use that as the IP to replace `192.168.8.150`.

#### ✅ Now you can run the app. Make sure you're inside the Flutter client directory:

```bash
flutter run
```

---

### 3. 💻 Run the React Client:

#### Navigate to the **React Client** directory:
```bash
cd react_client
```

#### Install dependencies:
```bash
npm install
```

#### Start react web client:
```bash
npm run dev
```

#### ✅ It will start a dev server, usually at `http://localhost:5173/`. You can see the URL in the terminal.

---

## 📸 System Screenshots:

| Flutter App 📱 | React Web App 💻 |
|:---------------:|:-----------------:|
| Chat Interface: | Chat Interface: |
| <p align="center"> <img src="https://github.com/user-attachments/assets/31bd3a8e-adea-495a-b5fb-9fa3831d14e2" alt="Screenshot 1" width="185"> </p> | <p align="center"> <img src="https://github.com/user-attachments/assets/da8083e8-9cde-4cea-8afa-972dd00430b2" alt="Screenshot 1" width="375"></p> |

---

### 👨‍💻 Created by: 
**Ishan Madhusha**  
GitHub: [PAIshanMadusha](https://github.com/PAIshanMadusha)

Feel free to explore my work and get in touch if you'd like to collaborate! 🚀

---

## 📝 License:
This project is open-source and available under the MIT License.
