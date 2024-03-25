import React from "react";
import {Button} from 'react-aria-components';
import styles from "./styles.module.css";


export type ButtonProps = {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    onClick: () => void;
}

export default function IconButton(props: ButtonProps) {
    
    let classNames: string = styles.button
    if(props.className) {
        classNames += ` ${props.className}`;
    }
    
    return (
        <Button
            style={props.style}
            className={classNames}
            onPress={props.onClick}
        >
            {props.children}
        </Button>
    );
}