import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './Hero.css'

function Shape({ className }) {
  return <div className={`hero-shape ${className}`} aria-hidden="true" />
}

export default function Hero() {
  const sectionRef = useRef(null)
  const headlineRef = useRef(null)
  const subRef = useRef(null)
  const ctaRef = useRef(null)
  const badgeRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 })

      // Headline words stagger
      const words = headlineRef.current.querySelectorAll('.word')
      tl.from(words, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      })
      .from(subRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
      }, '-=0.3')
      .from(ctaRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.3')
      .from(badgeRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        ease: 'back.out(1.7)',
      }, '-=0.4')

      // Floating shapes
      gsap.to('.hero-shape--circle', {
        y: -18,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
      gsap.to('.hero-shape--square', {
        y: 14,
        rotate: 15,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.4,
      })
      gsap.to('.hero-shape--diamond', {
        y: -12,
        x: 8,
        duration: 3.6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.8,
      })
      gsap.to('.hero-shape--wave', {
        scaleX: 1.08,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.2,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const headline = ['Comunicação', 'com', 'personalidade.']

  return (
    <section ref={sectionRef} className="hero" id="inicio">
      <Shape className="hero-shape--circle hero-shape--purple" />
      <Shape className="hero-shape--square hero-shape--salmon" />
      <Shape className="hero-shape--diamond hero-shape--purple-dark" />
      <Shape className="hero-shape--wave hero-shape--salmon-soft" />

      <div className="hero__inner">
        <div ref={badgeRef} className="hero__badge">
          <span className="hero__badge-dot" />
          Gestão de redes sociais &amp; publicidade
        </div>

        <h1 ref={headlineRef} className="hero__headline">
          {headline.map((word, i) => (
            <span key={i} className="word">
              {word}{' '}
            </span>
          ))}
        </h1>

        <p ref={subRef} className="hero__sub">
          A Coruja cuida das redes sociais e da publicidade da sua empresa
          para que você foque no que realmente importa.
        </p>

        <div ref={ctaRef} className="hero__actions">
          <a
            href="https://wa.me/5519998315115"
            target="_blank"
            rel="noreferrer"
            className="btn btn--primary"
          >
            Fale com a gente
          </a>
          <a href="#servicos" className="btn btn--ghost">
            O que fazemos
          </a>
        </div>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <span />
      </div>
    </section>
  )
}
