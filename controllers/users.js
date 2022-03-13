import { v4 as uuid4 } from "uuid";

let users = [];

// GET ALL USERS
export const getUsers = (req, res) => {
  res.send(users);
};

// CREATE USER
export const createUser = (req, res) => {
  const newUser = req.body;

  users.push({ ...newUser, id: uuid4() });

  res.send(`user with the name ${newUser.firstName} added to the database!`);
};

// GET SPECIFIC USER WITH ID
export const getUser = (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
};

// DELETE USER WITH ID
export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.send(users);
};

//UPDATE USER WITH ID
export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const user = users.find((user) => user.id === id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send("changed");
};
