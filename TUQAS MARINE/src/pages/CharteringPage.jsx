import { PageSection } from '../components/PageSection.jsx'
import { pageAssets } from '../data/siteData.js'

export function CharteringPage() {
  return (
    <main>
      <section className="page-hero reveal">
        <p className="section-kicker">Chartering</p>
        <h1>Commercial chartering guidance that stays close to the market.</h1>
        <p>
          Whether the requirement is voyage, time, or project chartering, we focus on aligning the vessel, the cargo, and the
          commercial terms so the structure is practical and competitive.
        </p>
      </section>

      <PageSection
        kicker="What we cover"
        title="Market positioning and negotiation support for modern chartering needs."
        text="We help clients match vessel availability with commercial objectives, then shape the charter structure around execution and timing."
        secondaryText="The aim is simple: better terms, cleaner coordination, and fewer surprises during the deal process."
        image={pageAssets.saleImage}
        imageAlt="Harbor with a large ship docked"
        reverse
      />

      <section className="section">
        <div className="consultancy-grid">
          <article className="consultancy-card reveal">
            <h3>Voyage chartering</h3>
            <p>Support for spot moves and one-off commercial requirements.</p>
          </article>
          <article className="consultancy-card reveal">
            <h3>Time chartering</h3>
            <p>Structures aligned with operational flexibility and market timing.</p>
          </article>
          <article className="consultancy-card reveal">
            <h3>Project chartering</h3>
            <p>Commercial guidance for complex cargo or project-specific movements.</p>
          </article>
        </div>
      </section>
    </main>
  )
}