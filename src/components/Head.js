import React from "react";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-10"
          alt="Hamburger menu icon"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
        />
        <img
          className="h-10  mx-2"
          alt="YouTube-icon"
          src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-youtube-social-media-icon-png-image_6315995.png"
        />
      </div>
      <div className="col-span-10 px-20 pt-1">
        <input
          type="text"
          className="w-1/2 border border-gray-600 p-2 rounded-l-3xl"
        />

        <button className="border border-gray-500 px-4 py-2 rounded-r-3xl bg-slate-200 ">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
          alt="User-Icon"
        />
      </div>
    </div>
  );
};

export default Head;
