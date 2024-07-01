// Time
function updateTime() {
  const now = new Date();
  document.querySelector('[data-testid="currentTimeUTC"]').innerText = now
    .toUTCString()
    .split(" ")[4];
  document.querySelector('[data-testid="currentDay"]').innerText =
    now.toLocaleDateString("en-US", { weekday: "long" });
}
setInterval(updateTime, 1000);
updateTime();
