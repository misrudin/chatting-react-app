import React from "react";
import { People } from "../atoms";
const data = [
  {
    name: "Jan Dhae",
    last_content: "Haloo im janda",
    last_time: "12:00 PM",
    badge: 1,
  },
  {
    name: "Jenny Black Pink",
    last_content: "Haloo i love you",
    last_time: "11:00 PM",
    badge: 2,
  },

  {
    name: "Lukman Hakim",
    last_content: "Selamat sore akang kasep ajahah ahbaha hahab",
    last_time: "10:00 PM",
    badge: 2,
  },

  {
    name: "Ilham Gazali",
    last_content: "Posisi bro ?",
    last_time: "09:00 PM",
    badge: 1,
  },
];

const ListOfPeople = () => {
  return (
    <div className="people-container">
      {data.map((d, i) => (
        <People data={d} key={i} />
      ))}
    </div>
  );
};

export default ListOfPeople;
