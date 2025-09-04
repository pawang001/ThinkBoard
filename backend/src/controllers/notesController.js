import Note from "../models/Note.js"

export const getAllNotes = async (_, res) => {
    try {
        const notes = await Note.find().sort({ createdAt: -1 }); // -1 will sort in desc. order so that newest comes first.
        res.status(200).json(notes);
    } catch (e) {
        console.error("Error in getAllNotes:", e);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const getNote = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({ message: "Note note found" })
        }
        res.status(200).json(note);
    } catch (e) {
        console.error("Error in getNote:", e);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const createNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const note = new Note({ title, content });
        const savedNote = await note.save();
        res.status(201).json(savedNote);
    } catch (e) {
        console.error("Error in createNote:", e);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const updateNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true });

        if (!updatedNote) {
            return res.status(404).json({ message: "Note note found" })
        }

        res.status(200).json(updatedNote);
    } catch (e) {
        console.error("Error in updateNote:", e);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const deleteNote = async (req, res) => {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if (!deletedNote) {
            return res.status(404).json({ message: "Note note found" })
        }
        res.json({ message: "Note Deleted successfully" });
    } catch (e) {
        console.error("Error in updateNote:", e);
        res.status(500).json({ message: "Internal Server Error" });
    }
}