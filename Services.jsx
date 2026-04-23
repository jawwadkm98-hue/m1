/* Hero */
.hero {
  min-height: 100vh;
  background: var(--navy);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero__bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 70% 50%, rgba(201,168,76,0.08) 0%, transparent 60%),
    radial-gradient(ellipse at 20% 80%, rgba(201,168,76,0.05) 0%, transparent 50%);
}

.hero__bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    0deg, transparent, transparent 80px,
    rgba(255,255,255,0.015) 80px, rgba(255,255,255,0.015) 81px
  ),
  repeating-linear-gradient(
    90deg, transparent, transparent 80px,
    rgba(255,255,255,0.015) 80px, rgba(255,255,255,0.015) 81px
  );
}

.hero__content {
  position: relative;
  z-index: 1;
  padding-top: 80px;
  padding-bottom: 80px;
}

.hero__eyebrow {
  font-size: 0.78rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 1.5rem;
  animation: fadeInUp 0.6s ease forwards;
}

.hero__title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  color: var(--white);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  animation: fadeInUp 0.7s ease 0.1s both;
}

.hero__title-gold {
  color: var(--gold);
}

.hero__subtitle {
  font-size: clamp(1rem, 2vw, 1.15rem);
  color: rgba(255,255,255,0.65);
  max-width: 540px;
  line-height: 1.8;
  margin-bottom: 2.5rem;
  animation: fadeInUp 0.7s ease 0.2s both;
}

.hero__actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  animation: fadeInUp 0.7s ease 0.3s both;
}

.hero__scroll {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255,255,255,0.3);
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.hero__scroll-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, rgba(201,168,76,0.5), transparent);
  animation: fadeIn 1s ease 1s both;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.75rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.2s;
  border: none;
  cursor: pointer;
  text-decoration: none;
}

.btn--gold {
  background: var(--gold);
  color: var(--navy);
}

.btn--gold:hover {
  background: var(--gold-light);
  transform: translateY(-1px);
}

.btn--outline {
  background: transparent;
  color: var(--white);
  border: 1px solid rgba(255,255,255,0.3);
}

.btn--outline:hover {
  border-color: var(--gold);
  color: var(--gold);
}

.btn--navy {
  background: var(--navy);
  color: var(--gold);
}

.btn--navy:hover {
  background: var(--navy-light);
}

/* Stats */
.stats {
  background: var(--off-white);
  padding: 3rem 0;
}

.stats__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  text-align: center;
}

.stat__value {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--gold);
}

.stat__label {
  font-size: 0.85rem;
  color: var(--grey);
  margin-top: 0.25rem;
  letter-spacing: 0.05em;
}

/* Section common */
.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-eyebrow {
  font-size: 0.75rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 0.75rem;
}

.section-title {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  color: var(--navy);
  margin-bottom: 0.75rem;
}

.section-subtitle {
  color: var(--grey);
  font-size: 0.9rem;
}

/* Services */
.services-section {
  padding: 6rem 0;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.service-card {
  background: var(--white);
  border: 1px solid var(--grey-light);
  border-radius: 10px;
  padding: 2rem;
  text-align: left;
  cursor: pointer;
  transition: all 0.25s;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.service-card:hover {
  border-color: var(--gold);
  box-shadow: 0 8px 30px rgba(201,168,76,0.15);
  transform: translateY(-3px);
}

.service-card__icon {
  font-size: 2rem;
}

.service-card__title {
  font-size: 1.1rem;
  color: var(--navy);
}

.service-card__hint {
  font-size: 0.8rem;
  color: var(--gold);
  font-weight: 500;
}

/* Why Us */
.why-us {
  background: var(--off-white);
  padding: 6rem 0;
}

.why-us__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
}

.why-us__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  margin-bottom: 2rem;
}

.why-us__item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.95rem;
  color: #444;
}

.why-us__visual {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.why-us__card {
  background: var(--white);
  border-radius: 10px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.why-us__card h4 {
  font-size: 1rem;
  color: var(--navy);
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
}

.why-us__card p {
  font-size: 0.83rem;
  color: var(--grey);
  line-height: 1.6;
}

/* CTA Banner */
.cta-banner {
  background: var(--navy);
  padding: 5rem 0;
}

.cta-banner__inner {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.cta-banner h2 {
  color: var(--white);
  font-size: clamp(1.8rem, 4vw, 2.5rem);
}

.cta-banner p {
  color: rgba(255,255,255,0.6);
  font-size: 1rem;
}

/* Responsive */
@media (max-width: 900px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .why-us__inner {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .stats__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .services-grid {
    grid-template-columns: 1fr;
  }

  .stats__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .why-us__visual {
    grid-template-columns: 1fr;
  }

  .hero__actions {
    flex-direction: column;
  }

  .hero__actions .btn {
    width: 100%;
    justify-content: center;
  }
}
