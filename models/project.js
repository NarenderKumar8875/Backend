import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    background: { type: String },
    link: { type: String },
    linkText: { type: String },
    heading: { type: String },
    react: { type: Boolean },
    pl: { type: String },
    sr: { type: String },
    side: { type: String },
})

const Project = mongoose.model('Project', projectSchema);

export default Project;