import React from "react";

function Header() {
  return (
    <div className="ui menu">
      <a className="item" href="/home">
        Home
      </a>
      <a className="item" href="/explore">
        Explore
      </a>
      <div className="right menu">
        <a className="item green" href="/create">
          Create
        </a>
        <a className="item" href="/login">
          Login
        </a>
      </div>
    </div>
  );
}

export default Header;
