import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import "./Register.css"
// import { Toast, configureToasts } from "toaster-js";
// import "../toastr/default.css"



export default function Register() {


    // configureToasts({
    //     TopOrigin: -400,
    //     deleteDelay: 300
    // });

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [studentID, setStudentID] = useState('');
    const [workerID, setWorkerID] = useState('');
    const [errors, setErrors] = useState({});

    const url = "http://localhost:5000"

    const submit = async (event) => {
        event.preventDefault();
        const payload = {
            name: firstName + lastName,
            studentID,
            workerID
        }
        // const response = await axios.post(`${url}/student/`,payload);
        // if(response.data === "Student with your ID already Exist"){
        //     // return new Toast("Student with your ID is already registered",Toast.TYPE_ERROR, Toast.TIME_NORMAL);
            
        //     return ;
        // }
        try{
        const response = await axios.post(`${url}/student/`, payload);
        console.log(response.data.json);
        }catch(err){
            //console.log(err)
        }
        //return navigate('/');
    }

    return (
        <form className="registerContainer" onSubmit={(e)=>submit(e)}>
            <p className="BigFont">Register</p>

            <div className="FirstLastNameContainer">
                <div className="flexCol">
                    <label>First Name:</label>
                    <input
                        id="FirstName"
                        autoComplete="off"
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="flexCol">
                    <label>Last Name:</label>
                    <input
                        id="LastName"
                        autoComplete="off"
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
            </div>

            <div className="flexCol">
                <label>Student ID:</label>
                <input
                    id="StudentID"
                    type="text"
                    placeholder="Student ID"
                    value={studentID}
                    onChange={(e) => setStudentID(e.target.value)}
                />
            </div>

            <div className="flexCol">
                <label>Worker ID:</label>
                <input
                    id="WorkerID"
                    type="text"
                    placeholder="Worker ID"
                    value={workerID}
                    onChange={(e) => setWorkerID(e.target.value)}
                />
            </div>
            {errors.serverError && <p className="error">{errors.serverError}</p>}
            <button className="bigPurpleButton" type="submit">Register</button>
        </form>
    );
}
