import axios from "axios";

class ApiService {
  API = "/";

  async get() {
    let resp = await new Promise((res) => {
        setTimeout(async () => {
          let data = await axios.get(`${this.API}data.json`);
          res(data);
        }, 500);
      }
    ).then((data) => {
      return data.data;
    });
    return resp.data;
  }
}

const apiService = new ApiService();

export default apiService;
