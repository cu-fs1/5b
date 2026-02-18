import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import connectDB from "./config/db.js";
import studentRoutes from "./routes/student.routes.js";
import studentViewRoutes from "./routes/student.view.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Connect to Database
connectDB();

// View engine
app.set("view engine", "ejs");
app.set("views", join(__dirname, "views"));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // needed for HTML form POST

// Routes
app.use("/students", studentRoutes); // JSON API
app.use("/view/students", studentViewRoutes); // EJS UI

// Base Route
app.get("/", (req, res) => {
  res.redirect("/view/students");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
