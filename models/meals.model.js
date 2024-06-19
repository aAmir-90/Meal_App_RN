const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        enum: ["spicy", "sweet", "sour"]
    },
    price: {
        type: Number,
        required: true,
    },
}, {timestamps: true})

const Meals = mongoose.model("Meals", mealSchema)
module.exports = Meals