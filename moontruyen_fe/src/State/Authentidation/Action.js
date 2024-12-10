import axios from "axios";
import { api, API_URL } from "../../config/api"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType"

export const registerUser = (reqData) => async (dispatch) =>{
    dispatch({ type: REGISTER_REQUEST });
    try {
        const { data } = await axios.post(`${API_URL}/users`, reqData.userData);

        reqData.navigate("/"); 
        dispatch({ type: REGISTER_SUCCESS, payload: data });

        console.log("Registration success:", data);
    } catch (error) {
        // Log the full error response for debugging
        console.log("Error", error)
        dispatch({ type: REGISTER_FAILURE, payload: error.response ? error.response.data : error.message });
    }
}
export const loginUser = (reqData) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
        const { data } = await axios.post(`${API_URL}/auth/token`, reqData.userData);
        const token = data?.result?.token; 
        if (token) localStorage.setItem("jwt", token);
        reqData.navigate("/");
        console.log("Login success:", data);

        dispatch({ type: LOGIN_SUCCESS, payload: { token } });

       
    } catch (error) {
        dispatch({ type: LOGIN_FAILURE, payload: error });
    }

}
export const logout = () => async (dispatch) => {
    dispatch({ type: LOGOUT });
    localStorage.clear();
};