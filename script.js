document.addEventListener("DOMContentLoaded", () => {
  const shareButton = document.getElementById("share-btn");
  const userProfile = document.querySelector(".user-profile");

  shareButton.addEventListener("click", () => {
    userProfile.classList.toggle("active");
  });
});
