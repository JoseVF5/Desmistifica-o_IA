# Landing Page - José Victor | Engenheiro de Dados

<div align="center">
<img src="https://github.com/amaro-netto/JV_SitePortifolio/blob/main/asset/img/LOGO%20JV_LOGO%20HORIZONTAL.svg" alt="logo" width="700">
</div>

Este projeto é uma landing page pessoal para José Victor, um Engenheiro de Dados Júnior. Ele serve como um portfólio online para apresentar suas habilidades, projetos e informações de contato.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![SVG](https://img.shields.io/badge/SVG-FFB13B?style=for-the-badge&logo=svg&logoColor=black)
![Font Awesome](https://img.shields.io/badge/Font%20Awesome-528DD7?style=for-the-badge&logo=fontawesome&logoColor=white)
![Formspree](https://img.shields.io/badge/Formspree-121212?style=for-the-badge&logo=formspree&logoColor=white)

## 🚀 Funcionalidades

* **Seção Início:** Apresenta José Victor, sua formação em Engenharia de Software e sua paixão por Engenharia de Dados, Big Data e algoritmos.
    * Inclui uma chamada proeminente para ação para visualizar seus projetos.
* **Seção Habilidades:** Destaca as proficiências técnicas de José Victor com cartões interativos. Cada cartão exibe um ícone, nome da habilidade, uma breve descrição e um link "Saiba Mais".
* **Seção Portfólio:** Apresenta os projetos de José Victor usando um layout estilo acordeão interativo.
    * Clicar em um cartão de projeto abre um modal com mais detalhes, incluindo título, tags, uma descrição detalhada, uma imagem e um link para o repositório do GitHub.
    * Atualmente apresenta um projeto "Calculadora em Python" e vários espaços reservados "EM CONSTRUÇÃO" para projetos futuros.
* **Seção Contato:** Fornece um formulário para que os visitantes possam entrar em contato com José Victor, incluindo campos para nome, e-mail, telefone (opcional) e mensagem.
* **Design Responsivo:** O layout se adapta a vários tamanhos de tela, desde dispositivos móveis até desktops grandes, garantindo uma experiência de usuário consistente.
* **Animações:** Animações sutis acionadas por rolagem aprimoram o apelo visual e o engajamento do usuário.
* **Menu Hambúrguer:** Um menu de navegação responsivo para telas menores.
* **Implementação de Modal:** Um modal dinâmico para exibir informações detalhadas do projeto sem sair da página.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Para a estrutura básica e o conteúdo da página web.
* **CSS3:** Para estilização, layout, design responsivo e animações.
    * Variáveis CSS personalizadas são usadas para um tema consistente.
    * `@import` para Google Fonts (Roboto).
* **JavaScript:** Para elementos interativos, incluindo:
    * Animações de rolagem (`IntersectionObserver`).
    * Funcionalidade do menu hambúrguer.
    * Lógica do modal de portfólio (abertura, preenchimento e fechamento).
* **SVG (Scalable Vector Graphics):** Usado para vários ícones (Python, PySpark, MySQL, Numpy, Docker, Git) e padrões de fundo, garantindo visuais de alta qualidade em todas as resoluções.
* **Font Awesome:** Para ícones de redes sociais.
* **Formspree:** (Placeholder em `index.html`) Para lidar com envios de formulários.

## 📂 Estrutura do Projeto

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

## ⚙️ Configuração e Uso

Para visualizar este projeto localmente:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/amaro-netto/JV_SitePortifolio.git](https://github.com/amaro-netto/JV_SitePortifolio.git)
    ```
2.  **Navegue até o diretório do projeto:**
    ```bash
    cd JV_SitePortifolio
    ```
3.  **Abra o arquivo `index.html` em seu navegador da web.**

Nenhuma etapa de instalação adicional é necessária, pois este é um projeto apenas de front-end.

## 💡 Personalização

* **Conteúdo:**
    * Modifique o conteúdo de texto em `index.html` (por exemplo, introdução, descrições de habilidades, detalhes do projeto).
    * Atualize os caminhos das imagens em `index.html` conforme necessário.
    * Adicione novos itens de projeto na seção `portfolio` duplicando os elementos `<li>` `accordion-item` e atualizando seus atributos `data-*`.
* **Estilização:**
    * Ajuste cores, fontes, espaçamento e outras propriedades visuais em `style.css`.
    * Modifique as variáveis CSS `--cor-fundo`, `--cor-primaria`, `--cor-destaque` e outras em `:root` para rápidas mudanças de tema.
    * Ajuste a `opacity` do `background.svg` em `style.css` (`#inicio::before`).
* **Funcionalidade:**
    * O arquivo `script.js` lida com os elementos interativos. Por exemplo, para alterar o comportamento do modal ou das animações de rolagem, modifique este arquivo.
    * **Importante:** Lembre-se de substituir `COLE_SEU_ENDPOINT_AQUI` no atributo `action` do formulário de contato em `index.html` pelo seu endpoint real do Formspree para habilitar o envio de e-mails.

## 🤝 Contribuição

Contribuições, problemas e solicitações de recursos são bem-vindos! Sinta-se à vontade para verificar a [página de problemas](https://github.com/amaro-netto/JV_SitePortifolio/issues) ou abrir uma nova solicitação de pull.

## 📜 Licença

Este projeto é de código aberto e está disponível sob a [Licença MIT](LICENSE).

---

**Desenvolvido por Amaro Netto**
[Visite meu portfólio](https://amaronetto.netlify.app/)






