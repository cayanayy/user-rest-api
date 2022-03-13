import express from "express";
import {
  createUser,
  deleteUser,
  getUsers,
  getUser,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);

router.post("/", createUser);

router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

export default router;
