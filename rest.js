let menu=document.querySelector("#menubar");
let navbar=document.querySelector(".navbar");
menu.onclick=()=>{
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
}
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  function im() {
    var ch = document.getElementById('choose');
    document.getElementById('im').src = "./images/nodles.png";
    ch.addEventListener("mouseover", function(event) {
        ch.innerHTML = "go back";
        ch.removeEventListener()
    });
}
document.getElementById("choose").addEventListener("click",function(event){
   
});