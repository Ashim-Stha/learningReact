import React from "react";

export default function Header(props) {
  return (
    <header>
      Hello this is {props.title} from {props.name}
    </header>
  );
}

Header.defaultProps = {
  title: "Header",
  name: "Bob",
};
