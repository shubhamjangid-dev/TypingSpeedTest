import mongoose , { Schema } from "mongoose";

const levelAchievedSchema = new Schema({
    level:{
        type : Schema.Types.ObjectId, // janta
        ref : "Level"
    },
    user:{
        type : Schema.Types.ObjectId, // creaters
        ref : "User"
    },
    score: {
        type : Number,
        default : 0
    }
},
{
    timestamps : true
})

export const LevelAchieved = mongoose.model("LevelAchieved", levelAchievedSchema);