const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");
if (toastTrigger) {
  toastTrigger.addEventListener("click", () => {
    const toast = new bootstrap.Toast(toastLiveExample);

    toast.show();
  });
}

function setRandomColor() {
  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];
  const div = document.querySelectorAll("all");
  const randomIndex = Math.floor(Math.random() * colors.length);
  div.style.backgroundColor = colors[randomIndex];
}
setRandomColor();
