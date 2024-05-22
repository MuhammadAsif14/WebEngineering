export default function Circle({size=100,color="green"}){
    return<>
    <div style={{width:`${size}px`,height:`${size}px`,borderRadius:"50%",backgroundColor:color}}></div>
    </>
}