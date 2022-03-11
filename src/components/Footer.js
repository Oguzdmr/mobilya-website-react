function Footer() {
    return (
        <div className="Footer">
            <footer id="footer">
                <div className="container">
                    <h3>Erdoğan Dekorasyon</h3>
                    <p>İşinde profesyonel ekibimiz ile mobilya imalat montaj yapmaktayız. Hizmetlerimizin listesi yukarıda mevcuttur. Fiyat almak için Telefon ya da mail yolu ile iletişime geçebilirsiniz. Talepleriniz için arayarak bilgi alabilirsiniz.</p>
                    <div className="row">
                    <div className="address col-lg-4 col-md-4">
                <i className="bi bi-geo-alt"></i>
                <h4>Lokasyon:</h4>
                <p>Ankara - Siteler</p>
              </div>
              
              <div className="email col-lg-4 col-md-4">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>

              <div className="phone col-lg-4 col-md-4">
                <i className="bi bi-phone"></i>
                <h4>Telefon:</h4>
                <p>+905073752401</p>
              </div>
              </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer