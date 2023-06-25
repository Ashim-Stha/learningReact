import React from "react";

const ListforFetchApi = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {/* {JSON.stringify(item)} */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              border: "1px solid black",
            }}
          >
            <p
              style={{
                border: "1px solid black",
              }}
            >
              {item.id}
            </p>
            <p
              style={{
                border: "1px solid black",
              }}
            >
              {item.name}
            </p>
            <p>{item.username}</p>
            <p>{item.email}</p>
            <p>{JSON.stringify(item.address)}</p>
            <p>{item.phone}</p>
            <p>{item.website}</p>
            <p>{JSON.stringify(item.company)}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ListforFetchApi;
