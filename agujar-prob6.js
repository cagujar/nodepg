require('dotenv').config()

const { Pool } = require('pg')

const pool = new Pool ({
    user: `${process.env.DB_USER}`,
    host: `${process.env.DB_HOST}`,
    database: `${process.env.DB_DATABASE}`,
    password: `${process.env.DB_PASSWORD}`,
    port: 5432,
    ssl: {
        rejectUnauthorized: false,
    },
})



pool.query("SELECT occupation, name, pet_name, class from pets RIGHT JOIN owners ON pets.owner_id = owners.owner_id WHERE pet_name IS NULL", (error, results) => {
    if (error) {
        throw error
    }
    console.log(results.rows)
})