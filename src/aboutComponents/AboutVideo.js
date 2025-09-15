import ReactPlayer from 'react-player';
import React, { useRef } from 'react';
import "./AboutVideo.css"

const VIDEO_PATH = 'https://youtu.be/iju_466RQ98';

const AboutUsVideo = () => {
    
    const playerRef = useRef(null);
    return (
      <div className='video-intro'>
         <ReactPlayer className="northblade-video" ref={playerRef} url={VIDEO_PATH} controls={true} width={"100%"} height={"650px"}/>
      </div>
    );
}


export default AboutUsVideo;