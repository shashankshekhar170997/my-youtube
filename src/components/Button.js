import React from "react";
const Button = ({ listData }) => {
  // console.log(listData);
  return (
    <div>
      <button className="flex">
        {listData.map((item, i) => {
          return (
            <div key={i} className="px-5 py-2 m-2 bg-gray-200 rounded-lg flex ">
              {item}
            </div>
          );
        })}
      </button>
    </div>
  );
};

export default Button;
