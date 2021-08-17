import axios from 'axios'

import {
    DATA_LIST_REQUEST,
    DATA_LIST_SUCCESS,
    DATA_LIST_FAILURE,
    DATA_DETAILS_REQUEST,
    DATA_DETAILS_SUCCESS,
    DATA_DETAILS_FAILURE,
} from "../constants/dataConstants";

export const listDatas = () => async (dispatch) => {
    try {
        dispatch({ type: DATA_LIST_REQUEST });

        const { data } = await axios.get("/api/datas");

        dispatch({
            type: DATA_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: DATA_LIST_FAILURE,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const listDataDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: DATA_DETAILS_REQUEST });

        const { data } = await axios.get(`/api/datas/${id}`);

        dispatch({
            type: DATA_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: DATA_DETAILS_FAILURE,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
