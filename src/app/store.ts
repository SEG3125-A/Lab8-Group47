import { makeAutoObservable } from "mobx";

export enum Exercises {
    Pushups = "Push-Ups",
    Situps = "Sit-Ups",
    Squats = "Squats",
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
    exerciseType: Exercises;
    sets: number;
    reps: number;
}

// Goal that has been assigned a unique ID
export interface IGoal {
    id: number;
    exerciseType: Exercises;
    sets: number;
    reps: number;
}

// Returns the full array of users, with the new user appended with a unique ID automatically assigned
const addGoal = (goals: IGoal[], newGoal: INewGoal): IGoal[] => [
    ...goals,
    {
        id: Math.max(0, Math.max(...goals.map(({ id }) => id))) + 1,
        exerciseType: newGoal.exerciseType, 
        sets: newGoal.sets, 
        reps: newGoal.reps
    }
];



// **************************
// -------- WORKOUTS --------
// **************************

export interface IWorkout {
    id: number;
    exerciseType: Exercises;
    sets: number;
    reps: number;
    dateTime: Date;
}




// ------ MobX implementation ------

class Store {
    users: IUser[] = [];
    newUser: INewUser = null;

    // Temp starting data (TODO: Remove once adding/removing goals is working)
    goals: IGoal[] = [
        {
            id: 0,
            exerciseType: Exercises.Pushups,
            sets: 5,
            reps: 15,
        }, 
        {
            id: 1,
            exerciseType: Exercises.Situps,
            sets: 10,
            reps: 25,
        },
        {
            id: 2,
            exerciseType: Exercises.Squats,
            sets: 10,
            reps: 25,
        }
    ];
    newGoal: INewGoal = null;

    constructor() {
        makeAutoObservable(this);
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
}

const store = new Store();
export default store;