'use client';
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from 'next/navigation';
import './styles.css';
export default function Login() {
  const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const router = useRouter()

    const handleSubmit = (event) => {

      event.preventDefault();

      
      if (password.length == 0 || email.length == 0 || username.length == 0){
        alert("One or more field(s) are empty");
        return;
      }

      console.log(
        `Submitted username: ${username}, password: ${password}, email: ${email}`
      );
      router.push('/account');

    };

  const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };

    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };

    return (
      <div className="containerDiv">
        <div>
          <h1>
          Login
          </h1>
        </div>
        <div className="signupForm">
          <form className="signup-form" action="" method="post" onSubmit={handleSubmit} >
            <input type="email" className="input" id="user_email" autoComplete="off" placeholder="Email" value={email} onChange={handleEmailChange} />
            <input type="text" className="input" id="user_name" autoComplete="off" placeholder="Username" value={username} onChange={handleUsernameChange} />
            <input type="password" className="input" id="user_pass" autoComplete="off" placeholder="Password" value={password} onChange={handlePasswordChange}/>
            <div className="buttonContainer">
              <input type="submit" className="button" value="Login" />
            </div>
          </form>
        </div>
      </div>
    );
}
  