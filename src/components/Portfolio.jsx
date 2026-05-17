import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Portfolio.css'

gsap.registerPlugin(ScrollTrigger)

const posts = [
  'DYHroIeNaSu',
  'DYF2rJapwLc',
  'DYF2Wr1hynT',
  'DYF5L1zx8O_',
  'DX2gGg_RIGk',
  'DXkP52FETRq',
]

export default function Portfolio() {
  const sectionRef = useRef(null)

  useEffect(() => {
    // Load Instagram embed script once
    if (!document.getElementById('ig-embed-script')) {
      const script = document.createElement('script')
      script.id = 'ig-embed-script'
      script.src = 'https://www.instagram.com/embed.js'
      script.async = true
      script.onload = () => {
        if (window.instgrm) window.instgrm.Embeds.process()
      }
      document.body.appendChild(script)
    } else if (window.instgrm) {
      window.instgrm.Embeds.process()
    }

    const ctx = gsap.context(() => {
      gsap.from('.portfolio__header', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.portfolio__header',
          start: 'top 85%',
        },
      })

      gsap.from('.portfolio-embed', {
        y: 60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.portfolio__grid',
          start: 'top 80%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="portfolio" id="portfolio">
      <div className="portfolio__inner">
        <div className="portfolio__header">
          <span className="section-label">Portfólio</span>
          <h2 className="section-title">
            O que a gente faz<br />
            <em>fala por si</em>.
          </h2>
          <p className="section-sub">
            Uma seleção do nosso trabalho direto do Instagram —
            estratégia e criatividade na prática.
          </p>
        </div>

        <div className="portfolio__grid">
          {posts.map((id) => (
            <div key={id} className="portfolio-embed">
              <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink={`https://www.instagram.com/p/${id}/`}
                data-instgrm-version="14"
                style={{
                  background: '#FFF',
                  border: '0',
                  borderRadius: '20px',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                  margin: '0',
                  maxWidth: '100%',
                  minWidth: '326px',
                  padding: '0',
                  width: '100%',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
