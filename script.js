function myFunction() {
    var x = document.getElementById("navList");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


  const showMoreBtn = document.querySelector(".show-more-btn");
  const hiddenItems = document.querySelectorAll(".hidden-items");

showMoreBtn.addEventListener("click", () => {
  hiddenItems.forEach(container => {
    container.style.display = container.style.display === "none" || !container.style.display ? "block" : "none";
  });
  showMoreBtn.textContent = showMoreBtn.textContent === "Show More" ? "Show Less" : "Show More";
});

