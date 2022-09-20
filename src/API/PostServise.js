import axios from "axios"

export default class PostService {
  static async getAll() {
    const request = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return request.data
  }
}