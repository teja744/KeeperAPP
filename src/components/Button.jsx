import React, {useState} from "react";
import Example from "./Example";
function Button(){
    const [name,setName] = useState("Button");
    const x=71;
    const changeText= ()=>{
            setName("May");
            alert("Great Shot!");
    }
    const condition= ()=>{
        if(x>5){
            alert(x);    
        }
        else{
            alert("Else");
        }
    }
    
    return(
        <div>
            <h1>{name}</h1>
            <button onClick={condition}>Submit</button>
            <hr />
        </div>  
        
    );
};

export default Button;


// function changeText(event){
    //     setName("May");
    //     alert("Great Shot!");
    //     console.log(event.target.value);
    // }