import { useSelector } from "react-redux";
import { currentItemGain } from "../../redux/actions";

const Alert = () => {
  const currentItemGain = useSelector(state => state.currentItemGain);


return (
  <div className="w-screen bg-white h-screen absolute">
    <img src={currentItemGain.itemImage} />
    <p>
      You have gotten {currentItemGain.name} 
    </p>
    <p>
      {currentItemGain.itemExp} Exp gained
    </p>
  </div>
)
} 
export default Alert