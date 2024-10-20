const INITIAL_STATE = {
    isLoadingBills: true,
    bills: [],
    errorData: [],
    error: false
}

export const billReducer = (state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case 'GET_BILLS_REQUEST':
            console.log(action)
            return {
                ...state,
                isLoadingBills: true,
                error: false
            };
        case 'GET_BILLS_SUCCESS':
            console.log(action)
            const { bills } = action;
            return {
                ...state,
                isLoadingBills: false,
                bills: bills
            };
        case 'GET_BILLS_ERROR':
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

