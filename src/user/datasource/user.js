//import { RESTDataSource } from '@apollo/datasource-rest';
const {RESTDataSource} = require('@apollo/datasource-rest')

class UsersAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'http://localhost:3000';
        this.deleteMessage = {
          code: 204,
          message: "User deleted !"
        }
        this.updateMessage = {
          code: 200,
          message: "User Updated !"
        }
        this.createdMessage = {
          code: 201,
          message: "User Created !"
        }
        this.errorMessage = {
          code: 400,
          messag: "Bad Request"
        }
    }

  async getUsers({page = 1, size = 0}) {
    //PAGINATION
    const query = size
    ? `/users?page=${page}&size=${size}`
    :`/users?page=${page}`

    const users = await this.get(query);
    return users.users.map(async user => ({
      id: user.id,
      name: user.name,
      active: user.active,
      email: user.email,
      role: await this.get(`/roles/${user.role}`)
    }))
  }

  async getUsersId(id) {
    const user = await this.get(`/users/${id}`)
    user.role = await this.get(`/roles/${user.role}`)
    return user
  }

   async postUsers(users) {
    const role = await this.get(`/roles?type=${users.role}`)
    await this.post('/users', {body: {...users.user, role: role[0].id}})
    return ({
      ...this.createdMessage,
      user: {
        ...users.user,
        role: role[0]
      },
    })
  }

  async updateUsers(newData) {
    const role = await this.get(`/roles?type=${newData.user.role}`)
    await this.put(`/users/${newData.id}`, {body: {...newData.user, role:role[0].id}})
    return ({
      ...this.updateMessage,
      user: {
        ...newData.user,
        role: role[0]
      },
    })
  }

  async deleteUsers(id){
    await this.delete(`/users/${id}`)
    return this.deleteMessage
  }

  /*async getMostViewedMovies(limit = '10') {
    const data = await this.get('movies', {
      params: {
        per_page: limit,
        order_by: 'most_viewed',
      },
    }); 
    return data.results;
  }*/
}

module.exports = UsersAPI
//export default UsersAPI