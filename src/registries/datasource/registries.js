const {RESTDataSource} = require('@apollo/datasource-rest')

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

  async getRegistriesByClass(classId) {
    const regis = await this.get(`/registries/class/${classId}`)
    return regis
  }

  async getRegistriesByUser(studentId) {
    const regis = await this.get(`/registries/user/${studentId}`)
    return regis
  }


}

module.exports = RegistriesAPI