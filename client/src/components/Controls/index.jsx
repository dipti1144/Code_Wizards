import { useState, useContext, useEffect } from "react";
import { SocketContext } from "../../context/SocketContext";
import rock_right_hand_img from "../../images/rock_right_hand.png";
import paper_right_hand_img from "../../images/paper_right_hand.png";
import scissors_right_hand_img from "../../images/scissors_right_hand.png";


function Controls() {
  const [option, setOption] = useState("");
  const { socket, room } = useContext(SocketContext);

  useEffect(() => {
    if (room.players[socket.id].optionLock) {
      setOption(room.players[socket.id].option);
    } else {
      setOption("");
    }
  }, [room]);

  const handleChange = ({ currentTarget: input }) => {
    setOption(input.value);
    room.players[socket.id].option = input.value;
    room.players[socket.id].optionLock = true;
    socket.emit("room:update", room);
  };

  return (
    <div class="absolute w-260 flex justify-between bottom-30 left-1/2 transform -translate-x-1/2">
  <button onClick={handleChange} value="rock"  disabled={room.players[socket.id].optionLock} class="w-60 h-60 border-4 border-white rounded-lg bg-black overflow-hidden flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110 focus:outline-none">
    <img  src={rock_right_hand_img}  alt="rock_hand" class="w-60 transform rotate-90 -mb-10" />
  </button>
  <button  disabled={room.players[socket.id].optionLock}
        onClick={handleChange}
        value="paper" class="w-60 h-60 border-4 border-white rounded-lg bg-black overflow-hidden flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110 focus:outline-none">
    <img src={paper_right_hand_img}  alt="rock_hand" class="w-60 transform rotate-90 -mb-10" />
  </button>
  <button   disabled={room.players[socket.id].optionLock}
        onClick={handleChange}
        value="scissors" class="w-60 h-60 border-4 border-white rounded-lg bg-black overflow-hidden flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110 focus:outline-none">
    <img  src={scissors_right_hand_img}  alt="rock_hand" class="w-60 transform rotate-90 -mb-10" />
  </button>
</div>
  );
}

export default Controls;