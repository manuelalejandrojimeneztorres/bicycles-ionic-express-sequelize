module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "nuts55.JBY",
    DB: "db_bicycles",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
