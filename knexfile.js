module.exports = {
    development: {
        client: "pg",
        connection: "postgres:///coffee-collection"
    },
    production: {
        client: "pg",
        connection: process.env.DATABASE_URL
    }
};
