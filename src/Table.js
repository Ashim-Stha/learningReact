import React from "react";
import Row from "./Row";
import "./Table.css";

const Table = ({ items }) => {
  return (
    <table>
      <tbody>
        {/* {items.map((item) => (
          <tr key={item.id}>
            {Object.entries(item).map(([key, value]) => {
              return <td key={key}>{JSON.stringify(value)}</td>;
            })}
          </tr>
        ))} */}
        {items.map((item) => (
          <Row key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
