import { company, contactPoints } from '../data/siteData.js'

export function ContactPage() {
  return (
    <main>
      <section className="page-hero reveal">
        <p className="section-kicker">Contact</p>
        <h1>Start the conversation.</h1>
        <p>{company.fullName} is ready to discuss chartering, sale and purchase, and marine consultancy needs.</p>
      </section>

      <section className="section contact-section">
        <div className="contact-grid">
          {contactPoints.map((point) => (
            <a className="contact-card reveal" href={point.href} key={point.title}>
              <span>{point.title}</span>
              <strong>{point.value}</strong>
            </a>
          ))}
        </div>

        <div className="contact-banner reveal">
          <div>
            <p className="section-kicker">Tuqas Marine International Management Consultant Ship SL</p>
            <h3>Ship chartering, sale and purchase, and marine consultancy.</h3>
          </div>
          <a className="button button-primary" href={company.phoneHref}>
            {company.phone}
          </a>
        </div>
      </section>
    </main>
  )
}