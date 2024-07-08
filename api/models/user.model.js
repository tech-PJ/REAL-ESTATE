import mongoose from "mongoose";
import { type } from "os";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,   
    },
    email:{
        type:String,
        required:true,
        unique:true,   
    },
    password:{
        type:String,
        required:true,  
    },
    avatar:{
        type:String,
        default:"https://imgs.search.brave.com/q_Mfdl5QDC_AYPng3SsWd2qOM2QsB1wSji5_xIFk2cM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2RkL2Yw/LzExL2RkZjAxMTBh/YTE5ZjQ0NTY4N2I3/Mzc2NzllZWM5Y2Iy/LmpwZw",
    },
},{timestamps:true});

const User=mongoose.model('User',userSchema);

export default User;