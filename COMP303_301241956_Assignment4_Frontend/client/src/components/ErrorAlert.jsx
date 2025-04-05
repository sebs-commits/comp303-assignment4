import React from "react";

function ErrorAlert({ message }) {
  return (
    <div role="alert" className="alert alert-error">
      <span>Error! {message}</span>
    </div>
  );
}

export default ErrorAlert;
