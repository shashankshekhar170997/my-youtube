import React, { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";

const Dwmo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  //   when we will type any text in text box it will re-render always. which may slow the web app So for this we will use useMemo hook for memoize or caching.
  // console.log("Readering.....");
  const prime = useMemo(() => findNthPrime(text), [text]);

  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black " +
        (isDarkTheme && "bg-gray-900 text-white")
      }
    >
      <div>
        <button
          className="m-10 p-2 bg-green-600"
          onClick={() => {
            setIsDarkTheme(!isDarkTheme);
          }}
        >
          Toggle
        </button>
      </div>
      <div>
        <input
          className="border border-black w-86"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="mt-4 font-bold text-xl">nth Prime: {prime}</div>
    </div>
  );
};

export default Dwmo;
