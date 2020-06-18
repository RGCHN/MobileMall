import axios from 'axios'
export  function request(config) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL:'http://152.136.185.210:8000/api/n3',
      timeout: 5000
    });

    instance.interceptors.request.use(
      config => {
        return config
      }, err => {
        console.log(err);
      }
    );

    instance.interceptors.response.use(
      res => {
        return res.data
      }, err => {
        console.log(err);
        if (err && err.response) {
          switch (err.response.data) {
            case 400:
              err.message = '请求错误';
              break;
            case 401:
              err.message = '未授权的访问';
              break;
          }
        }
        return err
      });

    instance(config).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    });
  })
}
