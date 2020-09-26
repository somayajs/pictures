import axios from 'axios';

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: 'Client-ID WSDJpKy9_UX3V7WOtQonSOSj1xjpMRHOG3hcrdotze8'
  }
});
