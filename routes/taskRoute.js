const express = require("express");

const router = express.Router();

const {createTask, getTasks, getsingleTask, updateTask, deleteTask} = require("../controllers/taskController");

router.post("/", createTask);
router.get("/", getTasks);
router.get("/:id", getsingleTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
