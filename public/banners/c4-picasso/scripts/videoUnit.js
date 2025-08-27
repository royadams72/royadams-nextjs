let video, video2;
let videoPlaying = false;
let videoPlaying2 = false;

function initVideo() {
  console.log("Init main video");
  video = document.getElementById("video");
  video.addEventListener("ended", onVideoEnded);
}

function initVideo2() {
  console.log("Init secondary video");
  video2 = document.getElementById("video2");
  video2.addEventListener("ended", onVideo2Ended);
}

function playVideo(videoName) {
  if (!video) return;

  video.setAttribute("controls", "controls");
  video.muted = false;
  video.src = `videos/${videoName}_video.mp4`;
  video.load();
  video.play();
  videoPlaying = true;

  console.log("Playing:", videoName);
}

function playVideo2(videoUrl) {
  if (!video2) return;

  video2.setAttribute("controls", "controls");
  video2.muted = false;
  video2.src = videoUrl;
  video2.load();
  video2.play();
  videoPlaying2 = true;

  console.log("Playing secondary video:", videoUrl);
}

function stopVideo() {
  if (video && videoPlaying) {
    video.pause();
    videoPlaying = false;
  }
}

function stopVideo2() {
  if (video2 && videoPlaying2) {
    video2.pause();
    videoPlaying2 = false;
  }
}

function onVideoEnded() {
  console.log("Main video ended");
  videoPlaying = false;
}

function onVideo2Ended() {
  console.log("Secondary video ended");
  videoPlaying2 = false;
}

function playMutedVideo(videoName) {
  if (!video) return;

  video.muted = true;
  video.src = `videos/${videoName}.mp4`;
  video.load();
  video.play();
  videoPlaying = true;

  console.log("Muted autoplay video:", videoName);
}
