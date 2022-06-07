
import React,{useState} from "react";
import { useReadOTP } from "react-read-otp";

function Test2() {
    const [otp, setOTP] = useState('');
    useReadOTP(setOTP);
    return (
        <div>
            <h3>OTP Screen</h3>
            <input placeholder="Enter otp" value={otp} onChange={e => setOTP(e.target.value)} />           
        </div>
    )
}
export default Test2;