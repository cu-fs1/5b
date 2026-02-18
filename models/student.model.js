import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Student name is required"],
      trim: true,
      minLength: [2, "Name is too short"],
      maxLength: [100, "Name is too long"],
      // Validates that the name contains only letters and spaces
      validate: {
        validator: function(v) {
          return /^[a-zA-Z\s]+$/.test(v);
        },
        message: props => `${props.value} contains invalid characters! Use only letters.`
      }
    },
    roll: {
      type: Number,
      required: [true, "Roll number is required"],
      unique: true,
      min: [1, "Roll number must be a positive integer"],
      // Ensures the roll number is a whole number (no decimals)
      validate: {
        validator: Number.isInteger,
        message: "{VALUE} is not an integer"
      }
    },
  },
  {
    collection: "students",
    timestamps: true 
  },
);

const Student = mongoose.model("Student", studentSchema);

export default Student;