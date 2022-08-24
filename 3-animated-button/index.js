const animatedButton = document.getElementById("animatedButton");
const surprise = document.getElementById("surprise");
surprise.style.display = "none";

setTimeout(() => {
  surprise.style.display = "block";
}, 2000);

setTimeout(() => {
  surprise.textContent = "TAB is a tip for you";
}, 10000);

animatedButton.onmouseenter = (e) => {
  const target = e.target;
  if (target.style.marginTop === "-500px") {
    target.style.marginTop = "500px";
  } else {
    target.style.marginTop = "-500px";
  }
};

animatedButton.onmouseleave = (e) => {
  const target = e.target;

  target.textContent = "try again ...";
};

animatedButton.onclick = (e) => {
  const body = document.getElementsByTagName("body")[0];
  surprise.textContent = "SURPRIIIIIISE HAAHAHAHA";
  body.style.justifyContent = "flex-start";

  body.style.background =
    "url(https://i.ytimg.com/vi/tPSkd1U3Lh4/mqdefault.jpg)";

  body.style.backgroundSize = "cover";
  animatedButton.style.display = "none";
};
