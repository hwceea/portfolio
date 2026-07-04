import React, { useState, useEffect } from 'react'
import './Hero.css'

const navItems = [
  { label: '3D设计', href: '#3d' },
  { label: '摄影', href: '#photo' },
  { label: 'UI设计', href: '#ui' },
  { label: '联系', href: '#contact' },
]

export default function Hero() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="#hero" className="nav-logo" onClick={(e) => scrollTo(e, '#hero')}>黄伟诚</a>
          <div className="nav-links">
            {navItems.map(item => (
              <a key={item.href} href={item.href} className="nav-link" onClick={(e) => scrollTo(e, item.href)}>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="nav-cta" onClick={(e) => scrollTo(e, '#contact')}>合作咨询</a>
          </div>
        </div>
      </nav>

      <section id="hero" className="hero">
        <div className="hero-video-wrapper">
          <video
            className="hero-video"
            src="/assets/hero-bg.mp4"
            autoPlay
            muted
            loop
            playsInline
            poster="/assets/photo/digital/_L0A0054.jpg"
          />
          <div className="hero-overlay" />
        </div>

        <div className="hero-content container">
          <div className="hero-badge">视觉设计师 / 3D艺术家 / 影像创作者</div>
          <h1 className="hero-title">
            <span className="hero-title-main">黄伟诚</span>
            <span className="hero-title-sub">作品集</span>
          </h1>
          <p className="hero-desc">
            专注视觉设计与三维艺术，融合影像创作与交互体验<br />
            用多元媒介讲述品牌故事
          </p>
          <div className="hero-actions">
            <a href="#3d" className="btn-primary" onClick={(e) => scrollTo(e, '#3d')}>探索作品</a>
            <a href="#contact" className="btn-outline" onClick={(e) => scrollTo(e, '#contact')}>联系我</a>
          </div>
        </div>

        <div className="hero-scroll-hint">
          <span>向下滚动</span>
          <div className="scroll-arrow" />
        </div>
      </section>
    </>
  )
}
