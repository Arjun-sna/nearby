import { create } from 'apisauce';

const URL_ROOT = 'https://developers.zomato.com/api/v2.1';

class ApiService {
  constructor() {
    this.request = create({
      baseURL: URL_ROOT,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    if (__DEV__) {
      this.request.addMonitor(console.log);
    }
  }

  sendGet = async (path, params) => {
    const response = await this.request.get(path, params);

    return response.ok ? response.data : null;
  }

  sendPost = async(path, body) => {
    const response = await this.request.post(path, body);
    
    return response.ok ? response.data : null;
  }
}

export default new ApiService();
