import {Friend, Colleague, ColleagueHistory } from './myTypes'


const friend1 : Friend = {
    name: "Paul Fleming",
    phone: "087-12345",
    age:25,
};

const friend2 : Friend= {
    name: "Jane Costello",
    phone: "086--12345",
    age:31,
};

export const friends = [friend1,friend2]
// console.log(friends[1]);

const colleague1: Colleague = {
    name:"Ralph Graham",
    department: "Finance",
    contact: {
        email: "rgraham@company.com",
        extension:121,
    },
};

const colleague2 : Colleague = {
    name:"Patti Burke",
    department: "Engineering",
    contact: {
        email: "pburke@company.com",
        extension:132,
    },
};

const colleague3 : Colleague = {
    name:"Dean Sullivan",
    department: "HR",
    contact: {
        email: "dos@company.com",
        extension:125,
    },
};

export const colleagues : ColleagueHistory = {
    current :[colleague1, colleague2, colleague3],
    former :[],
};

// console.log(colleagues.current[0]);

