const sounds = [
  "Jurassic-Park",
  "The-Lord-of-the-Rings",
  "Star-Wars",
  "Star-Trek",
  "The-Matrix",
  "Harry-Potter",
  "Stop",
];

// const container = document.getElementById("container");

// function changeBackground() {
//   container.classList.add("Star-Trek");
// }

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSongs();
    // changeBackground();

    document.getElementById(sound).play();
  });

  document.getElementById("buttons").appendChild(btn);
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    song.pause();
    song.currentTime = 0;
  });
}
