import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import TweetBox from "./TweetBox";
import Post from "./Post";

import "./Feed.css";

export const baseUrl = "https://mini-tw.herokuapp.com/messages";
export const searchUrl = "https://mini-tw.herokuapp.com/search/?q=";

function Feed({ searchQuery }) {
  const [posts, setPosts] = useState([]);
  const [test, setTest] = useState();
  const [loading, setLoading] = useState(true);

  const fetchMessage = useCallback(() => {
    const getMessage = async () => {
      axios.get(baseUrl).then((response) => {
        setPosts(response.data);
        setLoading(false);
      });
    };
    getMessage();
  }, []);

  useEffect(() => {
    console.log(searchQuery);
    const getMessage = async () => {
      axios.get(`${searchUrl}${searchQuery}`).then((response) => {
        setPosts(response.data);
        setLoading(false);
      });
    };
    getMessage();
  }, [searchQuery]);

  useEffect(() => {
    fetchMessage();
  }, [fetchMessage, test]);

  if (loading) return "Loading...";

  return (
    <div className="feed">
      <div className="feed__header">
        <h2 onClick={(e) => setTest("test test")}>Home</h2>
      </div>

      <TweetBox updateTweets={fetchMessage} />
      {posts.items.map(
        ({ userName, userId, date, message, title, avatar, verified, id }) => (
          <Post
            userName={userName}
            userId={userId}
            message={message}
            avatar={avatar}
            title={title}
            date={date}
            messageId={id}
            verified
          />
        )
      )}
    </div>
  );
}

export default Feed;
