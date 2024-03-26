"use client";
import styles from "./styles.module.css";
import { observer } from "mobx-react";
import store, { Languages } from '../../store';
import type {NumberFieldProps as AriaNumberFieldProps} from 'react-aria-components';
import {Group, Input, Label, NumberField as AriaNumberField} from 'react-aria-components';
import { ChevronUp, ChevronDown } from 'react-bootstrap-icons';
import { DisplayString } from '../common_types';
import IconButton from '../buttons/icon/Button';

interface NumberFieldProps extends AriaNumberFieldProps {
    style?: React.CSSProperties;
    label: DisplayString;
}

export const NumberField = observer(({ label, ...props }: NumberFieldProps) => {

    let labelText: string = store.language === Languages.English 
        ? label.english
        : label.french;
    
    return (
        <AriaNumberField style={props.style} className={styles.numberField} {...props}>

            <Label className={styles.label}>{labelText}</Label>
            <div className={styles.boxContent}>
                <Group className={styles.textBox}>

                    <Input className={styles.input} />
                    <div className={styles.chevrons}>
                        <IconButton slot="increment">
                            <ChevronUp className={styles.icon}/>
                        </IconButton>
                        <IconButton slot="decrement">
                            <ChevronDown className={styles.icon}/>
                        </IconButton>
                    </div>

                </Group>
            </div>
            
        </AriaNumberField>
    );
});