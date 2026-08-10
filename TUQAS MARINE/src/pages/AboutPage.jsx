import { PageSection } from '../components/PageSection.jsx'
import { company, pageAssets } from '../data/siteData.js'

export function AboutPage() {
  return (
    <main>
      <section className="page-hero reveal">
        <p className="section-kicker">About</p>
        <h1>{company.fullName}</h1>
        <p>
          We work across chartering, vessel sales, and marine consultancy with a clear commercial focus. The goal is to help
          clients evaluate options, reduce friction, and move with confidence.
        </p>
      </section>

      <PageSection
        kicker="Who we are"
        title="A practical partner for marine owners, brokers, and operators."
        text="Our approach is direct and practical: understand the market, define the opportunity, and execute with discipline."
        secondaryText="We build relationships around clarity, responsiveness, and commercially sound advice."
        image={pageAssets.charterImage}
        imageAlt="Blue ship passing on a calm blue sea"
      />
    </main>
  )
}