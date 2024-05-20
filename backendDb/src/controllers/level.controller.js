 import { asyncHandler } from "../utils/asyncHandler.js";
 import { ApiError } from "../utils/ApiError.js";
 import { Level } from "../model/levels.model.js";
 import { ApiResponse } from "../utils/ApiResponse.js";
 import jwt from "jsonwebtoken";

 

 const addNewLevel = asyncHandler( async (req, res)=>{

    const {levelName, levelContent} = req.body
    if(levelName.trim() ===""){
        throw new ApiError(400, "Enter valid levelname")
    }
    if(levelContent.trim() ===""){
        throw new ApiError(400, "Enter valid content of level")
    }


    
    const levelExist = await Level.findOne({
        $or : [{levelName},{levelContent}]
    })
    if(levelExist)
    {
        throw new ApiError(409, "Level already exist")
    }

    const level = await Level.create({
        levelName,
        levelContent : levelContent.toLowerCase()
    })

    const createdLevel = await Level.findById(level._id)

    if(!createdLevel)
    {
        throw new ApiError(500, "Somthing went wrong while uploading level data to database")
    }
    
    res.status(201).json(
        new ApiResponse(200, createdLevel, "New Level Added Successfully")
    )

 })


 const getAllLevels = asyncHandler(async (req, res) => {
    try {
      const levels = await Level.find({});
      res.json(levels);
    } catch (err) {
      console.error('Error retrieving levels:', err);
      res.status(500).send('Error retrieving levels');
    }
  });


 const getLevelContent = asyncHandler(async (req, res) => {
    console.log(req);
    const {id} = req.body;
    // console.log(id);
    try {
      const levels = await Level.findById(id);
    //   console.log("levels ",levels);
      res.json(levels);
    } catch (err) {
      console.error('Error retrieving level:', err);
      res.status(500).send('Error retrieving level');
    }
  });


 export { 
    addNewLevel,
    getAllLevels,
    getLevelContent
}; 