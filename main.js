/* ═══════════════════════════════════════════════
   HidroLog Amazônia — Folha de Estilos Principal
   Versão 1.0 | 2025
═══════════════════════════════════════════════ */
:root{--verde:#3ECFA0;--negro:#0D4A8A;--floresta:#0A7A55;--areia:#C8A84B;--noite:#0A1628;--nevoa:#E8F4F0;--cinza:#8A9B94;--texto:#1A2E28;--fundo:#ffffff;--fundo2:#F8FAFA;}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;}
body{font-family:'Barlow',sans-serif;background:var(--fundo);color:var(--texto);overflow-x:hidden;line-height:1.6;}
img{max-width:100%;display:block;}
a{text-decoration:none;color:inherit;}
button{cursor:pointer;font-family:inherit;}
.page{display:none;}.page.active{display:block;}.pt-nav{padding-top:64px;}
.section-label{font-size:11px;font-weight:500;letter-spacing:3px;color:var(--verde);text-transform:uppercase;margin-bottom:12px;display:block;}
.section-title{font-family:'Cinzel',serif;font-size:clamp(26px,4vw,42px);font-weight:700;color:var(--noite);line-height:1.15;margin-bottom:16px;}
.section-title.light{color:#E8F4F0;}
.section-sub{font-size:16px;font-weight:300;color:#4A6A60;line-height:1.8;max-width:580px;}
.section-sub.light{color:rgba(232,244,240,.65);}
.text-center{text-align:center;}.text-center .section-sub{margin:0 auto;}

/* BOTÕES */
.btn-primary{display:inline-block;background:var(--verde);color:var(--noite);padding:13px 28px;border-radius:5px;font-weight:600;font-size:14px;border:none;transition:all .22s;cursor:pointer;}
.btn-primary:hover{background:#2db88a;transform:translateY(-2px);box-shadow:0 8px 24px rgba(62,207,160,.25);}
.btn-outline{display:inline-block;border:1.5px solid rgba(62,207,160,.45);color:var(--verde);padding:12px 28px;border-radius:5px;font-size:14px;background:none;transition:all .22s;cursor:pointer;}
.btn-outline:hover{background:rgba(62,207,160,.08);border-color:var(--verde);}
.btn-outline.dark{border-color:rgba(255,255,255,.3);color:#fff;}
.btn-outline.dark:hover{background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.6);}
.btn-white{display:inline-block;background:#fff;color:var(--floresta);padding:13px 28px;border-radius:5px;font-weight:600;font-size:14px;border:none;transition:all .22s;cursor:pointer;}
.btn-white:hover{background:var(--nevoa);transform:translateY(-2px);}
.btn-full{width:100%;text-align:center;}

/* NAVBAR */
.navbar{position:fixed;top:0;left:0;width:100%;z-index:500;background:rgba(10,22,40,.97);backdrop-filter:blur(12px);display:flex;align-items:center;justify-content:space-between;padding:0 5vw;height:64px;border-bottom:1px solid rgba(62,207,160,.14);transition:box-shadow .3s;}
.navbar.scrolled{box-shadow:0 4px 24px rgba(0,0,0,.3);}
.nav-logo{display:flex;align-items:center;gap:11px;cursor:pointer;}
.nav-logo svg{width:30px;flex-shrink:0;}
.nav-logo-text{font-family:'Cinzel',serif;font-size:17px;font-weight:700;color:var(--verde);line-height:1.2;}
.nav-logo-sub{font-size:9px;font-weight:300;letter-spacing:3.5px;color:rgba(62,207,160,.5);display:block;}
.nav-links{display:flex;gap:2px;list-style:none;}
.nav-links a{color:rgba(232,244,240,.7);font-size:13px;font-weight:400;padding:7px 14px;border-radius:5px;transition:all .2s;cursor:pointer;}
.nav-links a:hover{color:var(--verde);background:rgba(62,207,160,.08);}
.nav-links a.nav-active{color:var(--verde);background:rgba(62,207,160,.1);font-weight:500;}
.nav-cta{background:var(--verde);color:var(--noite);padding:8px 20px;border-radius:5px;font-weight:600;font-size:13px;border:none;transition:background .2s;cursor:pointer;}
.nav-cta:hover{background:#2db88a;}
.nav-hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;padding:4px;background:none;border:none;}
.nav-hamburger span{display:block;width:22px;height:2px;background:var(--verde);border-radius:2px;transition:all .3s;}
.nav-mobile{display:none;position:fixed;top:64px;left:0;width:100%;background:rgba(10,22,40,.98);z-index:400;padding:20px 5vw 24px;border-bottom:1px solid rgba(62,207,160,.14);}
.nav-mobile.open{display:flex;flex-direction:column;gap:8px;}
.nav-mobile a{color:rgba(232,244,240,.7);font-size:15px;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.05);cursor:pointer;}

/* HERO */
.hero{min-height:100vh;background:linear-gradient(160deg,#0A1628 0%,#0a2a1e 55%,#061812 100%);display:flex;align-items:center;padding:80px 5vw 60px;position:relative;overflow:hidden;}
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 15% 50%,rgba(13,74,138,.2) 0%,transparent 55%),radial-gradient(ellipse at 85% 30%,rgba(62,207,160,.08) 0%,transparent 50%);pointer-events:none;}
.hero-content{max-width:580px;position:relative;z-index:2;}
.hero-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(62,207,160,.1);border:1px solid rgba(62,207,160,.3);border-radius:30px;padding:5px 14px;margin-bottom:28px;}
.hero-badge-dot{width:6px;height:6px;border-radius:50%;background:var(--verde);animation:pulse 2s infinite;}
@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.45;transform:scale(1.5)}}
.hero-badge span{font-size:11px;font-weight:500;letter-spacing:2px;color:var(--verde);text-transform:uppercase;}
.hero h1{font-family:'Cinzel',serif;font-size:clamp(32px,5vw,58px);font-weight:700;color:#E8F4F0;line-height:1.1;margin-bottom:20px;}
.hero h1 em{font-style:normal;color:var(--verde);}
.hero-p{font-size:16px;font-weight:300;color:rgba(232,244,240,.7);line-height:1.8;margin-bottom:36px;max-width:500px;}
.hero-btns{display:flex;gap:14px;flex-wrap:wrap;}
.hero-stats{display:flex;gap:36px;margin-top:52px;padding-top:32px;border-top:1px solid rgba(255,255,255,.08);flex-wrap:wrap;}
.stat-num{font-family:'Cinzel',serif;font-size:28px;font-weight:700;color:var(--verde);}
.stat-label{font-size:11px;font-weight:300;color:rgba(232,244,240,.4);letter-spacing:1px;margin-top:3px;}
.hero-visual{position:absolute;right:5vw;top:50%;transform:translateY(-50%);z-index:2;}
.hero-wave{position:absolute;bottom:0;left:0;width:100%;pointer-events:none;}

/* TRUST BAND */
.trust-band{background:var(--noite);padding:36px 5vw;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:24px;border-top:1px solid rgba(62,207,160,.08);border-bottom:1px solid rgba(62,207,160,.08);}
.trust-item{display:flex;align-items:center;gap:12px;}
.trust-icon{width:36px;height:36px;border-radius:8px;background:rgba(62,207,160,.1);display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.trust-text h4{font-size:13px;font-weight:500;color:#E8F4F0;}
.trust-text p{font-size:11px;color:rgba(232,244,240,.36);margin-top:1px;}

/* HOME SERVIÇOS */
.home-services{padding:80px 5vw;background:var(--fundo2);}
.home-services-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;margin-top:48px;}
.svc-mini{background:#fff;border-radius:12px;padding:28px;border:1px solid rgba(0,0,0,.06);transition:all .3s;position:relative;overflow:hidden;}
.svc-mini::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--verde),var(--negro));transform:scaleX(0);transform-origin:left;transition:transform .3s;}
.svc-mini:hover{transform:translateY(-5px);box-shadow:0 16px 40px rgba(0,0,0,.09);}
.svc-mini:hover::before{transform:scaleX(1);}
.svc-icon{width:44px;height:44px;background:rgba(62,207,160,.1);border-radius:10px;display:flex;align-items:center;justify-content:center;margin-bottom:16px;}
.svc-mini h3{font-family:'Cinzel',serif;font-size:16px;font-weight:600;color:var(--noite);margin-bottom:9px;}
.svc-mini p{font-size:13px;font-weight:300;color:#4A6A60;line-height:1.7;}
.svc-link{display:inline-flex;align-items:center;gap:5px;margin-top:14px;font-size:12px;font-weight:500;color:var(--verde);cursor:pointer;transition:gap .2s;}
.svc-link:hover{gap:10px;}

/* DEPOIMENTOS */
.home-testimonials{padding:80px 5vw;}
.testi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:48px;}
.testi-card{background:var(--fundo2);border-radius:12px;padding:28px;border-left:3px solid var(--verde);}
.testi-text{font-size:14px;font-weight:300;color:#4A6A60;line-height:1.85;margin-bottom:20px;font-style:italic;}
.testi-author{display:flex;align-items:center;gap:12px;}
.testi-avatar{width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;color:#fff;font-size:13px;flex-shrink:0;}
.testi-name{font-size:13px;font-weight:600;color:var(--noite);}
.testi-role{font-size:11px;color:var(--cinza);}

/* PAGE HERO (internas) */
.page-hero{background:linear-gradient(160deg,#0A1628 0%,#0a2a1e 60%,#061812 100%);padding:110px 5vw 80px;position:relative;overflow:hidden;}
.page-hero::after{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 80% 50%,rgba(62,207,160,.07) 0%,transparent 60%);pointer-events:none;}
.page-hero-inner{position:relative;z-index:2;max-width:700px;}
.page-hero h1{font-family:'Cinzel',serif;font-size:clamp(28px,4vw,48px);font-weight:700;color:#E8F4F0;line-height:1.15;margin-bottom:18px;}
.page-hero p{font-size:16px;font-weight:300;color:rgba(232,244,240,.62);line-height:1.8;}

/* SERVIÇOS */
.services-full{padding:80px 5vw;}
.svc-full-card{display:grid;grid-template-columns:1fr 1.8fr;gap:52px;align-items:start;padding:52px 0;border-bottom:1px solid rgba(0,0,0,.07);}
.svc-full-card:last-child{border-bottom:none;}
.svc-number{font-family:'Cinzel',serif;font-size:64px;font-weight:700;color:rgba(62,207,160,.1);line-height:1;margin-bottom:10px;}
.svc-full-card h2{font-family:'Cinzel',serif;font-size:22px;font-weight:700;color:var(--noite);margin-bottom:14px;}
.svc-full-card .svc-desc{font-size:15px;font-weight:300;color:#4A6A60;line-height:1.85;margin-bottom:18px;}
.svc-features{display:flex;flex-direction:column;gap:9px;}
.svc-feature-item{display:flex;align-items:flex-start;gap:10px;font-size:14px;color:#4A6A60;line-height:1.6;}
.svc-feature-item::before{content:'';width:6px;height:6px;border-radius:50%;background:var(--verde);margin-top:7px;flex-shrink:0;}
.svc-visual{background:linear-gradient(135deg,#0A1628,#0A7A55 90%);border-radius:14px;padding:36px;display:flex;align-items:center;justify-content:center;min-height:220px;}
.plans-section{padding:80px 5vw;background:var(--fundo2);}
.plans-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:48px;}
.plan-card{background:#fff;border-radius:16px;padding:36px 28px;border:1px solid rgba(0,0,0,.08);position:relative;transition:box-shadow .3s;}
.plan-card:hover{box-shadow:0 12px 40px rgba(0,0,0,.1);}
.plan-card.featured{border-color:var(--verde);box-shadow:0 0 0 1px var(--verde),0 16px 48px rgba(62,207,160,.14);}
.plan-badge{position:absolute;top:-13px;left:50%;transform:translateX(-50%);background:var(--verde);color:var(--noite);font-size:10px;font-weight:700;padding:4px 14px;border-radius:20px;letter-spacing:1px;text-transform:uppercase;white-space:nowrap;}
.plan-name{font-family:'Cinzel',serif;font-size:20px;font-weight:700;color:var(--noite);margin-bottom:6px;}
.plan-price{font-family:'Cinzel',serif;font-size:36px;font-weight:700;color:var(--verde);margin:16px 0 4px;}
.plan-price span{font-family:'Barlow',sans-serif;font-size:14px;font-weight:300;color:var(--cinza);}
.plan-desc{font-size:13px;color:var(--cinza);margin-bottom:24px;line-height:1.6;}
.plan-features{list-style:none;margin-bottom:28px;}
.plan-features li{font-size:13px;color:#4A6A60;padding:7px 0;border-bottom:1px solid rgba(0,0,0,.05);display:flex;gap:8px;align-items:center;}
.plan-features li::before{content:'✓';color:var(--verde);font-weight:700;font-size:12px;flex-shrink:0;}

/* COBERTURA */
.coverage-stats{display:grid;grid-template-columns:repeat(4,1fr);background:var(--noite);}
.cov-stat{text-align:center;padding:40px 20px;border-right:1px solid rgba(62,207,160,.08);}
.cov-stat:last-child{border-right:none;}
.cov-num{font-family:'Cinzel',serif;font-size:38px;font-weight:700;color:var(--verde);}
.cov-label{font-size:12px;color:rgba(232,244,240,.4);margin-top:8px;letter-spacing:1px;line-height:1.5;}
.coverage-section{padding:80px 5vw;}
.coverage-grid{display:grid;grid-template-columns:1fr 1fr;gap:52px;align-items:start;}
.river-card{border-radius:12px;padding:22px 24px;margin-bottom:14px;border-left:4px solid;background:var(--noite);}
.river-card:last-child{margin-bottom:0;}
.river-card h3{font-family:'Cinzel',serif;font-size:15px;color:#E8F4F0;margin-bottom:8px;}
.river-card p{font-size:13px;color:rgba(232,244,240,.5);line-height:1.75;}
.river-meta{display:flex;gap:10px;margin-top:12px;flex-wrap:wrap;}
.river-tag{font-size:10px;font-weight:500;padding:3px 9px;border-radius:12px;}
.municipios-section{padding:60px 5vw;background:var(--fundo2);}
.muni-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:36px;}
.muni-item{background:#fff;border-radius:8px;padding:10px 14px;border:1px solid rgba(0,0,0,.06);font-size:12px;color:#4A6A60;display:flex;align-items:center;gap:8px;transition:border-color .2s;}
.muni-item:hover{border-color:var(--verde);}
.muni-item::before{content:'';width:5px;height:5px;border-radius:50%;background:var(--verde);flex-shrink:0;}

/* TECNOLOGIA */
.tech-section{padding:80px 5vw;}
.tech-hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;margin-bottom:72px;}
.tech-arch-list{display:flex;flex-direction:column;gap:12px;margin-top:28px;}
.tech-arch-item{display:flex;align-items:flex-start;gap:14px;font-size:14px;color:#4A6A60;}
.tech-arch-item strong{color:var(--verde);font-weight:600;font-size:12px;min-width:84px;display:block;flex-shrink:0;line-height:1.4;}
.tech-arch-box{background:linear-gradient(135deg,#0A1628,#0A7A55 90%);border-radius:14px;padding:36px;display:flex;align-items:center;justify-content:center;min-height:300px;}
.tech-big-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.tech-card{border-radius:13px;padding:30px;border:1px solid;transition:all .3s;}
.tech-card:hover{transform:translateY(-4px);}
.tech-card h3{font-family:'Cinzel',serif;font-size:17px;font-weight:700;margin-bottom:12px;}
.tech-card p{font-size:14px;font-weight:300;line-height:1.8;}
.tech-tag{font-size:10px;font-weight:600;letter-spacing:2px;text-transform:uppercase;margin-bottom:14px;display:block;}
.tc-verde{background:rgba(62,207,160,.06);border-color:rgba(62,207,160,.2);}.tc-verde h3{color:var(--floresta);}.tc-verde p{color:#4A6A60;}.tc-verde .tech-tag{color:var(--verde);}
.tc-azul{background:rgba(13,74,138,.06);border-color:rgba(13,74,138,.14);}.tc-azul h3{color:var(--negro);}.tc-azul p{color:#4A6A60;}.tc-azul .tech-tag{color:var(--negro);}
.tc-dark{background:var(--noite);border-color:rgba(62,207,160,.12);}.tc-dark h3{color:#E8F4F0;}.tc-dark p{color:rgba(232,244,240,.52);}.tc-dark .tech-tag{color:var(--verde);}
.tech-integrations{padding:64px 5vw;background:var(--fundo2);}
.integ-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:40px;}
.integ-card{background:#fff;border-radius:12px;padding:24px;border:1px solid rgba(0,0,0,.06);text-align:center;transition:border-color .2s;}
.integ-card:hover{border-color:var(--verde);}
.integ-logo{width:48px;height:48px;border-radius:10px;margin:0 auto 14px;display:flex;align-items:center;justify-content:center;}
.integ-name{font-size:14px;font-weight:600;color:var(--noite);margin-bottom:5px;}
.integ-desc{font-size:12px;color:var(--cinza);line-height:1.5;}

/* SOBRE */
.about-intro{padding:80px 5vw;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}
.about-intro-text p{font-size:15px;font-weight:300;color:#4A6A60;line-height:1.9;margin-bottom:18px;}
.about-kpis{display:flex;gap:32px;flex-wrap:wrap;margin-top:28px;}
.about-kpi-num{font-family:'Cinzel',serif;font-size:30px;font-weight:700;color:var(--verde);}
.about-kpi-label{font-size:11px;color:var(--cinza);letter-spacing:1px;margin-top:4px;text-transform:uppercase;}
.about-visual{background:linear-gradient(135deg,#0A1628,#0A7A55 100%);border-radius:16px;padding:48px;display:flex;align-items:center;justify-content:center;min-height:360px;}
.about-values{padding:80px 5vw;background:var(--fundo2);}
.values-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-top:48px;}
.value-card{background:#fff;border-radius:12px;padding:28px;border-top:3px solid var(--verde);}
.value-icon{width:48px;height:48px;border-radius:10px;background:rgba(62,207,160,.1);display:flex;align-items:center;justify-content:center;margin-bottom:16px;}
.value-card h3{font-family:'Cinzel',serif;font-size:16px;font-weight:700;color:var(--noite);margin-bottom:10px;}
.value-card p{font-size:13px;font-weight:300;color:#4A6A60;line-height:1.75;}
.team-section{padding:80px 5vw;}
.team-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;margin-top:48px;}
.team-card{text-align:center;}
.team-avatar{width:80px;height:80px;border-radius:50%;margin:0 auto 16px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:700;color:#fff;}
.team-card h3{font-size:15px;font-weight:600;color:var(--noite);margin-bottom:3px;}
.team-role{font-size:12px;color:var(--cinza);margin-bottom:10px;}
.team-bio{font-size:13px;color:#4A6A60;line-height:1.65;}
.timeline-section{padding:80px 5vw;background:var(--noite);}
.timeline{max-width:700px;margin-top:48px;}
.tl-item{display:flex;gap:24px;padding-bottom:32px;}
.tl-item:last-child{padding-bottom:0;}
.tl-left{display:flex;flex-direction:column;align-items:center;width:60px;flex-shrink:0;}
.tl-year{font-family:'Cinzel',serif;font-size:13px;font-weight:700;color:var(--verde);}
.tl-dot{width:12px;height:12px;border-radius:50%;background:var(--verde);margin:6px 0;flex-shrink:0;}
.tl-line{flex:1;width:1px;background:rgba(62,207,160,.18);}
.tl-item:last-child .tl-line{display:none;}
.tl-right h4{font-size:15px;font-weight:600;color:#E8F4F0;margin-bottom:6px;padding-top:2px;}
.tl-right p{font-size:13px;color:rgba(232,244,240,.48);line-height:1.75;}

/* CONTATO */
.contact-layout{display:grid;grid-template-columns:1fr 1fr;min-height:calc(100vh - 64px);}
.contact-left{background:var(--noite);padding:72px 5vw;}
.contact-right{padding:72px 5vw;background:var(--fundo2);}
.contact-info-list{margin-top:40px;display:flex;flex-direction:column;gap:24px;}
.contact-info-item{display:flex;gap:16px;align-items:flex-start;}
.contact-info-icon{width:44px;height:44px;border-radius:10px;background:rgba(62,207,160,.1);display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.contact-info-text h4{font-size:13px;font-weight:600;color:#E8F4F0;margin-bottom:4px;}
.contact-info-text p{font-size:13px;color:rgba(232,244,240,.48);line-height:1.65;}
.form-title{font-family:'Cinzel',serif;font-size:26px;font-weight:700;color:var(--noite);margin-bottom:6px;}
.form-sub{font-size:14px;color:var(--cinza);margin-bottom:32px;}
.form-group{margin-bottom:18px;}
.form-group label{display:block;font-size:12px;font-weight:500;color:var(--texto);letter-spacing:.4px;margin-bottom:7px;}
.form-group input,.form-group select,.form-group textarea{width:100%;padding:11px 15px;border-radius:6px;border:1.5px solid rgba(0,0,0,.12);background:#fff;font-family:'Barlow',sans-serif;font-size:14px;color:var(--texto);transition:border-color .2s,box-shadow .2s;outline:none;-webkit-appearance:none;}
.form-group input:focus,.form-group select:focus,.form-group textarea:focus{border-color:var(--verde);box-shadow:0 0 0 3px rgba(62,207,160,.1);}
.form-group textarea{min-height:128px;resize:vertical;}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
.form-error{color:#E24B4A;font-size:11px;margin-top:4px;display:none;}
.form-group.has-error input,.form-group.has-error select,.form-group.has-error textarea{border-color:#E24B4A;}
.form-group.has-error .form-error{display:block;}
.form-success{display:none;text-align:center;padding:48px 20px;}
.form-success.show{display:block;}
.form-success h3{font-family:'Cinzel',serif;font-size:22px;color:var(--floresta);margin:16px 0 10px;}
.form-success p{font-size:14px;color:var(--cinza);line-height:1.7;}
.offices-section{padding:64px 5vw;background:var(--fundo2);}
.offices-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:36px;}
.office-card{background:#fff;border-radius:12px;padding:28px;border:1px solid rgba(0,0,0,.06);}
.office-badge{display:inline-block;font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--verde);text-transform:uppercase;margin-bottom:10px;}
.office-card h3{font-family:'Cinzel',serif;font-size:16px;color:var(--noite);margin-bottom:14px;padding-bottom:10px;border-bottom:2px solid var(--verde);}
.office-card p{font-size:13px;color:#4A6A60;line-height:1.85;}

/* CTA BANNER */
.cta-banner{background:linear-gradient(135deg,var(--floresta) 0%,var(--negro) 100%);padding:80px 5vw;text-align:center;}
.cta-banner h2{font-family:'Cinzel',serif;font-size:clamp(24px,3.5vw,38px);color:#fff;margin-bottom:16px;}
.cta-banner p{font-size:16px;color:rgba(255,255,255,.7);margin-bottom:36px;max-width:520px;margin-left:auto;margin-right:auto;line-height:1.8;}
.cta-btns{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;}

/* FOOTER */
footer{background:#06101e;padding:60px 5vw 28px;}
.footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:48px;}
.footer-brand-name{font-family:'Cinzel',serif;font-size:16px;font-weight:700;color:var(--verde);}
.footer-brand p{font-size:13px;font-weight:300;color:rgba(232,244,240,.36);line-height:1.8;margin-top:12px;max-width:280px;}
.footer-col h4{font-size:11px;font-weight:600;letter-spacing:2px;color:var(--verde);text-transform:uppercase;margin-bottom:16px;}
.footer-col ul{list-style:none;}
.footer-col li{margin-bottom:9px;}
.footer-col a{font-size:13px;color:rgba(232,244,240,.4);transition:color .2s;cursor:pointer;}
.footer-col a:hover{color:var(--verde);}
.footer-bottom{border-top:1px solid rgba(255,255,255,.05);padding-top:24px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;}
.footer-copy{font-size:12px;color:rgba(232,244,240,.22);}
.footer-tagline{font-size:10px;color:rgba(62,207,160,.3);letter-spacing:1.5px;}

/* RESPONSIVO */
@media(max-width:1024px){.tech-big-grid{grid-template-columns:repeat(2,1fr);}.footer-grid{grid-template-columns:1fr 1fr;}}
@media(max-width:768px){
  .hero-visual{display:none;}.hero{padding:100px 5vw 60px;}
  .svc-full-card{grid-template-columns:1fr;gap:28px;}.svc-visual{min-height:160px;}
  .plans-grid{grid-template-columns:1fr;}
  .testi-grid{grid-template-columns:1fr;}
  .coverage-grid{grid-template-columns:1fr;}
  .about-intro{grid-template-columns:1fr;}.about-visual{min-height:200px;}
  .tech-hero-grid{grid-template-columns:1fr;}.tech-arch-box{min-height:200px;}
  .tech-big-grid{grid-template-columns:1fr;}
  .integ-grid{grid-template-columns:repeat(2,1fr);}
  .values-grid{grid-template-columns:repeat(2,1fr);}
  .team-grid{grid-template-columns:repeat(2,1fr);}
  .muni-grid{grid-template-columns:repeat(2,1fr);}
  .coverage-stats{grid-template-columns:repeat(2,1fr);}
  .contact-layout{grid-template-columns:1fr;}
  .offices-grid{grid-template-columns:1fr;}
  .form-row{grid-template-columns:1fr;}
  .nav-links{display:none;}.nav-cta{display:none;}.nav-hamburger{display:flex;}
  .footer-grid{grid-template-columns:1fr 1fr;gap:28px;}
  .hero-stats{gap:20px;}.hero h1{font-size:32px;}
  .trust-band{flex-direction:column;align-items:flex-start;}
}
@media(max-width:480px){
  .values-grid{grid-template-columns:1fr;}.team-grid{grid-template-columns:1fr;}
  .muni-grid{grid-template-columns:1fr 1fr;}.integ-grid{grid-template-columns:1fr 1fr;}
  .footer-grid{grid-template-columns:1fr;}.coverage-stats{grid-template-columns:1fr 1fr;}
}
