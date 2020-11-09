const express = require('express');
const connection = require('../db/database');
const router = express.Router();


//SELECT CTM DATA BY SPECIFIC DATE RANGE
// router.get(`/?start_date=${startDate}&end_date=${endDate}`, (req, res) => {
//     var startDate = req.query.start_date
//     var endDate = req.query.end_date
//     const queryString = 'SELECT call_id, call_date, client_name FROM call_tracking_metrics WHERE DATE(call_date) BETWEEN ? AND ?'
//     connection.query(queryString, [startDate, endDate], (err, row, fields) => {
//         if (err) {
//             console.log('Failed to query call_tracking_metrics')
//             res.sendStatus(500)
//             console.log(err);
//         }
//         res.json(row)
//         console.log(callDate)
//     })
// })

//SELECT CTM DATA BY DATE
router.get('/:date', (req, res) => {
    const callDate = req.params.date
    const queryString = 'SELECT * FROM call_tracking_metrics WHERE DATE(call_date) = ?'
    
    connection.query(queryString, [callDate], (err, row, fields) => {
        if (err) {
            console.log('Failed to query call_tracking_metrics')
            res.sendStatus(500)
            console.log(err);
        }
        res.json(row)
        console.log(callDate)
    })
})

//SELECT CTM DATA BY YESTERDAY
router.get('/:yesterday', (req, res) => {
    
    req.params.yesterday = Date.now
    var yesterday = req.params.yesterday
    const queryString = 'SELECT * FROM call_tracking_metrics WHERE DATE(call_date) = curdate() -1'
    
    connection.query(queryString, [yesterday], (err,row) => {
        if (err) {
            console.log('Failed to get records for yesterday!')
            res.sendStatus(500)
            console.log(err)
        }
        res.json(row)
        console.log(yesterday)
    })
})

//SELECT CTM DATA BY TODAY
router.get('/:today', (req, res) => {
    const queryString = 'CALL getFormDataForToday(curdate());'
    
    connection.query(queryString, [today], (err,row) => {
        if (err) {
            console.log('Failed to get records for today!')
            res.sendStatus(500)
            console.log(err)
        }
        res.json(row)
    })
})
//SELECT CTM DATA BY WEEK

//SELECT CTM DATA BY 14 DAYS

//SELECT CTM DATA BY THIS MONTH
//SELECT CTM DATA BY LAST MONTH

module.exports = router;