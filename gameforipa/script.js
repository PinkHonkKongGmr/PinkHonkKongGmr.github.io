const root = document.querySelector(".root");

const fly = document.createElement("div");
const point = document.createElement("div");

fly.setAttribute("class", "fly");
point.setAttribute("class", "invisiblePoint");

root.append(fly);
root.append(point);

setInterval(() => {
  if (fly.getBoundingClientRect().x < point.getBoundingClientRect().x) {
    if (Math.random() > 0.6) {
      fly.style.left =
        parseInt(window.getComputedStyle(fly).left.replace(/\D+/g, "")) +
        21 +
        "px";
    }
    if (Math.random() < 0.4) {
      fly.style.left =
        parseInt(window.getComputedStyle(fly).left.replace(/\D+/g, "")) -
        7 +
        "px";
    }
  } else if (fly.getBoundingClientRect().x > point.getBoundingClientRect().x) {
    if (Math.random() > 0.6) {
      fly.style.left =
        parseInt(window.getComputedStyle(fly).left.replace(/\D+/g, "")) -
        21 +
        "px";
    }
    if (Math.random() < 0.4) {
      fly.style.left =
        parseInt(window.getComputedStyle(fly).left.replace(/\D+/g, "")) +
        7 +
        "px";
    }
  }

  if (fly.getBoundingClientRect().y < point.getBoundingClientRect().y) {
    if (Math.random() > 0.7) {
      fly.style.top =
        parseInt(window.getComputedStyle(fly).top.replace(/\D+/g, "")) +
        3 +
        "px";
    }
    if (Math.random() < 0.2) {
      fly.style.top =
        parseInt(window.getComputedStyle(fly).top.replace(/\D+/g, "")) -
        1 +
        "px";
    }
  } else if (fly.getBoundingClientRect().y > point.getBoundingClientRect().y) {
    if (Math.random() > 0.7) {
      fly.style.top =
        parseInt(window.getComputedStyle(fly).top.replace(/\D+/g, "")) -
        3 +
        "px";
    }
    if (Math.random() < 0.2) {
      fly.style.top =
        parseInt(window.getComputedStyle(fly).top.replace(/\D+/g, "")) +
        1 +
        "px";
    }
  }
});

setInterval(() => {
  point.style.left = Math.random() * window.innerWidth + "px";

  point.style.top = Math.random() * window.innerHeight + "px";
}, 500);

fly.onclick = (el) => {
  el.target.style.left =
    parseInt(window.getComputedStyle(fly).left.replace(/\D+/g, "")) - 7 + "px";
  el.target.style.top =
    parseInt(window.getComputedStyle(fly).top.replace(/\D+/g, "")) - 100 + "px";
};
