function Header() {
    return(
        <div className="Header">
  <section id="topbar" className="d-flex align-items-center">
    <div className="container d-flex justify-content-center justify-content-md-between">
      <div className="contact-info d-flex align-items-center">
        <i className="bi bi-envelope-fill"></i><a href="mailto:contact@example.com">info@example.com</a>
        <i className="bi bi-phone-fill phone-icon"></i> +1 5589 55488 55
      </div>
      <div className="social-links d-none d-md-block">
        <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
        <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
      </div>
    </div>
  </section>

  <header id="header" className="d-flex align-items-center">
    <div className="container d-flex align-items-center">

      <h1 className="logo me-auto"><a href="index.html">Erdoğan Dekorasyon</a></h1>

     <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"/></a>

      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">Ana Sayfa</a></li>
          <li><a className="nav-link scrollto" href="#about">Hakkımızda</a></li>
          <li><a className="nav-link scrollto" href="#services">Hizmetlerimiz</a></li>
          <li><a className="nav-link scrollto " href="#portfolio">Galeri</a></li>
          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
        </div>
    )
    
}
export default Header