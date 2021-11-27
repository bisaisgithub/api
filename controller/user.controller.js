import {v4 as uuid} from 'uuid';
import db from "../config/db.js"

let users = [];

export const getUsers = async (req, res)=>{
    
    const response = await db('users').orderBy('created_at', 'desc');
    // console.log('response gerusers: ', response);
    
    res.send(response);

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
        // console.log('insert succes: ', response);
        res.send('User Added Successfully');
    } catch (error) {
        console.log('error: ', error);
    }
    
};

export const getUserByID = async (req, res)=>{
    const singleUser = users.filter((user)=>user.id === req.params.id);
    const singleUserReponse = await db('users').where('id', req.params.id)
    res.send(singleUserReponse);
}

export const deleteUser = async (req, res)=>{
    // users = users.filter((user)=>user.id !== req.params.id);
    try {
        const deleteUserResponse = await db('users').where('id', req.params.id).del();
         res.send('user deleted');
    } catch (error) {
        console.log('error deleting: ', error);
    }
    
}

export const updateUser = async (req, res)=>{
    // const user = users.find((user)=>user.id === req.params.id);

    const userUpdateResponse = await db('users').where('id', req.params.id).update({
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
    });

    // console.log(user);
    // user.name = req.body.name;
    // user.contact = req.body.contact;
    // user.email = req.body.email;

    res.send('User Updated');
}