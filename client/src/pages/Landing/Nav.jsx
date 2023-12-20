import "./Nav.css"
import GCULogo from "./Grand_Canyon_University_2023_Logo_Update.png"
import { Link } from "react-router-dom"

export default function Nav(){
    return(
        <nav className="customNav">
            <div className="left">
                <Link to='/'>
                <img className="GCULogoImage" src={GCULogo} alt="gcuLogo"></img>
                </Link>
            </div>
            <div className="right">
                <Link to='/signedInStudent' className="LinkDashBoard">Dashboard</Link>
                <Link to='/register' className="LinkRegister">Register</Link>
            </div>
           
        </nav>
    )
}