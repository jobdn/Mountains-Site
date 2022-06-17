document.querySelector(".showcase__btn").addEventListener("click", function () {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

document
  .querySelector(".showcase__arrow")
  .addEventListener("click", function (event) {
    document.getElementById("journal").scrollIntoView({ behavior: "smooth" });
  });
