const images = document.querySelectorAll(".slide"),
  next = document.querySelector(".next"),
  prev = document.querySelector(".prev");

let current = 0;

function changeImage() {
  images.forEach(img => {
    img.classList.remove("show");
    img.style.display = "none";
  });

  images[current].classList.add("show");
  images[current].style.display = "block";
}

// Calling first time
changeImage();

next.addEventListener("click", function() {
  current++;

  if (current > images.length - 1) {
    current = 0;
  } else if (current < 0) {
    current = images.length - 1;
  }

  changeImage();
});
prev.addEventListener("click", function() {
  current--;

  if (current > images.length - 1) {
    current = 0;
  } else if (current < 0) {
    current = images.length - 1;
  }

  changeImage();
});

// Auto change in 5 seconds

setInterval(() => {
  next.click();
}, 5000);