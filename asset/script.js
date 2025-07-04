document.addEventListener('DOMContentLoaded', () => {

    // --- REMOÇÃO E AJUSTE DO CARROSSEL SWIPER ---
    // A inicialização do Swiper foi removida, pois não é mais necessária.
    // O elemento .portfolio-container no HTML foi substituído por .accordion.

    // --- LÓGICA DO MODAL DO PORTFÓLIO (AJUSTADA) ---
    // Agora o modal será acionado pelo novo botão "Veja Mais"
    const portfolioItems = document.querySelectorAll('.accordion-item'); // Seleciona os novos itens do acordeão
    const modal = document.getElementById('portfolio-modal');
    const closeModalBtn = document.querySelector('.modal-close-btn');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalTags = document.getElementById('modal-tags');
    const modalDescription = document.getElementById('modal-description');
    const modalLink = document.getElementById('modal-link');

    portfolioItems.forEach(item => { // Itera sobre os accordion-items
        const seeMoreBtn = item.querySelector('.btn-more-details'); // Seleciona o botão dentro de cada item

        if (seeMoreBtn) {
            seeMoreBtn.addEventListener('click', (event) => {
                event.stopPropagation(); // Impede que o clique no botão feche imediatamente o modal ou propague para o item pai

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
                    tagElement.textContent = tagText.trim(); // Adiciona .trim() para remover espaços em branco extras
                    modalTags.appendChild(tagElement);
                });

                modal.classList.add('active');
            });
        }
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

    // --- LÓGICA PARA O MENU HAMBURGUER (MANTIDA) ---
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