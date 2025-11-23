function cardBtnOne(imageSrc, titleText) {
  // Prevent multiple popups
  if (document.querySelector('.popup-main-div')) return;

  const popUpMainDiv = document.createElement('div');
  popUpMainDiv.classList.add(
    'popup-main-div',
    'fixed',
    'inset-0',
    'z-50',
    'flex',
    'justify-center',
    'items-center',
    'bg-black/50',
    'bg-opacity-60',
    'overflow-auto'
  );

  // Insert popup content
  popUpMainDiv.innerHTML = `
    <div class="relative bg-white rounded-lg shadow-lg w-full max-w-5xl p-6 mx-4">
      <!-- Close button -->
      <button type="button" 
        class="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-3xl font-bold popup-close">
        &times;
      </button>

      <!-- Case study content -->
      <h3 class="text-2xl font-semibold text-gray-800 mb-4 text-center">${titleText}</h3>

      <!-- Scrollable image container -->
      <div class="image-container overflow-auto rounded-lg border border-gray-200 relative flex justify-center items-start"
           style="max-height: 80vh;">
        <img src="${imageSrc}" 
             alt="${titleText}" 
             class="popup-image w-[1800px] h-auto object-contain transition-transform duration-300 ease-in-out transform scale-100" />
      </div>
    </div>
  `;

  // Append popup to body
  document.body.appendChild(popUpMainDiv);

  // === Close button functionality ===
  const closeBtn = popUpMainDiv.querySelector('.popup-close');
  closeBtn.addEventListener('click', () => {
    popUpMainDiv.remove();
  });

  // === ESC key closes popup ===
  document.addEventListener('keydown', function handler(event) {
    if (event.key === 'Escape') {
      popUpMainDiv.remove();
      document.removeEventListener('keydown', handler);
    }
  });
}


function cardBtnTwo(imageSrc, titleText) {
  // Prevent multiple popups
  if (document.querySelector('.popup-main-div')) return;

  const popUpMainDiv = document.createElement('div');
  popUpMainDiv.classList.add(
    'popup-main-div',
    'fixed',
    'inset-0',
    'z-50',
    'flex',
    'justify-center',
    'items-center',
    'bg-black/50',
    'bg-opacity-60',
    'overflow-auto'
  );

  // Insert popup content
  popUpMainDiv.innerHTML = `
    <div class="relative bg-white rounded-lg shadow-lg w-full max-w-5xl p-6 mx-4">
      <!-- Close button -->
      <button type="button" 
        class="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-3xl font-bold popup-close">
        &times;
      </button>

      <!-- Case study content -->
      <h3 class="text-2xl font-semibold text-gray-800 mb-4 text-center">${titleText}</h3>

      <!-- Scrollable image container -->
      <div class="image-container overflow-auto rounded-lg border border-gray-200 relative flex justify-center items-start"
           style="max-height: 80vh;">
        <img src="${imageSrc}" 
             alt="${titleText}" 
             class="popup-image w-[1800px] h-auto object-contain transition-transform duration-300 ease-in-out transform scale-100" />
      </div>
    </div>
  `;

  // Append popup to body
  document.body.appendChild(popUpMainDiv);

  // === Close button functionality ===
  const closeBtn = popUpMainDiv.querySelector('.popup-close');
  closeBtn.addEventListener('click', () => {
    popUpMainDiv.remove();
  });

  // === ESC key closes popup ===
  document.addEventListener('keydown', function handler(event) {
    if (event.key === 'Escape') {
      popUpMainDiv.remove();
      document.removeEventListener('keydown', handler);
    }
  });
}

function cardBtnThree(imageSrc, titleText) {
   // Prevent multiple popups
  if (document.querySelector('.popup-main-div')) return;

  const popUpMainDiv = document.createElement('div');
  popUpMainDiv.classList.add(
    'popup-main-div',
    'fixed',
    'inset-0',
    'z-50',
    'flex',
    'justify-center',
    'items-center',
    'bg-black/50',
    'bg-opacity-60',
    'overflow-auto'
  );

  // Insert popup content
  popUpMainDiv.innerHTML = `
    <div class="relative bg-white rounded-lg shadow-lg w-full max-w-5xl p-6 mx-4">
      <!-- Close button -->
      <button type="button" 
        class="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-3xl font-bold popup-close">
        &times;
      </button>

      <!-- Case study content -->
      <h3 class="text-2xl font-semibold text-gray-800 mb-4 text-center">${titleText}</h3>

      <!-- Scrollable image container -->
      <div class="image-container overflow-auto rounded-lg border border-gray-200 relative flex justify-center items-start"
           style="max-height: 80vh;">
        <img src="${imageSrc}" 
             alt="${titleText}" 
             class="popup-image w-[1800px] h-auto object-contain transition-transform duration-300 ease-in-out transform scale-100" />
      </div>
    </div>
  `;

  // Append popup to body
  document.body.appendChild(popUpMainDiv);

  // === Close button functionality ===
  const closeBtn = popUpMainDiv.querySelector('.popup-close');
  closeBtn.addEventListener('click', () => {
    popUpMainDiv.remove();
  });

  // === ESC key closes popup ===
  document.addEventListener('keydown', function handler(event) {
    if (event.key === 'Escape') {
      popUpMainDiv.remove();
      document.removeEventListener('keydown', handler);
    }
  });
}

function cardBtnFour(imageSrc, titleText) {
   // Prevent multiple popups
  if (document.querySelector('.popup-main-div')) return;

  const popUpMainDiv = document.createElement('div');
  popUpMainDiv.classList.add(
    'popup-main-div',
    'fixed',
    'inset-0',
    'z-50',
    'flex',
    'justify-center',
    'items-center',
    'bg-black/50',
    'bg-opacity-60',
    'overflow-auto'
  );

  // Insert popup content
  popUpMainDiv.innerHTML = `
    <div class="relative bg-white rounded-lg shadow-lg w-full max-w-5xl p-6 mx-4">
      <!-- Close button -->
      <button type="button" 
        class="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-3xl font-bold popup-close">
        &times;
      </button>

      <!-- Case study content -->
      <h3 class="text-2xl font-semibold text-gray-800 mb-4 text-center">${titleText}</h3>

      <!-- Scrollable image container -->
      <div class="image-container overflow-auto rounded-lg border border-gray-200 relative flex justify-center items-start"
           style="max-height: 80vh;">
        <img src="${imageSrc}" 
             alt="${titleText}" 
             class="popup-image w-[1800px] h-auto object-contain transition-transform duration-300 ease-in-out transform scale-100" />
      </div>
    </div>
  `;

  // Append popup to body
  document.body.appendChild(popUpMainDiv);

  // === Close button functionality ===
  const closeBtn = popUpMainDiv.querySelector('.popup-close');
  closeBtn.addEventListener('click', () => {
    popUpMainDiv.remove();
  });

  // === ESC key closes popup ===
  document.addEventListener('keydown', function handler(event) {
    if (event.key === 'Escape') {
      popUpMainDiv.remove();
      document.removeEventListener('keydown', handler);
    }
  });
}

function cardBtnFive(imageSrc, titleText) {
  // Prevent multiple popups
  if (document.querySelector('.popup-main-div')) return;

  const popUpMainDiv = document.createElement('div');
  popUpMainDiv.classList.add(
    'popup-main-div',
    'fixed',
    'inset-0',
    'z-50',
    'flex',
    'justify-center',
    'items-center',
    'bg-black/50',
    'bg-opacity-60',
    'overflow-auto'
  );

  // Insert popup content
  popUpMainDiv.innerHTML = `
    <div class="relative bg-white rounded-lg shadow-lg w-full max-w-5xl p-6 mx-4">
      <!-- Close button -->
      <button type="button" 
        class="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-3xl font-bold popup-close">
        &times;
      </button>

      <!-- Case study content -->
      <h3 class="text-2xl font-semibold text-gray-800 mb-4 text-center">${titleText}</h3>

      <!-- Scrollable image container -->
      <div class="image-container overflow-auto rounded-lg border border-gray-200 relative flex justify-center items-start"
           style="max-height: 80vh;">
        <img src="${imageSrc}" 
             alt="${titleText}" 
             class="popup-image w-[1800px] h-auto object-contain transition-transform duration-300 ease-in-out transform scale-100" />
      </div>
    </div>
  `;

  // Append popup to body
  document.body.appendChild(popUpMainDiv);

  // === Close button functionality ===
  const closeBtn = popUpMainDiv.querySelector('.popup-close');
  closeBtn.addEventListener('click', () => {
    popUpMainDiv.remove();
  });

  // === ESC key closes popup ===
  document.addEventListener('keydown', function handler(event) {
    if (event.key === 'Escape') {
      popUpMainDiv.remove();
      document.removeEventListener('keydown', handler);
    }
  });
}

function cardBtnSix(imageSrc, titleText) {
  // Prevent multiple popups
  if (document.querySelector('.popup-main-div')) return;

  const popUpMainDiv = document.createElement('div');
  popUpMainDiv.classList.add(
    'popup-main-div',
    'fixed',
    'inset-0',
    'z-50',
    'flex',
    'justify-center',
    'items-center',
    'bg-black/50',
    'bg-opacity-60',
    'overflow-auto'
  );

  // Insert popup content
  popUpMainDiv.innerHTML = `
    <div class="relative bg-white rounded-lg shadow-lg w-full max-w-5xl p-6 mx-4">
      <!-- Close button -->
      <button type="button" 
        class="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-3xl font-bold popup-close">
        &times;
      </button>

      <!-- Case study content -->
      <h3 class="text-2xl font-semibold text-gray-800 mb-4 text-center">${titleText}</h3>

      <!-- Scrollable image container -->
      <div class="image-container overflow-auto rounded-lg border border-gray-200 relative flex justify-center items-start"
           style="max-height: 80vh;">
        <img src="${imageSrc}" 
             alt="${titleText}" 
             class="popup-image w-[1800px] h-auto object-contain transition-transform duration-300 ease-in-out transform scale-100" />
      </div>
    </div>
  `;

  // Append popup to body
  document.body.appendChild(popUpMainDiv);

  // === Close button functionality ===
  const closeBtn = popUpMainDiv.querySelector('.popup-close');
  closeBtn.addEventListener('click', () => {
    popUpMainDiv.remove();
  });

  // === ESC key closes popup ===
  document.addEventListener('keydown', function handler(event) {
    if (event.key === 'Escape') {
      popUpMainDiv.remove();
      document.removeEventListener('keydown', handler);
    }
  });
}


// // Modal functionality for Contact Page on portfolio to view more 
//     // Get elements
//     const viewMoreBtn = document.getElementById('viewMoreBtn');
//     const modal = document.getElementById('modal');
//     const modalOverlay = document.getElementById('modalOverlay');
//     const closeModal = document.getElementById('closeModal');

//     // Open modal
//     viewMoreBtn.addEventListener('click', () => {
//         modal.classList.remove('hidden');
//         modalOverlay.classList.remove('hidden');
//         document.body.style.overflow = 'hidden'; // Prevent background scrolling
//     });

//     // Close modal
//     closeModal.addEventListener('click', () => {
//         modal.classList.add('hidden');
//         modalOverlay.classList.add('hidden');
//         document.body.style.overflow = 'auto'; // Restore scrolling
//     });

//     // Close modal when clicking overlay
//     modalOverlay.addEventListener('click', () => {
//         modal.classList.add('hidden');
//         modalOverlay.classList.add('hidden');
//         document.body.style.overflow = 'auto';
//     });

//     // Close modal on Escape key
//     document.addEventListener('keydown', (e) => {
//         if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//             modal.classList.add('hidden');
//             modalOverlay.classList.add('hidden');
//             document.body.style.overflow = 'auto';
//         }
//     });



 const modalBtns = document.querySelectorAll('.open-modal-btn');
    const modal = document.getElementById('modal');
    const modalOverlay = document.getElementById('modalOverlay');
    const closeModal = document.getElementById('closeModal');

    // Open modal function
    function openModal() {
        modal.classList.remove('hidden');
        modalOverlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    // Close modal function
    function closeModalFunc() {
        modal.classList.add('hidden');
        modalOverlay.classList.add('hidden');
        document.body.style.overflow = 'auto'; // Restore scrolling
    }

    // Add click event to all buttons with 'open-modal-btn' class
    modalBtns.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    // Close modal
    closeModal.addEventListener('click', closeModalFunc);

    // Close modal when clicking overlay
    modalOverlay.addEventListener('click', closeModalFunc);

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModalFunc();
        }
    });