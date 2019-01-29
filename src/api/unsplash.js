import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 4c13929ee211c35eb48b7c3f107383827804f043708804bee65ed78f87fc0dda'
  }
});
