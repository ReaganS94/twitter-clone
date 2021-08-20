import SearchIcon from "@material-ui/icons/Search";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import "./Widgets.css";

function Widgets({ setSearchQuery, input, setInput, reset }) {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon
          onClick={() => {
            setSearchQuery(input);
            //setInput("");
          }}
          className="widgets__searchIcon"
        />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search Twitter"
          type="text"
        />
        <HighlightOffIcon className="widgets__deleteIcon" onClick={reset} />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <p>
          T<br />w<br />e<br />e<br />t<br />s<br />
          <br /> f<br />e<br />e<br />d<br />
          <br /> g<br />o<br />e<br />s<br />
          <br /> h<br />e<br />r<br />e
        </p>
      </div>
    </div>
  );
}

export default Widgets;
