import { Link } from 'react-router-dom'
import { company, hero, markets, pageAssets, services } from '../data/siteData.js'

export function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy reveal">
          <p className="eyebrow">Marine advisory with global reach</p>
          <h1>{hero.title}</h1>
          <p className="hero-lede">{hero.subtitle}</p>
          <p className="hero-text">{hero.description}</p>

          <div className="hero-actions">
            <Link className="button button-primary" to={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </Link>
            <Link className="button button-secondary" to={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </Link>
          </div>

          <div className="hero-highlights">
            <article>
              <strong>24/7</strong>
              <span>Support mindset</span>
            </article>
            <article>
              <strong>Global</strong>
              <span>Trade coverage</span>
            </article>
            <article>
              <strong>Gold-accent</strong>
              <span>Premium presentation</span>
            </article>
          </div>
        </div>

        <div className="hero-visual reveal">
          <div className="image-frame image-frame-large">
            <img src={pageAssets.heroImage} alt="Ship moving across a dark sea" />
          </div>
          <div className="floating-card">
            <span className="floating-label">Ship SL</span>
            <strong>Sale and purchase charter project consultant</strong>
            <p>Commercial support built for decisive maritime transactions.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading reveal">
          <p className="section-kicker">Services</p>
          <h2>Focused maritime services for every core commercial requirement.</h2>
        </div>

        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card reveal" key={service.title}>
              <span className="service-index">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link className="page-inline-link" to={service.href}>
                Learn more
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-split section-alt">
        <div className="section-copy reveal">
          <p className="section-kicker">Global reach</p>
          <h2>Internationally connected, locally responsive.</h2>
          <p>
            {company.fullName} works across cross-border marine business with a practical focus on the locations where maritime
            trade, shipping, and vessel transactions intersect.
          </p>

          <div className="tag-cloud">
            {markets.map((market) => (
              <span key={market}>{market}</span>
            ))}
          </div>
        </div>

        <div className="section-panel reveal">
          <img className="panel-image" src={pageAssets.globalImage} alt="Illuminated harbor and ship at night" />
          <div className="reach-card">
            <strong>Global marine network</strong>
            <p>Cross-border support for chartering, sale &amp; purchase, and consultancy engagements.</p>
          </div>
        </div>
      </section>
    </main>
  )
}