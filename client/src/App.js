import logo from './logo.svg';
import io from "socket.io-client"
import {nanoid} from "nanoid"
import './App.css';
import Chat from './components/Chat_there/Chatthere';
import Home from './pages/Home';
import Button from './components/Button';




function App() {
  const socket = io.connect("http://localhost:8080")
  return (
    <div className="App">
    <Home/>
     {/* <Chat/> */}
     {/* <Button/> */}
    </div>
  );
}

export default App;
