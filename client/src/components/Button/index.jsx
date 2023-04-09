import { useContext } from "react";
import { SocketContext } from "../../context/SocketContext";
import btn_background_img from "../../images/btn_background.png";

const Button = ({ name, type }) => {
  const { socket, navigate } = useContext(SocketContext);

  const handleChange = (type) => {
    socket.emit("room:create", { type }, (err, roomId) => {
      navigate(`/room/${roomId}`);
    });
  };

  return (
    <button onClick={() => handleChange(type)} class="relative outline-none border-none w-80 h-20 rounded-3xl bg-transparent text-lg font-medium text-white capitalize cursor-pointer mb-4 hover:scale-105">
  <img src={btn_background_img} alt="button background" class="w-full h-full object-contain absolute top-0 left-0 z-[-1]" />
  {name}
</button>
  );
};

export default Button;