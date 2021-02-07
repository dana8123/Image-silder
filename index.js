const preButton = document.querySelector(".js-preBtn"),
nextButton = document.querySelector(".js-nextBtn"),
carouselList = document.querySelector(".js-list"),
carouselContainer = document.querySelector("carousel__wrapper"),
carouselArray = Array.from(document.querySelectorAll(".js-list li"));

const totalSliderNum = carouselArray.length;
const sliderClass = "active";
const currentSlide = document.querySelector(".js-list li:nth-child(1)");
const currentSlideNum = 1;

const activeClass = "active";

const preview = function handlePreClick () {
  if( currentSlideNum === 1 ) {
     currentSlideNum = totalSliderNum;
  } else{
    currentSlideNum --;
  }
} //TODO : hadlepreClikc 에 대한 function 추가하기

const next = function handleNextClick () {
  if( currentSlideNum === totalSliderNum) {
    currentSlideNum = 1;
  } else{
    currentSlideNum ++;
  }
} //TODO : handleClick 에 대한 function 추가하기

const transitionTo = function handleTransition () {
  
}
}