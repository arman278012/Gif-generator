import apiService from "../services/apiService";

export const fetchUsers = () => apiService.get('/users')