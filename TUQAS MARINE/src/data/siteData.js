import logo from '../assets/logo svg.svg'
import heroImage from '../assets/bright-ship- leaving-dark-sea.jpg'
import charterImage from '../assets/blue-ship-passing blue-sea.jpg'
import saleImage from '../assets/small-harber-holding-large-ship.jpg'
import globalImage from '../assets/lighted harber and ship.jpg'

export const company = {
  shortName: 'Tuqas Marine',
  fullName: 'Tuqas Marine International Management Consultant Ship SL',
  phone: '00974-50101228',
  phoneHref: 'tel:+97450101228',
  logo,
}

export const hero = {
  title: 'Your Trusted Partner in Maritime Solutions',
  subtitle: 'Ship Chartering • Sale & Purchase • Marine Consultancy',
  description:
    'Tuqas Marine International Management Consultant Ship SL delivers focused commercial support for vessel owners, operators, brokers, and investors who need clarity in a fast-moving maritime market.',
  primaryCta: { label: 'Explore Our Services', href: '/chartering' },
  secondaryCta: { label: 'Contact Us', href: '/contact' },
  image: heroImage,
}

export const services = [
  {
    title: 'Ship Chartering',
    description:
      'Spot, voyage, time, and project chartering support with commercial insight built around vessel availability, market timing, and contract clarity.',
    href: '/chartering',
  },
  {
    title: 'Sale & Purchase',
    description:
      'End-to-end advisory for vessel acquisition and disposal, including market positioning, negotiation support, and transaction coordination.',
    href: '/sale-purchase',
  },
  {
    title: 'Marine Consultancy',
    description:
      'Independent guidance for owners, operators, brokers, and investors navigating fleet strategy, marine assets, and commercial risk.',
    href: '/consultancy',
  },
]

export const markets = ['Middle East', 'Gulf Region', 'Mediterranean', 'Europe', 'Asia', 'Africa']

export const contactPoints = [
  {
    title: 'Call Direct',
    value: company.phone,
    href: company.phoneHref,
  },
  {
    title: 'Company',
    value: company.fullName,
    href: '/about',
  },
  {
    title: 'Coverage',
    value: 'Global marine brokerage and advisory support',
    href: '/global-reach',
  },
]

export const pageAssets = {
  heroImage,
  charterImage,
  saleImage,
  globalImage,
}