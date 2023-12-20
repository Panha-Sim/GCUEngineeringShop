import GCU_LOPE from "./Grand_Canyon_University_2023_Logo_Update.png"
import "./VerticalNav.css"
import StudentSVG from "./svg/StudentSVG"
import TrainedSVG from "./svg/TrainedSVG"
import Backarrow from "./svg/Backarrow"
import { useEffect} from "react"
import { Link, useLocation } from "react-router-dom"

export default function Dashboard(){
    const location = useLocation();

    const studentTab = location.pathname === '/signedInStudent'
    const trainedStudent = location.pathname ==='/TrainedStudent'
    
    useEffect(()=>{

    },[location.pathname])
    

    const navOption = [
        {
            icon:<StudentSVG fill={studentTab?"#552B9A":"black"}/> ,
            to: '/signedInStudent',
            text:"signed-in student", 
            current: studentTab
        },
        {
            icon:<TrainedSVG fill={trainedStudent?"#552B9A":"black"}/> , 
            to: '/TrainedStudent',
            text:"Trained Student", 
            current: trainedStudent
        }
    ];

    return(
        <>
        <div className="verticalNav">
            <img className="GCULogoImagedashboard" src={GCU_LOPE} alt="Lopelogo"></img>   
            
            <hr style={{border: ".5px solid", width:"70%", opacity:".3"}}></hr>
            <br></br>
            
              {navOption.map( (nav) => (
                <Link className={nav.current?"flex activeTab":"flex"} to={nav.to}>
                    <div >{nav.icon}</div>
                    <p className="textV" 
                        style={{color:nav.current?"#552B9A":"black", opacity:nav.current?".9":".6"}}>{nav.text}</p>
                </Link>
                ))}     
            <div className="purpleButton">
                <div style={{marginLeft:"1rem"}}>
                    <Backarrow />
                </div>
                <Link style={{color:"white", marginRight:"35% "}}  to='/'>Go Back</Link>       
            </div>
        </div>
        
        </>
    )
}