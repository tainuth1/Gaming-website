window.addEventListener("scroll", function () {
    const backNav = document.querySelector(".back-nav");
    const navigation = document.querySelector(".navigation");
    const scrollPosition = window.scrollY;

    if (scrollPosition === 0) {
        backNav.style.backgroundImage = "none";
        // navigation.style.backgroundImage = "url(images/nav-bg.jpg)";
        navigation.style.backgroundImage = "none";
    } else {
      backNav.style.backgroundImage = "url(images/nav-bg.jpg)";
      navigation.style.backgroundImage = "none";
    }
});

//nav-bar-responsive
var bar = document.getElementById("bar");
var resMenu = document.querySelector(".res-menu");

bar.addEventListener("click", function(){
  resMenu.classList.toggle("height");
});

const dots = document.querySelectorAll(".dot");
const imgScroll = document.querySelector(".img-scroll");

dots.forEach(dotBtn => {
  dotBtn.addEventListener("click", function() {
    const slideIndex = dotBtn.getAttribute("data-slide-index");
    const scrollPosition = slideIndex * imgScroll.offsetWidth;
    imgScroll.scrollTo({
      left: scrollPosition,
      // behavior: "smooth"
    });

    dots.forEach(otherDot => {
      otherDot.classList.remove("active");
    });
    dotBtn.classList.add("active");
  });
});



var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var firstName = document.getElementById("first-name");
var lastName = document.getElementById("last-name");

btn1.addEventListener("click", function(){
  firstName.innerHTML = "CALL";
  lastName.innerHTML = "OF DUTY";
});
btn2.addEventListener("click", function(){
  firstName.innerHTML = "BATTLE";
  lastName.innerHTML = "GROUND";
});
btn3.addEventListener("click", function(){
  firstName.innerHTML = "APEX";
  lastName.innerHTML = "LEGEND";
});
btn4.addEventListener("click", function(){
  firstName.innerHTML = "MONSTER";
  lastName.innerHTML = "HUNTER";
});


// $('.slider').slick({
//   slidesToShow: 2,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 1000,
// });

// $('.product-slider').slick({
//   dots: true,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 4,
//   slidesToScroll: 4,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//   ]
// });