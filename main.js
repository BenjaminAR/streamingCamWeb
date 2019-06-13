var width = 0, height = 0;
var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d'),
    video = document.querySelector('video');  

function getWebcam(){ 
  console.log('get webcam');
    navigator.mediaDevices.getUserMedia({ video: {
      facingMode: "user",
      frameRate: { ideal: 17, max: 20 },
      width: { ideal: 1280 },
      height: { ideal: 720 }
  }, audio: true })
    .then(stream => {
      video.srcObject = stream;
      video.play();
    })
  }
  
  getWebcam();
                            
 