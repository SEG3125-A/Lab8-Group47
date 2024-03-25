"use client";
import React from "react";
import styles from "../styles.module.css";
import store from "../../../store";
import { observer } from "mobx-react";
import { Languages } from '../../../store';
import { DisplayString } from "../../common_types";
import {TextField, Label, Input} from 'react-aria-components';
import { Key } from 'react-bootstrap-icons';

export type PasswordFieldProps = {
    style?: React.CSSProperties;
    onChange: (value: string) => void;
    value?: string;
    label?: DisplayString;
    placeholder?: DisplayString;
}

export const PasswordField = observer((props: PasswordFieldProps) => {

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
            className={styles.typedTextField}
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
                        type="password"
                    />
                </div>
            </div>
        </TextField>
    );
});