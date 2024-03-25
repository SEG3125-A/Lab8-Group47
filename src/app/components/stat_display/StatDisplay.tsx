"use client";
import React from "react";
import styles from "./styles.module.css";
import store from "../../store";
import { observer } from "mobx-react";
import { Languages } from "../../store";

export type Statistic = {
    name: {
        english: string;
        french: string;
    };
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

    let name: string = store.language === Languages.English 
        ? props.data.name.english
        : props.data.name.french;

    return (
        <div className={sized_styles.main}>
           <div className={sized_styles.name}>{name}</div>
           <div className={sized_styles.value}>{props.data.value}</div>
        </div>
    );
}