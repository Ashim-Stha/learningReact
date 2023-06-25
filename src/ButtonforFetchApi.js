import React from "react";

const ButtonforFetchApi = ({ buttonText, reqType, setReqType }) => {
  return (
    <button type="button" onClick={() => setReqType(buttonText.toLowerCase())}>
      {buttonText}
    </button>
  );
};

export default ButtonforFetchApi;
