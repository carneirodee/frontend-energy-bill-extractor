import { getAll } from '../api/client.api';

export const GET_CLIENT_REQUEST = "GET_CLIENT_REQUEST";
export const GET_CLIENT_SUCCESS = "GET_CLIENT_SUCCESS";
export const GET_CLIENT_ERROR = "GET_CLIENT_ERROR"

export const fetchClient = () => async (dispatch) => {
    dispatch({ type: GET_CLIENT_REQUEST, isLoadingClient: false });
    try {
        const response = await getAll();
        return dispatch({
            type: GET_CLIENT_SUCCESS,
            clients: response.data,
        });
    } catch (err) {
        return dispatch({ type: GET_CLIENT_ERROR, err });
    }
};