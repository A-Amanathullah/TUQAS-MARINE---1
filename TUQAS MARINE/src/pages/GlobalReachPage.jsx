import { PageSection } from '../components/PageSection.jsx'
import { markets, pageAssets } from '../data/siteData.js'

export function GlobalReachPage() {
  return (
    <main>
      <section className="page-hero reveal">
        <p className="section-kicker">Global reach</p>
        <h1>Internationally connected, locally responsive.</h1>
        <p>
          Our work is shaped for cross-border marine business. We stay focused on the locations where maritime trade,
          shipping, and vessel transactions intersect.
        </p>
      </section>

      <PageSection
        kicker="Markets"
        title="A global marine network built for practical commercial coverage."
        text="We support chartering, sale & purchase, and consultancy engagements across a broad maritime footprint."
        secondaryText="The aim is to stay responsive while maintaining consistent commercial judgment across regions."
        image={pageAssets.globalImage}
        imageAlt="Lighted harbor and ship"
      />

      <section className="section">
        <div className="tag-cloud">
          {markets.map((market) => (
            <span key={market}>{market}</span>
          ))}
        </div>
      </section>
    </main>
  )
}