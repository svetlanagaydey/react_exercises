import React, { useState, useEffect, useRef } from 'react';
const PlayPause = () => {
    const videoRef = useRef(''); 

    useEffect(() => {
        console.log(videoRef.current);
    })
    
    const playVideo = async() => {
        videoRef.current.play();
    }
    const pauseVideo = async() => {
        videoRef.current.pause();
    }
    return (
        <div>
            <video ref={videoRef} style={{display: "block"}} src="https://dump.video/i/0kaZQ7.mp4"></video>
            <button  onClick={playVideo}>Play</button>
            <button onClick={pauseVideo}>Pause</button>
        </div>
    )
}
export default PlayPause;