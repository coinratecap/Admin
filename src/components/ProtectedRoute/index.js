/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Redirect, Route } from "react-router-dom";
import { getToken } from "utils";

const ProtectedRoute = ({ component: Component, ...rest }) => {
	const token = getToken();
	console.log(getToken())

	return (
		<Route
			{...rest}
			render={(props) =>
				token ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{ pathname: "/auth/login", state: { from: props.location } }}
					/>
				)
			}
		/>
	);
};

export default ProtectedRoute;
