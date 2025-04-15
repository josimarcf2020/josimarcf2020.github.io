document.addEventListener('DOMContentLoaded', () => {
    const detalhamento = document.getElementById('detalhamento');

    txtHabilidades = '<h3>Habilidades Técnicas</h3>';
    txtHabilidades += '<ul><li><strong>Desenvolvimento de Aplicativos iOS</strong>: Proficiência em desenvolvimento para dispositivos iOS utilizando Swift e SwiftUI, com experiência em ferramentas como Xcode.</li>';
    txtHabilidades += '<li><strong>Gestão de Interface (Front-end)</strong>: Criação de views alinhadas a especificações de design, conectando-as a modelos via ViewModels (VMC).</li>';
    txtHabilidades += '<li><strong>Desenvolvimento de APIs</strong>: Criação e integração de APIs para consumo no backend, demonstrando conhecimento em comunicação entre front-end e back-end.</li>';
    txtHabilidades += '<li><strong>Controle de Versão</strong>: Uso avançado de Git e GitHub para colaboração em equipe e versionamento de código.</li>';
    txtHabilidades += '<li><strong>Banco de Dados</strong>: Experiência com Core Data, MongoDB, Firebase e bancos relacionais como MySQL, aplicados em diferentes projetos.</li>';
    txtHabilidades += '<li><strong>Frameworks e Bibliotecas</strong>: Utilização de Vapor (framework back-end em Swift) e outras tecnologias modernas para desenvolvimento full-stack.</li>';
    txtHabilidades += '<li><strong>Programação Legada</strong>: Conhecimento em linguagens como Clipper, Delphi e xHarbour para sistemas de gestão e suporte.</li>';
    txtHabilidades += '<li><strong>Integração de Sistemas</strong>: Habilidade em conectar front-end e back-end, além de processar arquivos de movimentação bancária para baixa de parcelas.</li>';
    txtHabilidades += '</ul>';
    txtHabilidades += '<h3>Habilidades Funcionais</h3>';
    txtHabilidades += '<ul><li><strong>Gestão de Projetos</strong>: Desenvolvimento de soluções como o CalmDesk e fProject, voltadas para gestão de demandas e comunicação em ambientes específicos.</li>';
    txtHabilidades += '<li><strong>Suporte de TI</strong>: Resolução de incidentes e suporte técnico em sistemas empresariais, como na Cooperativa Mista dos Avicultores do Piauí.</li>';
    txtHabilidades += '<li><strong>Automação de Processos</strong>: Criação de sistemas como o ADMESC, abrangendo controle financeiro, frequência escolar e emissão de boletins.</li>';
    txtHabilidades += '<li><strong>Análise de Requisitos</strong>: Colaboração com designers e equipes multifuncionais para traduzir especificações em soluções técnicas.</li>';
    txtHabilidades += '</ul>';
    txtHabilidades += '<h3>Habilidades Interpessoais</h3>';
    txtHabilidades += '<ul><li><strong>Trabalho em Equipe</strong>: Colaboração com equipes multifuncionais e desenvolvimento em dupla (ex.: APP de Notícias).</li>';
    txtHabilidades += '<li><strong>Resolução de Problemas</strong>: Desenvolvimento de soluções práticas para gestão escolar, comunicação doméstica e demandas empresariais.</li>';
    txtHabilidades += '<li><strong>Adaptabilidade</strong>: Transição entre tecnologias modernas (Swift, Firebase) e legadas (Clipper, Delphi), mostrando versatilidade.</li>';
    txtHabilidades += '<li><strong>Atenção aos Detalhes</strong>: Implementação de filtros em aplicativos (ex.: APP de Notícias) e gestão precisa de dados financeiros e escolares.</li>';
    txtHabilidades += '</ul>';

    txtExperiencia =  '<h3>Experiência Profissional</h3>';
    txtExperiencia += '<ul>';
    txtExperiencia += ' <li><strong>Residente - Projeto Restic 12 Instituto iRede - Jul de 2024 - Dez de 2024</strong> <a href="./doc/Certificado JOSIMAR DA CUNHA FERREIRA - Residencia TIC 12.pdf" target="_blank">Certificado</a>';
    txtExperiencia += ' <ul>';
    txtExperiencia += '     <li>Desenvolvimento de aplicativos para dispositivos iOS utilizando Swift, framework SwiftUI, xCode.';
    txtExperiencia += '     <li>Colaboração com equipes multifuncionais para criar views seguindo definições estabelecidas pelos designers, utilizando GIT/GITHUB.';
    txtExperiencia += '     <li>Codificação de rotinas para conectar as views aos modelos através de ViewModels VMC.';
    txtExperiencia += '     <li>Desenvolvimento de API para consumo no backend.';
    txtExperiencia += '     <li>Integração Front e Backend.</li>';
    txtExperiencia += '     <li>Desenvolvimento de API para consumo no backend.';
    txtExperiencia += '     <li>Integração Front e Backend.</li>';
    txtExperiencia += '     <li>Projetos desenvolvidos:</li>';
    txtExperiencia += '     <ul>';
    txtExperiencia += '         <li><strong>APP de Notícias</strong>: Aplicativo em duas telas desenvolvido em Swift, consumindo API <a href="https://newsapi.org/">News API</a>, onde a primeira tela exibe uma listagem de noticias (que pode ser filtrada) e a segunda detalha a noticia selecionada.</li>';
    txtExperiencia += '         <ul>';
    txtExperiencia += '             <li>Recursos: xCode, desenvolvimento em dupla, Core Data</li>';
    txtExperiencia += '         </ul>';
    txtExperiencia += '         <li><strong>fProject</strong>: Nome comercial indefinido, desenvolvido em Swift como solução doméstica para a gestão da comunicação entre alunos e gestores dos projetos</li>';
    txtExperiencia += '         <ul>';
    txtExperiencia += '             <li>Recursos: xCode, SwiftUI, MongoDB, Git/Github, Vapor</li>';
    txtExperiencia += '         </ul>';
    txtExperiencia += '         <li><strong>CalmDesk</strong>: Aplicativo para gestão de demandas genéricas em pequenas empresas, visando acompanhar as solicitações e destinar soluções cabíveis.</li>';
    txtExperiencia += '         <ul>';
    txtExperiencia += '             <li>Recursos: xCode, Swift, SwiftUI, Firebase, Git/Github</li>';
    txtExperiencia += '         </ul>';
    txtExperiencia += '         <li><strong>APP de Notícias</strong>: Aplicativo em duas telas desenvolvido em Swift, consumindo API <a href="https://newsapi.org/">News API</a>, onde a primeira tela exibe uma listagem de noticias (que pode ser filtrada) e a segunda detalha a noticia selecionada.</li>';
    txtExperiencia += '     </ul>';
    txtExperiencia += '  </ul>';
    txtExperiencia += '  <li><strong>Programador Júnior - Cooperativa Mista dos Avicultores do Piauí | Jan 2007 - Abr 2007</strong>';
    txtExperiencia += '  <ul>';
    txtExperiencia += '      <li>Desenvolvimento de Sistema de TI, prestando atendimento aos incidentes gerados pelo uso do sistema adotado pela empresa. Linguagem xHarbour, Delphi, SGDB MySql.';
    txtExperiencia += '  </ul>';
    txtExperiencia += '  <li><strong>Programador Senior - AESPI Assoc de Ensino Superior do Piauí LTDA | Ago 1996 - Abr 2000</strong>';
    txtExperiencia += '  <ul>';
    txtExperiencia += '      <li>Desenvolvimento de Sistema de Gestão Escolar ADMESC, em linguagem Clipper, envolvendo desde o controle e acesso (frequencia escolar) via catraca eletrônica, controle financeiro, controle de notas e faltas, emissão de boletim escolar, realização de teste admissional escolar (teste seletivo), baixa de parcelas através de processamento de arquivo de movimentação bancária, e demais tarefas pertinentes e rotina escolar.</li>';
    txtExperiencia += '      <li>Linguagem Clipper, Delphi, banco de dados relacional.</li>';
    txtExperiencia += '  </ul>';
    txtExperiencia += ' </ul>';
    txtExperiencia += '</ul>';

    txtEducacao = '<h3>Educação</h3>';
    txtEducacao += '<ul>';
    txtEducacao += ' <li><strong>Técnico em Desenvolvimento de Sistemas - SENAI</strong>, Fortaleza-CE centro | 2023 <a href="./doc/000168 - JOSIMAR DA CUNHA FERREIRA Diplona SENAI-Assinado.pdf" target="_blank">Certificado</a></li>';
    txtEducacao += ' <li><strong>Técnico em Processamento de Dados - Escola Téc Est Pref. João Mendes Olímpio de Melo</strong> - Teresina Piauí | Mar 1993 - Nov 1995 <a href="./doc/Certificado PD Josimar Ferreira.pdf" target="_blank">Certificado</a></li>';
    txtEducacao += ' <li><strong>Graduação: Análise e Desenvolvimento de Sistemas - Faculdade CDL</strong> Fortaleza-CE TRANCADO 3º Periodo</li>';
    txtEducacao += '</ul>';

    txtSobreMim = '<h3>Sobre mim</h3>';
    txtSobreMim += '<p>Desenvolvedor Fullstack, moro em Fortaleza-CE. Desenvolvo sistemas desde 1996, iniciei programando em linguagem Clipper, hoje estou adaptado às novas stacks (Java, Swift, Kotlin). Gosto de novos desafios, que sempre me motivam renovando o desejo de adquirir mais conhecimentos. Busco novos desafios, resiliente, prezo pelas boas práticas, considero o planejamento uma fase fundamental para o bom desenvolvimento do projeto, naturalmente sou muito focado em minhas tarefas, porém sempre procuro cooperar com o time quando solicitado, observador e de personalidade reservada sou algumas vezes interpretado equivocadamente como uma pessoa introvertida, mas na verdade procuro saber antes onde estou pisando.</p>';    

    txtContatos = '<h3>Contatos</h3>';
    txtContatos += '<ul>';
    txtContatos += '<li>E-mail: <a href="mailto:jcfcavile@gmail.com">jcfcavile@gmail.com</a></li>';
    txtContatos += '<li>LinkedIn: <a href="https://www.linkedin.com/in/josimar-da-cunha-ferreira-7979b0176/" target="_blank">https://www.linkedin.com/in/josimar-da-cunha-ferreira-7979b0176/</a></li>';
    txtContatos += '<li>Github: <a href="https://github.com/josimarcf2020" target="_blank">https://github.com/josimarcf2020</a></li>';
    txtContatos += '<li>Telefone: +55 85 99856-9888 <img src="./img/whatsapp icon logo_3584844.png" id="img-whatsapp" alt=""></li>';
    txtContatos += '<li>Localização: Brasil, Ceará, Fortaleza</li>';
    txtContatos += '</ul>';

    const conteudo = {
        habilidades: txtHabilidades,
        experiencia: txtExperiencia,
        educacao: txtEducacao,
        sobremim: txtSobreMim,
        contatos: txtContatos
    };

    document.querySelectorAll('.btn-secondary').forEach(button => {
        button.addEventListener('click', () => {
            const action = button.getAttribute('data-action');
            detalhamento.innerHTML = conteudo[action] || '<p>Conteúdo não disponível</p>';
            alert('Role o conteúdo para cima.')
        });
    });
});
