import React from "react";
import { Alert } from "reactstrap";

const AlertTemplate = ({ style, options, message, close }) => {
  return (
    <div style={style}>
      {options.type === "info" && <Alert color='info'>{message}</Alert>}
      {options.type === "success" && <Alert color='success'>{message}</Alert>}
      {options.type === "error" && <Alert color='danger'>{message}</Alert>}
    </div>
  );
};

export default AlertTemplate;
