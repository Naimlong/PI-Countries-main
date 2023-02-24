import { GET_COUNTRIES } from "./actions";

const initialState = {
    countries: [],
};

const roootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_COUNTRIES:
            return { ...state, countries: action.payload}
        default:
            return { ...state };
    }
};

export default roootReducer;