$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if(window.scrollY>60){
            document.querySelector('#scroll-top').classList.add('active');
        }else{
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function(){
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if(top>offset && top<offset+height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop : $($(this).attr('href')).offset().top,
        },500, 'linear')
    })
});

document.addEventListener('visibilitychange',
function(){
    if(document.visibilityState === "visible"){
        document.title = "Gouri Belludi | Full Stack Developer";
        $("#favicon").attr("href","assests/images/favicon.png");
    }
    else {
        document.title = "Come Back To Portfolio";
        
    }
});


// <!-- typed js effect starts -->
    var typed = new Typed(".typing-text", {
        strings: ["Full Stack Developer", "Java Developer", "React Developer"],
        loop: true,
        typeSpeed: 50,
		backSpeed: 25,
		backDelay: 500,
      });
// <!-- typed js effect ends -->

// <!-- tilt js effect starts -->
      VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
      });
// <!-- tilt js effect ends -->


// disable developer mode
document.onkeydown = function(e) {
  if(e.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}


async function fetchData(type = "skills") {
    let response
    type === "skills" ?
        response = await fetch("skills.json")
        :
        response = await fetch("./projects/projects.json")
    const data = await response.json();
    return data;
}

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src="${skill.icon}" alt="" />
                <span>${skill.name}</span>
              </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}

fetchData().then(data => {
    showSkills(data);
});

const certificateCarousel = document.querySelector(".certificate-carousel");
if (certificateCarousel) {
    const track = certificateCarousel.querySelector(".certificate-track");
    const slides = Array.from(certificateCarousel.querySelectorAll(".certificate-slide"));
    const dots = Array.from(certificateCarousel.querySelectorAll(".certificate-dots button"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let activeSlide = 0;
    let autoplayTimer;
    let isHovered = false;
    let isFocused = false;

    function showCertificate(index) {
        activeSlide = (index + slides.length) % slides.length;
        track.style.transform = `translateX(-${activeSlide * 100}%)`;
        slides.forEach((slide, slideIndex) => {
            const isActive = slideIndex === activeSlide;
            slide.setAttribute("aria-hidden", String(!isActive));
            slide.inert = !isActive;
            dots[slideIndex].setAttribute("aria-current", String(isActive));
        });
    }

    function stopAutoplay() {
        window.clearInterval(autoplayTimer);
        autoplayTimer = undefined;
    }

    function startAutoplay() {
        stopAutoplay();
        if (!reducedMotion.matches && !document.hidden && !isHovered && !isFocused) {
            autoplayTimer = window.setInterval(() => {
                showCertificate(activeSlide + 1);
            }, 5000);
        }
    }

    certificateCarousel.querySelector(".certificate-previous").addEventListener("click", () => {
        showCertificate(activeSlide - 1);
        startAutoplay();
    });
    certificateCarousel.querySelector(".certificate-next").addEventListener("click", () => {
        showCertificate(activeSlide + 1);
        startAutoplay();
    });
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            showCertificate(index);
            startAutoplay();
        });
    });
    certificateCarousel.addEventListener("pointerenter", () => {
        isHovered = true;
        stopAutoplay();
    });
    certificateCarousel.addEventListener("pointerleave", () => {
        isHovered = false;
        startAutoplay();
    });
    certificateCarousel.addEventListener("focusin", () => {
        isFocused = true;
        stopAutoplay();
    });
    certificateCarousel.addEventListener("focusout", event => {
        if (!certificateCarousel.contains(event.relatedTarget)) {
            isFocused = false;
            startAutoplay();
        }
    });
    document.addEventListener("visibilitychange", startAutoplay);
    reducedMotion.addEventListener("change", startAutoplay);

    showCertificate(0);
    startAutoplay();
}

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3',{delay: 200}); 
srtop.reveal('.home .content p',{delay: 200}); 
srtop.reveal('.home .content .btn',{delay: 200}); 

srtop.reveal('.home .image',{delay: 400}); 
srtop.reveal('.home .linkedin',{interval: 600}); 
srtop.reveal('.home .github',{interval: 800}); 
srtop.reveal('.home .twitter',{interval: 1000});
srtop.reveal('.home .telegram',{interval: 600}); 
srtop.reveal('.home .instagram',{interval: 600}); 
srtop.reveal('.home .dev',{interval: 600}); 



/* SCROLL ABOUT */
srtop.reveal('.about .content h3',{delay: 300});
srtop.reveal('.about .content .tag',{delay: 400}); 
srtop.reveal('.about .content p',{delay: 300}); 
srtop.reveal('.about .content .box-container',{delay: 300}); 
srtop.reveal('.about .content .resumebtn',{delay: 300}); 


/* SCROLL SKILLS */
srtop.reveal('.skills .container',{interval: 200}); 
srtop.reveal('.skills .container .bar',{delay: 400}); 

srtop.reveal('.certificate-carousel',{delay: 200});
srtop.reveal('.additional-awards p',{interval: 200});

/* SCROLL EDUCATION */
srtop.reveal('.education .box',{interval: 200}); 

/* SCROLL PROJECTS */
srtop.reveal('.work .box',{interval: 200}); 

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline',{delay: 400});
srtop.reveal('.experience .timeline .container',{interval: 400}); 

/* SCROLL CONTACT */
srtop.reveal('.contact .container',{delay: 400});
srtop.reveal('.contact .container .form-group',{delay: 400});
