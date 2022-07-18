import express from "express";

const router = express.Router();

// all routes in here are starting with /users

const users = [
  {
    id: "5b8c9f8f-f9f8-4f8f-b8f8-f9f8f9f8f9f8",
    name: "Bobby",
    lastName: "Smith",
    age: "25",
  },
];

router.get("/", (req, res) => {
  res.send(users);
});
router.get("/:id", (req, res) => {
  res.send(users.filter((user) => user.id === req.params.id));
});

router.delete("/:id", (req, res) => {
  res.send(users.filter((user) => user.id !== req.params.id));
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { name, lastName, age } = req.body;
  const user = users.find((user) => user.id === id);
  if (name) {
    user.name = name;
  } else if (lastName) {
    user.lastName = lastName;
  } else if (age) {
    user.age = age;
  }

  res.send(user);

  res.send(users.filter((user) => user.id === req.params.id));
});
router.post("/", (req, res) => {
  const newUser = req.body;
  users.push({ ...newUser, id: Math.random().toString(36).substring(7) });
  res.send(users);
});

export default router;
