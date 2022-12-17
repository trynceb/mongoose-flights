const mongoose = require("mongoose")
const Schema = mongoose.Schema

const destinationsSchema = new Schema({
    destinations: {
        type: String,
        enum: ["AUS", "DFW", "DEN", "LAX", "SAN"]
    },
    departs: {
        type: Date,
        default: function() {
            return new Date().getFullYear()
        }
    },
})

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ["American", "Southwest", "United"]
    },
    airport: {
        type: String,
        enum: ["AUS", "DFW", "DEN", "LAX", "SAN"]
    },
    flightNo: {
        type: Number, min: 10, max: 9999,
        required: true,
    },
    destinations: [destinationsSchema]
})

module.exports = mongoose.model("Flight", flightSchema)