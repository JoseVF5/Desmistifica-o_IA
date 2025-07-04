// --- INTERATIVIDADE DOS CARDS DE HABILIDADES ---

// 1. Seleciona todos os elementos que têm a classe 'skill-card'
const skillCards = document.querySelectorAll('.skill-card');

// 2. Para cada card encontrado, adiciona um "ouvinte de evento" de clique
skillCards.forEach(card => {
    card.addEventListener('click', () => {
        // 3. Quando um card é clicado, ele alterna a classe 'active'
        //    O CSS que escrevemos cuida de mostrar ou esconder a descrição
        //    com base na presença ou ausência dessa classe.
        card.classList.toggle('active');
    });
});

// --- INICIALIZAÇÃO DO CARROSSEL SWIPER ---
const swiper = new Swiper('.portfolio-container', {
    // Parâmetros opcionais
    loop: true, // Faz o carrossel ser infinito
    slidesPerView: 1, // Mostra 1 slide por vez em telas pequenas
    spaceBetween: 30, // Espaço entre os slides
    
    // Deixa o carrossel responsivo
    breakpoints: {
        // quando a largura da janela for >= 768px
        768: {
            slidesPerView: 2,
        },
        // quando a largura da janela for >= 1024px
        1024: {
            slidesPerView: 3,
        }
    },

    // Setas de navegação
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Paginação (bolinhas)
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


// --- LÓGICA DO MODAL DO PORTFÓLIO ---

// 1. Selecionar todos os elementos necessários
const portfolioCards = document.querySelectorAll('.portfolio-card');
const modal = document.getElementById('portfolio-modal');
const closeModalBtn = document.querySelector('.modal-close-btn');

// Selecionar os elementos DENTRO do modal que vamos preencher
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalTags = document.getElementById('modal-tags');
const modalDescription = document.getElementById('modal-description');
const modalLink = document.getElementById('modal-link');


// 2. Adicionar evento de clique para cada card do portfólio
portfolioCards.forEach(card => {
    card.addEventListener('click', () => {
        // Pegar os dados do card clicado usando os atributos 'data-*'
        const title = card.dataset.title;
        const tags = card.dataset.tags.split(','); // Transforma a string de tags em um array
        const description = card.dataset.description;
        const link = card.dataset.link;
        const image = card.dataset.image;

        // Preencher o modal com os dados
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modalLink.href = link;
        modalImage.src = image;

        // Limpar as tags antigas e criar as novas
        modalTags.innerHTML = ''; // Limpa o container
        tags.forEach(tagText => {
            const tagElement = document.createElement('span');
            tagElement.classList.add('tag');
            tagElement.textContent = tagText;
            modalTags.appendChild(tagElement);
        });

        // Mostrar o modal
        modal.classList.add('active');
    });
});

// 3. Função para fechar o modal
const closeModal = () => {
    modal.classList.remove('active');
};

// Adicionar evento para fechar no botão 'X' e clicando fora do modal
closeModalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (event) => {
    // Se o clique foi no fundo do modal (e não no conteúdo dele), fecha o modal
    if (event.target === modal) {
        closeModal();
    }
});