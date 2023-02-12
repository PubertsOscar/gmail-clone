import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  Inbox,
  KeyboardHide,
  MoreVert,
  Redo,
  Settings,
} from "@material-ui/icons";
import CheckBox from "@material-ui/core/Checkbox";
import { IconButton } from "@material-ui/core";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import React, { useState, useEffect } from "react";
import "./EmailList.css";
import Section from "./Section";
import EmailRow from "./EmailRow";
import { db } from "./Firebase";
import { collection, doc, onSnapshot } from "firebase/firestore";

function EmailList() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const ref = collection(db, "emails");
    onSnapshot(ref, (snapshot) => {
      setEmails(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <CheckBox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emaiList__settingsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>
      <div className="emaiList__sections">
        <Section Icon={InboxIcon} title="Primary" color="red" selected />
        <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
        <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
      </div>
      <div className="emailList__list">
        {emails.map(({id, data: { to, subject, message, timestamp }})=>(
          <EmailRow
          id={id}
          key={id}
          title={to}
          subject={subject}
          description={message}
          time={new Date(timestamp?.seconds *1000).toUTCString()}
          />
        ))}
        <EmailRow
          title="Twitch"
          subject="Hey streamer"
          description="This is test"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hey streamer"
          description="This is DOPE"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hey streamer"
          description="This is DOPE"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hey streamer"
          description="This is DOPE"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hey streamer"
          description="This is DOPE"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hey streamer"
          description="This is DOPE"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hey streamer"
          description="This is DOPE"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hey streamer"
          description="This is DOPE"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hey streamer"
          description="This is DOPE"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hey streamer"
          description="This is DOPE"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hey streamer"
          description="This is DOPE"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hey streamer"
          description="This is DOPE"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hey streamer"
          description="This is DOPE"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hey streamer"
          description="This is DOPE"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hey streamer"
          description="This is DOPE"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hey streamer"
          description="This is DOPE"
          time="10pm"
        />
      </div>
    </div>
  );
}

export default EmailList;
