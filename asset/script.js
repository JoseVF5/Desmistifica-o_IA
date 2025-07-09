document.addEventListener('DOMContentLoaded', () => {


    const portfolioItems = document.querySelectorAll('.accordion-item');
    const modal = document.getElementById('portfolio-modal');
    const closeModalBtn = document.querySelector('.modal-close-btn');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalTags = document.getElementById('modal-tags');
    const modalDescription = document.getElementById('modal-description');
    const modalLink = document.getElementById('modal-link');

    portfolioItems.forEach(item => {
        item.addEventListener('click', () => {


            const title = item.dataset.title;
            const tags = item.dataset.tags.split(',');
            const description = item.dataset.description;
            const link = item.dataset.link;
            const image = item.dataset.image;

            modalTitle.textContent = title;
            modalDescription.textContent = description;
            modalLink.href = link;
            modalImage.src = image;

            modalTags.innerHTML = '';
            tags.forEach(tagText => {
                const tagElement = document.createElement('span');
                tagElement.classList.add('tag');
                tagElement.textContent = tagText.trim();
                modalTags.appendChild(tagElement);
            });

            modal.classList.add('active');
        });
    });

    const closeModal = () => {
        modal.classList.remove('active');
    };

    closeModalBtn.addEventListener('click', closeModal);


    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

    if (elementsToAnimate.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        elementsToAnimate.forEach(element => {
            observer.observe(element);
        });
    }


    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            });
        });
    }

});
