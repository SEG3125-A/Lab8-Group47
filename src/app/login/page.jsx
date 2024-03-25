'use client';
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from 'next/navigation';
import './styles.module.css';
import styles from './styles.module.css';
import MyButton from '../components/buttons/block/Button';
import { observer } from 'mobx-react';
import { PasswordField, EmailField } from "../components";

import store from "../store";
import { Languages } from '../store';

function Login() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const router = useRouter()

    const handleSubmit = (event) => {
        console.log(`Submitted username: ${username}, password: ${password}, email: ${email}`);
        router.push('/account');
    };

    const handleEmailChange = (value) => {
      setEmail(value);
    };

    const handlePasswordChange = (value) => {
        setPassword(value);
    };

    return (
      <div className={styles.pageBody}>
        <div className={styles.alignment}>

            <div className={styles.mainText}>
                {store.language === Languages.English ? "Login to Your Account" : "Connectez-vous à votre compte"}
            </div> 
            
            <div className={styles.loginBox}>

                <div className={styles.textFields}>
                    <EmailField onChange={(v) => handleEmailChange(v)} value={email}/>
                    <PasswordField onChange={(v) => handlePasswordChange(v)} value={password}/>
                </div>

                <div className={styles.buttonView}>
                    <MyButton 
                        onClick={handleSubmit}
                        style={{backgroundColor: "rgba(49, 233, 178, 1)"}}
                        size='lg'
                    > 
                        {store.language === Languages.English ? "LOGIN" : "CONNECTER"}
                    </MyButton>
                    <MyButton 
                        onClick={() => router.push('/signup')} 
                        style={{backgroundColor: "#60FCA2"}}
                        size='sm'
                    > 
                        {store.language === Languages.English ? "SIGN-UP" : "INSCRIRE"} 
                    </MyButton>
                </div>
                
            </div>

        </div>
      </div>
    );
}

export default observer(Login);
  