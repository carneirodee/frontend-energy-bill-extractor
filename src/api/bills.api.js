
import axios from 'axios';

export const getAll = async () => {
    return await axios.get('http://localhost:8080/api-v1/bills');
};

