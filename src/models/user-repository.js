const { users } = require('./db');
const md5 = require('md5');
const uuid = require('uuid');
const bcrypt = require('bcryptjs');
const saltRounds = 12;
const jwt = require('jsonwebtoken');


exports.getLogin  = function(data){
  const leUser = users.find((user) => user.firstName == data.firstName)
  bcrypt.compare(data.password,leUser.password,function(err,res){
    if (res === true){
      console.log("T'es co")
      const token = jwt.sign(leUser,'secret');
      //jwt.verify(token,'secret',function(err,sign){
      //   console.log(sign.leUser.firstName)
      // })
    }
    else console.log("err")
  })
}

exports.getUsers = () => {
  return users;
};

exports.getUserByFirstName = (firstName) => {

  const foundUser = users.find((user) => user.firstName == firstName);
  if (!foundUser) {
    throw new Error('User not found');
  }
  return foundUser;
};

exports.createUser = (data) => {
  const foundUser = users.find((user) => user.firstName == firstName);
  if (foundUser === false){
    bcrypt.hash(data.password, saltRounds, function(err, hash) {
      data.password = hash
    })
  function resolveAfter2Second(){
    return new Promise(resolve=>{
      setTimeout(()=>{    
        const user = {
          id: uuid.v4(),
          firstName: data.firstName,
          lastName: data.lastName,
          password : data.password
        };
        users.push(user);
      },2000)
    });
  }
}
  else{
    throw new Error("User exist")
  }

  resolveAfter2Second()
}

exports.updateUser = (id, data) => {
  const foundUser = users.find((user) => user.id == id);

  if (!foundUser) {
    throw new Error('User not found');
  }

  foundUser.firstName = data.firstName || foundUser.firstName;
  foundUser.lastName = data.lastName || foundUser.lastName;
  foundUser.password = data.password ? md5(data.password) : foundUser.password;
};

exports.deleteUser = (id) => {
  const userIndex = users.findIndex((user) => user.id == id);

  if (userIndex === -1) {
    throw new Error('User not foud');
  }

  users.splice(userIndex, 1);
}
