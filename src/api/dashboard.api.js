import axios from 'axios';
import { BACKEND_ENDPOINT, NODE_ENV, BACKEND_ENDPOINT_PRODUCTION } from '../config';

const endpoint = NODE_ENV === "production" ? BACKEND_ENDPOINT_PRODUCTION : BACKEND_ENDPOINT;
export const getDashboard = async () => {
    return await axios.post(`${endpoint}api-v1/bills/dashboard`);
};