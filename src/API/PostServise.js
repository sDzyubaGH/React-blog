import axios from "axios"

export default class PostService {
  static async getAll(LIMIT = 10, page = 1) {
    const request = await axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: {
        _limit: LIMIT,
        _page: page
      }
    })
    return request
  }

  static async getOne(id) {
    const request = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return request
  }

  static async getComments(id) {
    const request = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    return request
  }
}