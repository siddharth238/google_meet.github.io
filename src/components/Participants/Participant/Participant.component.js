import React from "react";
import Card from "../../Shared/Card/Card.component";
 
import "./Participant.css";

export const Participant = (props) => {
  const {
    curentIndex,
    currentParticipant,
    hideVideo,
    videoRef,
    showAvatar,
   
  } = props;
  if (!currentParticipant) return <></>;
  return (
    <div className={`participant ${hideVideo ? "hide" : ""}`}>
      <Card>
        <video
          ref={videoRef}
          className="video"
          id={`participantVideo${curentIndex}`}
          autoPlay
          playsInline
        ></video>
        
        {showAvatar && (
          <div
            
            className="avatar"
          >
            {currentParticipant.name[0]}
          </div>
        )}
        <div className="name">
          {currentParticipant.name}
         
        </div>
      </Card>
    </div>
  );
};
