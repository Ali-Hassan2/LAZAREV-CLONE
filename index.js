let ele = document.getElementById("one");

ele.addEventListener('mouseenter', function() {
    let tl = gsap.timeline();
    tl.to(".line", {
        height: "100%",
        bottom: '-100%',
        backgroundColor:'#111',
        duration: 0.1,
        width:'100vw'
    })
    .set(".line h5", { display: "block" }) // Ensure h5 elements are set to display block
    .to(".line h5", {
        autoAlpha: 1, // Fade in elements
        stagger: 0.1, // Stagger the animation for each h5
        duration: 0.1
    }, "-=0.2"); // Overlap with previous animation
});

// Optionally, handle mouse leave to revert the changes
ele.addEventListener('mouseleave', function() {
    let tl = gsap.timeline();
    
    // Revert the .line element
    tl.to(".line", {
        height: "0%",
        bottom: '0%',
        duration: 0.1
    })
    .to(".line h5", {
        autoAlpha: 0, // Fade out elements
        duration: 0.1
    }, "-=0.2") // Overlap with previous animation
    .set(".line h5", { display: "none" }); // Hide h5 elements after animation
});


// Making the image cursors

let elements = document.querySelectorAll(".rightone");
elements.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        gsap.to(elem.childNodes[7],{
            opacity:1,
            scale:1
        })
    elem.addEventListener("mouseleave",function(){
        gsap.to(elem.childNodes[7],{
            opacity:0,
            scale:0,
        })
    elem.addEventListener("mousemove",function(dets){
        // console.log(elem.childNodes[4])
        gsap.to(elem.childNodes[7],{
            x:dets.x - elem.getBoundingClientRect().x - 50,
            y:dets.y - elem.getBoundingClientRect().y - 180
        })
    })
    })
    })
})


let sep = document.querySelector('.page3-content');
sep.addEventListener("mouseenter",function(elem){
   gsap.to(".page3-content #tag",{
    opacity:1,
    // autoAlpha:0,
    y:-15,
    duration:0.3
   })
   gsap.to(".page3-content #ione",{

    y:20,
    duration:0.3
   })
})
sep.addEventListener('mouseleave',function(){
    gsap.to(".page3-content #tag",{
        opacity:0,
        y:0,
        duration:0.2
    })
    gsap.to(".page3-content #ione",{

        y:0,
        duration:0.3
       })
})

let another = document.querySelector(".page3 .page3-content");
let video = document.querySelector(".page3 video");
another.addEventListener('click',function(){
    video.play();
    gsap.to(video, {
        transform:'scaleX(1) scaleY(1)',
        opacity:1,
        borderRadius:'0',
        duration:0.5
    })
})

video.addEventListener('click',function(){
    video.pause();
    gsap.to(video,{
        transform:'scaleX(0.5) scaleY(0)',
        opacity:0,
        borderRadius:'50px'
    })
})


let newt = gsap.timeline();
gsap.from(".content h1",{
    y:20,
    duration:0.5,
    stagger:0.5
})

    let vid2 = document.querySelector(".video2 video")
    let videolap = document.querySelector(".video2");
    videolap.addEventListener('mouseenter',function(){
        vid2.play();
        gsap.to(".video2 img",{
            opacity:0,
            borderRadius:'5px'
        })
        
        gsap.to(vid2,{
            // transform:'scaleX(1) scaleY(1)'
            opacity:1
        })    
    })
    videolap.addEventListener("mousemove",function(dets){
        gsap.to(".video2 .ball",{
            opacity:1,
            y:dets.y - 700,
            x:dets.x - 830,
            // zIndex:'12'
        })
    })
    videolap.addEventListener("mouseleave",function(){
        vid2.pause();
        gsap.to(".video2 img",{
            opacity:1
        })
        gsap.to(".video2 video",{
            opacity:0
        })
        gsap.to(".video2 .ball",{
            opacity:0
        })
        
    })
    // videolap.addEventListener("mouseleave",function(){
    //    gsap.to(".video2 .ball"){
    //     // opacity:0
    //    } 
    // })
    // Ensure GSAP and ScrollTrigger are available
var uep = document.querySelector(".sec-video2");
let vi = document.querySelector(".sec-video2 video")
uep.addEventListener("mouseenter",function(){
    vi.play();
    gsap.to(vi,{
        opacity:1,
        borderRadius:'10px'
    })
    gsap.to(".sec-video2 img",{
        opacity:0
    })
})
uep.addEventListener("mouseleave",function(){
    vi.pause();
    gsap.to(vi,{
        opacity:0
    })
    gsap.to(".sec-video2 .sec-ball",{
        opacity:0
    })
    gsap.to(".sec-video2 img",{
        opacity:1,
        // duration:0.01
        borderRadius:'5px'
    })
})

uep.addEventListener('mousemove',function(dets){
    gsap.to(".sec-video2 .sec-ball",{
        opacity:1,
        y:dets.y - 700,
        x:dets.x - 800
    })
})

// gsap.to('.page2 h1',{
//     transform:"translateX(-150%)",
    
//     scrollTrigger:{
//         // trigger:'.page2 h1',
//         trigger:'.page2',
//         scroller:'body',
//         start:'top 0%',
//         end:'top -100%',
//         markers:true,
//         scrub:1,
//         pin:true
//         // when u want to use the pin then trigger its parent 
//     }
// })
gsap.registerPlugin(ScrollTrigger);
gsap.to(".page6 .page6right",{
    transform:"translateY(-100%)",
    scrollTrigger:{
        trigger:'.page6',
        scroller:'body',
        start:'top 0%',
        end:'top -100%',
        // markers:true,
        scrub:1,
        pin:true
    }
})
gsap.registerPlugin(ScrollTrigger);
gsap.to(".page7 .page7right",{
    transform:"translateY(-80%)",
   
    scrollTrigger:{
        trigger:'.page7',
        scroller:'body',
        top:'0%',
        end:'top -100%',
        // markers:true,
        scrub:1,
        pin:true
    }
})

let ext = document.getElementById("next");
let sip = document.getElementById("next video")
ext.addEventListener("mouseenter",function(){
    
    // sip.play();

    // gsap.to(sip,{
    //     opacity:1
    // })
    gsap.to("#next .ball",{
        opacity:1
    })
    gsap.to("#next img",{
        opacity:1
    })
})
ext.addEventListener("mousemove",function(dets){
    gsap.to("#next .ball",{
        y:dets.y - 700,
        x:dets.x - 800
    })
})
ext.addEventListener("mouseleave",function(dets){
    gsap.to("#next .ball",{
       opacity:0
    })
})

var uep2 = document.querySelector("#next2");
let vi2 = document.querySelector("#next2 video")
uep2.addEventListener("mouseenter",function(){
    vi2.play();
    gsap.to(vi2,{
        opacity:1,
        borderRadius:'10px'
    })
    gsap.to("#next2 img",{
        opacity:0
    })
})
uep2.addEventListener("mouseleave",function(){
    vi2.pause();
    gsap.to(vi2,{
        opacity:0
    })
    gsap.to("#next2 .sec-ball",{
        opacity:0
    })
    gsap.to("#next2 img",{
        opacity:1,
        //
        borderRadius:'5px'
    })
})

uep2.addEventListener('mousemove',function(dets){
    gsap.to("#next2 .sec-ball",{
        opacity:1,
        y:dets.y - 700,
        x:dets.x - 800
    })
})

gsap.to(".page8 .page8right",{
    transform:'translateY(-140%)',
    scrollTrigger:{
        trigger:'.page8',
        scroller:'body',
        top:'0%',
        end:'top -100%',
        scrub:1,
        pin:true
    }
})
// 
gsap.from("#sipu h5",{
    x:0,
    duration:1,
    scrollTrigger:{
        trigger:"#sipu",
        scroller:'body',
        // markers:true,
        top:'top 80%',
        end:'-10%',
        scrub:true
    }
})
gsap.to("#nine #niner",{
        transform:'translateY(-50%)',
        scrollTrigger:{
            trigger:'.page9',
            scroller:'body',
            top:'0%',
            end:'top -100%',
            scrub:1,
            pin:true
        }
    })


    gsap.to("#rotate-svg", {
        rotate: 360,
        duration:2,
        scrollTrigger:{
            trigger:'#rotate-svg',
            scroller:'body',
            top:'0%',
            end:'top -100%',
            scrub:1
        }
    });
    let page12left = document.querySelector(".page12left");
    let ballu = page12left.querySelector(".ballu"); // Select the ballu within page12left
    
    page12left.addEventListener("mousemove", function(dets) {
        // Get bounding rectangle of page12left
        let rect = page12left.getBoundingClientRect();
        
        // Calculate mouse position relative to page12left
        let mouseX = dets.clientX - rect.left;
        let mouseY = dets.clientY - rect.top;
        
        gsap.to(ballu, {
            opacity: 1,
            scale: 1,
            duration:0.4,
            x: mouseX - ballu.offsetWidth / 2, // Center the ballu
            y: mouseY - ballu.offsetHeight / 2 // Center the ballu
        });
    });

    page12left.addEventListener("mouseleave",function(){
    gsap.to(".ballu",{
        opacity:0,
        scale:0,
        duration:0.4
    })
})