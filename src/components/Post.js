import { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import {
  FavoriteBorder,
  VerifiedUser,
  Repeat,
  ChatBubbleOutline,
  Publish,
} from "@material-ui/icons";

import "./Post.css";

function Post({
  userName,
  userId,
  date,
  message,
  title,
  avatar,
  verified,
  messageId,
}) {
  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {userName}{" "}
              <span className="post__headerSpecial">
                {verified && <VerifiedUser className="post__badge" />} @
                <Link to={`/user/${userId}/messages`}>{userName}</Link>
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{message}</p>
          </div>
        </div>
        {/* <img src="https://i.pravatar.cc/300" alt="" /> */}
        <div className="post__footer">
          <Link to={`/message/${messageId}`}>
            <ChatBubbleOutline fontSize="small" />
          </Link>{" "}
          <Repeat fontSize="small" />
          <FavoriteBorder
            onClick={toggleClass}
            className={isActive ? "fav another" : "another"}
            fontSize="small"
          />
          <Publish fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
