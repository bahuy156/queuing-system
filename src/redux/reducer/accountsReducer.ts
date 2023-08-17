const initialState = {
    datas: []
};

const accountsReducer = (state = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case 'FETCH_ACCOUNT':
            return { ...state, datas: action.payload };
        case 'VERIFY_ACCOUNT':
            return { ...state, datas: action.payload };
        case 'LOGOUT_ACCOUNT':
            return { ...state, datas: [] };
        default:
            return state;
    }
};

export default accountsReducer;