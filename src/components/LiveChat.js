import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Redux/chatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();
  //   reading from the store or Subscribing to the store (store.name.initialstate)
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      //   console.log("Api Polling");
      dispatch(
        addMessage({
          name: "Akshay Shekhar",
          message: "Lorem ipsum react jsssss",
        })
      );
    }, 2000);
    // garbage collection (unmount)
    return () => clearInterval(i);
  }, []);
  return (
    <div className="ml-2 p-2 border border-black w-full h-[500px] bg-slate-100 rounded-lg overflow-y-scroll">
      {chatMessages.map((c, index) => (
        <ChatMessage key={index} name={c.name} message={c.message} />
      ))}
    </div>
  );
};

export default LiveChat;
