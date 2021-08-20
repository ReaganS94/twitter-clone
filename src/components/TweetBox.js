import { useState } from "react";
import { Avatar, Button } from "@material-ui/core";
import { baseUrl } from "./Feed";
import axios from "axios";
import "./TweetBox.css";

function TweetBox({ updateTweets }) {
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");

  const sendTweet = async (e) => {
    e.preventDefault();

    const res = await axios.post(baseUrl, {
      message: message,
      userId: 1,
      title: "sup",
      date: new Date(Date.now()),
    });

    updateTweets();

    setMessage("");
    setImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://i.pravatar.cc/300" />
          <input
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          onChange={(e) => setImage(e.target.value)}
          value={image}
          className="tweetBox__imageInput"
          placeholder="Enter image url"
          type="text"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
