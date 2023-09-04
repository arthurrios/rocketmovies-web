import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://rocketmovies-movies.onrender.com',
})
