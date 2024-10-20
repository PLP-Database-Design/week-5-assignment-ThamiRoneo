// importing variables or depenndecies
const express = require('express')
const app = express()
const mysql = require('mysql2')
const dotenv = require('dotenv')

// configure environment variables
dotenv.config()


// config connection to the db
const db = mysql.createConnection({
          host: process.env.DB_HOST,
          user: process.env.DB_USERNAME,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME
})

// testing the db connection
db.connect((err) => {
          if(err) {
            return console.log('Error connecting to MySQL database: ', err)
          }
          console.log("Successfully to MySQL: ", db.threadId)
})
   
   // Question 1 goes here
   /* app.get('', (req, res) => {
          const getPatients = 'SELECT patient_id, first_name, last_name, date_of_birth FROM patients';
          
          db.query(getPatients, (err, results) => {
                    if(err) {
                      return res.status(400).send("Fail to get patients", err)
                    }
                    res.status(200).send(results)
          })
       }) */
    

   // Question 2 goes here
      /* app.get('', (req, res) => {
      const getProviders = 'SELECT first_name, last_name, provider_specialty FROM providers';

      db.query(getProviders, (err, results) => {
          if(err) {
            return res.status(500).send("Failed to get providers", err)
          }
          res.status(300).send(results)
        })
       }) */

   // Question 3 goes here
     app.get('', (req, res) => {
      const patientFirstname = 'SELECT * FROM patients WHERE first_name = \'Viv\'';

      db.query(patientFirstname, (err,results) => {
        if(err) {
          return res.status(800).send("Failed to get patients", err)
        }
        res.status(600).send(results)
      })
    })

   // Question 4 goes here
    /* app.get('', (req, res) => {
      const providerSpecialty = 'SELECT * FROM providers WHERE provider_specialty = \'Pediatrics\'';

      db.query(providerSpecialty, (err, results) => {
        if(err) {
          return res.status(400).send("Failed to get providers", err)
        }
        res.status(300).send(results)
      })
    }) */
   

   // listen to the server
   const PORT = 3300;
   app.listen(PORT, () => {
     console.log(`server is runnig on http://localhost:${PORT}`)
   })