# 👤 Felipe Duarte — Portfólio Pessoal

Landing page profissional para prospecção de vagas em TI (Suporte, Help Desk, Infraestrutura, Redes).

## 🗂️ Estrutura do Projeto

```
portfolio-felipe/
├── index.html              # HTML principal (única página)
├── css/
│   ├── reset.css           # Reset universal
│   ├── variables.css       # Design tokens (cores, fontes, espaçamentos)
│   ├── base.css            # Estilos globais, botões, container, cursor
│   ├── nav.css             # Barra de navegação fixa + mobile
│   ├── hero.css            # Seção hero (foto, nome, terminal)
│   ├── about.css           # Seção sobre mim
│   ├── skills.css          # Habilidades técnicas com barras animadas
│   ├── experience.css      # Timeline de experiência
│   ├── projects.css        # Cards de projetos
│   ├── education.css       # Formação e certificações
│   ├── contact.css         # Formulário de contato + footer
│   └── animations.css      # Reveal on scroll + animações de entrada
├── js/
│   ├── cursor.js           # Cursor personalizado
│   ├── nav.js              # Nav scroll state + hamburger + active link
│   ├── hero.js             # Terminal typing + role rotator
│   ├── animations.js       # Scroll reveal com IntersectionObserver
│   ├── skills.js           # Animação das barras de skill
│   ├── contact.js          # Validação do formulário
│   └── main.js             # Init geral (ano, fallback foto)
├── assets/
│   ├── img/
│   │   └── profile.jpg     # ⚠️ SUBSTITUIR pela sua foto real
│   └── icons/              # Ícones extras (opcional)
└── README.md
```

## 🚀 Como rodar localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/portfolio-felipe.git
   cd portfolio-felipe
   ```

2. **Abra com Live Server (VS Code):**
   - Instale a extensão **Live Server**
   - Clique com o botão direito em `index.html` → *Open with Live Server*

   Ou simplesmente abra o `index.html` direto no navegador.

## 📸 Adicionando sua foto

Substitua o arquivo `assets/img/profile.jpg` pela sua foto profissional.

- **Formato recomendado:** JPG ou WebP
- **Proporção:** retrato (ex: 600×750px)
- **Dica:** fundo neutro, boa iluminação, traje profissional

> Se a foto não existir ou der erro, a página exibe automaticamente as iniciais "FD" como placeholder estilizado.

## ✏️ Personalizações necessárias

Antes de publicar, atualize no `index.html`:

| Campo | Localização | Exemplo |
|---|---|---|
| E-mail | Seção Contato | `seuemail@email.com` |
| LinkedIn | Seção Contato | `linkedin.com/in/seu-perfil` |
| GitHub | Seção Contato | `github.com/seu-usuario` |
| Links dos projetos | Cards de Projetos | URLs do GitHub / deploy |
| Datas de experiência | Timeline | Período real de cada vaga |

## 🌐 Deploy no GitHub Pages

1. Suba o repositório no GitHub
2. Vá em **Settings → Pages**
3. Em *Source*, selecione `main` branch e pasta `/root`
4. Aguarde ~1 minuto — sua página estará em:
   `https://seu-usuario.github.io/portfolio-felipe`

## 📦 Workflow de commits (Conventional Commits)

```bash
# Estrutura inicial
git init
git add .
git commit -m "feat: estrutura inicial do portfólio"

# Exemplos de commits futuros
git commit -m "feat: adiciona seção de projetos"
git commit -m "fix: corrige layout mobile do hero"
git commit -m "style: ajusta paleta de cores"
git commit -m "docs: atualiza README com instruções de deploy"
git commit -m "chore: adiciona foto de perfil"
```

## 🛠️ Tecnologias

- HTML5 semântico com ARIA
- CSS3 puro com Custom Properties (BEM-inspired)
- JavaScript ES6+ vanilla (sem frameworks)
- Google Fonts: Syne + JetBrains Mono
- GitHub Pages para hospedagem gratuita

## 📋 Checklist antes de publicar

- [ ] Substituir `assets/img/profile.jpg` pela foto real
- [ ] Atualizar e-mail, LinkedIn e GitHub no HTML
- [ ] Adicionar URLs reais dos projetos nos cards
- [ ] Revisar datas e detalhes da experiência profissional
- [ ] Testar em mobile (Chrome DevTools)
- [ ] Configurar GitHub Pages
- [ ] Adicionar URL do portfólio no LinkedIn

---

Desenvolvido com HTML, CSS & JS puro · Felipe Duarte
