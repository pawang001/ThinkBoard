import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();

// middleware
app.use(express.json()); // this middleware will pass JSON bodies: req.body
app.use(rateLimiter);

// custom middleware
// app.use((req, res, next) => {
//     console.log(`Request Method is ${req.method} and url is ${req.url}`);
//     next();
// })

app.use("/notes", notesRoutes)

const PORT = process.env.PORT || 5001

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started on PORT:", PORT);
    });
});