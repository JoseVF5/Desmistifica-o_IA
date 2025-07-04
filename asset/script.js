document.addEventListener('DOMContentLoaded', () => {

    // --- REMOÇÃO E AJUSTE DO CARROSSEL SWIPER ---
    // A inicialização do Swiper foi removida, pois não é mais necessária.
    // O elemento .portfolio-container no HTML foi substituído por .accordion.

    // --- LÓGICA DO MODAL DO PORTFÓLIO (AJUSTADA) ---
    // Agora o modal será acionado pelo clique em qualquer lugar do card do acordeão
    const portfolioItems = document.querySelectorAll('.accordion-item'); // Seleciona os itens do acordeão
    const modal = document.getElementById('portfolio-modal');
    const closeModalBtn = document.querySelector('.modal-close-btn');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalTags = document.getElementById('modal-tags');
    const modalDescription = document.getElementById('modal-description');
    const modalLink = document.getElementById('modal-link');

    portfolioItems.forEach(item => { // Itera sobre cada item do acordeão
        item.addEventListener('click', () => { // Adiciona o event listener direto no item do acordeão
            // Nenhuma chamada a event.stopPropagation() é necessária aqui, pois não há botões aninhados para impedir a propagação.

            const title = item.dataset.title;
            const tags = item.dataset.tags.split(',');
            const description = item.dataset.description;
            const link = item.dataset.link;
            const image = item.dataset.image;

            modalTitle.textContent = title;
            modalDescription.textContent = description;
            modalLink.href = link;
            modalImage.src = image;

            modalTags.innerHTML = ''; // Limpa as tags anteriores
            tags.forEach(tagText => {
                const tagElement = document.createElement('span');
                tagElement.classList.add('tag');
                tagElement.textContent = tagText.trim(); // Adiciona .trim() para remover espaços em branco extras
                modalTags.appendChild(tagElement);
            });

            modal.classList.add('active'); // Ativa a exibição do modal
        });
    });

    // Função para fechar o modal
    const closeModal = () => {
        modal.classList.remove('active');
    };

    // Event listener para o botão de fechar do modal
    closeModalBtn.addEventListener('click', closeModal);

    // Event listener para fechar o modal ao clicar fora do conteúdo
    modal.addEventListener('click', (event) => {
        if (event.target === modal) { // Verifica se o clique foi diretamente no fundo do modal
            closeModal();
        }
    });

    // --- ANIMAÇÃO AO ROLAR A PÁGINA (MANTIDA) ---
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

    if (elementsToAnimate.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Desobserva o elemento após ele se tornar visível
                }
            });
        }, {
            threshold: 0.1 // O elemento se torna visível quando 10% dele está na viewport
        });

        elementsToAnimate.forEach(element => {
            observer.observe(element);
        });
    }

    // --- LÓGICA PARA O MENU HAMBURGUER (MANTIDA) ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) { // Garante que os elementos existam antes de adicionar listeners
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active'); // Alterna a classe 'active' para mostrar/esconder o menu
            // Animar o ícone de hamburguer para um 'x' (opcional, requer mais CSS, não incluído aqui)
        });

        // Fechar o menu ao clicar em um link (útil para mobile)
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active'); // Remove a classe 'active' para fechar o menu
                }
            });
        });
    }

});