import { combineReducers } from 'redux';
import deviceReducer from './deviceReducer';
import loginReducer from './loginReducer';
import accountsReducer from './accountsReducer';

const rootReducer = combineReducers({
    device: deviceReducer,
    login: loginReducer,
    account: accountsReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;