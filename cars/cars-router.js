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

router.put('/:id', async (req, res) => {
    const changeData = req.body
    const { id } = req.params

    try {
        await db('cars-dealer').where({ id }).update(changeData)
        const changedDb = await db('cars-dealer')
        res.status(200).json(changedDb)
    } catch{
        res.status(500).json({ message: "This ID was not found" })
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params

    try {
        await db('cars-dealer').where({ id }).del()
        const newDb = await db('cars-dealer')
        res.status(200).json(newDb)
    } catch{
        res.status(500).json({ message: "Item could not be deleted" })
    }
})

module.exports = router