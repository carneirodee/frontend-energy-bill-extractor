import axios from 'axios';

export const getDashboard = async () => {
    return await axios.post('http://localhost:8080/api-v1/bills/dashboard');
};