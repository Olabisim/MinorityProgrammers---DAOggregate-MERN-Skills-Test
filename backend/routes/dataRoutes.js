import express from "express";
import asyncHandler from "express-async-handler";
import New from "../models/newModel.js";

// @desc        Fetch all datas
// @routes      Get /api/datas
// @access      Public

const router = express.Router();

router.get(
    "/",
    asyncHandler(async (req, res) => {
        const datas = await New.find({});
        
        res.json(datas);
        //will send api format
    })
);

// @desc        Fetch single data
// @routes      Get /api/datas/:id
// @access      Public

router.get(
    "/:id",
    asyncHandler(async (req, res) => {
        //triple equals to was added but i couldnt solve it
        const data = await New.findById(req.params.id);

        if (data) {
            //will send api format
            res.json(data);
        } else {
            res.status(404)
            throw new Error('Data not found');
        }
    }) 
);

export default router;
