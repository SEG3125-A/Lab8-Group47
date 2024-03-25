'use client';
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from 'next/navigation';
import './styles.module.css';
import { At } from 'react-bootstrap-icons';
import { Key } from 'react-bootstrap-icons';
import styles from './styles.module.css';
import MyButton from '../components/button/Button.tsx';






export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter()

  const handleSubmit = (event) => {

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
      <div className={styles.pageBody}>
        <div className={styles.alignment}>
          <div className={styles.mainText}>Login to Your Account</div> 
          <div className={styles.loginBox}>
            <div className={styles.textFields}>
              <div className={styles.emailField}>
                <div className={styles.label}>EMAIL</div>
                <div className={styles.selectionBox}>
                  <div className={styles.boxContent}>
                    <div className={styles.symbol}>
                      <At size="24"/>
                    </div>
                    <div className={styles.textBox}>
                      <input type="text" className={styles.input} autoComplete="off" placeholder="Username" value={username} onChange={handleUsernameChange} />
                    </div>
                  </div>
                  <div className={styles.underline}/>
                </div>
              </div>
              <div className={styles.passwordField}>
                <div className={styles.label}>PASSWORD</div>
                  <div className={styles.selectionBox}>
                    <div className={styles.boxContent}>
                        <div className={styles.symbol}>
                          <Key size="24"/>
                        </div>
                        <div className={styles.textBox}>
                          <input className={styles.input} autoComplete="off" placeholder="Password" value={password} onChange={handlePasswordChange}></input>
                        </div>
                    </div>
                    <div className={styles.underline}/>
                  </div>
              </div>
            </div>
            <div className={styles.buttonView}>
              <MyButton 
                onClick={handleSubmit}
                style={{backgroundColor: "rgba(49, 233, 178, 1)", fontFamily: 'sans-serif'}}
                size='lg'
              > LOGIN </MyButton>
              <MyButton 
              onClick={() => router.push('/signup')}                style={{backgroundColor: "#60FCA2", fontFamily: 'sans-serif'}}
                size='sm'
              > SIGN-UP </MyButton>
            </div>
          </div>
        </div>
      </div>
    );
}
  