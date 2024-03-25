"use client";
import React from "react";
import styles from "../styles.module.css";
import store from "../../../store";
import { observer } from "mobx-react";
import { Languages } from '../../../store';
import { DisplayString, FieldDefaults } from "../../common_types";
import {TextField, Label, Input} from 'react-aria-components';
import { At } from 'react-bootstrap-icons';

export type EmailFieldProps = {
    style?: React.CSSProperties;
    onChange: (value: string) => void;
    value?: string;
    label?: DisplayString;
    placeholder?: DisplayString;
}

export const EmailField = observer((props: EmailFieldProps) => {

    const textDefaults: FieldDefaults = {
        label: {
            english: "Email",
            french: "Courriel",
        },
        placeholder: {
            english: "your@email.com",
            french: "votre@courriel.com",
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
                <At className={styles.icon}/>
                <div className={styles.textBox}>
                    <Input className={styles.input}
                        placeholder={placeholderText} 
                        type="email"
                    />
                </div>
            </div>
        </TextField>
    );
});

// export default observer(EmailField);