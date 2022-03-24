const users = require('./db');
//const md5 = require('md5')
const date = require('date-and-time')
//const v4 = require('uuid')
const getUser = function(lastname){
    return users.find(u=>lastname == u.lastname);
}
const getUsers = function(){ 
    return users
}
const getUserById = function(id){
    return users.find(u=>id == u.id);
}
const createUser = function(data){
    //data.id = v4
    //data.mdp = md5(data.mdp)
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