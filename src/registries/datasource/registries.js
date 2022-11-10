const {RESTDataSource} = require('@apollo/datasource-rest')
const DataLoader = require('dataloader')

class RegistriesAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'http://localhost:3000';
        this.deleteMessage = {
          code: 204,
          message: "Registry deleted !"
        }
        this.updateMessage = {
          code: 200,
          message: "Registry Updated !"
        }
        this.createdMessage = {
          code: 201,
          message: "Registry Created !"
        }
        this.errorMessage = {
          code: 400,
          messag: "Bad Request"
        }
    }


  async getRegistry() {
    const regis = await this.get(`/registries`);
    return regis.map(async reg => ({
      id: reg.id,
      status: reg.status,
      class_id: reg.class_id,
      student_id: reg.student_id
    }))
  }

  async getClassesId(id) {
    const regis = await this.get(`/registries/${id}`)
    return regis
  }

   async postRegistries(regis) {
    console.log(regis.registry)
    await this.post('/registries', {body: {...regis.registry}})
    return ({
      ...this.createdMessage,
      registry: {
        ...regis.registry
      },
    })
  }
      
  async updateRegistries(newData) {
    await this.put(`/registries/${newData.id}`, {body: {...newData.registry}})
    return ({
      ...this.updateMessage,
      classes: {
        ...newData.registry
      },
    })
  }

  async changeStatusRegistries(data) {
    console.log(data.id)
    await this.put(`/registries/${data.id}`, {body: {"status": data.status}})
    const regis = await this.get(`/registries/${data.id}`)
    return ({
      ...this.updateMessage,
      registry: {
        regis
      }
    })
  }

  async deleteRegistries(id){
    await this.delete(`/registries/${id}`)
    return this.deleteMessage
  }

  registryUserLoader = new DataLoader(this.getRegistriesByUser.bind(this))
  registryClassLoader = new DataLoader(this.getRegistriesByClass.bind(this))

  async getRegistriesByClass(classId) {
    let regis = await Promise.all(classId.map(async (id) => {
      return await this.get(`/registries/class/${id}`)
    }))
    return regis
  }

  async getRegistriesByUser(studentId) {
    let regis = await Promise.all(studentId.map(async (id) => {
      return await this.get(`/registries/users/${id}`)
    }))
    /* Promises Array
    const regis = studentId.map( async (id) => {
      return await this.get(`/registries/users/${id}`)
    })*/
    return regis
  }


}

module.exports = RegistriesAPI