const INITIAL_STATE = {
    isLoadingDashboard: true,
    dashboard: {},
    errorData: [],
    error: false
}

export const dashboardReducer = (state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case 'GET_DASHBOARD_REQUEST':
            console.log(action)
            return {
                ...state,
                isLoadingDashboard: true,
                error: false
            };
        case 'GET_DASHBOARD_SUCCESS':
            console.log(action)
            const { dashboard } = action;
            return {
                ...state,
                isLoadingDashboard: false,
                dashboard: dashboard
            };
        case 'GET_DASHBOARD_ERROR':
            console.log(action)
            return {
                ...state,
                errorData: action.data,
                error: true
            };
        default:
            return state;
    }

}

