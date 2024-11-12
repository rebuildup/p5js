let recorder;
let chunks = [];

function record(_framerate) {
  chunks.length = 0;

  let stream = document.querySelector("canvas").captureStream(_framerate);
  recorder = new MediaRecorder(stream, { mimeType: "video/webm;" });

  recorder.ondataavailable = (e) => {
    if (e.data.size) {
      chunks.push(e.data);
    }
  };
  recorder.onstop = exportVideo;
}

function exportVideo() {
  var blob = new Blob(chunks, { type: "video/webm" });
  var url = URL.createObjectURL(blob);
  var a = document.createElement("a");
  document.body.appendChild(a);
  a.style = "display: none";
  a.href = url;
  a.download = "shinka.webm";
  a.click();
  window.URL.revokeObjectURL(url);
}
