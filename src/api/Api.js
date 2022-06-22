import axios from 'axios';

class Api {
  static BASE_URL = 'http://localhost:3005/api/v1';

  static instance = axios.create({ baseURL: this.BASE_URL });

  static doGet = async (url, params = null) => {
    const headers = {};
    const bearerTokens = localStorage.getItem("token")
    headers.authorization = `Bearer ${bearerTokens}`;
    const configOptions = {
      headers,
    };
    if (params) {
      configOptions.params = params;
    }
    const response = await this.instance.get(url, configOptions);
    if (response.status === 200) {
      return response.data;
    }
    return { error: 'Error' };
  };

  static doPost = async (url, data, isMultipart = false) => {
    const headers = {};
    const bearerTokens = localStorage.getItem("token")
    headers.authorization = `Bearer ${bearerTokens}`;
    if (isMultipart) {
      headers['Content-Type'] = 'multipart/form-data';
    }
    const configOptions = {
      headers,
    };
    const response = await this.instance.post(url, data, configOptions);
    if (response.status === 200) {
      return response.data;
    }
    return { error: 'Error' };
  };

  static doDelete = async (url, params) => {
    const headers = {};
    const bearerTokens = localStorage.getItem("token")
    headers.authorization = `Bearer ${bearerTokens}`;
    const configOptions = {
      headers,
    };
    const response = await this.instance.delete(url, params, configOptions);
    if (response.status === 200) {
      return response.data;
    }
    return { error: 'Error' };
  };

  static doPut = async (url, data, isMultipart = false) => {
    const headers = {};
    const bearerTokens = localStorage.getItem("token")
    headers.authorization = `Bearer ${bearerTokens}`;
    if (isMultipart) {
      headers['Content-Type'] = 'multipart/form-data';
    }
    const configOptions = {
      headers,
    };
    const response = await this.instance.put(url, data, configOptions);
    if (response.status === 200) {
      return response.data;
    }
    return { error: 'Error' };
  };
}

export default Api;
