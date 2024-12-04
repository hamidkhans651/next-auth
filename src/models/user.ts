import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password:{type : String,select:false},
    googleId:{type:String},

});

export const  User = mongoose.models?.user || mongoose.model("User",userSchema);
