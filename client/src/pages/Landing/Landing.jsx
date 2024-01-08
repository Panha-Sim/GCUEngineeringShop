import { useState } from "react";
import GCU_LOPE from "./GCU_Lope_267.webp"
import "./Landing.css"
import axios from "axios"
import { Toast, configureToasts } from "toaster-js";
import "../toastr/default.css"


export default function Landing(){
    const [input, setInput] = useState('');

    const handleCLick = async (e)=>{
        e.preventDefault();
        try{
            const response = await axios.post(`http://localhost:5000/signinTracker/${input}`);
            console.log(response.data);
                
        if (response.data === "You are Sign out!!") {
            new Toast("You are Sign out!!", Toast.TYPE_INFO, Toast.TIME_NORMAL);
        } else if (response.data === "you are not register yet") {
            new Toast("You are not registered yet", Toast.TYPE_ERROR, Toast.TIME_NORMAL);
        } else if(Object.keys(response.data).length !== 0) {
                new Toast("Welcome Back "+ response.data.name.split(" ")[0] + "!", Toast.TYPE_DONE, Toast.TIME_NORMAL);
        }
        
        }catch(error){
            console.log(error);
        }
        document.getElementById("text").value = '';
    }


    configureToasts({
        TopOrigin: 0,
        deleteDelay: 300
    });
    
  
    return(
       <form className="landing" onSubmit={handleCLick}>
        
            <div className="centerPieces">
                <img className="customeLOPE" src={GCU_LOPE} alt="Lopelogo"></img>
                <h3 className="engineeringShop">Engeering Shop</h3>
                <input id="text" className="studentIdInput" autoComplete="off" type="text" placeholder="student ID" onChange={(e)=>{setInput(e.target.value)}}></input>
                
            </div>
            <div className="circle" style={{bottom: '-19%', right: '-11%', backgroundColor: '#562B99'}}></div>
            <div className="circle" style={{bottom: '-33%', right: '4%', backgroundColor: '#562B99'}}></div>
            <div className="circle" style={{bottom: '-19%', left: '-10%', backgroundColor: '#FBE500'}}></div>
       </form>
    )
}