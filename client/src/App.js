import logo from './logo.svg';
import io from "socket.io-client"
import {nanoid} from "nanoid"
import './App.css';
import Chat from './components/Chat_there/Chatthere';
import Button from './components/Button';
import Room from './pages/Room';

function App() {
  const socket = io.connect("http://localhost:8080")
  return (
    <div className="App">
     {/* <Button/>  */}
     {/* <Chat/> */}
     <Room/>
    </div>
  );
}

export default App;
