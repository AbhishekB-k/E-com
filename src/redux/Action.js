import * as types from "./ActionType";

export const register = (data) => async (dispatch) => {
    dispatch({ type: types.LOGIN_REQUEST });
    console.log(data);
    try {
        const res = await fetch(`http://localhost:1400/api/v1/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        // if (!res.ok) {
        //     throw new Error(`HTTP error! status: ${res.status}`);
        // }

        const responseData = await res.json();
        console.log(responseData);
        dispatch({ type: types.LOGIN_SUCCESS, payload: responseData });
    } catch (error) {
        console.error(error);
        dispatch({ type: types.LOGIN_FAILURE, payload: error.message });
    }
};
