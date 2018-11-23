import axios from 'axios'

let _http = {
  post: '',
  get: ''
};

axios.defaults.baseURL = 'http://zhengjinwei.top:3003';
axios.interceptors.request.use(config => {
  document.getElementById('loading').style.display = 'block';
  return config
});

axios.interceptors.response.use(config => {
  document.getElementById('loading').style.display = 'none';
  return config
});


_http.post = function (url, data) {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then((res) => {
      resolve(res)
    })
  })
};

_http.get = function (url, data) {
  return new Promise((resolve, reject) => {
    axios.get(url).then((res) => {
      resolve(res)
    })
  })
};

export default _http