const Flight = require("../models/flight")
const Ticket = require("../models/ticket")
const ticket = require("../models/ticket")
const flight = require("../models/flight")

module.exports = {
    new: newTicket,
    create,
    addToFlight
}


function newTicket(req, res) {
    res.render("tickets/new", {title: "Add Ticket", flight, flightId: req.params.id})
}

function create(req, res) {
    const ticket = new Ticket(req.body)
    ticket.save(function() {
        res.redirect(`/flights/${req.body.flight}`)
    })
}

function addToFlight(req, res) {
    Flight.findById(req.params.id, function(err, ticket) {
        // ticket.flight.push(req.body.flightId)
        ticket.save(function(err) {
          res.redirect(`/flights/${flight._id}`)
        })
    })
}