const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ticketSchema = new Schema( {
    seat: {
        type: String 
    },
    price: {
        type: Number, min: 0
    },
    flight: {
        type: String,
        enum: []
    }
})

module.exports = mongoose.model("Ticket", ticketSchema)