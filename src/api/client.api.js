
import axios from 'axios';
import { BACKEND_ENDPOINT } from '../config';

export const getAll = async () => {
    return await axios.get(`${BACKEND_ENDPOINT}api-v1/clients`);
};