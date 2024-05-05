
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