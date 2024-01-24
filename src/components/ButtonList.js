import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "News",
  "Cooking",
  "Valentines",
  "Bollywood Music",
  "Mantras",
  "Lovesongs",
  "Motivations",
];
const ButtonList = () => {
  return (
    <div className="flex">
      <Button listData={list} />
    </div>
  );
};

export default ButtonList;
