import React, { useEffect, useRef, useState } from "react";

const Demo1 = () => {
  const [y, setY] = useState(0);
  let x = 10;
  const ref = useRef(0);
  console.log("Rendering...");
  const i = useRef(null);
  useEffect(() => {
    i.current = setInterval(() => {
      console.log("Namaste react", Math.random());
    }, 1000);
    // return () => clearInterval(i.current);
  }, []);
  return (
    <div className="m-4 p-2 bg-slate-50 border border-black w-96 h-96">
      <div>
        <span className="font-bold text-xl">let = {x}</span>

        <button
          className="bg-green-100 px-2 m-4"
          onClick={() => {
            x = x + 1;
            console.log(x);
          }}
        >
          Increse X
        </button>
      </div>
      <div>
        <span className="font-bold text-xl">State = {y}</span>

        <button
          className="bg-green-100 px-2 m-4"
          onClick={() => {
            setY(y + 1);
            console.log("rendering...");
          }}
        >
          Increse X
        </button>
      </div>
      <div>
        <span className="font-bold text-xl">ref = {ref.current}</span>

        <button
          className="bg-green-100 px-2 m-4"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log(ref.current);
          }}
        >
          Increse X
        </button>
      </div>
      <button
        className="bg-red-900 p-4 m-4 text-white font-bold rounded-lg"
        onClick={() => {
          clearInterval(i.current);
        }}
      >
        Stop Printing
      </button>
    </div>
  );
};

export default Demo1;
