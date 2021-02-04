// External dependencies
// import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
// import { persistReducer } from "redux-persist";

// Internal dependencies
import authReducer from "./reducers/authReducer";

// const authPersistConfig = {
// 	key: "auth",
// 	storage,
// 	blacklist: ["authError"],
// 	whitelist: ["isAuthenticated", "token"],
// };


const rootReducer = combineReducers({
	// auth: persistReducer(authPersistConfig, authReducer),
	auth: authReducer,
});

export default rootReducer;
