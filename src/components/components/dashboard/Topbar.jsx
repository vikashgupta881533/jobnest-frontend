import React from "react";
import { SearchIcon, BellIcon } from "./icons";

export default function Topbar({ searchPlaceholder, initials, name, subtitle }) {
  return (
    <div className="topbar">
      <div className="search">
        <SearchIcon />
        {searchPlaceholder}
      </div>
      <div className="topbar-right">
        <div className="bell">
          <BellIcon />
          <span className="pip"></span>
        </div>
        <div className="who">
          <div className="avatar">{initials}</div>
          <div className="meta">
            <div className="name">{name}</div>
            <div className="sub">{subtitle}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
