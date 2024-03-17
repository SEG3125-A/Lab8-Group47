import React from "react";
import styles from "./styles.module.css";

export type Statistic = {
    name: string;
    value: string;
}

type SizedStyles = {
    main: string;
    name: string;
    value: string;
}

export type StatDisplayProps = {
    size: 'sm' | 'lg';
    data: Statistic;
}

export default function StatDisplay(props:StatDisplayProps) {

    let sized_styles: SizedStyles = {
        main:  props.size === 'sm' ? styles.main_sm : styles.main_lg,
        name: props.size === 'sm' ? styles.name_sm : styles.name_lg,
        value: props.size === 'sm' ? styles.value_sm : styles.value_lg,
    }

    return (
        <div className={sized_styles.main}>
           <div className={sized_styles.name}>{props.data.name}</div>
           <div className={sized_styles.value}>{props.data.value}</div>
        </div>
    );
}