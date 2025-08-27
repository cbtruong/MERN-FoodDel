import express from 'express';

import { addFood,listFood,removeFood } from '../controllers/foodController.js';
import multer from 'multer';

const foodRouter = express.Router();



// Image engine upload
const storage= multer.diskStorage({
    // determine storage location image
    destination:"uploads",
    // name the file image
    // cb: callback function to report result
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})
// create middleware to upload file image
const upload = multer({storage:storage});

foodRouter.post("/add",upload.single("image"),addFood)
foodRouter.get("/list",listFood);
foodRouter.post("/remove",removeFood)

export default foodRouter;




