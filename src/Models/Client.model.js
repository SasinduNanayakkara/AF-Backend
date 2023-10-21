import mongoose from "mongoose";
import { Schema } from "mongoose";

const ClientSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    location:{
        type: String,
        required: true,
    },
    prefix: {
        type: String,
        required: false,
        enum: ['Mr', 'Ms', 'Mrs', 'Dr', 'Prof', 'Ven']
    },
    profileImage: {
        type: String,
        required: false,
    },
    google_auth: {
        type: Boolean,
    },
    google_id: {
        type: String,
    }
}, { timestamps: true });

export const Client = mongoose.model("Client", ClientSchema);
