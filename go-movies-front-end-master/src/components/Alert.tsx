import React from "react";

type ErrAlert = {
  className: string;
  message: string;
};

const Alert = (props: ErrAlert) => {
  const { className, message } = props;

  return (
    <div className={"alert " + className} role="alert">
      {message}
    </div>
  );
};

export default Alert;
