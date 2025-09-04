import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

connectDB();

app.use("/notes", notesRoutes)

const PORT = process.env.PORT || 5001
app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
})