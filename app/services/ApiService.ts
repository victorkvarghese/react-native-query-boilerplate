import axios, { AxiosRequestConfig } from 'axios';
import { apiClient } from './client';

export class ApiService {
  config?: AxiosRequestConfig = {};

  private cancellationToken = axios.CancelToken.source();

  static createInstance(): ApiService {
    const activeInstance = new ApiService();
    activeInstance.cancellationToken = axios.CancelToken.source();
    activeInstance.config.cancelToken = activeInstance.cancellationToken.token;
    return activeInstance;
  }

  cancelRequests() {
    this.cancellationToken.cancel('RequestCancellation');
    return ApiService.createInstance();
  }

  getCharacters = () => {
    return apiClient.get('/character');
  };
}
