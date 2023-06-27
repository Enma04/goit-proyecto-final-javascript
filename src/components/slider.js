window.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.slider-container');
  let currentTranslate = 0;
  let animationID = 0;

  function startSlider() {
    animationID = requestAnimationFrame(animation);
  }

  function animation() {
    currentTranslate -= 1;

    if (currentTranslate < -300) {
      currentTranslate += 300;
      slider.appendChild(slider.firstElementChild); 
    }
    slider.style.transform = `translateX(${currentTranslate}px)`;
    animationID = requestAnimationFrame(animation);
  }

  function stopSlider() {
    cancelAnimationFrame(animationID);
  }

  slider.addEventListener('mouseenter', stopSlider);
  slider.addEventListener('mouseleave', startSlider);
});
