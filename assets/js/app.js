$('.js-tilt').tilt({
  glare: true,
  maxGlare: .5,
  scale:1.04,
})
$('.service').tilt({
  glare: true,
  maxGlare: .5,
  scale:1.04,
  perspective:1000
})

// Tab script for feedback Section
if(document.getElementById("defaultOpen")){
  function openFeedback(evt, id) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(id).style.display = "block";
    evt.currentTarget.className += " active";
    $('.'+id).show();
  }
  document.getElementById("defaultOpen").click();
}

// Slider for project section
var owl = $(".owl-carousel").owlCarousel({
  loop: true,
  autoplay: false,
  items: 1,
  nav:true,
  autoplayHoverPause: true,
  animateIn: 'fadeInUp',
  animateOut: 'fadeOutDown',
  responsive:{
    0:{
      dots:true
    },
    780:{
      dots:false
    }
  }
});
$('.custom-up').click(function() {
  owl.trigger('next.owl.carousel');
  owl.animateIn
})  
$('.custom-down').click(function() {
  owl.trigger('prev.owl.carousel');
}) 




// Sidebar on mobile view
$('.open-menu-btn').click(function() {
  $('.c-nav-links').addClass('open')
})  
$('.close-btn').click(function() {
  $('.c-nav-links').removeClass('open')
})  

// intersection observer for Counter animation
let count = document.querySelector('.counts');
if(count){
  let observer = new IntersectionObserver((entries, observer) =>{
    entries.forEach(entry =>{
      if(entry.isIntersecting){
        counter_animate();
      }
    });
  },{threshold:0.45});
  observer.observe(count);
  function counter_animate(){
    const counters = document.querySelectorAll('.counter');
    const speed = 30;

    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = Math.ceil(target / speed);
        if (count < target) {
          counter.innerText = count + inc;
          setTimeout(updateCount, 70);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  }
}

// intersection observer for Blue section fingerprint SVG animation
let thumb = document.querySelector('.thumb');
if(thumb){
  let observer2 = new IntersectionObserver((entries, observer) =>{
    entries.forEach(entry =>{
      if(entry.isIntersecting){
        setTimeout(function(){ rotate_pattern(35); }, 500);
      }
      else{
        setTimeout(function(){ rotate_pattern(0); }, 100);
      }
    });
  },{threshold:0.45});
  observer2.observe(thumb);
  function rotate_pattern(deg){
    thumb.style.transform = "rotate("+deg+"deg)";
  }
}
