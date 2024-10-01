const db = require("../models");
const Shop = db.shops;
const Op = db.Sequelize.Op;

// Create and Save a new Shop
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });

        return;
    }

    // Create a Shop
    const shop = {
        name: req.body.name,
        address: req.body.address
    };

    // Save Shop in the database
    Shop.create(shop)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the shop."
            });
        });
};

// Retrieve all Shops from the database.
exports.findAll = (req, res) => {
    Shop.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving shops."
            });
        });
};

// Find a single Shop with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Shop.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Shop with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Shop with id=" + id
            });
        });
};

// Update a Shop by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Shop.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Shop was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Shop with id=${id}. Maybe Shop was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Shop with id=" + id
            });
        });
};

// Delete a Shop with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Shop.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Shop was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Shop with id=${id}. Maybe Shop was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Shop with id=" + id
            });
        });
};
