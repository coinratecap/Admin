/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Redirect, Route } from "react-router-dom";
import { getUserCredentials } from "utils";

const ProtectedRoute = ({ component: Component, ...rest }) => {
	const user = getUserCredentials();

	return (
		<Route
			{...rest}
			render={(props) =>
				user && user.token  ? (
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
