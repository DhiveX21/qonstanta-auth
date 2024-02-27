import React from "react";
import YouTube from "react-youtube";
import ControlNotFound from "../Control/ControlNotFound";

const opts = {
  height: "300px",
  width: "100%",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

export function VideoPlayer1({
  url = "https://www.youtube.com/embed/ND7vNOzkimY?start=3",
  title = "Title Common1",
  description = "Description Common1",
}) {
  var video_id = url.split("v=")[1];
  if (video_id) {
    var ampersandPosition = video_id.indexOf("&");
    if (ampersandPosition != -1) {
      video_id = video_id.substring(0, ampersandPosition);
    }
  }

  return (
    <>
      <div>
        <div>
          <div className={`text-2xl text-q_navy font-black`}>
            <h3>{title}</h3>
          </div>
          <div>
            {video_id ? (
              <YouTube
                autoplay={false}
                videoId={video_id}
                opts={opts}
                // onReady={this._onReady}
              />
            ) : (
              <ControlNotFound text="Sepertinya Video nya Tidak dapat di putar."></ControlNotFound>
            )}
          </div>
          <div className={` text-sm text-get_light_desc`}>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
