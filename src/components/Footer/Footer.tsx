import { FacebookIcon, InstagramIcon, LinkedinIcon } from '../Icons/Icons'
import './Footer.scss'

type FooterColumn = {
  id: string
  title: string
  links: { label: string; href: string }[]
}

const columns: FooterColumn[] = [
  {
    id: 'institutional-title',
    title: 'Institucional',
    links: [
      { label: 'Sobre Nós', href: '#sobre' },
      { label: 'Movimento', href: '#movimento' },
      { label: 'Trabalhe conosco', href: '#trabalhe-conosco' },
    ],
  },
  {
    id: 'help-title',
    title: 'Ajuda',
    links: [
      { label: 'Suporte', href: '#suporte' },
      { label: 'Fale Conosco', href: '#fale-conosco' },
      { label: 'Perguntas Frequentes', href: '#perguntas' },
    ],
  },
  {
    id: 'terms-title',
    title: 'Termos',
    links: [
      { label: 'Termos e Condições', href: '#termos' },
      { label: 'Política de Privacidade', href: '#privacidade' },
      { label: 'Troca e Devolução', href: '#troca' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__content page-container">
        <section className="footer-brand" aria-label="Econverse">
          <a className="brand--footer" href="#inicio">
            <img src={`${import.meta.env.BASE_URL}econverse-logo.svg`} alt="Econverse" />
          </a>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <nav className="footer-social" aria-label="Redes sociais">
            <a href="#instagram" aria-label="Instagram"><InstagramIcon /></a>
            <a href="#facebook" aria-label="Facebook"><FacebookIcon /></a>
            <a href="#linkedin" aria-label="LinkedIn"><LinkedinIcon /></a>
          </nav>
        </section>
        {columns.map(({ id, title, links }) => (
          <section key={id} className="footer-links" aria-labelledby={id}>
            <h2 id={id}>{title}</h2>
            {links.map(({ label, href }) => <a key={href} href={href}>{label}</a>)}
          </section>
        ))}
      </div>
      <div className="site-footer__bottom">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  )
}
