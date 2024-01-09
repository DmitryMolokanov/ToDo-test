import React from "react";
import Button from "./Button";

function Header(props) {
  return (
    <div className="header">
      <a href="/" className="to-do-button">
        ToDo
      </a>
      <Button>Create task</Button>
      <a className="button-link" href="/all_tasks">
        All task
      </a>
    </div>
  );
}

export default Header;
