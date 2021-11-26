import {v4 as uuid} from 'uuid';
import db from "../config/db.js"

let users = [];

export const getUsers = (req, res)=>{
    
    res.send(users);

};

export const createUser = async (req, res)=>{
    // const user = req.body;
    // users.push({...user, id: uuid()});
    try {
        const response = await db('users').insert({
            id: uuid(),
            name: req.body.name,
            email: req.body.email,
            contact: req.body.contact,
        });
        console.log('insert succes: ', response);
        res.send('User Added Successfully');
    } catch (error) {
        console.log('error: ', error);
    }
    
};

export const getUserByID = (req, res)=>{
    const singleUser = users.filter((user)=>user.id === req.params.id);
    res.send(singleUser);
}

export const deleteUser = (req, res)=>{
    users = users.filter((user)=>user.id !== req.params.id);
    res.send('user deleted');
}

export const updateUser = (req, res)=>{
    const user = users.find((user)=>user.id === req.params.id);

    // console.log(user);
    user.name = req.body.name;
    user.contact = req.body.contact;
    user.email = req.body.email;

    res.send('User Updated');
}