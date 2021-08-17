import {
    DATA_LIST_REQUEST,
    DATA_LIST_SUCCESS,
    DATA_LIST_FAILURE,
    DATA_DETAILS_REQUEST,
    DATA_DETAILS_SUCCESS,
    DATA_DETAILS_FAILURE,
} from "../constants/dataConstants";

export const dataListReducer = (state = { datas: [] }, action) => {
    switch (action.type) {
        case DATA_LIST_REQUEST:
            return { loading: true, datas: [] };

        case DATA_LIST_SUCCESS:
            return { loading: false, datas: action.payload };

        case DATA_LIST_FAILURE:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};


// export const dataDetailsReducer = (state = { data: { reviews: [] } }, action) => {
export const dataDetailsReducer = (state = { data: { } }, action) => {
    switch (action.type) {
        case DATA_DETAILS_REQUEST:
            return { loading: true, ...state };

        case DATA_DETAILS_SUCCESS:
            return { loading: false, data: action.payload };

        case DATA_DETAILS_FAILURE:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};
