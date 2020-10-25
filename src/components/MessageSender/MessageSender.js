import { Avatar } from "@material-ui/core";
import React from "react";
import "./MessageSender.css";

function MessageSender() {
  return (
    <div className="messageSender">
      {/* Message Sender top */}
      <div className="messageSender_top">
        <Avatar />
        <form>
          <input
            className="messageSender_input"
            placeholder={`What's on your mind`}
          />
          <input placeholder="image URL (optinal)" />
        </form>
      </div>
      {/* Message Sender bottom  */}
      <div className="messageSender_bottom"></div>
    </div>
  );
}

export default MessageSender;
