/* js/resume.js — Modal de currículo completo */
(function () {
  /* ================================================
      DADOS DO CURRÍCULO
     ================================================ */

  const dados = {
    /* --- CABEÇALHO --- */
    nome: "Felipe Silveira Louzada",
    foto: "assets/img/profile-photo.jpg",
    subtitulo:
      "Técnico/Pós-Médio Completo | Barra Mansa/RJ | 31 anos | Solteiro(a)", // Linha sob o nome
    contato: "24 999063455 | felipe.louzada18@gmail.com", // Telefone e e-mail no cabeçalho

    /* --- DADOS PESSOAIS --- */
    pessoais: {
      nome: "Felipe Silveira Louzada",
      celular: "24 999063455",
      email: "felipe.louzada18@gmail.com",
      nascimento: "24/10/1994 – 31 anos",
      cpf: "",
      genero: "Masculino",
      escolaridade: "Técnico/Pós-Médio Completo",
      estadoCivil: "Solteiro(a)",
      filhos: "Não",
      pcd: "Não",
      // --- ENDEREÇO ---
      cep: "",
      numero: "",
      complemento: "",
      cidade: "",
      bairro: "",
      rua: "",
    },

    /* --- PRETENSÕES --- */
    pretensoes: [
      { funcao: "", experiencia: "" },
      { funcao: "", experiencia: "" },
      { funcao: "", experiencia: "" },
      { funcao: "Técnico de Informática", experiencia: "2 anos" },
    ],
    salarioPretendido: "R$ 2.800,00",
    empregado: "Sim",
    estagio: "Não",
    homeOffice: "Sim",

    /* --- EXPERIÊNCIA PROFISSIONAL --- */
    experiencias: [
      {
        funcao: "",
        salario: "",
        ramo: "",
        empresa: "",
        periodo: "De 17/07/2016 até 17/07/2017 | 1 ano",
        descricao: "",
      },
      {
        funcao: "",
        salario: "",
        ramo: "",
        empresa: "",
        periodo: "",
        descricao: "",
      },
      {
        funcao: "",
        salario: "",
        ramo: "",
        empresa: "",
        periodo: "",
        descricao: "",
      },
      {
        funcao: "Técnico de Informática",
        salario: "R$ 2.515,22",
        ramo: "Administração Pública",
        empresa: "Prefeitura de Barra Mansa",
        periodo: "De 12/05/2023 até 12/05/2025 | 2 anos",
        descricao:
          "Responsável por instalar, manter e dar suporte aos sistemas e equipamentos de TI, garantindo o funcionamento das redes, computadores e serviços digitais utilizados pelas unidades de saúde.",
      },
      {
        funcao: "Técnico de Manutenção de Máquinas",
        salario: "R$ 1.820,69",
        ramo: "Comércio",
        empresa: "Reimaq Balanças",
        periodo: "De 18/09/2021 até 11/05/2023 | 1 ano e 8 meses",
        descricao:
          "Manutenção mecânica, elétrica e eletrônica em equipamentos comerciais, diagnóstico, calibração e ajustes em balanças comerciais e equipamentos de processamento, manutenção preventiva e corretiva com identificação de falhas e substituição de componentes.",
      },
    ],

    /* --- ESCOLARIDADE --- */
    escolaridade: [
      {
        nivel: "Técnico/Pós-Médio Completo",
        curso: "Técnico em Eletrônica",
        instituicao: "UNICORP",
        conclusao: "2026",
        cidade: "Barra Mansa/RJ",
      },
      {
        nivel: "Técnico/Pós-Médio Completo",
        curso: "Técnico em Informática",
        instituicao: "UNICORP",
        conclusao: "2025",
        cidade: "Barra Mansa/RJ",
      },
      {
        nivel: "Superior Completo",
        curso: "Sistemas para Internet",
        instituicao: "FAETERJ",
        conclusao: "2025",
        cidade: "Barra Mansa/RJ",
      },
      {
        nivel: "Superior Incompleto",
        curso: "Engenharia Civil",
        instituicao: "UBM",
        conclusao: "",
        cidade: "Barra Mansa/RJ",
        situacao: "Trancado",
      },
      {
        nivel: "Superior Incompleto",
        curso: "Engenharia Civil",
        instituicao: "UBM – Centro Universitário de Barra Mansa",
        conclusao: "",
        cidade: "Barra Mansa/RJ",
        situacao: "Cursando",
      },
      {
        nivel: "Superior Incompleto",
        curso: "Engenharia Civil",
        instituicao: "UBM – Centro Universitário de Barra Mansa",
        conclusao: "",
        cidade: "Barra Mansa/RJ",
        situacao: "Cursando",
      },
    ],

    /* --- CURSOS --- */
    cursos: [
      {
        nome: "Hardware e Sistema Operacional",
        instituicao: "HRBR Cursos",
        carga: "20h",
        conclusao: "2024",
      },
      {
        nome: "Infraestrutura e Redes",
        instituicao: "Udemy",
        carga: "25h",
        conclusao: "2024",
      },
      {
        nome: "Modelo OSI",
        instituicao: "HRBR Cursos",
        carga: "10h",
        conclusao: "2024",
      },
    ],

    /* --- HABILIDADES --- */
    habilidades: [
      "Adaptabilidade A Novos Ambientes E Tecnologias",
      "Administração De Redes Lan/wan",
      "Atenção Aos Detalhes",
      "Atendimento E Suporte Ao Usuário Final",
      "Autocad — Projetos Técnicos E Plantas Baixas",
      "Comprometimento Com Prazos E Qualidade",
      "Comunicação Técnica Clara E Objetiva",
      "Confiabilidade E Consistência Na Entrega",
      "Configuração De Switches E Roteadores",
      "Consultas E Modelagem De Banco De Dados Com Postgresql",
      "Desenvolvimento Web Com Html E Css",
      "Diagnóstico E Resolução De Incidentes",
      "Diplomacia E Gestão De Conflitos",
      "Documentação Técnica De Procedimentos",
      "Empatia Com Usuários De Diferentes Níveis Técnicos",
      "Foco Em Melhoria Contínua",
      "Gerenciamento De Backups E Nas/raid",
      "Gestão De Chamados Com Jira Service Management",
      "Gestão De Projetos De Infraestrutura De Ti",
      "Instalação E Configuração De Softwares",
      "Itil 4 — Boas Práticas De Gestão De Serviços De Ti",
      "Manutenção Preventiva E Corretiva De Hardware",
      "Noções De Apis E Integrações Http",
      "Organização E Gestão Do Tempo",
      "Paciência No Atendimento Ao Usuário",
      "Proatividade Na Identificação De Melhorias",
      "Raciocínio Analítico E Lógico",
      "Resolução De Problemas Sob Pressão",
      "Segurança Da Informação E Controle De Acesso",
      "Suporte A Sistemas Corporativos E Erp",
      "Suporte Técnico N1/n2",
    ],

    /* --- IDIOMAS --- */
    idiomas: [{ idioma: "Inglês", nivel: "Intermediário" }],

    /* --- TELEFONES PARA RECADOS --- */
    telefones: [
      { numero: "() 9  ", contato: "Felipe" },
      { numero: "() 9  ", contato: "" },
    ],

    /* --- DISPONIBILIDADE --- */
    dispViagem: "Sim",
    dispCidades:
      "Sim – Volta Redonda, Resende, Porto Real, Quatis, São José dos Campos",
    dispPeriodos: "Domingo, Manhã, Noite, Sábado e Tarde",

    /* --- MOBILIDADE --- */
    habilitacao: "Sim",
    categoria: "AB",
    cnh: "",
    carro: "Sim",

    /* --- OBSERVAÇÕES --- */
    // Altura, peso ou qualquer observação adicional
    observacoes: [
      { label: "Altura", valor: "1,75m" },
      { label: "Peso", valor: "70Kg" },
    ],
  };

  /* ================================================
      GERAÇÃO DO HTML
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
            <div class="resume__data-item"><strong>Endereço:</strong></div>
            <div class="resume__data-item"><strong>Gênero:</strong> ${dados.pessoais.genero}</div>
            <div class="resume__data-item"><strong>Escolaridade:</strong> ${dados.pessoais.escolaridade}</div>
            <div class="resume__data-item"><strong>CEP:</strong> ${dados.pessoais.cep} &nbsp; <strong>Número:</strong> ${dados.pessoais.numero}</div>
            <div class="resume__data-item"><strong>E-mail:</strong> ${dados.pessoais.email}</div>
            <div class="resume__data-item"><strong>Estado Civil:</strong> ${dados.pessoais.estadoCivil}</div>
            <div class="resume__data-item"><strong>Complemento:</strong> ${dados.pessoais.complemento}</div>
            <div class="resume__data-item"><strong>Data de Nascimento:</strong> ${dados.pessoais.nascimento}</div>
            <div class="resume__data-item"><strong>Filhos:</strong> ${dados.pessoais.filhos}</div>
            <div class="resume__data-item"><strong>Cidade/Estado:</strong> ${dados.pessoais.cidade}</div>
            <div class="resume__data-item"><strong>CPF:</strong> ${dados.pessoais.cpf}</div>
            <div class="resume__data-item"><strong>PCD:</strong> ${dados.pessoais.pcd}</div>
            <div class="resume__data-item"><strong>Bairro:</strong> ${dados.pessoais.bairro} &nbsp; <strong>Rua:</strong> ${dados.pessoais.rua}</div>
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
            <span><strong>Está empregado atualmente:</strong> ${dados.empregado}</span>
            <span><strong>Aceita estágio:</strong> ${dados.estagio}</span>
            <span><strong>Aceita home-office:</strong> ${dados.homeOffice}</span>
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
                <span class="resume__exp-salario">Último salário: ${e.salario}</span>
                <span class="resume__exp-ramo">Ramo: ${e.ramo}</span>
              </div>
              <div class="resume__exp-empresa">
                <strong>Empresa: ${e.empresa}</strong> &nbsp; Período: ${e.periodo}
              </div>
              <div class="resume__exp-desc">Principais tarefas: ${e.descricao}</div>
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
          <div class="resume__section-title">Cursos</div>
          <div class="resume__cursos-grid">
            ${dados.cursos
              .map(
                (c) => `
              <div class="resume__curso-item">
                <strong>Curso: ${c.nome}</strong>
                Instituição: ${c.instituicao}<br/>
                Carga horária: ${c.carga}<br/>
                Ano de conclusão: ${c.conclusao}
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
            <span>Categoria da habilitação: <strong>${dados.categoria}</strong></span>
            <span>Número da CNH: <strong>${dados.cnh}</strong></span>
            <span>Possui Carro: <strong>${dados.carro}</strong></span>
          </div>
        </div>

        <!-- OBSERVAÇÕES -->
        <div class="resume__section">
          <div class="resume__section-title">Observações</div>
          <div class="resume__obs">
            ${dados.observacoes.map((o) => `${o.label}: <strong>${o.valor}</strong>`).join(" &nbsp; ")}
          </div>
        </div>

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
      INICIALIZAÇÃO DO MODAL
     ================================================ */

  function init() {
    // Cria overlay e modal
    const overlay = document.createElement("div");
    overlay.classList.add("resume-overlay");
    overlay.id = "resumeOverlay";

    const modal = document.createElement("div");
    modal.classList.add("resume-modal");
    modal.innerHTML = gerarHTML();

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Botão trigger
    const trigger = document.getElementById("resumeBtn");
    if (trigger) {
      trigger.addEventListener("click", () => {
        overlay.classList.add("is-open");
        document.body.style.overflow = "hidden";
      });
    }

    // Fechar pelo botão X
    document.getElementById("resumeClose").addEventListener("click", fechar);

    // Fechar pelo botão inferior
    document
      .getElementById("resumeCloseBottom")
      .addEventListener("click", fechar);

    // Fechar clicando fora do modal
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) fechar();
    });

    // Fechar com ESC
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
