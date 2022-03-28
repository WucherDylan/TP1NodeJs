const users = require('./db');
const bcrypt = require('bcrypt')
const saltRounds = 12
const{v4:uuidv4} = require('uuid')
const date = require('date-and-time')

const getUser = function(lastname){
    return users.find(u=>lastname == u.lastname);
}
const getUsers = function(){ 
    return users
}
const getUserById = function(id){
    return users.find(u=>id == u.id);
}
const getLogin  = function(data){
    const user = getUser(data.firstname)
    console.log(user)
    
}

const createUser = function(data){
    data.id = uuidv4(data.id)
    bcrypt.hash(data.mdp, saltRounds, function(err, hash) {
        data.mdp = hash
    });
    
    users.push(data)
}

const updateUser = function(id,data){
   users.splice(id,-1,data)
}

const deleteUser = function(id){
    users.slice(id)
}

module.exports = {
    getUser,
    getUsers,
    createUser,
    deleteUser,
    updateUser,
}