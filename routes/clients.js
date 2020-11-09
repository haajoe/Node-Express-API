const express = require("express");
const connection = require('../db/database');
const router = express.Router();

//GET ALL CLIENTS
router.get('/', (req, res) => {
    const queryString = 'CALL getClients()'
    connection.query(queryString, (err, row, fields) => {
      if (err){
          console.log('Failed to query client successfully')
          res.sendStatus(500)
      }
      res.json(row)
    })
  });


//GET CLIENTS BY ID
router.get("/:id", (req, res) => {
    console.log("Fetching user with a id: " + req.params.id);
    const clientId = req.params.id
    const queryString = 'SELECT * FROM client_analytic_data WHERE id = ?'
    connection.query(queryString, [clientId], (err, row, fields) => {
        if (err){
            console.log('Failed to query client successfully')
            res.sendStatus(500)
        }
        console.log(clientId)
        res.json(row)
    })
})


//INSERT A CLIENT


//UPDATE A CLIENT


//DELETE A CLIENT

module.exports = router;