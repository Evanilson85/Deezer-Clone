let music = new Audio();
export function play(audio, check, btnPause) {
 // console.dir(music);
  music.src = audio;

  if (check) {
    music.pause();
  //  console.log("oi");

    btnPause.innerHTML = `
      <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-play"
              viewBox="0 0 16 16"
            >
              <path
                d="M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"
              />
            </svg>`;
  } else {
    music.play();
    btnPause.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-pause"
              viewBox="0 0 16 16" >
              <path
                d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z" />
            </svg>`;
  }
  return;
}

export function volumeTotal(value) {
  console.log(music);
  music.volume = value / 100;
}
export function timeTotal(value) {
  music.currentTime = value;
}

export function durationTotal(tags) {
  let durations = music.duration;
  console.log(durations);
  tags.innerHTML = soma(durations);
}

export function soma(time) {
  const min = Math.floor(time / 60);
  const sec = Math.floor(time % 60);

  return `${("0" + min).slice(-2)}:${("0" + sec).slice(-2)}`;
}
