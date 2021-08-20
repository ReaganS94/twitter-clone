import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Post from "./Post";

import "./Feed.css";

export const userUrl = "https://mini-tw.herokuapp.com/users/";

function UsersMsg() {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMessage = async () => {
      axios.get(`${userUrl}/${id}/messages/`).then((response) => {
        setPosts(response.data);
        console.log(response.data);
        setLoading(false);
      });
    };
    getMessage();
  }, [id]);

  if (loading) return "Loading...";
  //if (posts.items.length === 0) return "No messages from this user";
  return (
    <div className="feed">
      <div className="feed__header">
        {posts.items.length === 0 ? (
          <h2>No messages from this user</h2>
        ) : (
          <h2>All msgs from {posts.items[0].userName}</h2>
        )}
      </div>
      {posts.items.length === 0
        ? "Nothing..."
        : posts.items.map(
            ({
              userName,
              userId,
              date,
              message,
              title,
              avatar,
              verified,
              id,
            }) => (
              <Post
                userName={userName}
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

export default UsersMsg;
