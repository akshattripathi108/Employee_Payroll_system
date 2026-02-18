const router = require("express").Router();
const Employee = require("../models/Employee");
const auth = require("../middleware/auth");

router.get("/", auth, async (req, res) => {
  res.json(await Employee.find());
});

router.post("/", auth, async (req, res) => {
  const emp = new Employee(req.body);
  await emp.save();
  res.json(emp);
});

router.put("/:id", auth, async (req, res) => {
  res.json(await Employee.findByIdAndUpdate(req.params.id, req.body));
});

router.delete("/:id", auth, async (req, res) => {
  res.json(await Employee.findByIdAndDelete(req.params.id));
});

module.exports = router;
