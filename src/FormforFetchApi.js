import React from "react";
import ButtonforFetchApi from "./ButtonforFetchApi";

const FormforFetchApi = ({ reqType, setReqType }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <ButtonforFetchApi
        buttonText="Users"
        reqType={reqType}
        setReqType={setReqType}
      />
      <ButtonforFetchApi
        buttonText="Posts"
        reqType={reqType}
        setReqType={setReqType}
      />
      <ButtonforFetchApi
        buttonText="Comments"
        reqType={reqType}
        setReqType={setReqType}
      />
    </form>
  );
};

export default FormforFetchApi;
