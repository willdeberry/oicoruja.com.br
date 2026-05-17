import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">coruja</span>
          <p className="footer__tagline">Comunicação com personalidade.</p>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          <ul>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#portfolio">Portfólio</a></li>
            <li><a href="#contato">Contato</a></li>
            <li>
              <a
                href="https://www.instagram.com/coruja.comunicacao"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="footer__bottom">
        <p>© {year} Coruja Comunicação. Todos os direitos reservados.</p>
        <p>OiCoruja.com.br</p>
      </div>
    </footer>
  )
}
