const database = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

class UsersController {

    static getUsers = async (req, res) => {
        try {
            const users = await database.User.findAll()
            users.length === 0 ?
            res.status(404).send({message: 'No User to show !'})
            : res.status(200).json(users)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static getUsersId = async (req, res) => {
        const { id } = req.params
        try {
            const users = await database.User.findOne({
                where: {
                    id: Number(id)
                }
            })
            users === null ?
            res.status(404).send({message: 'User not found !'})
            : res.status(200).json(users)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static postUsers = async (req, res) => {
        const newUser = req.body
        try {
            const users = await database.User.create(newUser)
            return res.status(201).json(users)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static deleteUsers = async (req, res) => {
        const { id } = req.params
        try {
            const users = await database.User.destroy({
                where: {
                    id: Number(id)
                }
            })
            users === null ?
            res.status(404).send({message: 'User not found !'})
            : res.status(204).send({message: `User id ${id} deleted !`})
        } catch (error) {
            res.status(500).json("Couldn't Delete ! - ", error.message)
        }
    }

    static updateUsers = async (req, res) => {
        const { id } = req.params
        const newInfo = req.body
        try {
            await database.User.update(newInfo, {
                where: {
                    id: Number(id)
                }
            })
            const users = await database.User.findOne({
                where: {
                    id: Number(id)
                }
            })
            users === null ?
            res.status(404).send({message: 'User not found !'})
            : res.status(200).json(users)
        } catch (error) {
            res.status(500).json("Couldn't Update ! - ", error.message)
        }
    }
    
}

module.exports = UsersController