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
