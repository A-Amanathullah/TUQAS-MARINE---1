import { PageSection } from '../components/PageSection.jsx'
import { pageAssets } from '../data/siteData.js'

export function SalePurchasePage() {
  return (
    <main>
      <section className="page-hero reveal">
        <p className="section-kicker">Sale &amp; Purchase</p>
        <h1>Navigate vessel transactions with clearer pricing and stronger execution.</h1>
        <p>
          From market scanning to negotiation and closing coordination, our advisory helps buyers and sellers move with a better
          view of timing, asset condition, and commercial value.
        </p>
      </section>

      <PageSection
        kicker="Transaction support"
        title="Buyer-side and seller-side support that keeps the process organized."
        text="We focus on commercial alignment, negotiation support, and practical deal coordination from first discussion to closing."
        secondaryText="A better process leads to clearer decisions and cleaner execution across each stage of the transaction."
        image={pageAssets.globalImage}
        imageAlt="Illuminated harbor and ship at night"
      />

      <section className="section">
        <div className="metric-row">
          <div className="reveal">
            <strong>Buyer-side</strong>
            <span>Acquisition support</span>
          </div>
          <div className="reveal">
            <strong>Seller-side</strong>
            <span>Disposition strategy</span>
          </div>
          <div className="reveal">
            <strong>Brokerage-ready</strong>
            <span>Deal coordination</span>
          </div>
        </div>
      </section>
    </main>
  )
}