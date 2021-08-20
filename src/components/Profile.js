import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./Feed.css";

export const baseUrl = "https://mini-tw.herokuapp.com/messages";

export const userUrl = "https://mini-tw.herokuapp.com/me";

function Profile() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMessage = async () => {
      axios.get(userUrl).then((response) => {
        setUser(response.data);
        setLoading(false);
        console.log(response.data);
      });
    };
    getMessage();
  }, []);

  if (loading) return "Loading...";

  return (
    <div className="feed">
      <div className="feed__header">
        <h3>{user.userName}</h3>
        <img src={user.avatar} alt="avatar" />
        <Link to={`/user/${user.id}/messages`}>
          <h4>{user.email}</h4>
        </Link>
      </div>
    </div>
  );
}

export default Profile;
