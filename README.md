# 👤 Felipe Louzada — Portfólio Pessoal

Landing page profissional para prospecção de vagas em TI (Suporte, Help Desk, Infraestrutura, Redes).

## 🗂️ Estrutura do Projeto

```
portfolio-felipe/
├── index.html                    # HTML principal (única página)
├── css/
│   ├── reset.css                 # Reset universal
│   ├── variables.css             # Design tokens (cores, fontes, espaçamentos)
│   ├── base.css                  # Estilos globais, botões, container, cursor
│   ├── nav.css                   # Barra de navegação fixa + mobile
│   ├── hero.css                  # Seção hero (foto, nome, terminal)
│   ├── about.css                 # Seção sobre mim
│   ├── skills.css                # Habilidades técnicas com barras animadas
│   ├── experience.css            # Timeline de experiência
│   ├── projects.css              # Cards de projetos
│   ├── education.css             # Formação e certificações
│   ├── contact.css               # Formulário de contato + footer
│   └── animations.css            # Reveal on scroll + animações de entrada
├── js/
│   ├── cursor.js                 # Cursor personalizado
│   ├── nav.js                    # Nav scroll state + hamburger + active link
│   ├── hero.js                   # Terminal typing + role rotator
│   ├── animations.js             # Scroll reveal com IntersectionObserver
│   ├── skills.js                 # Animação das barras de skill
│   ├── contact.js                # Validação do formulário
│   └── main.js                   # Init geral (ano, fallback foto)
├── assets/
│   ├── img/
│   │   └── profile-photo.jpg     # Foto
│   └── icons/                    # Ícones extras (opcional)
└── README.md
```

## 🌐 Deploy no GitHub Pages

1. Suba o repositório no GitHub
2. Vá em **Settings → Pages**
3. Em _Source_, selecione `main` branch e pasta `/root`
4. Aguarde ~1 minuto — sua página estará em:
   `https://seu-usuario.github.io/portfolio-felipe`

## 📦 Workflow de commits (Conventional Commits)

```bash
# Estrutura inicial
git init
git add .
git commit -m "feat: estrutura inicial do portfólio"

## 🛠️ Tecnologias

- HTML5 semântico com ARIA
- CSS3 puro com Custom Properties (BEM-inspired)
- JavaScript ES6+ vanilla (sem frameworks)
- Google Fonts: Syne + JetBrains Mono
- GitHub Pages para hospedagem gratuita

## 📋 Checklist antes de publicar

- [ ] Atualizar e-mail, LinkedIn e GitHub no HTML
- [ ] Adicionar URLs reais dos projetos nos cards
- [ ] Revisar datas e detalhes da experiência profissional
- [ ] Testar em mobile (Chrome DevTools)
- [ ] Configurar GitHub Pages
- [ ] Adicionar URL do portfólio no LinkedIn

---

Desenvolvido com HTML, CSS & JS puro · Felipe Louzada
```
