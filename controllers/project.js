import path from "path";
import Project from "../models/project.js";
import fs from 'fs';

// HANDLE PROJECTS
export const handleProject = async (req, res) => {
    try {
        const data = await Project.find({})
        res.json({ succes: true, data: data },)
    } catch (error) {
        res.json({ succes: false, message: "Error" })
    }
}

// HANDLE CREATE PROJECT
let PL = false
export const handleCreateProject = async (req, res) => {


    const body = req.body;
    let image_filename = req.file.filename;
    const SR = await Project.find({})


    let find = SR.filter((e) => {
        return SR.length < 9 ? "0" : '' + SR.length === e.sr
    })

    let finalfind
    find.find((e) => {
        finalfind = e.pl
    })

    const ProjectData = await Project.create({
        background: image_filename,
        link: body.link,
        heading: body.heading,
        react: body.react,
        linkText: 'Official Site',
        pl: finalfind === 'ml-[5rem]' ? 'mr-[5rem]' : 'ml-[5rem]',
        sr: SR.length < 9 ? '0' + parseInt(SR.length + 1) : parseInt(SR.length) + 1,
        side: PL ? 'right-0' : 'left-0',
    }).then(() => {
        res.json({ succes: true, message: 'Project Added' })
        PL = !PL
    }).catch((err) => res.json({ succes: false, message: 'Error' }))

}

//HANDLE DELETE PROJECTS
export const handleDeleteProject = async (req, res) => {
    const projectID = req.params.id

    try {
        const imgName = await Project.findById(projectID)

        fs.unlink(`./uploads/${imgName.background}`, (err) => console.log(err))
    } catch {

    }

    const data = await Project.findByIdAndDelete(projectID).then(() => res.json({ succes: 'true', message: 'Deleted SuccesFully' }))
        .catch((err) => res.json({ succes: 'true', message: 'Failed Delete' }));

}
