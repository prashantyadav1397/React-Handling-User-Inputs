import React from "react";

const BanksList = (props) => {
  const BankData = props.branches.map(({ ifsc, address, city }) => {
    return (
      <div key={ifsc}>
        <h2>{ifsc}</h2>
        <h3>{address}</h3>
        <h3>{city}</h3>
      </div>
    );
  });
  return <div className="ui content">{BankData}</div>;
};

export default BanksList;
