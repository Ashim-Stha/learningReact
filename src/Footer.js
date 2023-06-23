import React from "react";

const Footer = () => {
  const time = new Date();
  return <div>Copyright &copy; {time.getFullYear()}</div>;
};

export default Footer;
