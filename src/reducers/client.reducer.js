const INITIAL_STATE = {
    isLoadingClient: true,
    clients: [],
    errorData: [],
    error: false
}

export const clientReducer = (state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case 'GET_CLIENT_REQUEST':
            console.log(action)
            return {
                ...state,
                isLoadingClient: true,
                error: false
            };
        case 'GET_CLIENT_SUCCESS':
            console.log(action)
            const { clients } = action;
            return {
                ...state,
                isLoadingClient: false,
                clients: clients,
            };
        case 'GET_CLIENT_ERROR':
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

