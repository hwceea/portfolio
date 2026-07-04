import React, { useState } from 'react'
import './PhotographyModule.css'

const digitalPhotos = [
  '/assets/photo/digital/IMG_2991.JPG',
  '/assets/photo/digital/IMG_3018.JPG',
  '/assets/photo/digital/IMG_3050.JPG',
  '/assets/photo/digital/IMG_3052.JPG',
  '/assets/photo/digital/IMG_3426.JPG',
  '/assets/photo/digital/_L0A0054.jpg',
  '/assets/photo/digital/_L0A0187.jpg',
  '/assets/photo/digital/_L0A8024.jpg',
  '/assets/photo/digital/_L0A8049.jpg',
  '/assets/photo/digital/_L0A9066.JPG',
  '/assets/photo/digital/_L0A9093.JPG',
  '/assets/photo/digital/_L0A9666.jpg',
  '/assets/photo/digital/_L0A9831.jpg',
  '/assets/photo/digital/_L0A9873.jpg',
]

const filmPhotos = [
  '/assets/photo/film/000002.JPG',
  '/assets/photo/film/000003.JPG',
  '/assets/photo/film/000005.JPG',
  '/assets/photo/film/000006.JPG',
  '/assets/photo/film/000007.JPG',
  '/assets/photo/film/000008.JPG',
  '/assets/photo/film/000009.JPG',
  '/assets/photo/film/000007 2.JPG',
  '/assets/photo/film/000010 2.JPG',
  '/assets/photo/film/00007.JPG',
]

export default function PhotographyModule() {
  const [activeTab, setActiveTab] = useState('digital')
  const [lightbox, setLightbox] = useState(null)
  const photos = activeTab === 'digital' ? digitalPhotos : filmPhotos

  return (
    <section id="photo" className="photo-section">
      <div className="container">
        <div className="section-label">02</div>
        <h2 className="section-title">摄影作品</h2>
        <div className="divider" />
        <p className="section-subtitle">数码摄影 · 胶片摄影 · 视觉叙事</p>

        <div className="photo-tabs">
          <button
            className={`photo-tab ${activeTab === 'digital' ? 'active' : ''}`}
            onClick={() => setActiveTab('digital')}
          >
            数码摄影
          </button>
          <button
            className={`photo-tab ${activeTab === 'film' ? 'active' : ''}`}
            onClick={() => setActiveTab('film')}
          >
            胶片摄影
          </button>
        </div>

        <div className="photo-grid">
          {photos.map((src, i) => (
            <div
              key={i}
              className="photo-item"
              style={{ animationDelay: `${i * 0.05}s` }}
              onClick={() => setLightbox(src)}
            >
              <img src={src} alt={`摄影作品 ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="photo-lightbox" onClick={() => setLightbox(null)}>
          <div className="photo-lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="photo-lightbox-close" onClick={() => setLightbox(null)}>×</button>
            <img src={lightbox} alt="Preview" />
          </div>
        </div>
      )}
    </section>
  )
}
