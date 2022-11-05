const database = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

class ClassesController {

    static getClasses = async (req, res) => {
        try {
            const classes = await database.Class.findAll()
            classes.length === 0 ?
            res.status(404).send({message: 'No Class to show !'})
            : res.status(200).json(classes)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static getClassesId = async (req, res) => {
        const { id } = req.params
        try {
            const classes = await database.Class.findOne({
                where: {
                    id: Number(id)
                }
            })
            classes === null ?
            res.status(404).send({message: 'Class not found !'})
            : res.status(200).json(classes)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static postClasses = async (req, res) => {
        const newClass = req.body
        try {
            const classes = await database.Class.create(newClass)
            return res.status(201).json(classes)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static deleteClasses = async (req, res) => {
        const { id } = req.params
        try {
            const classes = await database.Class.destroy({
                where: {
                    id: Number(id)
                }
            })
            classes === null ?
            res.status(404).send({message: 'Class not found !'})
            : res.status(204).json(`Class id ${id} deleted !`)
        } catch (error) {
            res.status(500).json("Couldn't Delete ! - ", error.message)
        }
    }

    static updateClasses = async (req, res) => {
        const { id } = req.params
        const newInfo = req.body
        try {
            await database.Class.update(newInfo, {
                where: {
                    id: Number(id)
                }
            })
            const classes = await database.Class.findOne({
                where: {
                    id: Number(id)
                }
            })
            classes === null ?
            res.status(404).send({message: 'Class not found !'})
            : res.status(200).json(classes)
        } catch (error) {
            res.status(500).json("Couldn't Update ! - ", error.message)
        }
    }
    
}

module.exports = ClassesController