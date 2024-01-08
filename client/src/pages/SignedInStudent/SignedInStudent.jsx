import { useEffect, useState } from "react";
import "./SignedInStudent.css";
import axios from "axios";

export default function SignedInStudent() {
  const [data, setData] = useState([]);
  const url = "http://localhost:5000";

  const fetch = async () => {
    const response = await axios.get(`${url}/signinTracker`);
    setData(response.data.map(student => ({
        ...student,
        formattedSignInTime: formatSignInTime(student.SignInTime),
        duration: calculateDuration(student.SignInTime)
    })));
}

  useEffect(() => {
    fetch();
  }, []);

  const SignAllOut = async () => {
    await axios.delete(`${url}/signinTracker/signallout`);
    fetch();
  };

  const formatSignInTime = (signInTime) => {
    const date = new Date(signInTime);
    return date.toLocaleString(); // Converts to local timezone and formats
  };

  const calculateDuration = (signInTime) => {
    const signInDate = new Date(signInTime);
    const now = new Date();
    const duration = now - signInDate;
    return formatDuration(duration);
  };

  const formatDuration = (milliseconds) => {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    // Extend this to hours, days as needed
    return `${minutes} min ${seconds} sec`;
  };

  return (
    <div className="signedInStudent">
      <div className="SignOutButtonContainer">
        <button className="yellowButton" onClick={() => SignAllOut()}>
          Sign All Out
        </button>
        <table>
          <tr>
            <th>Name</th>
            <th>Signed in At</th>
            <th>Duration</th>
          </tr>

          {data &&
            data.map((student) => (
              <tr key={student.Id}>
                <td>{student.name}</td>
                <td>{student.formattedSignInTime}</td>
                <td>{student.duration}</td>
              </tr>
            ))}

        </table>
      </div>
    </div>
  );
}
