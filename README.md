<h1 align="center">✨ Landing Page - José Victor | Engenheiro de Dados ✨</h1>
<p align="center">Um portfólio profissional moderno e responsivo para José Victor, Engenheiro de Dados</p>

<div align="center">
<img src="https://github.com/amaro-netto/JV_SitePortifolio/blob/main/asset/img/LOGO%20JV_LOGO%20HORIZONTAL.svg" alt="logo" width="700">
</div>

## Badges
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![SVG](https://img.shields.io/badge/SVG-FFB13B?style=for-the-badge&logo=svg&logoColor=black)
![Font Awesome](https://img.shields.io/badge/Font%20Awesome-528DD7?style=for-the-badge&logo=fontawesome&logoColor=white)
![Formspree](https://img.shields.io/badge/Formspree-121212?style=for-the-badge&logo=formspree&logoColor=white)
![Status: Concluído](https://img.shields.io/badge/Status-Concluído-green?style=for-the-badge)
![Licença: MIT](https://img.shields.io/badge/Licença-MIT-blue?style=for-the-badge)


## Índice
- [Descrição do Projeto](#descrição-do-projeto)
- [Status do Projeto](#status-do-projeto)
- [Funcionalidades](#funcionalidades)
- [Layout e Design](#layout-e-design)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Usar](#como-usar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Pessoas Desenvolvedoras do Projeto](#pessoas-desenvolvedoras-do-projeto)
- [Licença](#licença)

## Descrição do Projeto
Um portfólio profissional e moderno para José Victor, um Engenheiro de Dados Júnior. Este projeto serve como uma landing page pessoal para apresentar suas habilidades, projetos e informações de contato de forma clara e acessível. O objetivo é destacar a paixão de José Victor pela Engenharia de Dados, Big Data e algoritmos.

## Status do Projeto
🟢 **Concluído**

## Funcionalidades
* **Seção Início:** Apresenta José Victor, sua formação em Engenharia de Software e sua paixão por Engenharia de Dados.
    * Inclui uma chamada proeminente para ação para visualizar seus projetos.
* **Seção Habilidades:** Destaca as proficiências técnicas de José Victor com cartões interativos. Cada cartão exibe um ícone, nome da habilidade, uma breve descrição e um link "Saiba Mais".
* **Seção Portfólio:** Apresenta os projetos de José Victor usando um layout estilo acordeão interativo.
    * Clicar em um cartão de projeto abre um modal com mais detalhes, incluindo título, tags, uma descrição detalhada, uma imagem e um link para o repositório do GitHub.
* **Seção Contato:** Fornece um formulário para que os visitantes possam entrar em contato com José Victor.
* **Design Responsivo:** O layout se adapta a vários tamanhos de tela, garantindo uma experiência de usuário consistente.
* **Animações:** Animações sutis acionadas por rolagem aprimoram o apelo visual e o engajamento do usuário.
* **Menu Hambúrguer:** Um menu de navegação responsivo para telas menores.
* **Navegação Suave:** Permite rolagem suave entre as seções da página.

## Layout e Design

O projeto possui um design moderno e elegante, com o logotipo JV em várias versões (Horizontal, Vertical, Ícone; em preto e branco). O layout da seção "Início" alterna entre imagem à esquerda e conteúdo à direita, e vice-versa, adaptando-se para uma coluna única em telas menores. A seção de habilidades apresenta cartões interativos que giram ao passar o mouse. A seção de portfólio utiliza um acordeão para exibir os projetos.

### Sistema de Cores

```css
:root {
    --cor-fundo: #121212; /* Cor de fundo principal */
    --cor-primaria: #1e1e1e; /* Cor de fundo para elementos como cards */
    --cor-destaque: #7f5af0; /* Cor para destaques e botões principais */
    --cor-texto: #e0e0e0; /* Cor principal do texto */
    --cor-texto-secundario: #a0a0a0; /* Cor para texto secundário */
    --cor-texto-escuro: #121212; /* Cor para texto em fundos claros, como na face2 dos cards */

    /* Cores do acordeão */
    --accordion-bg: #412868; /* Fundo do container do acordeão (não diretamente usado, mas indica o tone) */
    --accordion-item-bg: #1e1e1e; /* Fundo padrão do item do acordeão */
}
```
---

* **Fundo:** Principalmente `#121212`.
* **Destaque:** `#7f5af0`, usado em links, botões e títulos.
* **Elementos secundários:** `#1e1e1e` e `#a0a0a0`.

### Breakpoints Responsivos
* 📱 **Mobile:** `< 768px`
* 💻 **Desktop:** `≥ 768px`

## Tecnologias Utilizadas
* **HTML5 Semântico:** Para a estrutura básica e o conteúdo da página web.
* **CSS3:** Para estilização, layout, design responsivo e animações.
    * Utiliza variáveis CSS personalizadas para um tema consistente.
    * Faz uso de `@import` para Google Fonts (Roboto).
    * Animações CSS para transições suaves.
    * Flexbox e Grid CSS para organização de layout.
* **JavaScript Vanilla:** Para elementos interativos.
    * Animações de rolagem (`IntersectionObserver`).
    * Funcionalidade do menu hambúrguer.
    * Lógica do modal de portfólio (abertura, preenchimento e fechamento).
* **SVG (Scalable Vector Graphics):** Utilizado para ícones (Python, PySpark, MySQL, Numpy, Docker, Git) e padrões de fundo, garantindo alta qualidade visual.
* **Font Awesome:** Para ícones de redes sociais.
* **Formspree:** (Placeholder em `index.html`) Para lidar com envios de formulários.

* ## Como Usar
1.  Clone o repositório:
    ```bash
    git clone [https://github.com/amaro-netto/JV_SitePortifolio.git](https://github.com/amaro-netto/JV_SitePortifolio.git)
    ```
2.  Navegue até o diretório:
    ```bash
    cd JV_SitePortifolio
    ```
3.  Abra o arquivo `index.html` em seu navegador web.

   ## Estrutura do Projeto
   
```bash
   ├── asset/
│   ├── img/
│   │   ├── Blogpost-Engenheiro-de-dados-768x512.jpg
│   │   ├── IMG_2412.png
│   │   ├── LOGO JV_Black Horizontal.svg
│   │   ├── LOGO JV_Black Icon.svg
│   │   ├── LOGO JV_Black Vertical.svg
│   │   ├── LOGO JV_LOGO HORIZONTAL.svg
│   │   ├── LOGO JV_LOGO ICON.svg
│   │   ├── LOGO JV_LOGO VERTICAL.svg
│   │   ├── LOGO JV_White Horizontal.svg
│   │   ├── LOGO JV_White Icon.svg
│   │   ├── LOGO JV_White Vertical.svg
│   │   ├── background.svg
│   │   ├── cover/
│   │   │   ├── 9906016.webp
│   │   │   ├── cover1.png
│   │   │   └── cover1_1.png
│   │   └── icon/
│   │       ├── Docker.svg
│   │       ├── Git.svg
│   │       ├── LOGO-JV_LOGO-ICON.ico
│   │       ├── MySQL.svg
│   │       ├── Numpy.svg
│   │       ├── PySpark.svg
│   │       └── python.svg
│   ├── script.js
├── index.html
└── style.css
```

## Pessoas Desenvolvedoras do Projeto

* [Amaro Netto](https://github.com/amaro-netto) - Desenvolvedor principal

## Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
