import axios from 'axios';

export const reqresInstance = axios.create({
  baseURL: 'https://reqres.in/api/',
  timeout: 5000,
  headers: { 'X-Vue-Version': 3 },
});

export const typicodeInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/todos/',
  timeout: 5000,
  headers: { 'X-Vue-Version': 3 },
});
