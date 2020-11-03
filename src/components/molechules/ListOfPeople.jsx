import React from "react";
import { People } from "../atoms";

const ListOfPeople = ({ allData }) => {
  return (
    <div className="people-container">
      {allData?.map((data, i) => (
        <People data={data} key={i} />
      ))}
    </div>
  );
};

export default ListOfPeople;
