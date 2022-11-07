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
      /*
  async updateClasses(newData) {
    await this.put(`/classes/${newData.id}`, {body: {...newData.classes, role:role[0].id}})
    return ({
      ...this.updateMessage,
      classes: {
        ...newData.classes,
        role: role[0]
      },
    })
  }

  async deleteClasses(id){
    await this.delete(`/classes/${id}`)
    return this.deleteMessage
  }
*/
}

module.exports = RegistriesAPI