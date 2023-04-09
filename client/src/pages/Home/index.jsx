import Button from "../../components/Button";
import logo_img from "../../images/logo.png";
import scissors_right_hand_img from "../../images/scissors_right_hand.png";
import rock_left_hand_img from "../../images/rock_left_hand.png";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-500">
        <img src={logo_img} alt="logo" className="w-500" />
      </div>
      <div className="flex-grow relative flex flex-col items-end justify-end">
        <img
          src={scissors_right_hand_img}
          alt="paper_hand"
          className="w-500 rotate-20 absolute top-0 right-(-50) z-(-1)"
        />
        <img
          src={rock_left_hand_img}
          alt="rock_hand"
          className="w-400 rotate-(-50) absolute bottom-(-60) left-(-175) z-(-1)"
        />
        <div className="flex flex-col mx-40 my-30">
          <Button name="play with friend" type="friend" />
          <Button name="Play with stranger" type="stranger" />
        </div>
      </div>
    </>
  );
};

export default Home;
