// const openModalBtn = document.getElementById('openModalBtn');
// const closeModalBtn = document.getElementById('closeModalBtn');
// const modal = document.getElementById('modal');

// openModalBtn.addEventListener('click', () => {
//   modal.style.display = 'flex';
//   modal.style.opacity = '1';
// });

// closeModalBtn.addEventListener('click', () => {
//   modal.style.display = 'none';
//   modal.style.opacity = '0';
// });

// modal.addEventListener('click', (e) => {
//   if (e.target === modal) {
//     modal.style.display = 'none';
//     modal.style.opacity = '0';
//   }
// });

// document.querySelectorAll('.modal-content a').forEach(link => {
//   link.addEventListener('click', (event) => {
//     event.preventDefault();
//     const projectURL = link.getAttribute('data-link');
//     window.location.href = projectURL;
//   });
// });


// // Get elements
// const openModalBtn = document.getElementById('openModalBtn');
// const closeModalBtn = document.getElementById('closeModalBtn');
// const modal = document.getElementById('modal');
// const iframe = document.getElementById('websiteIframe');

// // Open Modal
// openModalBtn.addEventListener('click', () => {
//   modal.style.display = 'flex';
//   modal.style.opacity = '1';
// });

// // Close Modal
// closeModalBtn.addEventListener('click', () => {
//   modal.style.display = 'none';
//   modal.style.opacity = '0';
// });

// // Close Modal when clicking outside the modal content
// modal.addEventListener('click', (e) => {
//   if (e.target === modal) {
//     modal.style.display = 'none';
//     modal.style.opacity = '0';
//   }
// });

// // Handle link clicks in the modal
// document.querySelectorAll('.modal-content a').forEach(link => {
//   link.addEventListener('click', (event) => {
//     event.preventDefault();
//     const projectURL = link.getAttribute('data-url');
//     iframe.src = projectURL;  // Change iframe content based on the link clicked
//     modal.style.display = 'none';  // Close modal after selecting a website
//   });
// });

const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('modal');
const iframe = document.getElementById('websiteIframe');


openModalBtn.addEventListener('click', () => {
  if (modal.style.display === 'flex') {
    modal.style.display = 'none';
    modal.style.opacity = '0';
  } else {
    modal.style.display = 'flex';
    modal.style.opacity = '1';
  }
});


closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  modal.style.opacity = '0';
});


modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    modal.style.opacity = '0';
  }
});
document.querySelectorAll('.modal-content a').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const projectURL = link.getAttribute('data-url');
    iframe.src = projectURL;  
    modal.style.display = 'none';  
  });
});
