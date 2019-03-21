import axios from 'axios'

const KEY = 'AIzaSyDkJJz6fCuAkKG3HVnFnnmp-3jIAmUV0O4'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResult: 5,
    key: KEY
  }
})
