import React from "react";
import "./Sidebar.css";
import { Button, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import SideBarOption from "./SideBarOption";
import {AccessTime,Duo,ExpandMore,Inbox,LabelImportant,NearMe,Note,Person,Phone,Star,} from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";


function Sidebar() {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar__compose"
        onClick={()=>dispatch(openSendMessage())}
      >
        Compose
      </Button>

      <SideBarOption Icon={Inbox} title="Inbox" number={54} selected={true} />
      <SideBarOption Icon={Star} title="Starred" number={54} />
      <SideBarOption Icon={AccessTime} title="Snoozed" number={54} />
      <SideBarOption Icon={LabelImportant} title="Important" number={54} />

      <SideBarOption Icon={NearMe} title="Sent" number={54} />
      <SideBarOption Icon={Note} title="Drafts" number={54} />
      <SideBarOption Icon={ExpandMore} title="More" number={54} />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <Person />
          </IconButton>
          <IconButton>
            <Duo />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
