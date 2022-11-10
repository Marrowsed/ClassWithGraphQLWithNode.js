const database = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

//Pagination Functions
const getPagination = (page, size) => {
    const limit = size ? +size : 3;
    const offset = page >= 2 ? ((page * limit) - limit): 0;
    return { limit, offset };
  };

const getPaginationData = (data, page, limit) => {
    const { count: totalItems, rows: users } = data;
    const currentPage = page ? +page : 1;
    const totalPages = Math.ceil(totalItems / limit);
  
    return { totalItems, users, totalPages, currentPage };
  };

class UsersController {

    static getUsers = async (req, res) => {
        const {page, size} = req.query
        const {limit, offset} = getPagination(page, size)
        try {
            const users = await database.User.findAndCountAll({limit, offset})
            const response = getPaginationData(users, page, limit )
            response.users.length === 0 ?
            res.status(404).send({message: 'No User to show !'})
            : res.status(200).send(response)
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