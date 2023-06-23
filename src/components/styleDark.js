const swich = document.querySelector('.theme-swich-toggle');
const urlImg = '../images/bannermovil.jpg';
document.querySelector('.header').style.backgroundImage = urlImg;
swich.addEventListener('click', () => {
  document.querySelector('.body').classList.toggle('dark');
  document
    .querySelector('.theme-swich_maker')
    .classList.toggle('translate__swich');
});
