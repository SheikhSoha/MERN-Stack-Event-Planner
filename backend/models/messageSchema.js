import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Neme Required"],
        minLength: [3, "Name must contain at least 3 charactrs!"],
    },
    email:{
        type: String,
        required: [true, "Email Required"],
        validate: [validator.isEmail, "Please Provide Valid Email!"],
    },
    subject:{
        type: String,
        required: [true, "Subject Required"],
        minLength: [10, "Subject must contain at least 10 charactrs"],
    },
    message:{
        type: String,
        required: [true, "Message Required"],
        minLength: [15, "Message must contain at least 15 charactrs"],
    }
});

export const Message = mongoose.model("Message", messageSchema);