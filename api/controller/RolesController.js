const database = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

class RolesController {
    static getRoles = async (req, res) => {
        const {type} = req.query
        const where = {}
        type ? where.type = {} : null
        type ? where.type[Op.iLike] = `%${type}` : null
        try {
            const roles = await database.Role.findAll({where})
            roles.length === 0 ?
            res.status(404).send({message: 'No Role to show !'})
            : res.status(200).json(roles)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static getRolesId = async (req, res) => {
        const { id } = req.params
        try {
            const roles = await database.Role.findOne({
                where: {
                    id: Number(id)
                }
            })
            roles === null ?
            res.status(404).send({message: 'Role not found !'})
            : res.status(200).json(roles)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static postRoles = async (req, res) => {
        const newRole = req.body
        try {
            const roles = await database.Role.create(newRole)
            return res.status(201).json(roles)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static deleteRoles = async (req, res) => {
        const { id } = req.params
        try {
            const roles = await database.Role.destroy({
                where: {
                    id: Number(id)
                }
            })
            roles === null ?
            res.status(404).send({message: 'Role not found !'})
            : res.status(204).send({message: `Role id ${id} deleted !`})
        } catch (error) {
            res.status(500).json("Couldn't Delete ! - ", error.message)
        }
    }

    static updateRoles = async (req, res) => {
        const { id } = req.params
        const newInfo = req.body
        try {
            await database.Role.update(newInfo, {
                where: {
                    id: Number(id)
                }
            })
            const roles = await database.Role.findOne({
                where: {
                    id: Number(id)
                }
            })
            roles === null ?
            res.status(404).send({message: 'Role not found !'})
            : res.status(200).json(roles)
        } catch (error) {
            res.status(500).json("Couldn't update ! - ", error.message)
        }
    }

}

module.exports = RolesController