
// Hero Section Js Start

const btn = document.getElementById("magic-btn");

btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Move range (-10px to +10px)
    const moveX = ((x - rect.width / 2) / rect.width) * 150;
    const moveY = ((y - rect.height / 2) / rect.height) * 150;

    btn.style.transform = `translate(${moveX}px, ${moveY}px) scale(0.85)`;
});

btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0, 0) scale(1)";
});



// Text us Btn

const textUs = document.getElementById('text-us')
textUs.addEventListener('click', () => {
    const textUsShow = document.getElementById('text-us-show')
    textUsShow.classList.remove('hidden')

})


const closePopUp = document.getElementById('closePopUp')
closePopUp.addEventListener('click', () => {
    const textUsShow = document.getElementById('text-us-show')
    textUsShow.classList.add('hidden')

})


// Hero Section End

// ************************************************************************************************






// **************************************************************************************************************



// Vision Js Start
const mission = document.getElementById('Mission');
const values = document.getElementById('Values');
const vision = document.getElementById('vision');
const visionImg = document.getElementById('vision-img');
const visionHeadingBg = document.getElementById('vision-heading-bg');
const visionRightHeading = document.getElementById('vision-right-heading');
const visionHeadingPara = document.getElementById('vision-right-para');

// ✅ By default, Vision is active
vision.classList.add('text-6xl', 'font-extrabold', 'text-[#0ebab1]', 'border-l-3', "border-[#0ebab1]");
vision.classList.remove('text-gray-500', 'text-xl');
visionImg.setAttribute('src', './assets/Visions-image.png');

// When Mission is clicked
mission.addEventListener('click', () => {
    // Make Vision normal again
    vision.classList.remove('text-6xl', 'font-extrabold', 'text-[#0ebab1]', 'border-l-3', "border-[#0ebab1]", 'pl-2');
    vision.classList.add('text-gray-500', 'text-xl');

    values.classList.add('text-gray-500', 'text-xl');
    values.classList.remove('text-6xl', 'font-extrabold', 'text-[#0ebab1]', 'border-l-3', "border-[#0ebab1]", 'pl-2');


    // Highlight Mission
    mission.classList.remove('text-gray-500', 'text-xl');
    mission.classList.add('text-6xl', 'font-extrabold', 'text-[#0ebab1]', 'border-l-3', "border-[#0ebab1]", 'pl-2');

    // Change image
    visionImg.setAttribute('src', './assets/Visions-image-1.png');

    // Change vision text
    visionHeadingBg.innerText = "MISSION"

    // Change vision right data
    visionRightHeading.innerText = 'Mission'
    visionHeadingPara.innerText = 'Our mission is to help businesses achieve their full potential online by providing cutting-edge digital marketing, design, and development services. We aim to turn ideas into impactful solutions that drive measurable results.'
});

// When Vision is clicked
vision.addEventListener('click', () => {
    // Make Mission normal again
    mission.classList.remove('text-6xl', 'font-extrabold', 'text-[#0ebab1]', 'border-l-3', "border-[#0ebab1]", 'pl-2');
    mission.classList.add('text-gray-500', 'text-xl');

    // Highlight Vision
    vision.classList.remove('text-gray-500', 'text-xl');
    vision.classList.add('text-6xl', 'font-extrabold', 'text-[#0ebab1]', 'border-l-3', "border-[#0ebab1]", 'pl-2');

    values.classList.add('text-gray-500', 'text-xl');
    values.classList.remove('text-6xl', 'font-extrabold', 'text-[#0ebab1]', 'border-l-3', "border-[#0ebab1]", 'pl-2');

    // Change image back
    visionImg.setAttribute('src', './assets/Visions-image.png');


    // Change vision text
    visionHeadingBg.innerText = "VISION"

    // Change vision right data
    visionRightHeading.innerText = 'Vision'
    visionHeadingPara.innerText = 'Our vision is to become a leading global digital solutions agency, known for creativity, reliability, and excellence. We strive to create experiences and products that make a meaningful difference for our clients and their customers.'
});


values.addEventListener('click', () => {
    // Make Vision normal again
    vision.classList.remove('text-6xl', 'font-extrabold', 'text-[#0ebab1]', 'border-l-3', "border-[#0ebab1]", 'pl-2');
    vision.classList.add('text-gray-500', 'text-xl');

    // Highlight Mission
    mission.classList.add('text-gray-500', 'text-xl');
    mission.classList.remove('text-6xl', 'font-extrabold', 'text-[#0ebab1]', 'border-l-3', "border-[#0ebab1]", 'pl-2');


    values.classList.remove('text-gray-500', 'text-xl');
    values.classList.add('text-6xl', 'font-extrabold', 'text-[#0ebab1]', 'border-l-3', "border-[#0ebab1]", 'pl-2');

    // Change image
    visionImg.setAttribute('src', './assets/Visions-image-2.png');

    // Change vision text
    visionHeadingBg.innerText = "Values"

    // Change vision right data
    visionRightHeading.innerText = 'Values'
    visionHeadingPara.innerText = 'At Bitzonic, we value innovation, transparency, and client success above all. We are committed to delivering high-quality digital solutions that empower businesses to grow and thrive in a competitive market'
});







// Vision slider on small screen
const slider = document.getElementById("sliderContainer");
const slides = slider.children;
let index = 0;

function autoScroll() {
    index++;

    // When reaching the last slide
    if (index >= slides.length) {
        index = slides.length - 1;

        // Scroll to last smoothly first
        slider.scrollTo({
            left: slides[index].offsetLeft,
            behavior: "smooth",
        });

        // After scroll ends, jump instantly to first
        setTimeout(() => {
            slider.scrollTo({
                left: 0,
                behavior: "instant", // no animation
            });
            index = 0;
        }, 1000); // delay matches scroll animation
    } else {
        // Normal scroll to next
        slider.scrollTo({
            left: slides[index].offsetLeft,
            behavior: "smooth",
        });
    }
}

let autoScrollInterval = setInterval(autoScroll, 3000);

// Pause on touch (optional)
slider.addEventListener("touchstart", () => clearInterval(autoScrollInterval));

// Vision Js End


// **********************************************************************************************************



// Service Js Start
// === DOM Elements === 
const serviceHeading = document.getElementById("service-heading");
const servicePara = document.getElementById("service-para");
const serviceImg = document.getElementById("service-img");
const prevImgBtn = document.getElementById("prev-img-btn");
const nextImgBtn = document.getElementById("next-img-btn");
const serviceSection = document.getElementById("service-section"); // add id="service-section" to parent container

// === Data Array ===
const servicesData = [
  {
    img: "./assets/service-2.png",
    heading: "Machine Learning & AI Solutions",
    para: "Every business needs a strong digital foundation to stay competitive. With Bitzonic’s advanced web development solutions, you can enhance visibility, improve efficiency, and create meaningful digital experiences for your customers.",
  },
  {
    img: "./assets/service-1.png",
    heading: "Software-as-a-Service Development",
    para: "We build secure, scalable, and user-friendly SaaS platforms that empower your business to grow and perform in the digital era. From concept to deployment, Bitzonic delivers SaaS solutions that drive efficiency and results.",
  },
  {
    img: "./assets/service-slider-3.png",
    heading: "Mobile Application Development",
    para: "We build fast, secure, and scalable mobile applications that empower your business to grow and perform in the digital era. From idea to launch, Bitzonic delivers mobile solutions that drive results.",
  },
  {
    img: "./assets/service-4.png",
    heading: "Graphic Designing",
    para: "We create visually striking designs that elevate your brand and leave a lasting impression. From concept to final design, Bitzonic delivers creative solutions that connect with your audience.",
  },
  {
    img: "./assets/service-5.png",
    heading: "UI / UX Design",
    para: "We design intuitive and engaging digital experiences that delight users and drive results. From concept to implementation, Bitzonic delivers UI/UX solutions that combine creativity, functionality, and user-centric design.",
  },
  {
    img: "./assets/service-slider-7.png",
    heading: "E-Commerce Solutions",
    para: "We build high-converting, secure, and scalable Shopify stores that help your business sell online effectively. From setup to launch, Bitzonic delivers eCommerce solutions that drive sales and enhance customer experience.",
  },
  {
    img: "./assets/service-slider-2.png",
    heading: "Digital Media Marketing",
    para: "We create data-driven, result-oriented digital marketing strategies that help your business grow and thrive online. From planning to execution, Bitzonic delivers digital solutions that increase visibility, engagement, and revenue.",
  },
  {
    img: "./assets/service-slider-1.png",
    heading: "Web Development",
    para: "We provide tailored business solutions that help companies grow, improve efficiency, and stay competitive in the digital era. From strategy to execution, we deliver results-driven services that transform your business.",
  },
];

// === State Management ===
let countSlider = 0;
let autoSlide;

// === Function to Update Content ===
function updateFunction(index) {
  const { img, heading, para } = servicesData[index];

  // Add fade animation
  serviceImg.classList.add("opacity-0", "transition-opacity", "duration-700");
  serviceHeading.classList.add("opacity-0", "transition-opacity", "duration-700");
  servicePara.classList.add("opacity-0", "transition-opacity", "duration-700");

  setTimeout(() => {
    serviceImg.setAttribute("src", img);
    serviceHeading.innerText = heading;
    servicePara.innerText = para;

    // Fade-in after content change
    serviceImg.classList.remove("opacity-0");
    serviceHeading.classList.remove("opacity-0");
    servicePara.classList.remove("opacity-0");
  }, 200);
}

// === Initialize Default Content ===
updateFunction(countSlider);

// === Manual Controls ===
prevImgBtn.addEventListener("click", () => {
  countSlider = (countSlider - 1 + servicesData.length) % servicesData.length;
  updateFunction(countSlider);
});

nextImgBtn.addEventListener("click", () => {
  countSlider = (countSlider + 1) % servicesData.length;
  updateFunction(countSlider);
});

// === Auto Scroll (every 4 seconds) ===
function startAutoSlide() {
  autoSlide = setInterval(() => {
    countSlider = (countSlider + 1) % servicesData.length;
    updateFunction(countSlider);
  }, 4000);
}

function stopAutoSlide() {
  clearInterval(autoSlide);
}

// Start auto sliding
startAutoSlide();

// Pause auto-scroll on hover
if (serviceSection) {
  serviceSection.addEventListener("mouseenter", stopAutoSlide);
  serviceSection.addEventListener("mouseleave", startAutoSlide);
}


// Service Js End

// ****************************************************************************************************8


// Journey Section Js Start


function animateCount(id, target, duration) {
    const element = document.getElementById(id);
    let current = 0;
    const startTime = performance.now();

    function update(time) {
        const progress = Math.min((time - startTime) / duration, 1);

        // Random increment for natural effect
        current += Math.random() * 20;

        // Smoothly stop at the exact target
        if (current >= target * progress) {
            element.textContent = Math.floor(target * progress) + "+";
        }

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = target + "+"; // final value
        }
    }

    requestAnimationFrame(update);
}

// Run animation when page loads
window.addEventListener("load", () => {
    animateCount("projects", 500, 2000); // (id, target, duration in ms)
    animateCount("team", 100, 2000);
    animateCount("clients", 100, 2000);
});

// Journey Section Js End

// *********************************************************************************************************************

/// Product Section Variables
const stepsContainer = document.getElementById('steps-container');
const steps = document.querySelectorAll('.step');
const images = document.querySelectorAll('.step-image');
const line = document.getElementById('line-progress');
const TOTAL_STEPS = steps.length;

let currentActiveIndex = 0;

/**
 * Updates the visual state of steps and images.
 * @param {number} newIndex - The index of the step that should now be active.
 */
function updateVisualState(newIndex) {
    // Only update if the active index has truly changed
    if (newIndex === currentActiveIndex) {
        updateProgressLine();
        return;
    }

    console.log("Changing active index from", currentActiveIndex, "to", newIndex); // Debug log

    currentActiveIndex = newIndex;

    // --- 1. Update Step Highlighting (Left Column) ---
    steps.forEach((step, i) => {
        const isActive = (i === newIndex);

        step.classList.toggle('opacity-100', isActive);
        step.classList.toggle('opacity-70', !isActive);

        // Apply activation/deactivation visual effect
        step.style.transform = isActive ? "translateX(10px)" : "translateX(0)";

        // Set all active steps text color white including last step
        step.style.color = isActive ? "white" : "";
    });

    // --- 2. Update Image Display (Right Column) ---
    images.forEach((img, i) => {
        const isActive = (i === newIndex);

        img.style.opacity = isActive ? "1" : "0";
        img.style.transform = isActive ? "scale(1)" : "scale(1.05)";
        img.style.zIndex = isActive ? "5" : "0";

        img.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    });

    // --- 3. Update Progress Line ---
    updateProgressLine();
}

/**
 * Updates the height of the vertical progress line.
 */
function updateProgressLine() {
    if (!stepsContainer || !line) return;
    
    const scrollTop = stepsContainer.scrollTop;
    const totalHeight = stepsContainer.scrollHeight - stepsContainer.clientHeight;
    
    const progress = totalHeight > 0 ? (scrollTop / totalHeight) * 100 : 0;
    
    line.style.height = `${progress}%`;
    line.style.transition = "height 0.3s ease-out";
}

/**
 * Determines the currently active step index based on scroll position.
 * The active step is the one whose top edge has most recently crossed the
 * vertical center of the scroll container.
 */
function getActiveStepIndex() {
    if (!stepsContainer) return 0;

    let finalActiveIndex = 0;
    const containerRect = stepsContainer.getBoundingClientRect();
    const centerPoint = containerRect.height / 2;

    // --- Core Logic: Find the last step whose top is above the center line (Works for both directions) ---
    for (let i = 0; i < TOTAL_STEPS; i++) {
        const step = steps[i];
        const stepRect = step.getBoundingClientRect();

        // Calculate the step's top position relative to the scroll container's top
        const stepTopRelative = stepRect.top - containerRect.top;

        if (stepTopRelative <= centerPoint) {
            finalActiveIndex = i;
        } else {
            // Once a step's top is below the center, the previously set index is the correct one.
            break;
        }
    }

    // --- Edge Case 1: Handle the "Create" (Index 0) step at the very top ---
    const scrollTop = stepsContainer.scrollTop;
    if (scrollTop < 5) { // If scroll is near the top
        finalActiveIndex = 0;
    }

    // --- Edge Case 2: Handle the "Launch" (Last Step) activation ---
    const maxScroll = stepsContainer.scrollHeight - stepsContainer.clientHeight;

    // Activate the last step when scrolled to 80% of total height (similar to mobile)
    if (maxScroll > 0 && scrollTop >= maxScroll * 0.8) {
        finalActiveIndex = TOTAL_STEPS - 1;
    }

    return finalActiveIndex;
}


// --- Main Scroll Handler ---

let isScrolling = false;
function handleScroll() {
    if (!isScrolling) {
        isScrolling = true;
        window.requestAnimationFrame(() => {
            const newIndex = getActiveStepIndex();
            console.log("handleScroll - New active index:", newIndex); // Debug log
            updateVisualState(newIndex);
            isScrolling = false;
        });
    }
}

if (stepsContainer) {
    // Listen for scroll events on the steps container
    stepsContainer.addEventListener('scroll', handleScroll, { passive: true });
}


// --- Initialisation ---

document.addEventListener('DOMContentLoaded', function() {


//***********************************************************************************************************



// Technologies Js Start

const sections = {
    mobile: document.getElementById('AndroidIOS'),
    web: document.getElementById('WebTechnoloies'),
    cross: document.getElementById('CrossTechnoloies'),
    database: document.getElementById('Database'),
    cloud: document.getElementById('Cloud')
};

const tabs = {
    mobile: document.getElementById('mobile'),
    web: document.getElementById('web'),
    cross: document.getElementById('cross'),
    database: document.getElementById('database'),
    cloud: document.getElementById('cloud')
};

const gradient = "linear-gradient(90deg, rgba(14,186,177,0.21), rgba(14,186,177,0))";


// 🔹 Reset all tabs & sections
function resetAll() {
    Object.values(tabs).forEach(tab => {
        tab.style.background = "";
        tab.classList.remove("font-semibold");
        tab.classList.add("font-normal");
    });

    Object.values(sections).forEach(section => {
        section.classList.add("hidden");
        section.classList.remove("block");
    });
}

// 🔹 Activate the selected tab
function activateTab(tabKey) {
    resetAll();
    const tab = tabs[tabKey];
    const section = sections[tabKey];

    // Highlight active tab
    tab.style.background = gradient;
    tab.classList.add("py-6", "px-4", "rounded-full", "font-bold");
    tab.classList.remove("font-normal");

    // Show related section
    section.classList.remove("hidden");
    section.classList.add("block");
}

// 🔹 Event listeners
tabs.mobile.addEventListener("click", () => activateTab("mobile"));
tabs.web.addEventListener("click", () => activateTab("web"));
tabs.cross.addEventListener("click", () => activateTab("cross"));
tabs.database.addEventListener("click", () => activateTab("database"));
tabs.cloud.addEventListener("click", () => activateTab("cloud"));

// ✅ Default active tab
activateTab("mobile");


// Technologies Js End



document.addEventListener('DOMContentLoaded', () => {
    const openButton = document.getElementById('openContactForm');
    const closeButton = document.getElementById('closeContactForm');
    const overlay = document.getElementById('contactFormOverlay');
    const panel = document.getElementById('contactFormPanel');
    const content = document.getElementById('contactFormContent');

    function openForm() {
        panel.classList.remove('hidden');
        setTimeout(() => {
            content.classList.add('translate-x-0');
            content.classList.remove('translate-x-full');
        }, 50); // Small delay for the transition to work
    }

    function closeForm() {
        content.classList.add('translate-x-full');
        content.classList.remove('translate-x-0');
        setTimeout(() => {
            panel.classList.add('hidden');
        }, 300); // Wait for the transition to finish
    }

    openButton.addEventListener('click', openForm);
    closeButton.addEventListener('click', closeForm);
    overlay.addEventListener('click', closeForm); // Close when clicking outside
});








// ---------------------
// ENHANCED MOBILE/TABLET SCROLL INTERACTION
// ---------------------

const stepsContainerMobile = document.getElementById("steps-container-mobile");
const stepsMobile = stepsContainerMobile ? stepsContainerMobile.querySelectorAll(".step") : [];
const lineProgressMobile = document.getElementById("line-progress-mobile");
const scrollIndicator = document.getElementById("scroll-indicator");
let lastActiveIndexMobile = 0;

// Gradient shades of #0ebab2 (teal) from lighter to darker
const stepColors = [
    { bg: 'bg-[#6fd9d4]', text: 'text-[#6fd9d4]', shadow: 'shadow-[#6fd9d4]/50' },  // Lighter
    { bg: 'bg-[#3fccc5]', text: 'text-[#3fccc5]', shadow: 'shadow-[#3fccc5]/50' },  // Light
    { bg: 'bg-[#0ebab2]', text: 'text-[#0ebab2]', shadow: 'shadow-[#0ebab2]/50' },  // Base
    { bg: 'bg-[#0ba39c]', text: 'text-[#0ba39c]', shadow: 'shadow-[#0ba39c]/50' },  // Dark
    { bg: 'bg-[#088c86]', text: 'text-[#088c86]', shadow: 'shadow-[#088c86]/50' }   // Darker
];

function updateActiveStepAndImageMobile() {
    if (!stepsContainerMobile || !stepsMobile.length) return;

    const scrollTop = stepsContainerMobile.scrollTop;
    const totalHeight = stepsContainerMobile.scrollHeight - stepsContainerMobile.clientHeight;
    const stepHeight = totalHeight / stepsMobile.length;

    // Hide scroll indicator after first scroll
    if (scrollTop > 50 && scrollIndicator) {
        scrollIndicator.style.opacity = '0';
        setTimeout(() => {
            scrollIndicator.style.display = 'none';
        }, 500);
    }

    let activeIndex = Math.floor(scrollTop / stepHeight);

    // Boundary checks
    if (activeIndex >= stepsMobile.length) {
        activeIndex = stepsMobile.length - 1;
    }

    // Special handling: Create stays active until 10% scrolled
    if (activeIndex === 1 && scrollTop < stepHeight * 0.1) {
        activeIndex = 0;
    }

    // For the last step, make it active earlier (at 80% scroll)
    if (scrollTop >= totalHeight * 0.8) {
        activeIndex = stepsMobile.length - 1;
    }

    if (activeIndex !== lastActiveIndexMobile) {
        // Update progress line
        if (lineProgressMobile) {
            lineProgressMobile.style.height = `${(scrollTop / totalHeight) * 100}%`;
        }

        // Update step styles with enhanced animations
        stepsMobile.forEach((step, i) => {
            const h2 = step.querySelector("h2");
            const circle = step.querySelector("div[class*='rounded-full']");
            const stepLabel = step.querySelector("div[class*='tracking-wider']");
            
            if (i === activeIndex) {
                // Active step
                step.style.opacity = "1";
                step.style.transform = "translateX(10px)";
                h2.classList.remove("text-gray-400");
                h2.classList.add("text-white");
                
                // Update circle with teal gradient color
                if (circle) {
                    circle.className = `absolute left-[11px] sm:left-[19px] md:left-[27px] top-16 sm:top-20 md:top-24 w-6 h-6 ${stepColors[i].bg} rounded-full border-4 border-gray-900 shadow-lg ${stepColors[i].shadow} z-10 transition-all duration-300`;
                }
                
                // Update step label with teal gradient color
                if (stepLabel) {
                    stepLabel.className = `${stepColors[i].text} text-xs sm:text-sm font-semibold mb-2 tracking-wider`;
                }
                
                // Update paragraph
                const p = step.querySelector("p");
                if (p) {
                    p.classList.remove("text-gray-400");
                    p.classList.add("text-gray-300");
                }
            } else {
                // Inactive steps
                step.style.opacity = "0.6";
                step.style.transform = "translateX(0)";
                h2.classList.add("text-gray-400");
                h2.classList.remove("text-white");
                
                // Reset circle
                if (circle) {
                    circle.className = "absolute left-[11px] sm:left-[19px] md:left-[27px] top-16 sm:top-20 md:top-24 w-6 h-6 bg-white/20 rounded-full border-4 border-gray-900 z-10 transition-all duration-300";
                }
                
                // Reset step label
                if (stepLabel) {
                    stepLabel.className = "text-white/50 text-xs sm:text-sm font-semibold mb-2 tracking-wider";
                }
                
                // Reset paragraph
                const p = step.querySelector("p");
                if (p) {
                    p.classList.add("text-gray-400");
                    p.classList.remove("text-gray-300");
                }
            }
        });

        lastActiveIndexMobile = activeIndex;
    }
}

// Initialize mobile scroll listener
if (stepsContainerMobile) {
    stepsContainerMobile.addEventListener('scroll', updateActiveStepAndImageMobile);
    // Initial call to set the first step active
    updateActiveStepAndImageMobile();
}

// Smooth scroll to step on tap (optional enhancement)
stepsMobile.forEach((step, index) => {
    step.addEventListener('click', () => {
        const stepHeight = (stepsContainerMobile.scrollHeight - stepsContainerMobile.clientHeight) / stepsMobile.length;
        stepsContainerMobile.scrollTo({
            top: stepHeight * index,
            behavior: 'smooth'
        });
    });
});
});