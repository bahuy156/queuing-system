import { DataTable } from "../../types";

const initialState = {
    datas: []
};

const deviceReducer = (state = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case 'FETCH_DEVICES':
            return { ...state, datas: action.payload };
        case 'ADD_DEVICES':
            return {
                ...state,
                datas: [...state.datas, action.payload],
            };
        case 'UPDATE_DEVICE':
            if (action.payload && action.payload.key) {
                return {
                    ...state,
                    datas: state.datas.map((device: DataTable) =>
                        device.key === action.payload.key ? action.payload : device
                    )
                };
            } else {
                return state;
            }
        default:
            return state;
    }
};

export default deviceReducer;