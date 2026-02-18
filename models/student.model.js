import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    roll: {
      type: Number,
      required: true,
    },
  },
  {
    collection: "students",
  },
);

const Student = mongoose.model("Student", studentSchema);

export default Student;
