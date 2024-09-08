import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3," first Name must contain at least 3 character!"]
    },
    lastName:{
        type:String,
        required:true,
        minLength:[3," last Name must contain at least 3 character!"]
    },
    email:{
        type:String,
        required:true,
        validator:[validator.isEmail,"please provide valid email"]
    },
    phone:{
        type:String,
        required:true,
        minLength:[10," phone number must contain at least 10 digit!"],
        maxLength:[10," phone number must contain at least 10 digit!"]
    },
    message:{
        type:String,
        required:true,
        minLength:[10," message must contain at least 10 character!"]
    },
});

export const Message = mongoose.model("Message",messageSchema);