// Internal dependencies
import { LOGINSUCCESS, SIGNOUT } from "redux/actionTypes";

const initialState = {
	isAuthenticated: false,
	token: null,
};

const reducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case LOGINSUCCESS:
			return {
				isAuthenticated: true,
				token: payload.data.token,
			};

		case SIGNOUT:
			return {
				isAuthenticated: false,
				token: null,
			};

		default:
			return state;
	}
};

export default reducer;
