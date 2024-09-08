import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
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
    nic:{
        type:String,
        required:true,
        minLength:[12," NIC must contain at least 12 digit!"],
        maxLength:[12," NIC must contain at least 12 digit!"]
    },
    dob:{
        type:Date,
        required: [true ,"DOB is required"],
    },
    gender:{
        type:String,
        required:true,
        enum:["Male","Female"],
    },
    password:{
      type:String,
      minLength:[8," Password must contain at least 8 digit!"],  
      required:true,
      select:false
    },
    role:{
     type:String,
     required:true,
     enum:["Admin","Patient","Doctor"], 
    },
    doctorDepartment:{
        type:String
    },
    docAvatar:{
        public_id:String,
        url:String,
    },
});

userSchema.pre("save",async function (next){
    if(!this.isModified("password")){
        next();
    }
    this.password = await  bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generateJsonWebToken = function(){
    return jwt.sign({id: this._id},process.env.JWT_SECRET_KEY,{
        expiresIn:process.env.JWT_EXPIRES,
    });
};


export const User = mongoose.model("User",userSchema);