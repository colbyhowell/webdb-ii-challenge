const express = require('express')
const db = require('../data/db-config')

const router = express.Router()

router.get('/', (req, res) => {
    db('cars-dealer')
        .then(cars => {
            res.status(200).json(cars)
        }).catch(err => {
            res.status(500).json({ message: "Bad request" })
        })
})

router.post('/', (req, res) => {
    const newData = req.body
    db('cars-dealer').insert(newData)
        .then(cars => {
            db('cars-dealer')
                .then(allRes => {
                    console.log(allRes)
                    res.status(200).json(allRes)
                })
        }).catch(err => {
            res.status(500).json({ message: "Bad request" })
            console.log(err)
        })
})

// router.put('/:id' (req, res) => {
//     const changeDAta
// })

module.exports = router