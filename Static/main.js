var typed= new Typed(".text", {
    strings:["Software Engineer", "Backend programmer", "Frontend programmer", "Fullstack developer"],
    typeSpeed:40,
    backSpeed:60,
    backDelay:2500,
    loop:true
})



function restartProgressAnimations(container) {
    const animatedElements = container.querySelectorAll(
        '.progress-line, .progress-line span, .info span, .progress-bar, .path'
    );

    animatedElements.forEach(el => {
        const cloned = el.cloneNode(true);
        el.parentNode.replaceChild(cloned, el);
    });
}


function restartAnimationGroup(container, selector = '.animate-about') {
    const animatedEls = container.querySelectorAll(selector);

    animatedEls.forEach(el => {
        const cloned = el.cloneNode(true);
        el.parentNode.replaceChild(cloned, el);
    });
}


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            restartProgressAnimations(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.animate-skill-bars').forEach(el => observer.observe(el));

// Observe the About Me section
const aboutSection = document.getElementById('about');

if (aboutSection) {
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                restartAnimationGroup(entry.target);
            }
        });
    }, { threshold: 0.5 });

    aboutObserver.observe(aboutSection);
}


window.addEventListener('hashchange', () => {
    const sectionId = location.hash.slice(1);
    const section = document.getElementById(sectionId);
    if (!section) return;

   
    const skillBars = section.querySelector('.animate-skill-bars');
    if (skillBars) {
        restartProgressAnimations(skillBars);
    }

    
    if (sectionId === 'about') {
        restartAnimationGroup(section);
    }
});




function restartPortfolioAnimations(container) {
    const imgs = container.querySelectorAll('.full-widthimg');
    imgs.forEach(img => {
        const cloned = img.cloneNode(true);
        img.parentNode.replaceChild(cloned, img);
    });
}

const portfolioSection = document.querySelector('.animate-portfolio');

if (portfolioSection) {
    const portfolioObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            restartPortfolioAnimations(entry.target);
        }
        });
    }, { threshold: 0.5 });

    portfolioObserver.observe(portfolioSection);
}

window.addEventListener('hashchange', () => {
    const sectionId = location.hash.slice(1);
    const section = document.getElementById(sectionId);
    if (!section) return;

    const portfolio = section.querySelector('.animate-portfolio');
    if (portfolio) {
        restartPortfolioAnimations(portfolio);
    }
});





let servicesObserver;


function restartServicesAnimations(container) {
    const animatedEls = container.querySelectorAll('div');

    animatedEls.forEach(el => {
        const cloned = el.cloneNode(true);
        el.parentNode.replaceChild(cloned, el);
    });


    container.style.animation = 'none';
    container.offsetHeight; 
    container.style.animation = '';
}


document.addEventListener("DOMContentLoaded", () => {
    const servicesSection = document.querySelector('.animate-services');

    if (servicesSection) {
        servicesObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    restartServicesAnimations(entry.target);
                }
            });
        }, { threshold: 0.5 });

        servicesObserver.observe(servicesSection);
    }
});


window.addEventListener('hashchange', () => {
    const sectionId = location.hash.slice(1);
    const section = document.getElementById(sectionId);
    if (!section) return;

    if (sectionId === 'services') {
        const services = section.querySelector('.animate-services');
        if (services) {
            restartServicesAnimations(services);
        }
    }
});
