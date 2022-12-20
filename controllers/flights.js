const Flight = require('../models/flight')
const ticket = require('../models/ticket')

module.exports = {
    index,
    show,
    new: newFlight,
    create
}

function index(req, res) {
    Flight.find({}, function(err, flight) {
        res.render("flights/index", { title: "All Flights", flight})
    })
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        ticket.find( {flight: flight._id}, function(err, tickets) {
            res.render("flights/show", { title: "Flight Details", flight, tickets})
        })
    })
}

function newFlight(req, res) {
    res.render("flights/new", { title: "Add Flight"})
}

function create(req,res) {
    const flight = new Flight(req.body)
    flight.save(function(err) {
        if (err) return res.render("flights/new")
        res.redirect("/flights")
    })
}


// Start with Route (client)
// Controller (waiter)
// Model (Food)
// Views (controller sets the view)