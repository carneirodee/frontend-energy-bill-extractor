
import { combineReducers } from 'redux';
import { clientReducer } from './client.reducer';
import { billReducer } from './bills.reducer';
import { dashboardReducer } from './dashboard.reducer';
export default combineReducers({
    clientReducer,
    billReducer,
    dashboardReducer
});
