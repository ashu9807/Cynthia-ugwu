
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

//mouse follower.
function circleMouseFollower(){
    window.addEventListener("mousemove",function(dets){
        document.querySelector(".minicircle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`;
    })
}

circleMouseFollower();



document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });




  var tl=gsap.timeline()
  tl.from(".nav",{
    y:-150,
    duration:1,
    stagger:0.2,
    opacity:0
})

tl.from(".hero .heading ",{
  y:150,
  duration:1,
  stagger:0.2,
  opacity:0
})

tl.from(".hero .chhotiheadings",{
  y:150,
  duration:0.2,
  stagger:0.2,
  opacity:0
})
