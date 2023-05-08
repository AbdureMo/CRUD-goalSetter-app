const express = require('express');
const router = express.Router();
const {getGoals, updateGoals, setGoals, deleteGoals} = require('../controllers/goalController');

// router.route('/').get(protect, getGoals).post(protect, setGoal)
// router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal)

router.get("/", getGoals); 

router.post("/", setGoals);

router.put("/:id", updateGoals);

router.delete("/:id", deleteGoals);

module.exports = router