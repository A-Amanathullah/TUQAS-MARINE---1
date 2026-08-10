import { useState } from 'react'
import { company, contactPoints } from '../data/siteData.js'

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }

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

        <div className="contact-form-panel reveal">
          <div className="contact-form-copy">
            <p className="section-kicker">Inquiry form</p>
            <h2>Send your name, email, and message.</h2>
            <p>
              Use this form to share your chartering, sale and purchase, or consultancy inquiry. We will use the details to
              follow up with the right commercial response.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              <span>Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
              />
            </label>

            <label>
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </label>

            <label>
              <span>Message or inquiry</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about the vessel, route, asset, or support you need"
                rows={6}
                required
              />
            </label>

            <button className="button button-primary contact-submit" type="submit">
              Send Inquiry
            </button>

            {submitted ? (
              <p className="form-note">Thanks. Your inquiry details are ready for follow-up.</p>
            ) : null}
          </form>
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