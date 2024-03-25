import React from "react";
import styles from "./styles.module.css";
import { ExerciseType, Languages } from "../../store";
import store from "../../store";
import StatDisplay from "../../components/stat_display/StatDisplay";
import { observer } from "mobx-react";
import IconButton from "../../components/buttons/icon/Button";
import { Trash } from 'react-bootstrap-icons';


export type GoalData = {
    exercise: ExerciseType;
    sets: number;
    reps: number;
}

export type GoalProps = {
    style?: React.CSSProperties;
    data: GoalData;
}

function Goal(props: GoalProps) {
    
    const handleDeleteClick = (event) => {
        
    };
    

    return (
        <div className={styles.goal}>

            <IconButton className={styles.deleteButton} onClick={() => handleDeleteClick}>
                <Trash className={styles.deleteButtonIcon}/>
            </IconButton>

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
                    name: {english: "Total Sets", french: "Ensembles Totaux"},
                    value: props.data.sets.toString(),
                }}/>
                <StatDisplay size="lg" data={{
                    name: {english: "Reps (Per Set)", french: "Réps. (Par Ensemble)"},
                    value: props.data.reps.toString(),
                }}/>
            </div>
            
            {/* <button className={styles.deleteButton} onClick={() => deleteSomething(index)}>Delete</button> */}
        
        </div>
    );
}

export default observer(Goal);