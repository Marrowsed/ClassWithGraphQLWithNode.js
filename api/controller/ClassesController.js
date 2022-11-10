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
    const { count: totalItems, rows: classes } = data;
    const currentPage = page ? +page : 1;
    const totalPages = Math.ceil(totalItems / limit);
  
    return { totalItems, classes, totalPages, currentPage };
  };

class ClassesController {

    static getClasses = async (req, res) => {
        const {page, size} = req.query
        const {limit, offset} = getPagination(page, size)
        try {
            const classes = await database.Class.findAndCountAll({limit, offset})
            const response = getPaginationData(classes, page, limit)
            response.classes.length === 0 ?
            res.status(404).send({message: 'No Class to show !'})
            : res.status(200).json(response)
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