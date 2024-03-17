import React from "react";
import {Button} from 'react-aria-components';
import styles from "./styles.module.css";


export type ButtonProps = {
    children?: React.ReactNode; 
    style?: React.CSSProperties;
    size: 'sm' | 'lg';
    onClick: () => void;
}

export default function MyButton(props: ButtonProps) {
    
    return (
        <Button
            style={props.style}
            className={props.size === 'sm' ? styles.sm : styles.lg}
            onPress={props.onClick}
        >
            {props.children}
        </Button>
    );
}