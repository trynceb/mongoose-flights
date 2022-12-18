const Flight = require('../models/flight')

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
        console.log("This is show", flight)
        res.render("flights/show", { title: "Flight Details", flight})
    })
}

function newFlight(req, res) {
    res.render("flights/new", { title: "Add Flight", flight})
}

function create(req,res) {
    // req.body.cast = req.body.cast.trim()
    // if (req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/)
    // for (let key in req.body) {
    //     if(req.body[key] === '') delete req.body[key]
    // }
    // console.log(req.body)
    const flight = new Flight(req.body)
    flight.save(function(err) {
        if (err) return res.render("/flights/new")
        res.redirect("/flights")
    })
}


// Start with Route (client)
// Controller (waiter)
// Model (Food)
// Views (controller sets the view)
