import express from "express";
import Student from "../models/student.model.js";

const router = express.Router();

// List all students
router.get("/", async (req, res) => {
  try {
    const students = await Student.find().sort({ roll: 1 });
    res.render("students/index", { students, error: null });
  } catch (err) {
    res.render("students/index", { students: [], error: err.message });
  }
});

// Create a new student
router.post("/", async (req, res) => {
  try {
    const { name, roll } = req.body;
    await Student.create({ name, roll: Number(roll) });
    res.redirect("/view/students");
  } catch (err) {
    const students = await Student.find().sort({ roll: 1 });
    res.render("students/index", { students, error: err.message });
  }
});

// Show edit form
router.get("/:id/edit", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.redirect("/view/students");
    res.render("students/edit", { student, error: null });
  } catch (err) {
    res.redirect("/view/students");
  }
});

// Update or Delete — distinguished by ?_method query param
router.post("/:id", async (req, res) => {
  const method = req.query._method;

  if (method === "DELETE") {
    try {
      await Student.findByIdAndDelete(req.params.id);
    } catch (err) {
      // silently redirect on error
    }
    return res.redirect("/view/students");
  }

  if (method === "PUT") {
    try {
      const { name, roll } = req.body;
      await Student.findByIdAndUpdate(
        req.params.id,
        { name, roll: Number(roll) },
        { new: true, runValidators: true },
      );
      return res.redirect("/view/students");
    } catch (err) {
      const student = await Student.findById(req.params.id);
      return res.render("students/edit", { student, error: err.message });
    }
  }

  res.redirect("/view/students");
});

export default router;
