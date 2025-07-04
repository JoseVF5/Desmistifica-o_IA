document.addEventListener('DOMContentLoaded', () => {

    // --- INICIALIZAÇÃO DO CARROSSEL SWIPER ---
    const swiper = new Swiper('.portfolio-container', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // --- LÓGICA DO MODAL DO PORTFÓLIO ---
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    const modal = document.getElementById('portfolio-modal');
    const closeModalBtn = document.querySelector('.modal-close-btn');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalTags = document.getElementById('modal-tags');
    const modalDescription = document.getElementById('modal-description');
    const modalLink = document.getElementById('modal-link');

    portfolioCards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.dataset.title;
            const tags = card.dataset.tags.split(',');
            const description = card.dataset.description;
            const link = card.dataset.link;
            const image = card.dataset.image;

            modalTitle.textContent = title;
            modalDescription.textContent = description;
            modalLink.href = link;
            modalImage.src = image;
            
            modalTags.innerHTML = '';
            tags.forEach(tagText => {
                const tagElement = document.createElement('span');
                tagElement.classList.add('tag');
                tagElement.textContent = tagText;
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

    // --- ANIMAÇÃO AO ROLAR A PÁGINA ---
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

    // --- LÓGICA PARA O MENU HAMBURGUER (ADICIONADO) ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            // Animar o ícone de hamburguer para um 'x' (opcional, requer mais CSS)
        });

        // Fechar o menu ao clicar em um link (para mobile)
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            });
        });
    }

});