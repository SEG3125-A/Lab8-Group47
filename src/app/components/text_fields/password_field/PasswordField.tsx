import React from "react";
import {TextField, Label, Input} from 'react-aria-components';
import styles from "./styles.module.css";
import { Key } from 'react-bootstrap-icons';
import store from "../../../store";
import { Languages } from '../../../store';
import { observer } from "mobx-react";


export type PasswordFieldProps = {
    style?: React.CSSProperties;
    onChange: (value: string) => void;
    value?: string;
    label?: DisplayString;
    placeholder?: DisplayString;
}

export type DisplayString = {
    english: string;
    french: string;
}

function PasswordField(props: PasswordFieldProps) {

    const textDefaults = {
        label: {
            english: "Password",
            french: "Mot de Passe",
        },
        placeholder: {
            english: "Password",
            french: "Mot de Passe",
        },
    }

    let labelText: string;
    let placeholderText: string;

    // Setup for English
    if (store.language === Languages.English) {
        labelText = props.label ? props.label.english : textDefaults.label.english;
        placeholderText = props.placeholder ? props.placeholder.english : textDefaults.placeholder.english;
    // Setup for French
    } else {
        labelText = props.label ? props.label.french : textDefaults.label.french;
        placeholderText = props.placeholder ? props.placeholder.french : textDefaults.placeholder.french;
    }
    

    return (
        <TextField
            style={props.style}
            className={styles.passwordField}
            onChange={props.onChange}
            value={props.value}
        >
            <Label className={styles.label}>{labelText} </Label>

            <div className={styles.selectionBox}>
                <Key className={styles.icon}/>
                <div className={styles.textBox}>
                    <Input className={styles.input}
                        autoComplete="off" 
                        placeholder={placeholderText} 
                    />
                </div>
            </div>
        </TextField>
    );
}

export default observer(PasswordField);