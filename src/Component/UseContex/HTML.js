import React, { useContext, useEffect, useRef, useState } from 'react';
import * as icon from "../../Assets/Images/index";
import thumbnailImage from "../../Assets/Images/Support-White.svg"; // Import the thumbnail image
import UserContext from '../../Contex/UserContext';
import clickSound from "../../Assets/Video/iphoneCameraClick.mp3"; // Import the click sound

function HTML() {
  const user = useContext(UserContext);
  const videoRef = useRef(null);
  const audioRef = useRef(null); // Reference to the audio element
  const [stream, setStream] = useState(null); // Use state to manage stream
  const [photo, setPhoto] = useState(null); // Use state to manage captured photo
  const [showVideo, setShowVideo] = useState(false);

  const startCamera = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } })
        .then(function (videoStream) {
          if (videoRef.current) {
            videoRef.current.srcObject = videoStream;
            setStream(videoStream); // Set stream using useState
          }
        })
        .catch(function (error) {
          console.error('Error accessing the camera:', error);
        });
    } else {
      console.error('getUserMedia not supported in this browser');
    }
  }

  const stopCamera = () => {
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
      setStream(null); // Reset stream to null
      setPhoto(null); // Reset captured photo to null
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  }

  const capturePhoto = () => {

    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      canvas.getContext('2d').drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const imageData = canvas.toDataURL('image/png');
      setPhoto(imageData); // Set captured photo
      if (audioRef.current) {
        audioRef.current.play(); // Play the click sound
      }
    }
    setTimeout(() => {
      scrollToBottom()
    }, 500);
  }

  const downloadPhoto = () => {
    if (photo) {
      const a = document.createElement('a');
      a.href = photo;
      a.download = 'varun_cam.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }
  const scrollToBottom = () => {
    //let myheight = document.documentElement.scrollHeight  
    window.scrollTo({
      top: 1200,
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    isIOS();
    if (isIOS()) {
      setShowVideo(true);
    }
  }, []);
  const isIOS = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
  }

  return (
    <div className='container my_smooth_animation'>
      <div className='row box_shadow align-items-center justify-content-center'>
        <h3>✨{user.myUser?.username}</h3>
        <h3>✨{user.myUser?.stack}</h3>

        <div className='col-md-12'>
          <h3 style={{ color: "#1ed760" }}>Technical HTML Skills<img className={user.windownView === 0 && 'my_icons'} src={icon.html.src} alt="js" /> </h3>
          <p className="d-flex"><span className="mx-2">&#187;</span>
            Proficient in creating well-structured and semantically meaningful HTML markup for web pages and applications.</p>
          <p className="d-flex"><span className="mx-2">&#187;</span>
            Knowledge of HTML multimedia elements such as img, audio and video tag for embedding media content into web pages and controlling playback.
          </p>
          <p className="d-flex"><span className="mx-2">&#187;</span>
            Proficient in using HTML tables for displaying tabular data and applying CSS styles for customization and responsiveness.          </p>
          <p className="d-flex"><span className="mx-2">&#187;</span>
            Knowledge of HTML best practices, including writing clean, well-formatted code, adhering to web standards, and optimizing for performance and compatibility across different browsers and devices.          </p>
        </div>
        {showVideo &&
          <>
            <h5 className='mb-4' style={{ color: "#1ed760", whiteSpace: "nowrap" }}> Photo capture via camera
              {!stream && <button className='mx-2 zoom_me ' onClick={startCamera}>Start <i class="bi bi-camera-video"></i></button>}
              {stream && <button className='mx-2 mt-3 stop_camera zoom_me' onClick={stopCamera}>Stop <i class="bi bi-camera-video-off"></i></button>}
            </h5>
            <div style={{ position: 'relative', width: '100%' }}>
              {!stream && <img src={thumbnailImage} alt="Thumbnail" className='thumbnail zoom_me' />}
              <video className='my_video' ref={videoRef} autoPlay  />
              {stream && <button className={photo ? 'mt-3 capture_btn re_take zoom_me' : 'mt-3 capture_btn zoom_me'} onClick={capturePhoto}> {photo ? "Retake " : "Capture "} <i class="bi bi-camera"></i></button>}
              {photo &&
                <div className='w-100 capture_img_div' id="capturePhoto">
                  {photo && <button className='mt-3 download_capture_img' onClick={downloadPhoto}>Download <i class="bi bi-cloud-arrow-down"></i></button>}
                  <img className=' capture_img zoom_me' src={photo} alt="Captured Photo" />
                </div>
              }
            </div>
          </>
        }
        {/* Add audio element for click sound */}
        <audio ref={audioRef} src={clickSound} />
      </div>
    </div>
  )
}

export default HTML;
