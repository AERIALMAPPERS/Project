//lidar
function showPopup() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("popupContainer").style.display = "block";
  }
  function hidePopup() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("popupContainer").style.display = "none";
  }
  
  // Bathymetry
  function showPopup1() {
    document.getElementById("overlay1").style.display = "block";
    document.getElementById("popupContainer1").style.display = "block";
  }
  function hidePopup1() {
    document.getElementById("overlay1").style.display = "none";
    document.getElementById("popupContainer1").style.display = "none";
  }
  
  // step1
  function show1() {
    document.getElementById("overlay-s1").style.display = "block";
    document.getElementById("popupContainer-s1").style.display = "block";
  }
  function hide1() {
    document.getElementById("overlay-s1").style.display = "none";
    document.getElementById("popupContainer-s1").style.display = "none";
  }
  
  //step2
  function show2() {
    document.getElementById("overlay-s2").style.display = "block";
    document.getElementById("popupContainer-s2").style.display = "block";
  }
  function hide2() {
    document.getElementById("overlay-s2").style.display = "none";
    document.getElementById("popupContainer-s2").style.display = "none";
  }
  
  // step3
  function show3() {
    document.getElementById("overlay-s3").style.display = "block";
    document.getElementById("popupContainer-s3").style.display = "block";
  }
  function hide3() {
    document.getElementById("overlay-s3").style.display = "none";
    document.getElementById("popupContainer-s3").style.display = "none";
  }
  
  //step4
  function show4() {
    document.getElementById("overlay-s4").style.display = "block";
    document.getElementById("popupContainer-s4").style.display = "block";
  }
  function hide4() {
    document.getElementById("overlay-s4").style.display = "none";
    document.getElementById("popupContainer-s4").style.display = "none";
  }
  
  // step5
  function show5() {
    document.getElementById("overlay-s5").style.display = "block";
    document.getElementById("popupContainer-s5").style.display = "block";
  }
  function hide5() {
    document.getElementById("overlay-s5").style.display = "none";
    document.getElementById("popupContainer-s5").style.display = "none";
  }
  
  //step6
  function show6() {
    document.getElementById("overlay-s6").style.display = "block";
    document.getElementById("popupContainer-s6").style.display = "block";
  }
  function hide6() {
    document.getElementById("overlay-s6").style.display = "none";
    document.getElementById("popupContainer-s6").style.display = "none";
  }
  
  // step7
  function show7() {
    document.getElementById("overlay-s7").style.display = "block";
    document.getElementById("popupContainer-s7").style.display = "block";
  }
  function hide7() {
    document.getElementById("overlay-s7").style.display = "none";
    document.getElementById("popupContainer-s7").style.display = "none";
  }
  
  //step8
  function show8() {
    document.getElementById("overlay-s8").style.display = "block";
    document.getElementById("popupContainer-s8").style.display = "block";
  }
  function hide8() {
    document.getElementById("overlay-s8").style.display = "none";
    document.getElementById("popupContainer-s8").style.display = "none";
  }
  
  //step 9
  function show9() {
    document.getElementById("overlay-s9").style.display = "block";
    document.getElementById("popupContainer-s9").style.display = "block";
  }
  function hide9() {
    document.getElementById("overlay-s9").style.display = "none";
    document.getElementById("popupContainer-s9").style.display = "none";
  }
  
  //step 10
  function show10() {
    document.getElementById("overlay-s10").style.display = "block";
    document.getElementById("popupContainer-s10").style.display = "block";
  }
  function hide10() {
    document.getElementById("overlay-s10").style.display = "none";
    document.getElementById("popupContainer-s10").style.display = "none";
  }
  
  //step 11
  function show11() {
    document.getElementById("overlay-s11").style.display = "block";
    document.getElementById("popupContainer-s11").style.display = "block";
  }
  function hide11() {
    document.getElementById("overlay-s11").style.display = "none";
    document.getElementById("popupContainer-s11").style.display = "none";
  }
  
  //step 12
  function show12() {
    document.getElementById("overlay-s12").style.display = "block";
    document.getElementById("popupContainer-s12").style.display = "block";
  }
  function hide12() {
    document.getElementById("overlay-s12").style.display = "none";
    document.getElementById("popupContainer-s12").style.display = "none";
  }
  
  //step 13
  function show13() {
    document.getElementById("overlay-s13").style.display = "block";
    document.getElementById("popupContainer-s13").style.display = "block";
  }
  function hide13() {
    document.getElementById("overlay-s13").style.display = "none";
    document.getElementById("popupContainer-s13").style.display = "none";
  }
  
  //step 14
  function show14() {
    document.getElementById("overlay-s14").style.display = "block";
    document.getElementById("popupContainer-s14").style.display = "block";
  }
  function hide14() {
    document.getElementById("overlay-s14").style.display = "none";
    document.getElementById("popupContainer-s14").style.display = "none";
  }
  
  //step 15
  function show15() {
    document.getElementById("overlay-s15").style.display = "block";
    document.getElementById("popupContainer-s15").style.display = "block";
  }
  function hide15() {
    document.getElementById("overlay-s15").style.display = "none";
    document.getElementById("popupContainer-s15").style.display = "none";
  }
  
  // services
  function showService(){
    window.location.href='./service.html';
  }
  
  // slide show
  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }
  
  function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
  
    if (n > slides.length) {
      slideIndex = 1;
    }
  
    if (n < 1) {
      slideIndex = slides.length;
    }
  
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  
    slides[slideIndex - 1].style.display = "block";
  }
  
  // Automatically change slides every 1500 milliseconds (1.5 seconds)
  setInterval(function () {
    plusSlides(1);
  }, 1000);
  
  function openMapPage() {
    window.location.href = "map.html"; // Change "contact.html" to the actual path of your contact page
  }



  //service
  document.addEventListener("DOMContentLoaded", function () {
    const slidingImage = document.getElementById("Drone-img");
  
    function slideIn() {
      slidingImage.style.transform = "translateY(0)";
      slidingImage.style.opacity = 1;
    }
  
    // Trigger the slide-in effect when the page loads
    slideIn();
  });
  