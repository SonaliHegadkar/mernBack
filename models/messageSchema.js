import mongoose from "mongoose";
import validator from "validator";
const messageSchema =new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name Required!"],
        minLength:[3,"Name Must contain at least 3 charaters!"],
    },
    email:{
        type:String,
        required:[true,"Email Required!"],
       validate:[validator.isEmail,"please provide valid email!"],
    },
    subject:{
        type:String,
        required:[true,"Subject Required!"],
        minLength:[5,"subject Must contain at least 3 charaters!"],
    },
    message:{
        type:String,
        required:[true,"Subject Required!"],
        minLength:[10,"Name Must contain at least 3 charaters!"],
    },
});
export const Message=mongoose.model("Message",messageSchema);