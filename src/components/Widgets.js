import { useState } from "react";

import SearchIcon from "@material-ui/icons/Search";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

import "./Widgets.css";

function Widgets({ setSearchQuery }) {
  const [input, setInput] = useState("");

  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon
          onClick={() => setSearchQuery(input)}
          className="widgets__searchIcon"
        />
        <input
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search Twitter"
          type="text"
        />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <p>
          T<br />w<br />e<br />e<br />t<br />s<br />
          <br /> f<br />e<br />e<br />d<br />
          <br /> g<br />o<br />e<br />s<br />
          <br /> h<br />e<br />r<br />e
        </p>
        <TwitterTweetEmbed tweetId={"933354946111705097"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="saurabhnemade"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://facebook.com/saurabhnemade"}
          options={{ text: "#reactjs is awesome", via: "saurabhnemade" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
