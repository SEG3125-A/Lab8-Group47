'use client';
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from 'next/navigation';
import styles from './styles.module.css';
import './styles.module.css';
import { At } from 'react-bootstrap-icons';
import { Key } from 'react-bootstrap-icons';
import MyButton from '../components/buttons/block/Button';
import PasswordField from "../components/text_fields/password_field/PasswordField";
import store from '../store.ts';
import { Languages } from "../store.ts";
import { observer } from 'mobx-react';


function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter()
  const handleSubmit = (event) => {


    if (password !== passwordConfirm) {
        alert("Passwords do not match");
        return;
    }

    console.log(
      `Submitted username: ${username}, password: ${password}, email: ${email}`
    );
    router.push('/login');

  };

  const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (value) => {
    // console.log("PW: " + value);
    setPassword(value);
  };

  const handlePasswordConfirmChange = (value) => {
    // console.log("PW: " + value);
    setPasswordConfirm(value);
  };

  return (
    <div className={styles.pageBody}>
      <div className={styles.alignment}>
        <div className={styles.mainText}>
          {store.language === Languages.English ? "Create a New Account!" : "Créer un nouveau compte!"}
        </div> 
        <div className={styles.loginBox}>
          <div className={styles.textFields}>
            <div className={styles.emailField}>
              <div className={styles.label}>
                EMAIL
              </div>
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

            <PasswordField onChange={(v) => handlePasswordChange(v)} value={password}/>
            
            <PasswordField 
                onChange={(v) => handlePasswordConfirmChange(v)} 
                value={passwordConfirm} 
                label={{english: "CONFIRM PASSWORD", french: "Confirmez le mot de passe"}}
            />

          </div>
          <div className={styles.buttonView}>
            <MyButton 
              onClick={handleSubmit}
              style={{backgroundColor: "rgba(49, 233, 178, 1)", fontFamily: 'sans-serif'}}
              size='sm'
            > 
              {store.language === Languages.English ? "SUBMIT" : "ENVOYER"}
            </MyButton>
            <div className={styles.helpText}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default observer(SignUp);