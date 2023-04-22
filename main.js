import './style.scss'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

document.querySelector('#app').innerHTML = `
<header class="header">
  <div class="header-pages">
  <img src="./img/Logo.png" class="header-pages-logo">
    <!--<ul class="header-pages-ul">
      <li class="header-pages-ul-item header-pages-ul-item-about">About</li>
      <li class="header-pages-ul-item header-pages-ul-item-portfolio">Portfolio</li>
    </ul>--!>
  </div>
  <div class="header-socials">
    <ul class="header-socials-ul">
      <li class="header-socials-ul-item header-socials-ul-item-linkedin"><a href="https://www.linkedin.com/in/alejandro-hernandez-toro-494823165/"><img class="header-socials-ul-linkedin-img" src="./img/LinkedIn.png"></a></li>
      <li class="header-socials-ul-item header-socials-ul-item-git"><a href="https://github.com/AHTepsilon"><img class="header-socials-ul-git-img" src="./img/github.png"></a></li>
      <li class="header-socials-ul-item header-socials-ul-item-behance"><a href="https://www.behance.net/alejandhernnd20"><img class="header-socials-ul-behance-img" src="./img/behance.png"></a></li>
      <li class="header-socials-ul-item header-socials-ul-item-instagram"><a href="https://www.instagram.com/alextoro_designs/"><img class="header-socials-ul-instagram-img" src="./img/instagram.png"></a></li>
    </ul>
  </div>
</header>
<section class="main-section">
  <div class="main-section-info">
    <h1 class="main-section-info-text main-section-info-text-name">>ALEJANDRO HERNÁNDEZ TORO</h1>
    <h2 class="main-section-info-text main-section-info-text-h2">>UI Designer<h2>
    <h2 class="main-section-info-text main-section-info-text-h2">>Front-end Developer<h2>
  </div>
  <div class="main-section-pic">
    <img class="main-section-pic-img" src="./img/pic.png">
  </div>
</section>
<section class="drip-section">

</section>
<section class="about-section">
  <img class="about-section-snail" src="./img/snail.png">
  <h2 class="about-section-title">ABOUT ME<h2>
  <p class="about-section-text">My name is Alejandro, but you can call me Alex. I’m an interactive media designer with strong dedication regarding fields of coding, Audiovisual design and UX / UI design. I have good abilities to recognize and develop optimal experiences for users and make use of technologies to accomplish this goal. All of this allows me to create proposals which bring a high technological impact and a reliable and effective user experience.</p>
</section>

<section class="portfolio-section">
  <h2 class="portfolio-section-title">PORTFOLIO<h2>
  <div class="wrapper">
  <div class="one"><a href="https://www.behance.net/gallery/105697115/Istanbul-City-Brand"><img class="portfolio-section-img" src="./img/thumb-istanbul.png"></a></div>
  <div class="two"><a href="https://www.behance.net/gallery/130240861/UIUX-PROschool"><img class="portfolio-section-img" src="./img/thumb-proschool.png"></a></div>
  <div class="three"><a href="https://www.behance.net/gallery/114996425/Galaxy-%28Space-Invaders-Esque-Videogame%29"><img class="portfolio-section-img" src="./img/thumb-galaxy.png"></a></div>
  <div class="four"><a href="https://www.behance.net/gallery/131255465/FreshFind"><img class="portfolio-section-img" src="./img/thumb-freshfind.png"></a></div>
  <div class="five"><a href="https://www.behance.net/gallery/132752123/Streamliner-UI-Design"><img class="portfolio-section-img" src="./img/thumb-streamliner.png"></a></div>
  <div class="six"><a href="https://www.behance.net/gallery/168469887/Otherside"><img class="portfolio-section-img" src="./img/thumb-otherside.png"></a></div>
  </div>
</section>

<section class="contact-section">
  <h2 class="contact-section-title">CONTACT INFO<h2>
  <div class="contact-section-info">
    <p class="contact-section-info-text contact-section-info-subtitle">Email: </p>
    <p class="contact-section-info-text contact-section-info-subtext">alextorodesigns@gmail.com</>
  </div>
</section>
`
