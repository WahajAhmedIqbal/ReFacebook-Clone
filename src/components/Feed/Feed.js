import React from "react";
import MessageSender from "../MessageSender/MessageSender";
import StoryReel from "../StoryReel/StoryReel";
import "./Feed.css";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
    </div>
  );
}

export default Feed;
