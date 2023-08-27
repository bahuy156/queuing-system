import { configureStore } from '@reduxjs/toolkit';
import device from "../redux/actions/deviceActions"
import account from "../redux/actions/accountActions"
import service from "../redux/actions/serviceActions";
import provideNumber from "../redux/actions/provideNumActions";
import diary from "../redux/actions/diaryActoins"
import notification from "../redux/actions/notificationActions";
import roleActions from '../redux/actions/roleActions';

const store = configureStore({
    reducer: {
        account: account,
        device: device,
        service: service,
        provideNum: provideNumber,
        diary: diary,
        notification: notification,
        role: roleActions
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;