import { getAll } from '../api/bills.api';

export const GET_BILLS_REQUEST = "GET_BILLS_REQUEST";
export const GET_BILLS_SUCCESS = "GET_BILLS_SUCCESS";
export const GET_BILLS_ERROR = "GET_BILLS_ERROR"

export const fetchBills = () => async (dispatch) => {
    dispatch({ type: GET_BILLS_REQUEST, isLoadingBills: false });
    try {
        const response = await getAll();
        return dispatch({
            type: GET_BILLS_SUCCESS,
            bills: response.data,
        });
    } catch (err) {
        return dispatch({ type: GET_BILLS_ERROR, err });
    }
};