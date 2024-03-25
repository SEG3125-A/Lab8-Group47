import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";

// export type Exercises {
//     Pushups = "Push-Ups",
//     Situps = "Sit-Ups",
//     Squats = "Squats",
// }

export const EXERCISES = [
    {
        id: 0,
        English: "Push-Ups",
        French: "Pompes",
    },
    {
        id: 1,
        English: "Sit-Ups",
        French: "Redressements assis",
    },
    {
        id: 2,
        English: "Squats",
        French: "Squats",
    }
]

export type ExerciseType = {
    id: number;
    English: string;
    French: string;
}

export enum Languages {
    English = "English",
    French = "French",
}

// ***********************
// -------- USERS --------
// ***********************

// User that has not yet been assigned a unique ID
export interface INewUser {
    email: string;
    password: string;
    createdOn: Date;
}

// User that has been assigned a unique ID
export interface IUser {
    id: number;
    email: string;
    password: string;
    createdOn: Date;
}

// Returns the full array of users, with the new user appended with a unique ID automatically assigned
const addUser = (users: IUser[], newUser: INewUser): IUser[] => [
    ...users,
    {
        id: Math.max(0, Math.max(...users.map(({ id }) => id))) + 1,
        email: newUser.email, 
        password: newUser.password, 
        createdOn: newUser.createdOn
    }
];



// ***********************
// -------- GOALS --------
// ***********************

// Goal that has not yet been assigned a unique ID
export interface INewGoal {
    exerciseType: ExerciseType;
    sets: number;
    reps: number;
}

// Goal that has been assigned a unique ID
export interface IGoal {
    id: number;
    exercise: ExerciseType;
    sets: number;
    reps: number;
}

// Returns the full array of users, with the new user appended with a unique ID automatically assigned
const addGoal = (goals: IGoal[], newGoal: INewGoal): IGoal[] => [
    ...goals,
    {
        id: Math.max(0, Math.max(...goals.map(({ id }) => id))) + 1,
        exercise: newGoal.exerciseType, 
        sets: newGoal.sets, 
        reps: newGoal.reps
    }
];

const deleteGoal = (goals: IGoal[], id: number): IGoal[] => {
    return goals.filter((goal) => goal.id !== id)
}

const getGoal = (goals: IGoal[], id: number): IGoal => {
    return goals.filter((goal) => goal.id === id)[0];
}




// **************************
// -------- WORKOUTS --------
// **************************
export interface INewWorkout {
    exerciseType: ExerciseType;
    sets: number;
    reps: number;
    dateTime: Date;
}
export interface IWorkout {
    id: number;
    exerciseType: ExerciseType;
    sets: number;
    reps: number;
    dateTime: Date;
}

// Returns the full array of workouts, with the new workout appended with a unique ID automatically assigned
const addWorkout = (workouts: IWorkout[], newWorkout: INewWorkout): IWorkout[] => [
    ...workouts,
    {
        id: Math.max(0, Math.max(...workouts.map(({ id }) => id))) + 1,
        exerciseType: newWorkout.exerciseType,
        sets: newWorkout.sets,
        reps: newWorkout.reps,
        dateTime: newWorkout.dateTime,
    }
];

const deleteWorkout = (workouts: IWorkout[], id: number): IWorkout[] => {
    return workouts.filter((workout) => workout.id !== id)
}

const getWorkout = (workouts: IWorkout[], id: number): IWorkout => {
    return workouts.filter((workout) => workout.id === id)[0];
}


// ------ MobX implementation ------

class Store {
    language: Languages = Languages.English;
    users: IUser[] = [];
    newUser: INewUser = null;

    goals: IGoal[] = [];
    newGoal: INewGoal = null;

    workouts: IWorkout[] = [];
    newWorkout: INewWorkout = null;

    constructor() {
        makeAutoObservable(this);
        // makePersistable(this, { 
        //     name: 'Store', 
        //     properties: ['users', 'goals'], 
        //     storage: window.localStorage
        // })
    }

    addUser() {
        if (this.newUser) {
            this.users = addUser(this.users, this.newUser);
            this.newUser = null;
        }
    }

    addGoal() {
        if (this.newGoal) {
            this.goals = addGoal(this.goals, this.newGoal);
            this.newGoal = null;
        }
    }

    addWorkout() {
        if (this.newWorkout) {
            this.workouts = addWorkout(this.workouts, this.newWorkout);
            this.newWorkout = null;
        }
    }

    updateGoal(updatedGoal: IGoal) {
        console.log("Attempting update");
        let goal = this.goals.find((goal) => goal.id == updatedGoal.id);
        goal = {
            id: goal.id,
            exercise: updatedGoal.exercise,
            sets: updatedGoal.sets,
            reps: updatedGoal.reps,
        }
    }
    
    deleteGoal(id: number) {
        this.goals = deleteGoal(this.goals, id);
    }

    deleteWorkout(id: number) {
        this.workouts = deleteWorkout(this.workouts, id);
    }

    getGoal(id:number) {
        console.log("Attempting to get goal: " + id);
        let goal = getGoal(this.goals, id);
        console.log("Found goal: " + goal);
        return goal;
    }

    getWorkout(id:number) {
        console.log("Attempting to get workout: " + id);
        let workout = getWorkout(this.workouts, id);
        console.log("Found goal: " + workout);
        return workout;
    }

    toggleLanguage() {
        console.log("Old language: " + this.language);
        if (this.language === Languages.English) {
            this.language = Languages.French
        } else {
            this.language = Languages.English
        }
        console.log("New language: " + this.language);
    }

}

const store = new Store();

makePersistable(store, {
    name: 'HealthTrak Store', // Name your store (optional)
    properties: ['users', 'goals', 'workouts'], // Specify which properties of your store should be persisted
    storage: window.localStorage // Choose the storage mechanism (e.g., localStorage)
});

export default store;