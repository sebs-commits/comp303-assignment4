import React from "react";

function ErrorAlert({ message }) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div role="alert" className="alert alert-error">
        <span>Error! {message}</span>
      </div>
    </div>
  );
}

export default ErrorAlert;
