
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

// Function to show the next slide
function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

// Function to show the previous slide
function prevSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}



function openDropDown(){
  var menu_content = document.getElementById("menu-button");
  menu_content.classList.toggle('show')

  console.log("clicked")
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {

  if (!event.target.matches('.menu-button')) {
    var dropdowns = document.getElementsByClassName("dropdown-menu");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

let count = 0
const counterElement = document.getElementById('counter')
const launches = document.getElementById('counter').innerText

function updateCounter(){
  counterElement.textContent = count
}

function increamentCount(){
  count++;
  updateCounter()
}

window.onload = function(){
  setInterval(increamentCount, 1000); // Increment counter every second (1000 milliseconds)
  while(count < launches){
    updateCounter(); // Update counter display initially
  }
}