import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faVideo,
  faDesktop,
  faVideoSlash,
  faMicrophoneSlash,
} from "@fortawesome/free-solid-svg-icons";
import ReactTooltip from "react-tooltip";
import "./Footer.css";
const MeetingFooter = (props) => {
  const [streamState, setStreamState] = useState({
    mic: true,
    video: false,
    screen: false,
  });
  const micClick = () => {
    setStreamState((currentState) => {
      return {
        ...currentState,
        mic: !currentState.mic,
      };
    });
  };

  const onVideoClick = () => {
    setStreamState((currentState) => {
      return {
        ...currentState,
        video: !currentState.video,
      };
    });
  };

  const onScreenClick = () => {
    props.onScreenClick(setScreenState);
  };

  const setScreenState = (isEnabled) => {
    setStreamState((currentState) => {
      return {
        ...currentState,
        screen: isEnabled,
      };
    });
  };
  useEffect(() => {
    props.onMicClick(streamState.mic);
  }, [streamState.mic]);
  useEffect(() => {
    props.onVideoClick(streamState.video);
  }, [streamState.video]);
  return (
    <div className="meeting-footer">
      <div
        className={"meeting-icons " + (!streamState.mic ? "active" : "")}
         onClick={micClick}
      >
        <FontAwesomeIcon
          icon={!streamState.mic ? faMicrophoneSlash : faMicrophone}
          title="Mute"
        />
      </div>
      <div
        className={"meeting-icons " + (!streamState.video ? "active" : "")}
         onClick={onVideoClick}
      >
        <FontAwesomeIcon icon={!streamState.video ? faVideoSlash : faVideo} />
      </div>
      <div
        className="meeting-icons"
         onClick={onScreenClick}
        disabled={streamState.screen}
      >
        <FontAwesomeIcon icon={faDesktop} />
      </div>
      <ReactTooltip />
      
    </div>
  );
};

export default MeetingFooter;