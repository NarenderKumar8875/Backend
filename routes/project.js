import express from 'express'
import multer from 'multer';
import { handleProject, handleCreateProject, handleDeleteProject } from '../controllers/project.js';

const router = express.Router();

// GET REQ--------------------->
router.get('/', handleProject);


//POST REQ------------------->
//IMAGE UPLOAD ENGINE
const storage = multer.diskStorage({
    destination: "uploads",

    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})
const upload = multer({ storage: storage })

router.post('/add', upload.single('background'), handleCreateProject)

// DELETE REQ---------------->
router.delete('/delete/:id', handleDeleteProject)


export default router