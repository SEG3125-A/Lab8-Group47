'use client';
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from 'next/navigation';
import './styles.css';


export default function SignUp() {
  const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [email, setEmail] = useState("");
    const router = useRouter()
    const handleSubmit = async (event) => {

      event.preventDefault();

      if (password !== passwordConfirm) {
         alert("Passwords do not match");
         return;
      }
      else if (password.length == 0 || passwordConfirm.length == 0 || email.length == 0 || username.length == 0){
        alert("One or more field(s) are empty");
        return
      }

      const data = { email: email, pw: password };

    const res = await fetch('http://localhost:3000/signup/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });


      console.log(
        `Submitted username: ${username}, password: ${password}, email: ${email}`
      );
    //   router.push('/login');

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

    const handlePasswordConfirmChange = (event) => {
      setPasswordConfirm(event.target.value);
    };

    return (
      <div className="containerDiv">
        <div>
          <h1>
            Create an Account
          </h1>
        </div>
        <div className="signupForm">
          <form className="signup-form" action="" method="post" onSubmit={handleSubmit} >
            <input type="email" className="input" id="user_email" autoComplete="off" placeholder="Email" value={email} onChange={handleEmailChange} />
            <input type="text" className="input" id="user_name" autoComplete="off" placeholder="Username" value={username} onChange={handleUsernameChange} />
            <input type="password" className="input" id="user_pass" autoComplete="off" placeholder="Password" value={password} onChange={handlePasswordChange}/>
            <input type="password" className="input" id="user_pass_confirm" autoComplete="off" placeholder="Confirm Password" value={passwordConfirm} onChange={handlePasswordConfirmChange} />
            <div className="buttonContainer">
              <input type="submit" className="button" value="Sign Up" />
            </div>
          </form>
        </div>
      </div>
    );
}
  