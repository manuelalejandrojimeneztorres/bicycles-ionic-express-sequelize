// const { sequelize, Sequelize } = require("."); [código autogenerado]

module.exports = (sequelize, Sequelize) => {
    const Bicycle = sequelize.define("bicycle", {
        brand: {
            type: Sequelize.STRING
        },
        model: {
            type: Sequelize.STRING
        }
    });

    return Bicycle;
};
