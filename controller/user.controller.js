import {v4 as uuid} from 'uuid';

let users = [];

export const getUsers = (req, res)=>{
    
    res.send(users);
    console.log('/users');
};

export const createUser = (req, res)=>{
    const user = req.body;
    users.push({...user, id: uuid()});
    res.send('User Added Successfully');
};

export const getUserByID = (req, res)=>{
    const singleUser = users.filter((user)=>user.id === req.params.id);
    res.send(singleUser);
    console.log(singleUser);
}

export const deleteUser = (req, res)=>{
    users = users.filter((user)=>user.id !== req.params.id);

    res.send('user deleted');
    console.log(users);
}

export const updateUser = (req, res)=>{
    const user = users.find((user)=>user.id === req.params.id);

    console.log(user);
    user.name = req.body.name;
    user.contact = req.body.contact;

    res.send('User Updated');
}