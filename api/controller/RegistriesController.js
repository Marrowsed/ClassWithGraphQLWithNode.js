const database = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

class RegistriesController {

    static getRegistries = async (req, res) => {
        try {
            const regis = await database.Registry.findAll()
            regis.length === 0 ?
            res.status(404).send({message: 'No Registry to show !'})
            : res.status(200).json(regis)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static getRegistriesId = async (req, res) => {
        const { id } = req.params
        try {
            const regis = await database.Registry.findOne({
                where: {
                    id: Number(id)
                }
            })
            regis === null ?
            res.status(404).send({message: 'Registry not found !'})
            : res.status(200).json(regis)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static postRegistries = async (req, res) => {
        const newRegis = req.body
        try {
            const regis = await database.Registry.create(newRegis)
            return res.status(201).json(regis)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static deleteRegistries = async (req, res) => {
        const { id } = req.params
        try {
            const regis = await database.Registry.destroy({
                where: {
                    id: Number(id)
                }
            })
            regis === null ?
            res.status(404).send({message: 'Registry not found !'})
            : res.status(204).json(`Registry id ${id} deleted !`)
        } catch (error) {
            res.status(500).json("Couldn't Delete ! - ", error.message)
        }
    }

    static updateRegistries = async (req, res) => {
        const { id } = req.params
        const newInfo = req.body
        try {
            await database.Registry.update(newInfo, {
                where: {
                    id: Number(id)
                }
            })
            const regis = await database.Registry.findOne({
                where: {
                    id: Number(id)
                }
            })
            regis === null ?
            res.status(404).send({message: 'Class not found !'})
            : res.status(200).json(regis)
        } catch (error) {
            res.status(500).json("Couldn't Update ! - ", error.message)
        }
    }

    static getRegistriesByClass = async (req, res) => {
        const { id } = req.params
        try {
            const regis = await database.Registry.findAll({
                where: {
                    class_id: Number(id)
                }
            })
            regis === null ?
            res.status(404).send({message: 'Registries not found !'})
            : res.status(200).json(regis)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}

module.exports = RegistriesController