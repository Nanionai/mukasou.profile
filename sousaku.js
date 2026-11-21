const profiles = {
  kanrinin: document.getElementById("profile-kanrinin"),
  pot: document.getElementById("profile-pot")
};

document.querySelectorAll(".chara-box img").forEach(img => {
  img.addEventListener("click", function() {
    const profile = profiles[this.id];

    profile.style.display =
      profile.style.display === "none" ? "block" : "none";
  });
});