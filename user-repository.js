const users = require('./db');

const getUser = function(lastname){
    return users.find(u=>lastname == u.lastname);
}
const getUsers = function(){
    return users
}
const createUser = function(data){
    users.push(data)
}

const updateUser = function(id,data){
   if (users.find(u=>id == u.id)){
        users = data;
   }
}

const deleteUser = function(id){
        users.splice(data)
}
module.exports = {
    getUser,
    getUsers,
    createUser,
    deleteUser,
    updateUser,
}