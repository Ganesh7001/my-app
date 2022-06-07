import axios from "axios";
import {
    GET_USERS_FAIL,
    GET_USERS_SUCCESS,
    GET_USERS_REQUEST
} from "../constants/userconstants";


export const userAction =()=> async (dispatch) => {
    try {
        dispatch({ type: GET_USERS_REQUEST });
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
        dispatch({ type: GET_USERS_SUCCESS, payload: data });
        console.log(data)
    } catch (error) {
        dispatch({
            type: GET_USERS_FAIL,
            payload:
                error.data && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};