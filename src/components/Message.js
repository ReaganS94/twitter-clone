import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
//import TweetBox from "./TweetBox";
import Post from "./Post";

import "./Feed.css";

export const baseUrl = "https://mini-tw.herokuapp.com/messages";

function Message() {
  const { id } = useParams();
  const [msg, setMsg] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMessage = async () => {
      axios.get(`${baseUrl}/${id}`).then((response) => {
        setMsg(response.data);
        setLoading(false);
      });
    };
    getMessage();
  }, [id]);

  if (loading) return "Loading...";

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Single message</h2>
        <Post
          userName={msg.userName}
          message={msg.message}
          avatar={msg.avatar}
          title={msg.title}
          date={msg.date}
          messageId={msg.id}
          verified
        />
      </div>
    </div>
  );
}

export default Message;
