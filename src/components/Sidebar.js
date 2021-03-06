import HomeIcon from "@material-ui/icons/Home";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";

import SidebarOption from "./SidebarOption";

import "./Sidebar.css";

function Sidebar({ setSearchQuery }) {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />
      <NavLink activeClassName="sidebarOption--active" to="/home">
        <SidebarOption Icon={HomeIcon} text="Home" />
      </NavLink>
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOption Icon={ListAltIcon} text="Lists" />
      <NavLink activeClassName="sidebarOption--active" to="/me">
        <SidebarOption Icon={PersonOutlineIcon} text="Profile" />
      </NavLink>

      <SidebarOption Icon={MoreHorizIcon} text="More" />

      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
