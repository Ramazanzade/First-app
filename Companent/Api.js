import axios from "axios";

export const Instance = axios.create({
    baseURL: 'https://63a56d2b318b23efa7931d9a.mockapi.io/'
})