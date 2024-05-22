
import './App.css'

function App() {
const numStd=100;
// if(numStd>10)
  // return (
  //   <>
    
  //   <h1>I have alot of students</h1>
    
  //   </>
  // );
  // else return <>
  // <h1>I have a few students</h1>
  // </>
return (
<>
{numStd>10 ?( <h1>I have {numStd} students </h1>):
( <h1>I have few students</h1>)}
</>
);
}
export default App
