import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Redux/chatSlice";
import { generateRamdomName, randomMessage } from "../utils/helper";

const LiveChat = () => {
  const [LiveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  //   reading from the store or Subscribing to the store (store.name.initialstate)
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      //   console.log("Api Polling");
      dispatch(
        addMessage({
          name: generateRamdomName(),
          message: randomMessage(30),
        })
      );
    }, 1000);
    // garbage collection (unmount)
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="ml-2 p-2 border border-black w-full h-[500px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="m-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          console.log("Submit", LiveMessage);
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Shashank",
              message: LiveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className=" px-2 w-80"
          value={LiveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="mx-2 bg-green-500 rounded-sm">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
