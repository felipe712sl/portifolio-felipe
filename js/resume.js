/* js/resume.js — Modal de currículo completo
   ================================================
   ESTRUTURA DO ARQUIVO:
   1. DADOS DO CURRÍCULO — objeto central com todas as informações
   2. GERAÇÃO DO HTML   — função que monta o modal a partir dos dados
   3. INICIALIZAÇÃO     — função que cria o modal e registra eventos
   ================================================ */

(function () {
  /* ================================================
     SEÇÃO 1 — DADOS DO CURRÍCULO
     Para atualizar qualquer informação, edite os
     campos abaixo. Não é necessário mexer no HTML.
     ================================================ */

  const dados = {
    /* ------------------------------------------------
       CABEÇALHO
       Exibido no topo do modal com foto, nome e contato
       ------------------------------------------------ */
    nome: "Felipe Silveira Louzada",
    foto: "assets/img/profile-photo.jpg",
    subtitulo: "Superior Completo | Barra Mansa/RJ | 31 anos | Solteiro",
    contato: "(24) 9 9906-3455 | felipe.louzada18@gmail.com",

    /* ------------------------------------------------
       DADOS PESSOAIS
       CPF, CNH e endereço foram removidos por serem
       informações sensíveis. Para reativar, basta
       adicionar os campos e incluí-los no gerarHTML().
       ------------------------------------------------ */
    pessoais: {
      nome: "Felipe Silveira Louzada",
      celular: "(24) 9 9906-3455",
      email: "felipe.louzada18@gmail.com",
      nascimento: "24/10/1994 — 31 anos",
      genero: "Masculino",
      escolaridade: "Superior Completo",
      estadoCivil: "Solteiro",
      filhos: "1 filho",
      pcd: "Não",
    },

    /* ------------------------------------------------
       PRETENSÕES
       Liste as funções de interesse e experiência em cada.
       Adicione ou remova objetos { funcao, experiencia }
       conforme necessário. Máximo recomendado: 4 itens.
       ------------------------------------------------ */
    pretensoes: [
      { funcao: "Analista de Suporte", experiencia: "2 anos" },
      { funcao: "Desenvolvedor Web", experiencia: "1 ano" },
      { funcao: "Projetista de Redes e Automação IoT", experiencia: "5 anos" },
      { funcao: "HelpDesk Support", experiencia: "2 anos" },
    ],
    salarioPretendido: "R$ 2.500,00 a R$ 3.500,00",
    empregado: "Sim",
    estagio: "Não",
    homeOffice: "Sim",
    aceitaViagem: "Sim",

    /* ------------------------------------------------
       EXPERIÊNCIA PROFISSIONAL
       Ordenada da mais recente para a mais antiga.
       Cada objeto representa um vínculo empregatício.
       Campos: funcao, salario, ramo, empresa, periodo, descricao
       ------------------------------------------------ */
    experiencias: [
      {
        funcao: "Técnico em Manutenção de Informática",
        salario: "R$ 1.850,00",
        ramo: "Comércio — Autopeças",
        empresa: "Soberana Auto Peças Ltda",
        periodo: "De 12/01/2026 até o momento | Atual",
        descricao:
          "Suporte técnico e manutenção de equipamentos de informática no ambiente comercial. Instalação, configuração e atualização de sistemas operacionais e softwares. Diagnóstico e resolução de falhas em hardware e periféricos. Manutenção de rede local e conectividade dos pontos de venda.",
      },
      {
        funcao: "Técnico de Informática",
        salario: "R$ 2.518,00",
        ramo: "Administração Pública — Saúde",
        empresa: "Prefeitura de Barra Mansa — Fundo Municipal de Saúde",
        periodo: "De 12/05/2023 até 12/05/2025 | 2 anos",
        descricao:
          "Suporte técnico ao parque tecnológico das unidades de saúde municipais. Atendimento e gestão de chamados de TI com resolução de incidentes. Manutenção preventiva e corretiva de estações de trabalho, impressoras e servidores locais. Suporte a sistemas de prontuário eletrônico e serviços digitais municipais. Auxílio na gestão de redes LAN e contato com processos de licitação e aquisição de equipamentos.",
      },
      {
        funcao: "Técnico de Manutenção",
        salario: "R$ 1.645,53",
        ramo: "Comércio — Equipamentos Industriais",
        empresa: "Reimaq Balanças — Manutenção e Vendas de Equipamentos Ltda",
        periodo: "De 20/09/2021 até 11/05/2023 | 1 ano e 8 meses",
        descricao:
          "Manutenção mecânica, elétrica e eletrônica em balanças comerciais e equipamentos de processamento. Diagnóstico e calibração de equipamentos de pesagem para uso comercial e industrial. Manutenção preventiva e corretiva com identificação de falhas e substituição de componentes. Atendimento técnico a clientes em campo e na bancada.",
      },
      {
        funcao: "Desenvolvedor Frontend — Freelancer Remoto",
        salario: "48/h",
        ramo: "Agronegócio — Tecnologia",
        empresa: "AGREX do Brasil",
        periodo: "De Out/2020 até Jan/2021 | 4 meses",
        descricao:
          "Desenvolvimento frontend de sistema interno de controle de cargas de grãos utilizando Angular. Implementação de módulos para gestão de safra, controle de transporte e registro de pesagem. Trabalho 100% remoto durante o período da pandemia de COVID-19 com entrega autônoma.",
      },
    ],

    /* ------------------------------------------------
       ESCOLARIDADE
       Ordenada da mais recente para a mais antiga.
       Campos: nivel, curso, instituicao, conclusao, cidade, situacao (opcional)
       ------------------------------------------------ */
    escolaridade: [
      {
        nivel: "Superior Completo",
        curso: "Tecnólogo em Sistemas para Internet",
        instituicao:
          "FAETERJ — Faculdade de Educação Tecnológica do Estado do RJ",
        conclusao: "2025",
        cidade: "Barra Mansa/RJ",
      },

      {
        nivel: "Técnico/Pós-Médio Completo",
        curso: "Técnico em Informática",
        instituicao: "UNICORP — Ensino a Distância",
        conclusao: "2025",
        cidade: "Barra Mansa/RJ",
      },

      {
        nivel: "Técnico/Pós-Médio Completo",
        curso: "Técnico em Eletrônica",
        instituicao: "UNICORP — Ensino a Distância",
        conclusao: "2026",
        cidade: "Barra Mansa/RJ",
      },
      
      {
        nivel: "Superior Incompleto",
        curso: "Engenharia Civil",
        instituicao: "UBM — Universidade de Barra Mansa",
        conclusao: "",
        cidade: "Barra Mansa/RJ",
        situacao: "Trancado — Mar/2015 a Jun/2018",
      },

      {
        nivel: "Ensino Médio Completo",
        curso: "Ensino Médio",
        instituicao:
          "Colégio Estadual Baldomero Barbará / IFRJ — Campus Volta Redonda",
        conclusao: "2012",
        cidade: "Barra Mansa/RJ",
      },
    ],

    /* ------------------------------------------------
       CURSOS
       Adicione ou remova objetos { nome, instituicao, carga, conclusao }
       conforme novos cursos forem concluídos.
       ------------------------------------------------ */
    cursos: [
      {
        nome: "Manutenção de Hardware, Software, Redes e Sistemas Operacionais",
        instituicao: "HRBR Cursos",
        carga: "20h",
        conclusao: "2024",
      },
      {
        nome: "Modelo OSI",
        instituicao: "HRBR Cursos",
        carga: "10h",
        conclusao: "2024",
      },
      {
        nome: "Infraestrutura e Redes",
        instituicao: "Udemy",
        carga: "25h",
        conclusao: "2024",
      },
      {
        nome: "Noções de ITIL, COBIT e CMMI",
        instituicao: "Udemy",
        carga: "",
        conclusao: "2024",
      },
      {
        nome: "Windows Server e Active Directory",
        instituicao: "Udemy",
        carga: "",
        conclusao: "2024",
      },
      {
        nome: "Curso Básico de Redes",
        instituicao: "Cisco Networking Academy",
        carga: "",
        conclusao: "2024",
      },
      {
        nome: "Cisco Packet Tracer",
        instituicao: "Cisco Networking Academy",
        carga: "",
        conclusao: "2024",
      },
    ],

    /* ------------------------------------------------
       HABILIDADES
       Lista de tags exibidas na seção de habilidades.
       Adicione strings ao array conforme novas habilidades
       forem desenvolvidas.
       ------------------------------------------------ */
    habilidades: [
      "Adaptabilidade A Novos Ambientes E Tecnologias",
      "Administração De Redes Lan/Wan",
      "Angular (Básico)",
      "Atenção Aos Detalhes",
      "Atendimento A Públicos Diversos",
      "Atendimento E Suporte Ao Usuário Final",
      "AutoCAD — Projetos Elétricos E Plantas Baixas",
      "Cabeamento Estruturado",
      "Calibração De Instrumentos",
      "Cisco Packet Tracer",
      "Comunicação Técnica Clara E Objetiva",
      "Comprometimento Com Prazos E Qualidade",
      "Confiabilidade E Consistência Na Entrega",
      "Configuração De Switches E Roteadores",
      "Consultas E Modelagem De Banco De Dados Com PostgreSQL",
      "Controle De Documentação",
      "Desenvolvimento Web Com HTML, CSS E JavaScript",
      "Diagnóstico E Resolução De Incidentes",
      "Diplomacia E Gestão De Conflitos",
      "Disciplina E Hierarquia",
      "Documentação Técnica De Procedimentos",
      "Empatia Com Usuários De Diferentes Níveis Técnicos",
      "Foco Em Melhoria Contínua",
      "Gerenciamento De Backups E NAS/RAID",
      "Gestão De Chamados Com Jira Service Management",
      "Gestão De Estoque",
      "Gestão De Projetos De Infraestrutura De TI",
      "Gestão Sob Pressão",
      "Instalação E Configuração De Softwares",
      "ITIL 4 — Boas Práticas De Gestão De Serviços De TI",
      "Manutenção Eletromecânica",
      "Manutenção Preventiva E Corretiva De Hardware",
      "Node.js / Express (Básico)",
      "Noções De APIs E Integrações HTTP",
      "Organização E Gestão Do Tempo",
      "Paciência No Atendimento Ao Usuário",
      "PostgreSQL",
      "Proatividade Na Identificação De Melhorias",
      "Raciocínio Analítico E Lógico",
      "Resolução De Problemas Sob Pressão",
      "Segurança Da Informação E Controle De Acesso",
      "Suporte A Sistemas Corporativos E ERP",
      "Suporte A Sistemas De Saúde",
      "Suporte Técnico N1/N2",
      "Trabalho Em Equipe",
      "Trabalho Remoto",
    ],

    /* ------------------------------------------------
       IDIOMAS
       Adicione objetos { idioma, nivel } conforme necessário.
       Níveis sugeridos: Básico | Intermediário | Avançado | Fluente
       ------------------------------------------------ */
    idiomas: [{ idioma: "Inglês", nivel: "Intermediário" }],

    /* ------------------------------------------------
       TELEFONES PARA RECADOS
       Contatos alternativos para recado.
       Adicione ou remova objetos { numero, contato }.
       ------------------------------------------------ */
    telefones: [
      { numero: "(24) 9 9906-3455", contato: "Felipe" },
      { numero: "(24) 9 9953-5554", contato: "Clarissa" },
    ],

    /* ------------------------------------------------
       DISPONIBILIDADE
       Atualize conforme mudanças na situação profissional.
       ------------------------------------------------ */
    dispViagem: "Sim",
    dispCidades:
      "Sim — Cidades do Sul Fluminense, Vale do Paraíba e interior do estado de São Paulo",
    dispPeriodos: "Manhã, Tarde, Noite, Sábado e Domingo",

    /* ------------------------------------------------
       MOBILIDADE
       Atualize categoria e situação da CNH conforme necessário.
       CNH e número foram ocultados por serem dados sensíveis.
       ------------------------------------------------ */
    habilitacao: "Sim",
    categoria: "AB",
    carro: "Sim",

    /* ------------------------------------------------
       OBSERVAÇÕES
       Informações adicionais exibidas no final do currículo.
       Adicione ou remova objetos { label, valor }.
       ------------------------------------------------ */
    observacoes: [
      { label: "Altura", valor: "1,75m" },
      { label: "Peso", valor: "70Kg" },
    ],
  };

  /* ================================================
     SEÇÃO 2 — GERAÇÃO DO HTML
     Monta o modal dinamicamente a partir do objeto dados.
     Evite editar esta seção diretamente — prefira
     alterar os dados na SEÇÃO 1 acima.
     ================================================ */

  function gerarHTML() {
    return `
      <button class="resume-modal__close" id="resumeClose" aria-label="Fechar currículo">×</button>

      <div class="resume__header">
        <img src="${dados.foto}" alt="Foto de ${dados.nome}" class="resume__photo"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
        <div class="resume__photo-placeholder" style="display:none">
          ${dados.nome
            .split(" ")
            .map((n) => n[0])
            .slice(0, 2)
            .join("")}
        </div>
        <div class="resume__header-info">
          <h2>${dados.nome}</h2>
          <div class="resume__header-meta">
            ${dados.subtitulo}<br/>
            ${dados.contato}
          </div>
        </div>
      </div>

      <div class="resume__body">

        <!-- DADOS PESSOAIS -->
        <div class="resume__section">
          <div class="resume__section-title">Dados Pessoais</div>
          <div class="resume__data-grid">
            <div class="resume__data-item"><strong>Nome:</strong> ${dados.pessoais.nome}</div>
            <div class="resume__data-item"><strong>Celular:</strong> ${dados.pessoais.celular}</div>
            <div class="resume__data-item"><strong>E-mail:</strong> ${dados.pessoais.email}</div>
            <div class="resume__data-item"><strong>Nascimento:</strong> ${dados.pessoais.nascimento}</div>
            <div class="resume__data-item"><strong>Gênero:</strong> ${dados.pessoais.genero}</div>
            <div class="resume__data-item"><strong>Estado Civil:</strong> ${dados.pessoais.estadoCivil}</div>
            <div class="resume__data-item"><strong>Escolaridade:</strong> ${dados.pessoais.escolaridade}</div>
            <div class="resume__data-item"><strong>Filhos:</strong> ${dados.pessoais.filhos}</div>
            <div class="resume__data-item"><strong>PCD:</strong> ${dados.pessoais.pcd}</div>
          </div>
        </div>

        <!-- PRETENSÕES -->
        <div class="resume__section">
          <div class="resume__section-title">Pretensões</div>
          <div class="resume__pretensoes-grid">
            ${dados.pretensoes
              .map(
                (p) => `
              <div class="resume__pretensao-item">
                <span class="funcao">Função: ${p.funcao}</span><br/>
                Experiência: ${p.experiencia}
              </div>
            `,
              )
              .join("")}
          </div>
          <div class="resume__pretensao-info" style="margin-top:10px;">
            <span><strong>Pretensão salarial:</strong> ${dados.salarioPretendido}</span>
            <span><strong>Empregado atualmente:</strong> ${dados.empregado}</span>
            <span><strong>Aceita estágio:</strong> ${dados.estagio}</span>
            <span><strong>Aceita home-office:</strong> ${dados.homeOffice}</span>
            <span><strong>Aceita viajar pela empresa:</strong> ${dados.aceitaViagem}</span>
          </div>
        </div>

        <!-- EXPERIÊNCIA PROFISSIONAL -->
        <div class="resume__section">
          <div class="resume__section-title">Experiência Profissional</div>
          ${dados.experiencias
            .map(
              (e) => `
            <div class="resume__exp-item">
              <div class="resume__exp-header">
                <span class="resume__exp-funcao">Função: ${e.funcao}</span>
                <span class="resume__exp-salario">Remuneração: ${e.salario}</span>
                <span class="resume__exp-ramo">Ramo: ${e.ramo}</span>
              </div>
              <div class="resume__exp-empresa">
                <strong>Empresa: ${e.empresa}</strong> &nbsp; Período: ${e.periodo}
              </div>
              <div class="resume__exp-desc">Principais atividades: ${e.descricao}</div>
            </div>
          `,
            )
            .join("")}
        </div>

        <!-- ESCOLARIDADE -->
        <div class="resume__section">
          <div class="resume__section-title">Escolaridade</div>
          <div class="resume__escola-grid">
            ${dados.escolaridade
              .map(
                (e) => `
              <div class="resume__escola-item">
                <strong>Nível: ${e.nivel}</strong>
                Curso: ${e.curso}<br/>
                Instituição: ${e.instituicao}<br/>
                ${e.conclusao ? `Ano de conclusão: ${e.conclusao}<br/>` : ""}
                ${e.situacao ? `Situação: ${e.situacao}<br/>` : ""}
                Cidade: ${e.cidade}
              </div>
            `,
              )
              .join("")}
          </div>
        </div>

        <!-- CURSOS -->
        <div class="resume__section">
          <div class="resume__section-title">Cursos & Certificações</div>
          <div class="resume__cursos-grid">
            ${dados.cursos
              .map(
                (c) => `
              <div class="resume__curso-item">
                <strong>Curso: ${c.nome}</strong>
                Instituição: ${c.instituicao}<br/>
                ${c.carga ? `Carga horária: ${c.carga}<br/>` : ""}
                ${c.conclusao ? `Ano de conclusão: ${c.conclusao}` : ""}
              </div>
            `,
              )
              .join("")}
          </div>
        </div>

        <!-- HABILIDADES -->
        <div class="resume__section">
          <div class="resume__section-title">Habilidades</div>
          <div class="resume__habilidades">
            ${dados.habilidades
              .map(
                (h) => `
              <span class="resume__habilidade-tag">${h}</span>
            `,
              )
              .join("")}
          </div>
        </div>

        <!-- IDIOMAS -->
        <div class="resume__section">
          <div class="resume__section-title">Idiomas</div>
          ${dados.idiomas
            .map(
              (i) => `
            <div class="resume__info-simples">
              Idioma: <strong>${i.idioma}</strong> &nbsp; Nível: ${i.nivel}
            </div>
          `,
            )
            .join("")}
        </div>

        <!-- TELEFONES PARA RECADOS -->
        <div class="resume__section">
          <div class="resume__section-title">Telefone para recados</div>
          <div class="resume__telefones-grid">
            ${dados.telefones
              .map(
                (t) => `
              <div>
                Número: <strong>${t.numero}</strong><br/>
                Falar com: ${t.contato}
              </div>
            `,
              )
              .join("")}
          </div>
        </div>

        <!-- DISPONIBILIDADE -->
        <div class="resume__section">
          <div class="resume__section-title">Disponibilidade</div>
          <div class="resume__info-simples">
            Disponível para viagem: <strong>${dados.dispViagem}</strong><br/>
            Disponível para trabalhar em outra cidade: <strong>${dados.dispCidades}</strong><br/>
            Período disponível: ${dados.dispPeriodos}
          </div>
        </div>

        <!-- MOBILIDADE -->
        <div class="resume__section">
          <div class="resume__section-title">Mobilidade</div>
          <div class="resume__inline-grid">
            <span>Possui habilitação: <strong>${dados.habilitacao}</strong></span>
            <span>Categoria: <strong>${dados.categoria}</strong></span>
            <span>Possui carro: <strong>${dados.carro}</strong></span>
          </div>
        </div>

        <!-- OBSERVAÇÕES -->
        <div class="resume__section">
          <div class="resume__section-title">Observações</div>
          <div class="resume__obs">
            ${dados.observacoes.map((o) => `${o.label}: <strong>${o.valor}</strong>`).join(" &nbsp; ")}
          </div>
        </div>

        <!-- RODAPÉ COM BOTÕES DE AÇÃO -->
        <div class="resume__footer">
          <a href="assets/docs/curriculo-felipe-louzada-ats.pdf" download class="resume__btn-download">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download (ATS)
          </a>
          <a href="assets/docs/curriculo-felipe-louzada.pdf" download class="resume__btn-download">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download PDF
          </a>
          <button class="resume__btn-close-bottom" id="resumeCloseBottom">
            Fechar
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

      </div>
    `;
  }

  /* ================================================
     SEÇÃO 3 — INICIALIZAÇÃO DO MODAL
     Cria o overlay, injeta o HTML gerado e registra
     todos os eventos de abertura e fechamento.
     Não é necessário editar esta seção.
     ================================================ */

  function init() {
    const overlay = document.createElement("div");
    overlay.classList.add("resume-overlay");
    overlay.id = "resumeOverlay";

    const modal = document.createElement("div");
    modal.classList.add("resume-modal");
    modal.innerHTML = gerarHTML();

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Abre o modal ao clicar no botão "Ver currículo"
    const trigger = document.getElementById("resumeBtn");
    if (trigger) {
      trigger.addEventListener("click", () => {
        overlay.classList.add("is-open");
        document.body.style.overflow = "hidden";
      });
    }

    // Fecha pelo botão X do topo
    document.getElementById("resumeClose").addEventListener("click", fechar);

    // Fecha pelo botão "Fechar" do rodapé
    document
      .getElementById("resumeCloseBottom")
      .addEventListener("click", fechar);

    // Fecha ao clicar fora do modal (no overlay)
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) fechar();
    });

    // Fecha ao pressionar ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") fechar();
    });

    function fechar() {
      overlay.classList.remove("is-open");
      document.body.style.overflow = "";
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();
