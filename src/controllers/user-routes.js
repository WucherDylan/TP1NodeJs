const express = require('express');
const router = express.Router();
const userRepository = require('../models/user-repository');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');

function verifyAdmin(){
  if (jwt.verify(token.role,'secret')==="ADMIN"){
    return true
  }
}

router.get('/', (req, res) => {
  res.send(userRepository.getUsers())
});

router.get('/:firstName', (req, res) => {

  const foundUser = userRepository.getUserByFirstName(req.params.firstName);

if (!foundUser) {
  throw new Error('User not found');
  }
  res.send(foundUser);
});

router.post('/', (req, res) => {
  if (verifyAdmin() === true){
    body('password').isLength({ min: 8 }),
    userRepository.createUser({
      firstName: req.body.firstName,
      password: req.body.password,
    }).then(user => res.json(user));
    res.status(201).end();
  }
  else{
    res.status(403).end();
  }
  });

router.put('/:id', (req, res) => {
  if (verifyAdmin() === true){
    userRepository.updateUser(req.params.id, req.body);
    res.status(204).end();
  }
  else {
    res.status(403).end();
  }
  });

router.delete('/:id', (req, res) => {
  if (verifyAdmin() === true){
    userRepository.deleteUser(req.params.id);
    res.status(204).end();
  }
  else {
    res.status(403).end();
  }
  });

exports.initializeRoutes = () => {
  return router;
}
