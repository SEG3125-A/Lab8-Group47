'use client';
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from 'next/navigation';
import styles from './styles.module.css';
import './styles.module.css';
import MyButton from '../components/buttons/block/Button';
import { PasswordField, EmailField } from "../components";
import store from '../store.ts';
import { Languages } from "../store.ts";
import { observer } from 'mobx-react';


function SignUp() {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter()


  const handleSubmit = (event) => {

    if (password !== passwordConfirm) {
        alert("Passwords do not match");
        return;
    }

    console.log(`Submitted username: ${username}, password: ${password}, email: ${email}`);
    router.push('/login');
  };

  const handleEmailChange = (value) => {
      setEmail(value);
    };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handlePasswordConfirmChange = (value) => {
    setPasswordConfirm(value);
  };

  
  return (
    <div className={styles.pageBody}>
        <div className={styles.alignment}>

            <div className={styles.mainText}>
                {store.language === Languages.English ? "Create a New Account!" : "Créer un Compte!"}
            </div> 

            <div className={styles.loginBox}>
                <div className={styles.textFields}>
                    <EmailField 
                        onChange={(v) => handleEmailChange(v)} 
                        value={email}
                    />
                    <PasswordField 
                        onChange={(v) => handlePasswordChange(v)} 
                        value={password}
                    />
                    <PasswordField 
                        onChange={(v) => handlePasswordConfirmChange(v)} 
                        value={passwordConfirm} 
                        label={{english: "CONFIRM PASSWORD", french: "Confirmez le mot de passe"}}
                    />
                </div>

                <div className={styles.buttonView}>
                    <MyButton 
                        onClick={handleSubmit}
                        style={{backgroundColor: "rgba(49, 233, 178, 1)"}}
                        size='sm'
                    > 
                        {store.language === Languages.English ? "SUBMIT" : "ENVOYER"}
                    </MyButton>
                    {/* <div className={styles.helpText}></div> */}
                </div>

            </div>
        </div>
    </div>
  );
}

export default observer(SignUp);