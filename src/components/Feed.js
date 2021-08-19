import { useState, useEffect } from "react";
import axios from "axios";
import TweetBox from "./TweetBox";
import Post from "./Post";

import "./Feed.css";

const baseUrl = "https://mini-tw.herokuapp.com/messages";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setPosts(response.data);
      setLoading(false);
    });
  }, []);

  if (loading) return "Loading...";

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />
      {posts.items.map(
        ({ userName, userId, date, message, title, avatar, verified }) => (
          <Post
            userName={userName}
            message={message}
            avatar={avatar}
            title={title}
            date={date}
            verified
          />
        )
      )}
    </div>
  );
}

export default Feed;
