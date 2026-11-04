import type { FormEvent } from 'react'
import './Newsletter.scss'

export function Newsletter() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <section className="newsletter" aria-labelledby="newsletter-title">
      <div className="newsletter__content page-container">
        <div>
          <h2 id="newsletter-title">Inscreva-se na nossa newsletter</h2>
          <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
        </div>
        <form className="newsletter__form" onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="newsletter-name">Seu nome</label>
          <input id="newsletter-name" name="name" type="text" placeholder="Digite seu nome" autoComplete="name" required />
          <label className="sr-only" htmlFor="newsletter-email">Seu e-mail</label>
          <input id="newsletter-email" name="email" type="email" placeholder="Digite seu e-mail" autoComplete="email" required />
          <button type="submit">Inscrever</button>
          <label className="newsletter__terms">
            <input type="checkbox" name="terms" required />
            Aceito os termos e condições
          </label>
        </form>
      </div>
    </section>
  )
}
