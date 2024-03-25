import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";

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

const deleteGoal = (goals: IGoal[], id: number): IGoal[] => {
    return goals.filter((goal) => goal.id !== id)
}

const getGoal = (goals: IGoal[], id: number): IGoal => {
    return goals.filter((goal) => goal.id === id)[0];
}


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

    goals: IGoal[] = [];
    newGoal: INewGoal = null;

    constructor() {
        makeAutoObservable(this);
        makePersistable(this, { name: 'Store', properties: ['users', 'goals'], storage: window.localStorage})
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

    updateGoal(updatedGoal: IGoal) {
        console.log("Attempting update");
        let goal = this.goals.find((goal) => goal.id == updatedGoal.id);
        goal = {
            id: goal.id,
            exerciseType: updatedGoal.exerciseType,
            sets: updatedGoal.sets,
            reps: updatedGoal.reps,
        }
    }
    
    deleteGoal(id: number) {
        this.goals = deleteGoal(this.goals, id);
    }

    getGoal(id:number) {
        console.log("Attempting to get goal: " + id);
        let goal = getGoal(this.goals, id);
        console.log("Found goal: " + goal);
        return goal;
    }

}

const store = new Store();
export default store;