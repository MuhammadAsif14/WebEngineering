import Circle from "./Circle";
import Rectangle from "./Rectangle";
import Square from "./Square";
import "./shapes.css";

const Shapes=()=>{
    return <>
    <div className="container">
        <Rectangle/>
        <Square/>
        <Circle color="yellow" />
        
    </div>
    <div className="circle"></div>
    <div className="square"></div>
    <div className="triangle"></div>
    </>
}
export default Shapes