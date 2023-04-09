import io from "socket.io-client";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import "./chat.css"
export default function Chat() {
  const [messesge, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const socket = io.connect("http://localhost:8080")
  const userName=nanoid(4)
  const sendChat=(e)=>{
  e.preventDefault()
  socket.emit("chat",{messesge,userName})
  setMessage('')
  }
  useEffect(()=>{
    socket.on("chat",(payload)=>{
        setChat([...chat,payload])
    })
  })
  return (
    <>
      <h1 className="chatheading">Welcome to Chat Room</h1>
      <div className="chatcontainer">
      {
        chat.map((payload,index)=>{
            return(
              <div  style={{display:"flex",gap:"1rem"}}>
  <p  className="chatusername">
                   {payload.userName}</p>
                   <p>-</p>
                <p mt={"1rem"} className="chatmessage" key={index+1}>{payload.messesge} </p>
              </div>
            
            )
        })
      }
      </div>
  
      <form className="chatform" onSubmit={sendChat}>
        <input className="chatinput" type="text" placeholder="let's chat with your opponent" value={messesge} onChange={(e)=>{
            setMessage(e.target.value)
        }} />
        <button disabled={messesge===""} 
        className="chatsendbutton" type="submit">Send</button>
      </form>
    </>
  );
}
