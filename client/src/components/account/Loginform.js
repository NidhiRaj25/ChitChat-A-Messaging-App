import React, { useState } from "react";
import "./Loginform.css";
import Box from '@mui/material/Box';
import {jwtDecode} from 'jwt-decode';
import { useContext } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { AccountContext } from '../../context/AccountProvider';
import { addUser } from "../../service/api";



const Loginform = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
  }

// import setAccount from AccountContext using useContext
  const {setAccount} = useContext(AccountContext);

  const onLoginSuccess = async(res) => {
     const decode = jwtDecode (res.credential);
     console.log(decode);
     setAccount(decode);
     await addUser(decode);
  }

  const onLoginError = (res) => { 
     console.log("login failed",res)
  }


  return (
    <div className="cover">
      {/* <h1>ChitChat</h1> */}

      <input type="text"
        value={email}
        placeholder="  Phone number or email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input type="Password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="login-btn"
        type="submit"
        onClick={handleSubmit}
      >
        Login
      </button>

      <div className="ortag">OR</div>

      <Box><GoogleLogin className=" google"
        onSuccess={onLoginSuccess}
        onError={onLoginError}
      />
      </Box>

      <p>Forgot password?</p>
       
    </div>
  );
};

export default Loginform;
