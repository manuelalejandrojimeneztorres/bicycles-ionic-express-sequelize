module.exports = app => {
    const shops = require("../controllers/shop.controller.js");

    var router = require("express").Router();

    // Create a new Shop
    router.post("/", shops.create);

    // Retrieve all Shops
    router.get("/", shops.findAll);

    // Retrieve a single Shop with id
    router.get("/:id", shops.findOne);

    // Update a Shop with id
    router.put("/:id", shops.update);

    // Delete a Shop with id
    router.delete("/:id", shops.delete);

    app.use('/api/shops', router);
};
