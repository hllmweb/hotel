import React, { useState } from 'react';
import Webcam from "react-webcam";
//const WebcamComponent = () => <Webcam />;

const videoConstraints = {
  width: 220,
  height: 200,
  facingMode: "environment"
};
  
const WebcamCapture = () => {
  const webcamRef = React.useRef(null);
  const [image,setImage]=useState('');

  const capture = React.useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();

      setImage(imageSrc)
    },[webcamRef]);


  return(
    <div>
      {/* <Webcam
        audio={false}
        height={200}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={220}
        videoConstraints={videoConstraints}
      /> */}
      <button onClick={(e)=>{e.preventDefault();capture();}}>Capture</button>
    
      <div className="webcam-container">
        <div className="webcam-img">
          
          {image===''?<Webcam
          audio={false}
          height={600}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
            width={600}
          videoConstraints={videoConstraints}
          />:<img src={image} alt="imagem capturada"/>}
        </div>
      </div>

    </div>
  );

}

export default WebcamCapture;