/* js/resume.js — Modal de currículo completo */
(function () {

  /* ================================================
     DADOS DO CURRÍCULO
     Preencha cada campo abaixo com suas informações
     ================================================ */

  const dados = {

    /* --- CABEÇALHO --- */
    nome:        'Felipe Silveira Louzada',          // Seu nome completo
    foto:        'assets/img/profile-photo.jpg',     // Caminho da sua foto
    subtitulo:   'Técnico/Pós-Médio Completo | Barra Mansa/RJ | 31 anos | Solteiro(a)',  // Linha sob o nome
    contato:     '24 999063455 | felipe.louzada18@gmail.com',  // Telefone e e-mail no cabeçalho

    /* --- DADOS PESSOAIS --- */
    pessoais: {
      nome:          'Felipe Silveira Louzada',
      celular:       '24 999063455',
      email:         'felipe.louzada18@gmail.com',
      nascimento:    '24/10/1994 – 31 anos',
      cpf:           '144.196.477-01',
      genero:        'Masculino',
      escolaridade:  'Técnico/Pós-Médio Completo',
      estadoCivil:   'Solteiro(a)',
      filhos:        'Não',
      pcd:           'Não',
      // --- ENDEREÇO ---
      cep:           '27.332-350',
      numero:        '578',
      complemento:   'Casa',
      cidade:        'Barra Mansa/RJ',
      bairro:        'Boa Vista',
      rua:           'Mauro Granato',
    },

    /* --- PRETENSÕES --- */
    // Adicione ou remova objetos conforme necessário
    pretensoes: [
      { funcao: 'Torneiro Mecânico',           experiencia: 'Não possuo experiência' },
      { funcao: 'Técnico de Suporte de Sistemas', experiencia: 'Não possuo experiência' },
      { funcao: 'Ajudante de Torneiro Mecânico', experiencia: 'Não possuo experiência' },
      { funcao: 'Técnico de Informática',       experiencia: '2 anos' },
    ],
    salarioPretendido: 'R$ 2.410,00',
    empregado:         'Sim',
    estagio:           'Não',
    homeOffice:        'Sim',

    /* --- EXPERIÊNCIA PROFISSIONAL --- */
    // Adicione ou remova objetos conforme necessário
    experiencias: [
      {
        funcao:    'Aprendiz',
        salario:   'R$ 844,36',
        ramo:      'Veículos',
        empresa:   'Viação Sul Fluminense',
        periodo:   'De 17/07/2016 até 17/07/2017 | 1 ano',
        descricao: 'Cobrador responsável por receber e conferir o pagamento das passagens, auxiliar os passageiros com informações e garantir o correto fluxo de embarque dentro do veículo.',
      },
      {
        funcao:    'Almoxarife',
        salario:   'R$ 1.218,28',
        ramo:      'Veículos',
        empresa:   'S&a Transportes',
        periodo:   'De 13/09/2018 até 29/06/2019 | 9 meses',
        descricao: 'Controle de estoque e ordens de serviço. Peças e ferramentas para manutenção da frota de caminhões do transporte logístico rodoviário.',
      },
      {
        funcao:    'Auxiliar Técnico de Campo',
        salario:   'R$ 1.215,41',
        ramo:      'Telecomunicações',
        empresa:   'Supernova Telecom',
        periodo:   'De 03/09/2015 até 03/12/2015 | 3 meses',
        descricao: 'Fui responsável por instalar, configurar e testar equipamentos e conexões, além de orientar o cliente e solucionar possíveis problemas de funcionamento.',
      },
      {
        funcao:    'Técnico de Informática',
        salario:   'R$ 2.515,22',
        ramo:      'Administração Pública',
        empresa:   'Prefeitura de Barra Mansa',
        periodo:   'De 12/05/2023 até 12/05/2025 | 2 anos',
        descricao: 'Responsável por instalar, manter e dar suporte aos sistemas e equipamentos de TI, garantindo o funcionamento das redes, computadores e serviços digitais utilizados pelas unidades de saúde.',
      },
      {
        funcao:    'Técnico de Manutenção de Máquinas',
        salario:   'R$ 1.820,69',
        ramo:      'Comércio',
        empresa:   'Reimaq Balanças',
        periodo:   'De 18/09/2021 até 11/05/2023 | 1 ano e 8 meses',
        descricao: 'Manutenção mecânica, elétrica e eletrônica em equipamentos comerciais, diagnóstico, calibração e ajustes em balanças comerciais e equipamentos de processamento, manutenção preventiva e corretiva com identificação de falhas e substituição de componentes.',
      },
    ],

    /* --- ESCOLARIDADE --- */
    // Adicione ou remova objetos conforme necessário
    escolaridade: [
      { nivel: 'Técnico/Pós-Médio Completo', curso: 'Técnico em Eletrônica',   instituicao: 'UNICORP',  conclusao: '2026', cidade: 'Barra Mansa/RJ' },
      { nivel: 'Técnico/Pós-Médio Completo', curso: 'Técnico em Informática',  instituicao: 'UNICORP',  conclusao: '2025', cidade: 'Barra Mansa/RJ' },
      { nivel: 'Superior Completo',          curso: 'Sistemas para Internet',  instituicao: 'FAETERJ', conclusao: '2025', cidade: 'Barra Mansa/RJ' },
      { nivel: 'Superior Incompleto',        curso: 'Engenharia Civil',        instituicao: 'UBM',      conclusao: '',     cidade: 'Barra Mansa/RJ', situacao: 'Trancado' },
      { nivel: 'Superior Incompleto',        curso: 'Engenharia Civil',        instituicao: 'UBM – Centro Universitário de Barra Mansa', conclusao: '', cidade: 'Barra Mansa/RJ', situacao: 'Cursando' },
      { nivel: 'Superior Incompleto',        curso: 'Engenharia Civil',        instituicao: 'UBM – Centro Universitário de Barra Mansa', conclusao: '', cidade: 'Barra Mansa/RJ', situacao: 'Cursando' },
    ],

    /* --- CURSOS --- */
    // Adicione ou remova objetos conforme necessário
    cursos: [
      { nome: 'Hardware e Sistema Operacional', instituicao: 'HRBR Cursos', carga: '20h', conclusao: '2024' },
      { nome: 'Infraestrutura e Redes',         instituicao: 'Udemy',       carga: '25h', conclusao: '2024' },
      { nome: 'Modelo OSI',                     instituicao: 'HRBR Cursos', carga: '10h', conclusao: '2024' },
    ],

    /* --- HABILIDADES --- */
    // Adicione ou remova strings conforme necessário
    habilidades: [
      'Adaptabilidade A Novos Ambientes E Tecnologias',
      'Administração De Redes Lan/wan',
      'Atenção Aos Detalhes',
      'Atendimento E Suporte Ao Usuário Final',
      'Autocad — Projetos Técnicos E Plantas Baixas',
      'Comprometimento Com Prazos E Qualidade',
      'Comunicação Técnica Clara E Objetiva',
      'Confiabilidade E Consistência Na Entrega',
      'Configuração De Switches E Roteadores',
      'Consultas E Modelagem De Banco De Dados Com Postgresql',
      'Desenvolvimento Web Com Html E Css',
      'Diagnóstico E Resolução De Incidentes',
      'Diplomacia E Gestão De Conflitos',
      'Documentação Técnica De Procedimentos',
      'Empatia Com Usuários De Diferentes Níveis Técnicos',
      'Foco Em Melhoria Contínua',
      'Gerenciamento De Backups E Nas/raid',
      'Gestão De Chamados Com Jira Service Management',
      'Gestão De Projetos De Infraestrutura De Ti',
      'Instalação E Configuração De Softwares',
      'Itil 4 — Boas Práticas De Gestão De Serviços De Ti',
      'Manutenção Preventiva E Corretiva De Hardware',
      'Noções De Apis E Integrações Http',
      'Organização E Gestão Do Tempo',
      'Paciência No Atendimento Ao Usuário',
      'Proatividade Na Identificação De Melhorias',
      'Raciocínio Analítico E Lógico',
      'Resolução De Problemas Sob Pressão',
      'Segurança Da Informação E Controle De Acesso',
      'Suporte A Sistemas Corporativos E Erp',
      'Suporte Técnico N1/n2',
    ],

    /* --- IDIOMAS --- */
    // Adicione ou remova objetos conforme necessário
    idiomas: [
      { idioma: 'Inglês', nivel: 'Intermediário' },
    ],

    /* --- TELEFONES PARA RECADOS --- */
    // Adicione ou remova objetos conforme necessário
    telefones: [
      { numero: '(24) 9 9203 8622', contato: 'Felipe' },
      { numero: '(24) 9 9953 5556', contato: 'Clarissa' },
    ],

    /* --- DISPONIBILIDADE --- */
    dispViagem:    'Sim',
    dispCidades:   'Sim – Volta Redonda, Resende, Porto Real, Quatis, São José dos Campos',
    dispPeriodos:  'Domingo, Manhã, Noite, Sábado e Tarde',

    /* --- MOBILIDADE --- */
    habilitacao:   'Sim',
    categoria:     'AB',
    cnh:           '06250424343',
    carro:         'Sim',

    /* --- OBSERVAÇÕES --- */
    // Altura, peso ou qualquer observação adicional
    observacoes: [
      { label: 'Altura', valor: '1,75m' },
      { label: 'Peso',   valor: '70Kg' },
    ],

  };

  /* ================================================
     GERAÇÃO DO HTML — não precisa editar abaixo
     ================================================ */

  function gerarHTML() {
    return `
      <button class="resume-modal__close" id="resumeClose" aria-label="Fechar currículo">×</button>

      <div class="resume__header">
        <img src="${dados.foto}" alt="Foto de ${dados.nome}" class="resume__photo"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
        <div class="resume__photo-placeholder" style="display:none">
          ${dados.nome.split(' ').map(n => n[0]).slice(0,2).join('')}
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
            ${dados.pretensoes.map(p => `
              <div class="resume__pretensao-item">
                <span class="funcao">Função: ${p.funcao}</span><br/>
                Experiência: ${p.experiencia}
              </div>
            `).join('')}
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
          ${dados.experiencias.map(e => `
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
          `).join('')}
        </div>

        <!-- ESCOLARIDADE -->
        <div class="resume__section">
          <div class="resume__section-title">Escolaridade</div>
          <div class="resume__escola-grid">
            ${dados.escolaridade.map(e => `
              <div class="resume__escola-item">
                <strong>Nível: ${e.nivel}</strong>
                Curso: ${e.curso}<br/>
                Instituição: ${e.instituicao}<br/>
                ${e.conclusao ? `Ano de conclusão: ${e.conclusao}<br/>` : ''}
                ${e.situacao  ? `Situação: ${e.situacao}<br/>` : ''}
                Cidade: ${e.cidade}
              </div>
            `).join('')}
          </div>
        </div>

        <!-- CURSOS -->
        <div class="resume__section">
          <div class="resume__section-title">Cursos</div>
          <div class="resume__cursos-grid">
            ${dados.cursos.map(c => `
              <div class="resume__curso-item">
                <strong>Curso: ${c.nome}</strong>
                Instituição: ${c.instituicao}<br/>
                Carga horária: ${c.carga}<br/>
                Ano de conclusão: ${c.conclusao}
              </div>
            `).join('')}
          </div>
        </div>

        <!-- HABILIDADES -->
        <div class="resume__section">
          <div class="resume__section-title">Habilidades</div>
          <div class="resume__habilidades">
            ${dados.habilidades.map(h => `
              <span class="resume__habilidade-tag">${h}</span>
            `).join('')}
          </div>
        </div>

        <!-- IDIOMAS -->
        <div class="resume__section">
          <div class="resume__section-title">Idiomas</div>
          ${dados.idiomas.map(i => `
            <div class="resume__info-simples">
              Idioma: <strong>${i.idioma}</strong> &nbsp; Nível: ${i.nivel}
            </div>
          `).join('')}
        </div>

        <!-- TELEFONES PARA RECADOS -->
        <div class="resume__section">
          <div class="resume__section-title">Telefone para recados</div>
          <div class="resume__telefones-grid">
            ${dados.telefones.map(t => `
              <div>
                Número: <strong>${t.numero}</strong><br/>
                Falar com: ${t.contato}
              </div>
            `).join('')}
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
            ${dados.observacoes.map(o => `${o.label}: <strong>${o.valor}</strong>`).join(' &nbsp; ')}
          </div>
        </div>

      </div>
    `;
  }

  /* ================================================
     INICIALIZAÇÃO DO MODAL
     ================================================ */

  function init() {
    // Cria overlay e modal
    const overlay = document.createElement('div');
    overlay.classList.add('resume-overlay');
    overlay.id = 'resumeOverlay';

    const modal = document.createElement('div');
    modal.classList.add('resume-modal');
    modal.innerHTML = gerarHTML();

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Botão trigger
    const trigger = document.getElementById('resumeBtn');
    if (trigger) {
      trigger.addEventListener('click', () => {
        overlay.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      });
    }

    // Fechar pelo botão X
    document.getElementById('resumeClose').addEventListener('click', fechar);

    // Fechar clicando fora do modal
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) fechar();
    });

    // Fechar com ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') fechar();
    });

    function fechar() {
      overlay.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  }

  document.addEventListener('DOMContentLoaded', init);

})();