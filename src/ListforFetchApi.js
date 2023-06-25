import React from "react";

const ListforFetchApi = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {JSON.stringify(item)}
          {/* <p>{item.name}</p> */}
        </li>
      ))}
    </ul>
  );
};

export default ListforFetchApi;
