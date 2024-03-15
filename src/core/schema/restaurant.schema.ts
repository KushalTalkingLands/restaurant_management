import { Schema } from "mongoose";
const RestaurantSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    address: { type: String, required: true },
    contact: {
        phone: String,
        email: String
    },
    openingHours: { type: String, required: true },
});