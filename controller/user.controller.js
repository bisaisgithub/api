import {v4 as uuid} from 'uuid';

const users = [];

export const getUsers = (req, res)=>{
    
    res.send(users);
    console.log('/users');
};

export const createUser = (req, res)=>{
    users.push({...users, id: uuid()});
    res.send('User Added Successfully');
};