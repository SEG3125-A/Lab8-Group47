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
export interface NewUser {
    email: string;
    password: string;
    createdOn: Date;
}

// User that has been assigned a unique ID
export interface User {
    id: number;
    email: string;
    password: string;
    createdOn: Date;
}

// Returns the full array of users, with the new user appended with a unique ID automatically assigned
const addUser = (users: User[], newUser: NewUser): User[] => [
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
export interface NewGoal {
    exerciseType: Exercises;
    sets: number;
    reps: number;
}

// Goal that has been assigned a unique ID
export interface Goal {
    id: number;
    exerciseType: Exercises;
    sets: number;
    reps: number;
}

// Returns the full array of users, with the new user appended with a unique ID automatically assigned
const addGoal = (goals: Goal[], newGoal: NewGoal): Goal[] => [
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

export interface Workout {
    id: number;
    exerciseType: Exercises;
    sets: number;
    reps: number;
    dateTime: Date;
}




// ------ MobX implementation ------

class Store {
    users: User[] = [];
    newUser: NewUser = null;

    goals: Goal[]
    newGoal: NewGoal = null;

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