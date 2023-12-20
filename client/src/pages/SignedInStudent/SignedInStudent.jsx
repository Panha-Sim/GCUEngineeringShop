import { useEffect, useState } from "react";
import "./SignedInStudent.css";
import axios from 'axios';


export default function SignedInStudent() {
    const [data, setData] = useState([]);
    const url = "http://localhost:5000";

    
    const fetch= async ()=>{
      const response = await axios.get(`${url}/signinTracker`);
      setData(response.data);
    }

    useEffect(()=>{
      fetch();
    },[]);

    const handleClick= async (id) => {
      await axios.post(`${url}/signinTracker/signout/${id}`);
      fetch();
    }

    const SignAllOut = async() => {
      await axios.delete(`${url}/signinTracker/signallout`);
      fetch();
    }

  return (
    <div className="signedInStudent">
      <div className="SignOutButtonContainer">
        <button className="yellowButton" onClick={()=>SignAllOut()}>Sign All Out</button>
      <table>
        <tr>
          <th>Name</th>
          <th>Student ID</th>
          <th>Sign out</th>
        </tr>
        {data && data.map((student)=>(
            <tr>
            <td>{student.name}</td>
            <td className="lightGrey">{student.studentID}</td>
            <td><button className="signoutButton" onClick={()=>handleClick(student.studentID)}>Sign out</button></td>
          </tr>
        ))}
        
       
      </table>
      </div>

    </div>
  );
}
