import React from "react";
import styles from "./styles.module.css";
import { ExerciseType } from "../../store";
import store from "../../store";
import StatDisplay from "../../components/stat_display/StatDisplay";


export type GoalData = {
    exercise: ExerciseType;
    sets: number;
    reps: number;
}

export type GoalProps = {
    style?: React.CSSProperties;
    data: GoalData;
}

export default function Goal(props: GoalProps) {
    
    return (
        <div className={styles.goal}>

            {/* Top Section - Title and Progress Ring */}
            <div className={styles.visual}>
                <div className={styles.exerciseType}>
                    <h3>{props.data.exercise[store.language]}</h3>
                </div>
                <div className={styles.goalRing} />
            </div>

            {/* Bottom Section - Stats */}
            <div className={styles.goalInfo}>
                <StatDisplay size="lg" data={{
                    name: "Total Sets", 
                    value: props.data.sets.toString(),
                }}/>
                <StatDisplay size="lg" data={{
                    name: "Reps (Per Set)", 
                    value: props.data.reps.toString(),
                }}/>
            </div>
            
            {/* <button className={styles.deleteButton} onClick={() => deleteSomething(index)}>Delete</button> */}
        
        </div>
    );
}