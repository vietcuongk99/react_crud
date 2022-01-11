import axios from 'axios'

const userService = {
  getUser() {
    return axios.get('https://61513f73d0a7c1001701697f.mockapi.io/api/v1/jobs')
  },
  addUser(data) {
    return axios.post('https://61513f73d0a7c1001701697f.mockapi.io/api/v1/jobs', data)  
  },
  editUser(id, data) {
    return axios.put(`https://61513f73d0a7c1001701697f.mockapi.io/api/v1/jobs/${id}`, data)
  },
  deleteUser(id) {
    return axios.delete(`https://61513f73d0a7c1001701697f.mockapi.io/api/v1/jobs/${id}`)
  }
}

export default userService