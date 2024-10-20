import { getDashboard } from '../api/dashboard.api';

export const GET_DASHBOARD_REQUEST = "GET_DASHBOARD_REQUEST";
export const GET_DASHBOARD_SUCCESS = "GET_DASHBOARD_SUCCESS";
export const GET_DASHBOARD_ERROR = "GET_DASHBOARD_ERROR"

export const fetchDashboard = () => async (dispatch) => {
    dispatch({ type: GET_DASHBOARD_REQUEST, isLoadingBills: false });
    try {
        const response = await getDashboard();
        return dispatch({
            type: GET_DASHBOARD_SUCCESS,
            dashboard: response.data,
        });
    } catch (err) {
        return dispatch({ type: GET_DASHBOARD_ERROR, err });
    }
};