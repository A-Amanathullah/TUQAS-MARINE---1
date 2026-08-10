import { Link } from 'react-router-dom'

export function PageSection({ kicker, title, text, secondaryText, image, imageAlt, reverse = false, cta }) {
  return (
    <section className={`section section-split${reverse ? ' section-reverse' : ''}`}>
      <div className="section-copy reveal">
        <p className="section-kicker">{kicker}</p>
        <h2>{title}</h2>
        <p>{text}</p>
        {secondaryText ? <p>{secondaryText}</p> : null}
        {cta ? (
          <Link className="button button-secondary page-link" to={cta.href}>
            {cta.label}
          </Link>
        ) : null}
      </div>

      <div className="section-panel reveal">
        <img className="panel-image" src={image} alt={imageAlt} />
      </div>
    </section>
  )
}