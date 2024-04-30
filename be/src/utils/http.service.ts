// import { Injectable } from '@nestjs/common';
// import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
// import { config } from 'dotenv';
// config();

// @Injectable()
// export class HttpService {
//   private readonly axiosInstance: AxiosInstance;

//   constructor() {
//     this.axiosInstance = axios.create({
//       baseURL: process.env.API_URL || 'http://localhost:3000', // Replace with your API URL
//     });

//     // Add interceptors or other configurations if needed
//     this.setupInterceptors();
//   }

//   private setupInterceptors() {
//     this.axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
//       // Modify the request config if needed
//       return config;
//     });

//     this.axiosInstance.interceptors.response.use(
//       (response: AxiosResponse) => {
//         // Modify the response if needed
//         return response;
//       },
//       (error) => {
//         // Handle errors globally if needed
//         return Promise.reject(error);
//       },
//     );
//   }

//   async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
//     const response = await this.axiosInstance.get(url, config);
//     return response.data;
//   }

//   async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
//     const response = await this.axiosInstance.post(url, data, config);
//     return response.data;
//   }

//   async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
//     const response = await this.axiosInstance.put(url, data, config);
//     return response.data;
//   }

//   async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
//     const response = await this.axiosInstance.delete(url, config);
//     return response.data;
//   }
// }


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ V2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`

import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { config } from 'dotenv';

config();

@Injectable()
export class HttpService {
  private readonly axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: process.env.API_URL, // Replace with your API URL
    });

    // Add interceptors or other configurations if needed
    this.setupInterceptors();
  }

  private setupInterceptors() {
    this.axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
      // Modify the request config if needed
      return config;
    });

    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        // Modify the response if needed
        return response;
      },
      (error) => {
        // Handle errors globally if needed
        return Promise.reject(error);
      },
    );
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.get<T>(url, config);
    return response.data;
  }

  async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.post<T>(url, data, config);
    return response.data;
  }

  async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.put<T>(url, data, config);
    return response.data;
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.delete<T>(url, config);
    return response.data;
  }
}
