import mongoose from "mongoose";

// Create a schema
// Model based off that schema

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, { timestamps: true }) // createdAt, updatedAt

const Note = mongoose.model("Note", noteSchema);

export default Note