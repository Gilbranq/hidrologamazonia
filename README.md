/* ═══════════════════════════════════════════════
   HidroLog Amazônia — Conteúdo das Páginas Internas
   Carrega o HTML de cada seção dinamicamente
   Versão 1.0 | 2025
═══════════════════════════════════════════════ */

'use strict';

/* ─── SVGs helpers ─────────────────────────── */
var LOGO_SVG = '<svg viewBox="0 0 48 60" fill="none" width="30"><path d="M24 4C24 4,6 20,6 34C6 44,14 52,24 52C34 52,42 44,42 34C42 20,24 4,24 4Z" stroke="#3ECFA0" stroke-width="2" fill="transparent"/><path d="M10 34C14 28,19 40,24 34C29 28,34 40,38 34" stroke="#0D4A8A" stroke-width="2" stroke-linecap="round"/><path d="M10 42C14 36,19 48,24 42C29 36,34 48,38 42" stroke="#3ECFA0" stroke-width="2" stroke-linecap="round"/><circle cx="24" cy="38" r="2.5" fill="#3ECFA0"/></svg>';

/* ─── FOOTER compartilhado ─────────────────── */
var SHARED_FOOTER = '<footer>\
  <div class="footer-grid">\
    <div class="footer-brand"><span class="footer-brand-name">HidroLog Amazônia</span><p>Conectando o Amazonas pelos seus rios. Logística hidroviária inteligente para os 62 municípios do maior estado do Brasil.</p></div>\
    <div class="footer-col"><h4>Serviços</h4><ul><li><a onclick="showPage(\'servicos\')">Monitoramento Fluvial</a></li><li><a onclick="showPage(\'servicos\')">Roteirização</a></li><li><a onclick="showPage(\'servicos\')">Gestão de Carga</a></li><li><a onclick="showPage(\'servicos\')">Planos e Preços</a></li></ul></div>\
    <div class="footer-col"><h4>Empresa</h4><ul><li><a onclick="showPage(\'sobre\')">Sobre Nós</a></li><li><a onclick="showPage(\'cobertura\')">Cobertura</a></li><li><a onclick="showPage(\'tecnologia\')">Tecnologia</a></li><li><a onclick="showPage(\'contato\')">Contato</a></li></ul></div>\
    <div class="footer-col"><h4>Contato</h4><ul><li><a>Manaus, AM</a></li><li><a>contato@hidrolog.com.br</a></li><li><a>+55 92 9 9000-0000</a></li></ul></div>\
  </div>\
  <div class="footer-bottom"><span class="footer-copy">© 2025 HidroLog Amazônia. Todos os direitos reservados.</span><span class="footer-tagline">CONECTANDO O AMAZONAS PELOS SEUS RIOS</span></div>\
</footer>';

/* ─── CTA compartilhado ─────────────────────── */
function ctaBanner(h2, p, btn1text, btn1page, btn2text, btn2page) {
  var b2 = btn2text ? '<button class="btn-outline dark" onclick="showPage(\'' + btn2page + '\')">' + btn2text + '</button>' : '';
  return '<section class="cta-banner"><h2>' + h2 + '</h2><p>' + p + '</p><div class="cta-btns"><button class="btn-white" onclick="showPage(\'' + btn1page + '\')">' + btn1text + '</button>' + b2 + '</div></section>';
}

/* ═══════════════════════════════════════════════
   PÁGINA: SERVIÇOS
═══════════════════════════════════════════════ */
document.getElementById('page-servicos').innerHTML = '\
<div class="page-hero">\
  <div class="page-hero-inner">\
    <span class="section-label">Serviços</span>\
    <h1>Soluções completas para<br>logística hidroviária</h1>\
    <p>Cada serviço da HidroLog foi desenvolvido para os desafios únicos da operação fluvial amazônica: conectividade remota, sazonalidade e acesso a comunidades isoladas.</p>\
  </div>\
</div>\
\
<section class="services-full">\
\
  <div class="svc-full-card">\
    <div>\
      <div class="svc-number">01</div>\
      <h2>Monitoramento Fluvial em Tempo Real</h2>\
      <p class="svc-desc">Acompanhe posição, velocidade, consumo de combustível e status de cada embarcação em tempo real, com cobertura via satélite em toda a extensão dos rios amazônicos — mesmo nas áreas mais remotas, sem sinal celular.</p>\
      <div class="svc-features">\
        <div class="svc-feature-item">Rastreamento GPS/Satélite com atualização a cada 60 segundos</div>\
        <div class="svc-feature-item">Alertas automáticos de desvio de rota, paradas não programadas e velocidade</div>\
        <div class="svc-feature-item">Histórico completo de navegação com playback de rotas</div>\
        <div class="svc-feature-item">Monitoramento de parâmetros do motor e condições da embarcação</div>\
        <div class="svc-feature-item">Integração com boletins meteorológicos e alertas de tempestade</div>\
      </div>\
    </div>\
    <div class="svc-visual">\
      <svg width="200" height="160" viewBox="0 0 200 160" fill="none"><circle cx="100" cy="80" r="70" stroke="rgba(62,207,160,.2)" stroke-width="1" stroke-dasharray="4 4"/><circle cx="100" cy="80" r="50" stroke="rgba(62,207,160,.3)" stroke-width="1" stroke-dasharray="4 4"/><circle cx="100" cy="80" r="30" stroke="rgba(62,207,160,.5)" stroke-width="1"/><circle cx="100" cy="80" r="6" fill="#3ECFA0"/><circle cx="60" cy="55" r="5" fill="#C8A84B" opacity=".8"/><circle cx="140" cy="60" r="4" fill="#C8A84B" opacity=".7"/><circle cx="75" cy="115" r="5" fill="#C8A84B" opacity=".6"/><line x1="100" y1="80" x2="60" y2="55" stroke="#C8A84B" stroke-width=".8" stroke-dasharray="3 3" opacity=".5"/><line x1="100" y1="80" x2="140" y2="60" stroke="#C8A84B" stroke-width=".8" stroke-dasharray="3 3" opacity=".5"/><text x="90" y="105" fill="rgba(62,207,160,.8)" font-size="9" font-family="sans-serif">HUB</text></svg>\
    </div>\
  </div>\
\
  <div class="svc-full-card">\
    <div>\
      <div class="svc-number">02</div>\
      <h2>Roteirização Inteligente e Planejamento</h2>\
      <p class="svc-desc">Nossa engine de roteirização foi construída especificamente para a realidade dos rios amazônicos: considera profundidade sazonalmente variável, pontos de parada obrigatórios, janelas de horário em portos e restrições de calado por embarcação.</p>\
      <div class="svc-features">\
        <div class="svc-feature-item">Otimização de rotas considerando nível e profundidade dos rios em tempo real</div>\
        <div class="svc-feature-item">Planejamento de escalas e paradas para abastecimento</div>\
        <div class="svc-feature-item">Algoritmo de consolidação de cargas para maximizar lotação</div>\
        <div class="svc-feature-item">Cálculo automático de ETA com margem de confiança</div>\
        <div class="svc-feature-item">Simulador de cenários para períodos de cheia e seca</div>\
      </div>\
    </div>\
    <div class="svc-visual">\
      <svg width="200" height="160" viewBox="0 0 200 160" fill="none"><path d="M20 130Q50 100,80 110Q110 120,140 90Q160 75,180 80" stroke="#3ECFA0" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M20 130Q50 115,80 125Q110 135,140 110Q160 98,180 105" stroke="#0D4A8A" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-dasharray="6 4" opacity=".7"/><circle cx="20" cy="130" r="5" fill="#3ECFA0"/><circle cx="180" cy="80" r="5" fill="#3ECFA0"/><circle cx="80" cy="110" r="4" fill="#C8A84B" opacity=".8"/><circle cx="140" cy="90" r="4" fill="#C8A84B" opacity=".8"/><text x="10" y="148" fill="rgba(232,244,240,.6)" font-size="8" font-family="sans-serif">Origem</text><text x="158" y="72" fill="rgba(232,244,240,.6)" font-size="8" font-family="sans-serif">Destino</text></svg>\
    </div>\
  </div>\
\
  <div class="svc-full-card">\
    <div>\
      <div class="svc-number">03</div>\
      <h2>Gestão de Carga e Documentação Digital</h2>\
      <p class="svc-desc">Elimine o papel da sua operação. Nossa plataforma digitaliza todo o ciclo documental do transporte aquaviário, desde o manifesto de carga até a emissão do CT-e e NF-e, integrado ao portal da ANTAQ e à SEFAZ.</p>\
      <div class="svc-features">\
        <div class="svc-feature-item">Manifesto de carga digital com assinatura eletrônica</div>\
        <div class="svc-feature-item">Emissão de CT-e Aquaviário e integração SEFAZ/AM</div>\
        <div class="svc-feature-item">Rastreamento de encomenda para o destinatário via SMS e app</div>\
        <div class="svc-feature-item">Controle de temperatura para cargas especiais e frigoríficas</div>\
        <div class="svc-feature-item">Gestão de avarias com registro fotográfico georreferenciado</div>\
      </div>\
    </div>\
    <div class="svc-visual">\
      <svg width="200" height="160" viewBox="0 0 200 160" fill="none"><rect x="50" y="20" width="100" height="120" rx="8" fill="rgba(62,207,160,.08)" stroke="rgba(62,207,160,.3)" stroke-width="1.5"/><line x1="65" y1="50" x2="135" y2="50" stroke="rgba(62,207,160,.4)" stroke-width="1"/><line x1="65" y1="65" x2="120" y2="65" stroke="rgba(62,207,160,.3)" stroke-width="1"/><line x1="65" y1="80" x2="130" y2="80" stroke="rgba(62,207,160,.3)" stroke-width="1"/><line x1="65" y1="95" x2="110" y2="95" stroke="rgba(62,207,160,.3)" stroke-width="1"/><rect x="55" y="110" width="90" height="20" rx="4" fill="rgba(62,207,160,.2)" stroke="rgba(62,207,160,.5)" stroke-width="1"/><text x="72" y="124" fill="rgba(62,207,160,.9)" font-size="9" font-family="sans-serif" font-weight="600">CT-e Emitido ✓</text></svg>\
    </div>\
  </div>\
\
  <div class="svc-full-card">\
    <div>\
      <div class="svc-number">04</div>\
      <h2>Inteligência Hidrológica e Meteorológica</h2>\
      <p class="svc-desc">Integramos dados em tempo real da ANA, SIPAM e INMET para entregar alertas precisos de nível dos rios, previsão de cheias, secas e condições de navegação.</p>\
      <div class="svc-features">\
        <div class="svc-feature-item">Dados de nível e vazão dos rios atualizados a cada hora</div>\
        <div class="svc-feature-item">Previsão de 5 dias para nível dos rios e condições de navegação</div>\
        <div class="svc-feature-item">Alertas automáticos de cheia, seca extrema e restrição de calado</div>\
        <div class="svc-feature-item">Mapa de navegabilidade dinâmico por faixa de profundidade</div>\
        <div class="svc-feature-item">Histórico hidrológico para planejamento sazonal</div>\
      </div>\
    </div>\
    <div class="svc-visual">\
      <svg width="200" height="160" viewBox="0 0 200 160" fill="none"><path d="M20 120Q50 90,80 100Q110 110,140 70Q160 50,180 60" stroke="#3ECFA0" stroke-width="2" fill="none"/><path d="M20 120Q50 90,80 100Q110 110,140 70Q160 50,180 60L180 140L20 140Z" fill="rgba(62,207,160,.08)"/><line x1="20" y1="80" x2="180" y2="80" stroke="rgba(200,168,75,.4)" stroke-width="1" stroke-dasharray="5 3"/><text x="25" y="76" fill="rgba(200,168,75,.8)" font-size="8" font-family="sans-serif">Nível crítico</text><circle cx="140" cy="70" r="5" fill="#C8A84B"/><text x="148" y="65" fill="rgba(232,244,240,.7)" font-size="8" font-family="sans-serif">Alerta!</text></svg>\
    </div>\
  </div>\
\
</section>\
\
<section class="plans-section">\
  <span class="section-label">Planos e Preços</span>\
  <h2 class="section-title">Escolha o plano ideal<br>para sua operação</h2>\
  <p class="section-sub">Planos flexíveis para frotas de todos os tamanhos. Sem taxa de adesão, sem fidelidade mínima no primeiro mês.</p>\
  <div class="plans-grid">\
    <div class="plan-card">\
      <div class="plan-name">Igarapé</div>\
      <div class="plan-desc">Para operadores independentes e pequenas frotas ribeirinhas</div>\
      <div class="plan-price">R$ 890<span>/mês</span></div>\
      <ul class="plan-features"><li>Até 5 embarcações</li><li>Rastreamento GPS básico</li><li>Gestão de carga digital</li><li>Dashboard simplificado</li><li>Suporte via WhatsApp</li><li>1 usuário gestor</li></ul>\
      <button class="btn-outline btn-full" onclick="showPage(\'contato\')">Começar agora</button>\
    </div>\
    <div class="plan-card featured">\
      <div class="plan-badge">Mais popular</div>\
      <div class="plan-name">Rio</div>\
      <div class="plan-desc">Para empresas de médio porte com operação regional</div>\
      <div class="plan-price">R$ 2.490<span>/mês</span></div>\
      <ul class="plan-features"><li>Até 20 embarcações</li><li>Rastreamento satelital 24/7</li><li>Roteirização inteligente</li><li>Inteligência hidrológica</li><li>CT-e e documentação digital</li><li>Dashboard completo</li><li>Suporte prioritário 24/7</li><li>Até 10 usuários</li></ul>\
      <button class="btn-primary btn-full" onclick="showPage(\'contato\')">Começar agora</button>\
    </div>\
    <div class="plan-card">\
      <div class="plan-name">Amazonas</div>\
      <div class="plan-desc">Para grandes operadores e empresas com frota extensa</div>\
      <div class="plan-price">Sob<span> consulta</span></div>\
      <ul class="plan-features"><li>Embarcações ilimitadas</li><li>Todos os recursos do plano Rio</li><li>API para integração ERP</li><li>IA preditiva personalizada</li><li>Gerente de conta dedicado</li><li>SLA garantido em contrato</li><li>Treinamento presencial</li><li>Usuários ilimitados</li></ul>\
      <button class="btn-outline btn-full" onclick="showPage(\'contato\')">Falar com vendas</button>\
    </div>\
  </div>\
</section>\
' + ctaBanner('Não sabe qual plano escolher?', 'Nossa equipe faz um diagnóstico gratuito da sua operação e indica o melhor plano para você.', 'Diagnóstico Gratuito', 'contato', '', '') + SHARED_FOOTER;


/* ═══════════════════════════════════════════════
   PÁGINA: COBERTURA
═══════════════════════════════════════════════ */
var municData = ['Manaus','Parintins','Itacoatiara','Manacapuru','Coari','Tefé','Tabatinga','Maués','Barcelos','São Gabriel da Cachoeira','Humaitá','Lábrea','Manicoré','Novo Aripuanã','Eirunepé','Juruá','Envira','Itamarati','Canutama','Tapauá','Pauini','Boca do Acre','Iranduba','Careiro','Autazes','Borba','Nova Olinda do Norte','Urucurituba','Urucará','São Sebastião do Uatumã','Silves','Itapiranga','Nhamundá','Barreirinha','Boa Vista do Ramos','Maraã','Alvarães','Fonte Boa','Jutaí','Santo Antônio do Içá','Tonantins','Amaturá','São Paulo de Olivença','Benjamin Constant','Atalaia do Norte','Anamã','Anori','Caapiranga','Codajás','Beruri','Tapuruquara','Santa Isabel do Rio Negro','Carauari','Guajará','Ipixuna','Presidente Figueiredo','Rio Preto da Eva','Novo Airão','Manaquiri','Apuí','Uarini','Tefé'];
var municHTML = municData.map(function(m){return '<div class="muni-item">'+m+'</div>';}).join('');

document.getElementById('page-cobertura').innerHTML = '\
<div class="page-hero">\
  <div class="page-hero-inner">\
    <span class="section-label">Cobertura Hidrográfica</span>\
    <h1>Os rios do Amazonas,<br>todos mapeados</h1>\
    <p>Cobrimos a totalidade da rede hidrográfica navegável do estado do Amazonas — mais de 1.500 rios, igarapés e furos que conectam os 62 municípios.</p>\
  </div>\
</div>\
\
<div class="coverage-stats">\
  <div class="cov-stat"><div class="cov-num">62</div><div class="cov-label">Municípios Cobertos</div></div>\
  <div class="cov-stat"><div class="cov-num">1.500+</div><div class="cov-label">Rios e Igarapés</div></div>\
  <div class="cov-stat"><div class="cov-num">28.000 km</div><div class="cov-label">de Vias Navegáveis</div></div>\
  <div class="cov-stat"><div class="cov-num">45%</div><div class="cov-label">do Território Nacional</div></div>\
</div>\
\
<section class="coverage-section">\
  <span class="section-label">Principais Rios</span>\
  <h2 class="section-title">Eixos fluviais<br>monitorados</h2>\
  <p class="section-sub" style="margin-bottom:48px">Cada rio tem características próprias de navegação. Nossa plataforma conhece sazonalidade, profundidade, pontos críticos e rotas alternativas de todos eles.</p>\
  <div class="coverage-grid">\
    <div>\
      <div class="river-card" style="border-color:#3ECFA0"><h3>Rio Amazonas / Rio Solimões</h3><p>Eixo central e espinha dorsal da navegação no estado. Atravessa o Amazonas de oeste a leste por mais de 3.200 km, conectando os principais municípios e servindo como rota de escoamento de cargas para o resto do Brasil e para exportação.</p><div class="river-meta"><span class="river-tag" style="background:rgba(62,207,160,.12);color:#3ECFA0">3.200 km no AM</span><span class="river-tag" style="background:rgba(62,207,160,.12);color:#3ECFA0">Navegação todo o ano</span></div></div>\
      <div class="river-card" style="border-color:#0D4A8A"><h3>Rio Negro</h3><p>Maior afluente de águas pretas do mundo. Banha a capital Manaus e é fundamental para o transporte do interior norte do estado. O Encontro das Águas com o Solimões é um dos fenômenos hidrológicos mais conhecidos do planeta.</p><div class="river-meta"><span class="river-tag" style="background:rgba(13,74,138,.18);color:#7BB3F5">1.700 km</span><span class="river-tag" style="background:rgba(13,74,138,.18);color:#7BB3F5">Águas negras</span></div></div>\
      <div class="river-card" style="border-color:#C8A84B"><h3>Rio Madeira</h3><p>Principal eixo fluvial ao sul do estado, essencial para o escoamento de commodities agrícolas e minerais da região. Um dos mais volumosos do mundo, com forte dinâmica de cheias e secas que exige monitoramento constante.</p><div class="river-meta"><span class="river-tag" style="background:rgba(200,168,75,.15);color:#C8A84B">Escoamento de cargas</span><span class="river-tag" style="background:rgba(200,168,75,.15);color:#C8A84B">Alta sazonalidade</span></div></div>\
    </div>\
    <div>\
      <div class="river-card" style="border-color:#8A9B94"><h3>Rio Purus</h3><p>Um dos rios mais sinuosos do mundo, com meandros que multiplicam por até três a distância em linha reta. Fundamental para o transporte de populações ribeirinhas e para o acesso a municípios como Lábrea, Tapauá e Canutama.</p><div class="river-meta"><span class="river-tag" style="background:rgba(138,155,148,.15);color:#8A9B94">Alto índice de meandros</span><span class="river-tag" style="background:rgba(138,155,148,.15);color:#8A9B94">2.800 km totais</span></div></div>\
      <div class="river-card" style="border-color:#8A9B94"><h3>Rio Juruá</h3><p>Segundo rio mais sinuoso do mundo. Liga os municípios da calha do Juruá ao estado, incluindo Eirunepé, Envira e Itamarati. A sinuosidade extrema torna a navegação desafiadora, especialmente em períodos de seca.</p><div class="river-meta"><span class="river-tag" style="background:rgba(138,155,148,.15);color:#8A9B94">Acesso remoto</span><span class="river-tag" style="background:rgba(138,155,148,.15);color:#8A9B94">Risco de seca</span></div></div>\
      <div class="river-card" style="border-color:#3ECFA0;opacity:.75"><h3>Demais Rios Monitorados</h3><p>Japurá, Içá, Rio Branco, Uatumã, Tefé, Javari, Coari e centenas de igarapés e furos que formam a rede secundária de navegação fluvial, todos integrados à plataforma HidroLog.</p><div class="river-meta"><span class="river-tag" style="background:rgba(62,207,160,.12);color:#3ECFA0">+1.500 vias</span><span class="river-tag" style="background:rgba(62,207,160,.12);color:#3ECFA0">Rede completa</span></div></div>\
    </div>\
  </div>\
</section>\
\
<section class="municipios-section">\
  <span class="section-label">Municípios Atendidos</span>\
  <h2 class="section-title">62 municípios<br>conectados</h2>\
  <p class="section-sub" style="margin-bottom:36px">Todos os municípios do estado do Amazonas estão em nossa área de cobertura, incluindo aqueles acessíveis exclusivamente por via fluvial.</p>\
  <div class="muni-grid">' + municHTML + '</div>\
</section>\
' + ctaBanner('Sua rota está em nosso mapa', 'Consulte nossa equipe e veja como atendemos o seu município e as rotas da sua operação.', 'Verificar Cobertura', 'contato', '', '') + SHARED_FOOTER;


/* ═══════════════════════════════════════════════
   PÁGINA: TECNOLOGIA
═══════════════════════════════════════════════ */
document.getElementById('page-tecnologia').innerHTML = '\
<div class="page-hero">\
  <div class="page-hero-inner">\
    <span class="section-label">Plataforma Tecnológica</span>\
    <h1>Tecnologia construída<br>para os rios amazônicos</h1>\
    <p>Desenvolvemos soluções do zero para os desafios únicos da logística fluvial: conectividade remota, sazonalidade extrema e operação em áreas de difícil acesso.</p>\
  </div>\
</div>\
\
<section class="tech-section">\
  <div class="tech-hero-grid">\
    <div>\
      <span class="section-label">Arquitetura</span>\
      <h2 class="section-title">Uma plataforma,<br>toda a operação</h2>\
      <p class="section-sub">A HidroLog é uma plataforma SaaS nativa em nuvem, construída com arquitetura de microsserviços, capaz de processar dados de milhares de embarcações em tempo real com latência inferior a 2 segundos.</p>\
      <div class="tech-arch-list">\
        <div class="tech-arch-item"><strong>99,98% uptime</strong>SLA garantido em contrato para planos corporativos</div>\
        <div class="tech-arch-item"><strong>&lt; 2s latência</strong>Atualização de posição de todas as embarcações</div>\
        <div class="tech-arch-item"><strong>ISO 27001</strong>Segurança e proteção de dados certificadas</div>\
        <div class="tech-arch-item"><strong>LGPD</strong>Conformidade total com a legislação brasileira</div>\
      </div>\
    </div>\
    <div class="tech-arch-box">\
      <svg width="260" height="220" viewBox="0 0 260 220" fill="none"><rect x="90" y="80" width="80" height="50" rx="8" fill="rgba(62,207,160,.15)" stroke="#3ECFA0" stroke-width="1.5"/><text x="130" y="108" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#3ECFA0" font-weight="600">Plataforma</text><text x="130" y="121" text-anchor="middle" font-family="sans-serif" font-size="8" fill="rgba(62,207,160,.6)">HidroLog</text><rect x="10" y="10" width="70" height="35" rx="6" fill="rgba(13,74,138,.3)" stroke="#0D4A8A" stroke-width="1"/><text x="45" y="31" text-anchor="middle" font-family="sans-serif" font-size="8" fill="rgba(232,244,240,.7)">Satélite GPS</text><rect x="180" y="10" width="70" height="35" rx="6" fill="rgba(13,74,138,.3)" stroke="#0D4A8A" stroke-width="1"/><text x="215" y="31" text-anchor="middle" font-family="sans-serif" font-size="8" fill="rgba(232,244,240,.7)">ANA / SIPAM</text><rect x="10" y="175" width="70" height="35" rx="6" fill="rgba(10,122,85,.25)" stroke="#0A7A55" stroke-width="1"/><text x="45" y="192" text-anchor="middle" font-family="sans-serif" font-size="8" fill="rgba(232,244,240,.7)">App Mobile</text><rect x="180" y="175" width="70" height="35" rx="6" fill="rgba(10,122,85,.25)" stroke="#0A7A55" stroke-width="1"/><text x="215" y="192" text-anchor="middle" font-family="sans-serif" font-size="8" fill="rgba(232,244,240,.7)">Dashboard</text><rect x="95" y="160" width="70" height="35" rx="6" fill="rgba(200,168,75,.2)" stroke="#C8A84B" stroke-width="1"/><text x="130" y="181" text-anchor="middle" font-family="sans-serif" font-size="8" fill="rgba(232,244,240,.7)">API Parceiros</text><line x1="80" y1="27" x2="90" y2="80" stroke="rgba(62,207,160,.3)" stroke-width="1" stroke-dasharray="3 3"/><line x1="180" y1="27" x2="170" y2="80" stroke="rgba(62,207,160,.3)" stroke-width="1" stroke-dasharray="3 3"/><line x1="80" y1="185" x2="90" y2="130" stroke="rgba(62,207,160,.3)" stroke-width="1" stroke-dasharray="3 3"/><line x1="180" y1="185" x2="170" y2="130" stroke="rgba(62,207,160,.3)" stroke-width="1" stroke-dasharray="3 3"/><line x1="130" y1="160" x2="130" y2="130" stroke="rgba(200,168,75,.4)" stroke-width="1" stroke-dasharray="3 3"/></svg>\
    </div>\
  </div>\
\
  <div class="tech-big-grid">\
    <div class="tech-card tc-verde"><span class="tech-tag">Conectividade</span><h3>Cobertura Satelital Total</h3><p>Parceria com operadores de satélite de órbita baixa (LEO) garante rastreamento mesmo nos pontos mais remotos do Amazonas, sem dependência de infraestrutura terrestre.</p></div>\
    <div class="tech-card tc-azul"><span class="tech-tag">Inteligência Artificial</span><h3>IA Preditiva e Otimização</h3><p>Modelos de machine learning treinados com dados históricos de navegação amazônica para prever demandas sazonais, riscos de atraso e necessidades de manutenção.</p></div>\
    <div class="tech-card tc-dark"><span class="tech-tag">Dados em Tempo Real</span><h3>Streaming de Dados Hidrológicos</h3><p>Pipeline de dados em tempo real integrando mais de 400 estações hidrológicas da ANA no estado do Amazonas, processando nível, vazão e turbidez continuamente.</p></div>\
    <div class="tech-card tc-dark"><span class="tech-tag">Segurança</span><h3>Blockchain para Rastreabilidade</h3><p>Registro imutável de toda a cadeia documental do transporte — manifesto, entregas e assinaturas — em blockchain permissionado, garantindo validade jurídica e auditabilidade.</p></div>\
    <div class="tech-card tc-verde"><span class="tech-tag">Mobile</span><h3>App para Capitães e Tripulantes</h3><p>Aplicativo offline-first para capitães, que funciona sem conexão e sincroniza automaticamente quando há sinal. Checklist digital de segurança e manifesto eletrônico.</p></div>\
    <div class="tech-card tc-azul"><span class="tech-tag">Integração</span><h3>API Aberta e Integrações</h3><p>API REST completa para integração com sistemas ERP, TMS e portais portuários. SDKs disponíveis para as principais linguagens de programação utilizadas no mercado.</p></div>\
  </div>\
</section>\
\
<section class="tech-integrations">\
  <span class="section-label">Integrações Disponíveis</span>\
  <h2 class="section-title">Conectado ao ecossistema<br>logístico brasileiro</h2>\
  <div class="integ-grid">\
    <div class="integ-card"><div class="integ-logo" style="background:rgba(0,90,180,.1)"><svg width="28" height="28" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="20" stroke="#005AB4" stroke-width="2.5"/><path d="M10 28C14 20 20 16 24 16C28 16 34 20 38 28" stroke="#005AB4" stroke-width="2" stroke-linecap="round"/></svg></div><div class="integ-name">ANA</div><div class="integ-desc">Dados hidrológicos em tempo real</div></div>\
    <div class="integ-card"><div class="integ-logo" style="background:rgba(10,122,85,.1)"><svg width="28" height="28" viewBox="0 0 48 48" fill="none"><rect x="8" y="8" width="32" height="32" rx="6" stroke="#0A7A55" stroke-width="2.5"/><path d="M16 24h16M16 17h10M16 31h12" stroke="#0A7A55" stroke-width="2" stroke-linecap="round"/></svg></div><div class="integ-name">SEFAZ/AM</div><div class="integ-desc">Emissão de CT-e e NF-e</div></div>\
    <div class="integ-card"><div class="integ-logo" style="background:rgba(13,74,138,.1)"><svg width="28" height="28" viewBox="0 0 48 48" fill="none"><path d="M24 6L6 16v16l18 10 18-10V16L24 6z" stroke="#0D4A8A" stroke-width="2.5"/><path d="M6 16l18 10 18-10M24 26v16" stroke="#0D4A8A" stroke-width="2"/></svg></div><div class="integ-name">ANTAQ</div><div class="integ-desc">Portal da autoridade aquaviária</div></div>\
    <div class="integ-card"><div class="integ-logo" style="background:rgba(0,140,200,.1)"><svg width="28" height="28" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="20" r="10" stroke="#008CC8" stroke-width="2.5"/><path d="M8 40c0-8.8 7.2-16 16-16s16 7.2 16 16" stroke="#008CC8" stroke-width="2.5" stroke-linecap="round"/></svg></div><div class="integ-name">SIPAM</div><div class="integ-desc">Vigilância e monitoramento</div></div>\
    <div class="integ-card"><div class="integ-logo" style="background:rgba(34,130,40,.1)"><svg width="28" height="28" viewBox="0 0 48 48" fill="none"><rect x="6" y="14" width="36" height="26" rx="4" stroke="#228228" stroke-width="2.5"/><path d="M14 14V10a4 4 0 018 0v4M26 14V10a4 4 0 018 0v4" stroke="#228228" stroke-width="2"/></svg></div><div class="integ-name">INMET</div><div class="integ-desc">Previsão meteorológica</div></div>\
    <div class="integ-card"><div class="integ-logo" style="background:rgba(200,168,75,.1)"><svg width="28" height="28" viewBox="0 0 48 48" fill="none"><rect x="8" y="10" width="32" height="28" rx="4" stroke="#C8A84B" stroke-width="2.5"/><path d="M8 20h32M20 20v18" stroke="#C8A84B" stroke-width="2"/></svg></div><div class="integ-name">ERP / TMS</div><div class="integ-desc">SAP, TOTVS, Sankhya</div></div>\
    <div class="integ-card"><div class="integ-logo" style="background:rgba(37,211,102,.1)"><svg width="28" height="28" viewBox="0 0 48 48" fill="none"><path d="M34 14a12 12 0 10-20 12l8 16 8-16a12 12 0 004-12z" stroke="#25D366" stroke-width="2.5"/><circle cx="24" cy="20" r="4" fill="#25D366" opacity=".5"/></svg></div><div class="integ-name">WhatsApp</div><div class="integ-desc">Alertas e notificações</div></div>\
    <div class="integ-card"><div class="integ-logo" style="background:rgba(62,207,160,.1)"><svg width="28" height="28" viewBox="0 0 48 48" fill="none"><path d="M6 24h8l6-14 8 28 6-14h8" stroke="#3ECFA0" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div class="integ-name">API HidroLog</div><div class="integ-desc">Integração customizada</div></div>\
  </div>\
</section>\
' + ctaBanner('Pronto para integrar sua operação?', 'Nossa equipe de engenharia faz o onboarding técnico e garante uma integração sem fricção.', 'Falar com a Engenharia', 'contato', 'Ver Planos', 'servicos') + SHARED_FOOTER;


/* ═══════════════════════════════════════════════
   PÁGINA: SOBRE
═══════════════════════════════════════════════ */
document.getElementById('page-sobre').innerHTML = '\
<div class="page-hero">\
  <div class="page-hero-inner">\
    <span class="section-label">Nossa História</span>\
    <h1>Nascemos no coração<br>da Amazônia</h1>\
    <p>A HidroLog surgiu da necessidade real de quem vive e trabalha nos rios do Amazonas. Somos amazonenses que usaram tecnologia para resolver um problema que conhecem de perto.</p>\
  </div>\
</div>\
\
<section class="about-intro">\
  <div class="about-intro-text">\
    <span class="section-label">Quem somos</span>\
    <h2 class="section-title">Logística fluvial<br>como vocação</h2>\
    <p>A HidroLog Amazônia foi fundada em 2022 por engenheiros, logísticos e desenvolvedores apaixonados pelo Amazonas. Vimos de perto os desafios enfrentados por transportadores, produtores rurais e municípios que dependem exclusivamente dos rios para tudo — desde alimentos até medicamentos.</p>\
    <p>Em um estado onde a navegação fluvial é o principal — e muitas vezes único — meio de transporte para 62 municípios, a logística precisa ser tratada com a seriedade que o tema merece. Construímos uma plataforma que realmente entende a Amazônia: a sazonalidade dos rios, a diversidade das comunidades e os desafios de conectividade das áreas remotas.</p>\
    <div class="about-kpis">\
      <div><div class="about-kpi-num">2022</div><div class="about-kpi-label">Ano de fundação</div></div>\
      <div><div class="about-kpi-num">40+</div><div class="about-kpi-label">Colaboradores</div></div>\
      <div><div class="about-kpi-num">200+</div><div class="about-kpi-label">Clientes ativos</div></div>\
    </div>\
  </div>\
  <div class="about-visual">\
    <svg width="280" height="260" viewBox="0 0 280 260" fill="none"><circle cx="140" cy="130" r="120" stroke="rgba(62,207,160,.15)" stroke-width="1"/><circle cx="140" cy="130" r="90" stroke="rgba(62,207,160,.2)" stroke-width="1"/><path d="M140 20C140 20,60 80,60 135C60 183,96 220,140 220C184 220,220 183,220 135C220 80,140 20,140 20Z" stroke="#3ECFA0" stroke-width="2" fill="rgba(62,207,160,.06)"/><path d="M80 135C100 118,118 150,140 135C162 118,180 150,200 135" stroke="#0D4A8A" stroke-width="2.5" fill="none" stroke-linecap="round"/><path d="M80 152C100 135,118 167,140 152C162 135,180 167,200 152" stroke="#3ECFA0" stroke-width="2.5" fill="none" stroke-linecap="round"/><circle cx="140" cy="143" r="7" fill="#3ECFA0" opacity=".9"/><circle cx="140" cy="143" r="18" stroke="#3ECFA0" stroke-width="1" fill="none" opacity=".3"/><text x="140" y="210" text-anchor="middle" font-family="sans-serif" font-size="10" fill="rgba(232,244,240,.5)">Encontro das Águas — Manaus, AM</text></svg>\
  </div>\
</section>\
\
<section class="about-values">\
  <span class="section-label">O que nos move</span>\
  <h2 class="section-title">Nossos valores</h2>\
  <div class="values-grid">\
    <div class="value-card"><div class="value-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#3ECFA0" stroke-width="2"/></svg></div><h3>Amazônico</h3><p>Somos do Amazonas. Conhecemos os rios, as estações e os desafios da floresta. Isso não é marketing — é parte de quem somos.</p></div>\
    <div class="value-card"><div class="value-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><polyline points="20 6 9 17 4 12" stroke="#3ECFA0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div><h3>Confiável</h3><p>Pontualidade e transparência não são diferenciais — são obrigações. Cumprimos o que prometemos ou explicamos por quê não foi possível.</p></div>\
    <div class="value-card"><div class="value-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#3ECFA0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div><h3>Inovador</h3><p>Usamos tecnologia de ponta para resolver problemas reais. Se a solução certa ainda não existe, a construímos do zero para o contexto amazônico.</p></div>\
    <div class="value-card"><div class="value-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#3ECFA0" stroke-width="2"/><path d="M12 8v4" stroke="#3ECFA0" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16" r="1" fill="#3ECFA0"/></svg></div><h3>Sustentável</h3><p>Operamos em harmonia com o maior bioma do planeta. Cada decisão considera o impacto ambiental e o futuro das comunidades ribeirinhas.</p></div>\
  </div>\
</section>\
\
<section class="team-section">\
  <span class="section-label">Nossa equipe</span>\
  <h2 class="section-title">As pessoas por trás<br>da HidroLog</h2>\
  <div class="team-grid">\
    <div class="team-card"><div class="team-avatar" style="background:#0A7A55">CF</div><h3>Carlos Figueiredo</h3><div class="team-role">CEO & Co-Fundador</div><p class="team-bio">Ex-transportador fluvial com 15 anos de experiência nos rios do Amazonas. Engenheiro de Produção pela UFAM.</p></div>\
    <div class="team-card"><div class="team-avatar" style="background:#0D4A8A">ML</div><h3>Marina Lima</h3><div class="team-role">CTO & Co-Fundadora</div><p class="team-bio">Engenheira de Software pelo INPA. Especialista em sistemas distribuídos e processamento de dados em tempo real.</p></div>\
    <div class="team-card"><div class="team-avatar" style="background:#C8A84B">PR</div><h3>Paulo Ramos</h3><div class="team-role">Diretor de Operações</div><p class="team-bio">20 anos em logística fluvial na Amazônia. Especialista em hidrologia aplicada e navegação fluvial regional.</p></div>\
    <div class="team-card"><div class="team-avatar" style="background:#3ECFA0">TS</div><h3>Tatiana Souza</h3><div class="team-role">Head de Produto</div><p class="team-bio">Designer de experiência com foco em interfaces para usuários de baixa conectividade e ambientes remotos.</p></div>\
  </div>\
</section>\
\
<section class="timeline-section">\
  <span class="section-label" style="color:rgba(62,207,160,.7)">Nossa Jornada</span>\
  <h2 class="section-title light">Como chegamos até aqui</h2>\
  <div class="timeline">\
    <div class="tl-item"><div class="tl-left"><div class="tl-year">2021</div><div class="tl-dot"></div><div class="tl-line"></div></div><div class="tl-right"><h4>A ideia nasce nos rios</h4><p>Carlos Figueiredo, transportador fluvial, percebe a ausência de ferramentas digitais para gestão da logística amazônica e começa a esboçar o projeto com Marina Lima.</p></div></div>\
    <div class="tl-item"><div class="tl-left"><div class="tl-year">2022</div><div class="tl-dot"></div><div class="tl-line"></div></div><div class="tl-right"><h4>Fundação e primeiros testes</h4><p>HidroLog é fundada em Manaus. Protótipo de rastreamento testado em 3 embarcações na rota Manaus–Parintins. Aceleração pelo SEBRAE e Samsung Ocean Manaus.</p></div></div>\
    <div class="tl-item"><div class="tl-left"><div class="tl-year">2023</div><div class="tl-dot"></div><div class="tl-line"></div></div><div class="tl-right"><h4>Expansão e primeiro aporte</h4><p>Plataforma lançada com os primeiros 30 clientes. Captação de R$ 4,2 milhões em Série A. Equipe cresce para 20 pessoas.</p></div></div>\
    <div class="tl-item"><div class="tl-left"><div class="tl-year">2024</div><div class="tl-dot"></div><div class="tl-line"></div></div><div class="tl-right"><h4>Cobertura estadual e IA</h4><p>Cobertura expandida para todos os 62 municípios. Lançamento do módulo de inteligência hidrológica com integração à ANA e SIPAM. 200 clientes ativos.</p></div></div>\
    <div class="tl-item"><div class="tl-left"><div class="tl-year">2025</div><div class="tl-dot"></div><div class="tl-line"></div></div><div class="tl-right"><h4>Referência nacional em logística fluvial</h4><p>HidroLog consolida-se como a principal plataforma de logística hidroviária da Amazônia, com expansão planejada para o Pará e o Acre.</p></div></div>\
  </div>\
</section>\
' + ctaBanner('Faça parte desta história', 'Seja como cliente, parceiro ou colaborador — venha construir o futuro da logística amazônica conosco.', 'Entrar em Contato', 'contato', '', '') + SHARED_FOOTER;


/* ═══════════════════════════════════════════════
   PÁGINA: CONTATO
═══════════════════════════════════════════════ */
document.getElementById('page-contato').innerHTML = '\
<div class="contact-layout">\
  <div class="contact-left">\
    <span class="section-label">Fale Conosco</span>\
    <h2 class="section-title light" style="font-size:32px">Vamos conversar<br>sobre sua operação</h2>\
    <p style="font-size:15px;font-weight:300;color:rgba(232,244,240,.6);line-height:1.8;margin-top:12px">Nossa equipe de especialistas em logística fluvial está pronta para entender seus desafios e propor a solução ideal para o seu negócio.</p>\
    <div class="contact-info-list">\
      <div class="contact-info-item"><div class="contact-info-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#3ECFA0"/></svg></div><div class="contact-info-text"><h4>Sede Principal</h4><p>Av. Eduardo Ribeiro, 520 — Sala 1201<br>Centro, Manaus — AM, 69010-001</p></div></div>\
      <div class="contact-info-item"><div class="contact-info-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.007 1.17h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L4.09 8.91A16 16 0 0015.09 19.91l1.19-1.19a2 2 0 012.11-.45c.9.35 1.85.57 2.81.7A2 2 0 0122 16.92z" stroke="#3ECFA0" stroke-width="2"/></svg></div><div class="contact-info-text"><h4>Central de Atendimento</h4><p>+55 92 9 9000-0000<br>Seg.–Sex. 8h–18h | Plantão 24/7 para emergências</p></div></div>\
      <div class="contact-info-item"><div class="contact-info-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#3ECFA0" stroke-width="2"/><polyline points="22,6 12,13 2,6" stroke="#3ECFA0" stroke-width="2"/></svg></div><div class="contact-info-text"><h4>E-mail</h4><p>contato@hidrolog.com.br<br>suporte@hidrolog.com.br</p></div></div>\
      <div class="contact-info-item"><div class="contact-info-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="#3ECFA0" stroke-width="2"/></svg></div><div class="contact-info-text"><h4>WhatsApp Comercial</h4><p>+55 92 9 9000-0001<br>Atendimento rápido para consultas</p></div></div>\
    </div>\
  </div>\
  <div class="contact-right">\
    <div class="form-title">Envie sua mensagem</div>\
    <p class="form-sub">Responderemos em até 4 horas úteis. Para urgências, use o WhatsApp ou telefone.</p>\
    <div id="contact-form">\
      <div class="form-row">\
        <div class="form-group"><label for="f-nome">Nome completo *</label><input type="text" id="f-nome" name="nome" placeholder="Seu nome completo" autocomplete="name"><span class="form-error"></span></div>\
        <div class="form-group"><label for="f-empresa">Empresa</label><input type="text" id="f-empresa" name="empresa" placeholder="Nome da empresa" autocomplete="organization"></div>\
      </div>\
      <div class="form-row">\
        <div class="form-group"><label for="f-email">E-mail *</label><input type="email" id="f-email" name="email" placeholder="seu@email.com" autocomplete="email"><span class="form-error"></span></div>\
        <div class="form-group"><label for="f-tel">Telefone / WhatsApp</label><input type="tel" id="f-tel" name="telefone" placeholder="+55 92 9 0000-0000" autocomplete="tel"></div>\
      </div>\
      <div class="form-group"><label for="f-assunto">Assunto *</label><select id="f-assunto" name="assunto"><option value="">Selecione o assunto...</option><option>Demonstração da plataforma</option><option>Consulta sobre planos e preços</option><option>Suporte técnico</option><option>Parceria comercial</option><option>Integração de sistemas</option><option>Outros</option></select><span class="form-error"></span></div>\
      <div class="form-group"><label for="f-frota">Número de embarcações (aproximado)</label><select id="f-frota" name="frota"><option value="">Selecione...</option><option>1 a 5 embarcações</option><option>6 a 20 embarcações</option><option>21 a 50 embarcações</option><option>Mais de 50 embarcações</option><option>Ainda não tenho frota</option></select></div>\
      <div class="form-group"><label for="f-msg">Mensagem *</label><textarea id="f-msg" name="mensagem" placeholder="Descreva sua operação e o que você está buscando com a HidroLog..."></textarea><span class="form-error"></span></div>\
      <button id="submit-btn" class="btn-primary btn-full" onclick="submitForm()" style="font-size:15px;padding:16px">Enviar Mensagem</button>\
    </div>\
    <div class="form-success" id="form-success">\
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" style="margin:0 auto 20px;display:block"><circle cx="32" cy="32" r="30" stroke="#3ECFA0" stroke-width="2" fill="rgba(62,207,160,.08)"/><polyline points="20,33 28,42 44,24" stroke="#3ECFA0" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>\
      <h3>Mensagem enviada com sucesso!</h3>\
      <p>Obrigado pelo contato. Nossa equipe responderá em até 4 horas úteis.<br>Enquanto isso, conheça mais sobre nossos serviços.</p>\
      <button class="btn-primary" style="margin-top:24px" onclick="showPage(\'servicos\')">Ver Serviços</button>\
    </div>\
  </div>\
</div>\
\
<section class="offices-section">\
  <span class="section-label">Escritórios e Pontos de Atendimento</span>\
  <h2 class="section-title">Onde estamos</h2>\
  <div class="offices-grid">\
    <div class="office-card"><span class="office-badge">Sede</span><h3>Manaus — AM</h3><p>Av. Eduardo Ribeiro, 520 — Sala 1201<br>Centro — CEP 69010-001<br>+55 92 9 9000-0000<br><br>Centro de Operações 24/7<br>Atendimento comercial Seg–Sex 8h–18h</p></div>\
    <div class="office-card"><span class="office-badge">Regional</span><h3>Parintins — AM</h3><p>Rua Brás de Aguiar, 220<br>Centro — CEP 69150-000<br>+55 92 9 9001-0001<br><br>Atendimento Seg–Sex 8h–17h<br>Suporte para calha do Rio Amazonas</p></div>\
    <div class="office-card"><span class="office-badge">Regional</span><h3>Tefé — AM</h3><p>Av. Getúlio Vargas, 110<br>Centro — CEP 69470-000<br>+55 97 9 9002-0002<br><br>Atendimento Seg–Sex 8h–17h<br>Suporte para calha do Rio Solimões</p></div>\
  </div>\
</section>\
' + SHARED_FOOTER;
