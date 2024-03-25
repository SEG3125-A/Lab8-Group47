'use client';
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from 'next/navigation';
import './styles.module.css';
import { At } from 'react-bootstrap-icons';
import { Key } from 'react-bootstrap-icons';
import styles from './styles.module.css';
import MyButton from '../components/buttons/block/Button';

import store from "../store";
import { Languages } from '../store';


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
          <div className={styles.mainText}>{store.language === Languages.English ? "Login to Your Account" : "Connectez-vous à votre compte"}</div> 
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
                      <input type="text" className={styles.input} autoComplete="off" placeholder={store.language === Languages.English ? "Username" : "Nom d'utilisateur"} value={username} onChange={handleUsernameChange} />
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
                          <input className={styles.input} autoComplete="off" placeholder={store.language === Languages.English ? "Password" : "Mot de Passe"} value={password} onChange={handlePasswordChange}></input>
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
              > {store.language === Languages.English ? "LOGIN" : "CONNECTER"}</MyButton>
              <MyButton 
              onClick={() => router.push('/signup')} style={{backgroundColor: "#60FCA2", fontFamily: 'sans-serif'}}
                size='sm'
              > {store.language === Languages.English ? "SIGN-UP" : "INSCRIRE"} </MyButton>
            </div>
          </div>
        </div>
      </div>
    );
}
  