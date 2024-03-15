import { Schema } from "mongoose";
export const RestaurantSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    address: { type: String, required: true },
    contact: {
        phone: { type: String, required: true },
        email: { type: String, required: true }
    },
    openingHours: { type: String, required: true },
});