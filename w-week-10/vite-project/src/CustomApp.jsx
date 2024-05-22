const newComp=()=>{
    return <h2>I am new Component</h2>
};

const CustomApp=() => {
    return <h1>Custom APP<newComp></newComp> <newComp/></h1>
}
export default CustomApp