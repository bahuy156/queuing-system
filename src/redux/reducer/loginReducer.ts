const initialState = {
    loading: false,
    success: false,
    error: null
};

const loginReducer = (state = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case "LOGIN_REQUEST":
            return { ...state, loading: true, success: false, error: null };
        case "LOGIN_SUCCESS":
            return { ...state, loading: false, success: true, error: null };
        case "LOGIN_FAILURE":
            return { ...state, loading: false, success: false, error: action.payload };
        default:
            return state;
    }
};

export default loginReducer;