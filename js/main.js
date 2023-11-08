const bar = document.querySelector(".bar");
const phone_nav = document.querySelector(".phone-nav");
const close_bar = document.querySelector(".close-bar");

bar.addEventListener("click", () => {
  phone_nav.style.height = "300px";
  phone_nav.style.visibility = "visible";
  bar.style.display = "none";
  close_bar.style.display = "block";
});

close_bar.addEventListener("click", () => {
  phone_nav.style.height = "0";
  bar.style.display = "block";
  close_bar.style.display = "none";
  phone_nav.style.visibility = "hidden";
});
document.querySelector(".logo").style.cursor = "pointer";
document.querySelector(".logo").onclick = () => {
  location.href = "/index.html";
};
