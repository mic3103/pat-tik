var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("asus").style.top = "0";
  } else {
    document.getElementById("asus").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}






document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.residen');

    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('show');
          }, index * 700); 
        }
      });
    });

    elements.forEach(element => {
      observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const h1 = document.querySelector("#value h1");
    const targetValue = parseInt(h1.textContent, 10);
    let currentValue = 0;
    const duration = 6000; // Total duration of the animation in milliseconds
    const increment = targetValue / (duration / 16); // Calculate the increment based on the duration and frame rate

    function updateCounter() {
      currentValue += increment;
      if (currentValue >= targetValue) {
        h1.textContent = targetValue;
      } else {
        h1.textContent = Math.ceil(currentValue);
        requestAnimationFrame(updateCounter);
      }
    }

    updateCounter();
});




