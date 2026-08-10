import { PageSection } from '../components/PageSection.jsx'
import { pageAssets } from '../data/siteData.js'

export function ConsultancyPage() {
  return (
    <main>
      <section className="page-hero reveal">
        <p className="section-kicker">Consultancy</p>
        <h1>Practical marine consultancy for strategic decisions.</h1>
        <p>
          We support owners, operators, brokers, and investors with advisory that stays close to commercial reality and
          operational constraints.
        </p>
      </section>

      <PageSection
        kicker="Advisory"
        title="Strategy, risk, and execution support across marine business decisions."
        text="We review commercial exposure, transaction structure, and fleet or asset strategy before commitments are made."
        secondaryText="Hands-on support keeps the process organized from first discussion through final commercial alignment."
        image={pageAssets.charterImage}
        imageAlt="Blue ship passing on a calm blue sea"
        reverse
      />

      <section className="section">
        <div className="consultancy-grid">
          <article className="consultancy-card reveal">
            <h3>Strategy</h3>
            <p>Fleet and asset advisory shaped around commercial goals and market conditions.</p>
          </article>
          <article className="consultancy-card reveal">
            <h3>Risk</h3>
            <p>Review of transaction structure and operational decisions before commitments are made.</p>
          </article>
          <article className="consultancy-card reveal">
            <h3>Execution</h3>
            <p>Practical guidance to keep the process moving with discipline and clarity.</p>
          </article>
        </div>
      </section>
    </main>
  )
}