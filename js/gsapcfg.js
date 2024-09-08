gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
  smooth: 2,
  effects: true,
});

gsap.utils.toArray('nav a').forEach(function (button, i) {
  button.addEventListener('click', (e) => {
    var id = e.target.getAttribute('href');
    console.log(id);
    smoother.scrollTo(id, true, 'top top');
    e.preventDefault();
  });
});

window.onload = (event) => {
  let urlHash = window.location.href.split('#')[1];

  let scrollElem = document.querySelector('#' + urlHash);

  console.log(scrollElem, urlHash);

  if (urlHash && scrollElem) {
    gsap.to(smoother, {
      scrollTop: smoother.offset(scrollElem, 'top top'),
      duration: 1,
      delay: 0.5,
    });
  }
};
