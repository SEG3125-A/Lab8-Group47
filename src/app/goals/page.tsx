"use client"

import React from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
import store from '../store'

import Goal from './components/goal';
import { Plus } from 'react-bootstrap-icons';

export default function Goals() {

    // const deleteSomething = (index) => {
    //     goals.splice(index, 1);
    //     localStorage.setItem('goals', JSON.stringify(goals));   
    //     window.location.href = "/goals"
    // };

    return (
        <div className={styles.body}>
            <h2>My Goals</h2>

            {/* Map through the goals array and render each goal */}
            <div className={styles.goals}>
                {store.goals.map((goal, index) => (
                    <Goal data={goal} key={goal.id}/>
                ))}
            </div>
            
            <Link href="/goals/new" className={styles.newGoal}>
                <Plus className={styles.plusIcon}/>
            </Link>

        </div>
    );
}
