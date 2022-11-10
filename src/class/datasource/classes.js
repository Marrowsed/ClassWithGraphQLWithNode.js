const {RESTDataSource} = require('@apollo/datasource-rest')
const DataLoader = require('dataloader')

class ClassesAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'http://localhost:3000';
        this.deleteMessage = {
          code: 204,
          message: "Class deleted !"
        }
        this.updateMessage = {
          code: 200,
          message: "Class Updated !"
        }
        this.createdMessage = {
          code: 201,
          message: "Class Created !"
        }
        this.errorMessage = {
          code: 400,
          messag: "Bad Request"
        }
    }

  async getClasses() {
    const classes = await this.get(`/classes`);
    return classes.map(async classes => ({
      id: classes.id,
      description: classes.description,
      time: classes.time,
      seats: classes.seats,
      initial: classes.initial
    }))
  }

  async getClassesId(id) {
    const classes = await this.get(`/classes/${id}`)
    return classes
  }

   async postClasses(classes) {
    await this.post('/classes', {body: {...classes.class}})
    return ({
      ...this.createdMessage,
      classes: {
        ...classes.class
      },
    })
  }

  async updateClasses(newData) {
    await this.put(`/classes/${newData.id}`, {body: {...newData.class}})
    return ({
      ...this.updateMessage,
      classes: {
        ...newData.class
      },
    })
  }

  async deleteClasses(id){
    await this.delete(`/classes/${id}`)
    return this.deleteMessage
  }

 getCalledClasses = new DataLoader(async (classId) => {
  let classes = await Promise.all(
    classId
    .map(async (id) => {
      return this.get(`/classes/${id}`)
    })
  )
  return classes
 })
}

module.exports = ClassesAPI