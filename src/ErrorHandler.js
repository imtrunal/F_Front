import * as React from "react";

const ErrorHandler = ({ error }) => {
  return (
    <>
      <div role="alert">
        <span className="text-dark">An error occurred:</span>
        <pre className="text-dark">{error.message}</pre>
      </div>
    </>
  );
};

export default ErrorHandler;
