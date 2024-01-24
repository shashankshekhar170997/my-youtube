import React from "react";
import { useSelector } from "react-redux";
// import store from "../Redux/store";

const SideBar = () => {
  // reading the store by using useSelector.
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  // early return
  // if (!isMenuOpen) return null;
  return !isMenuOpen ? null : (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>

      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default SideBar;