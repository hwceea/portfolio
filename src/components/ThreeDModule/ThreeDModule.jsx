import React, { useState } from 'react'
import './ThreeDModule.css'

const modelImages = [
  { src: '/assets/3d/模型1.jpg', label: 'PBR模型 - 角色' },
  { src: '/assets/3d/模型2.jpg', label: 'PBR模型 - 场景' },
  { src: '/assets/3d/模型3.jpg', label: 'PBR模型 - 道具' },
  { src: '/assets/3d/模型4.jpg', label: 'PBR模型 - 环境' },
  { src: '/assets/3d/模型5.jpg', label: 'PBR模型 - 细节' },
  { src: '/assets/3d/模型6.jpg', label: 'PBR模型 - 综合' },
]

const ueImages = [
  { src: '/assets/3d/1.0005.jpeg', label: 'UE地图 - 环境场景' },
]

export default function ThreeDModule() {
  const [activeTab, setActiveTab] = useState('pbr')
  const [lightbox, setLightbox] = useState(null)

  const images = activeTab === 'pbr' ? modelImages : ueImages

  return (
    <section id="3d" className="threed-section">
      <div className="container">
        <div className="section-label">01</div>
        <h2 className="section-title">3D 艺术设计</h2>
        <div className="divider" />
        <p className="section-subtitle">三维建模 · 材质渲染 · 场景编辑</p>

        <div className="threed-tabs">
          <button
            className={`threed-tab ${activeTab === 'pbr' ? 'active' : ''}`}
            onClick={() => setActiveTab('pbr')}
          >
            PBR流程建模
          </button>
          <button
            className={`threed-tab ${activeTab === 'ue' ? 'active' : ''}`}
            onClick={() => setActiveTab('ue')}
          >
            UE地图编辑
          </button>
        </div>

        <div className="threed-grid">
          {images.map((img, i) => (
            <div
              key={i}
              className="threed-card"
              style={{ animationDelay: `${i * 0.1}s` }}
              onClick={() => setLightbox(img.src)}
            >
              <div className="threed-card-image">
                <img src={img.src} alt={img.label} loading="lazy" />
              </div>
              <div className="threed-card-overlay">
                <span>{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="threed-lightbox" onClick={() => setLightbox(null)}>
          <div className="threed-lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="threed-lightbox-close" onClick={() => setLightbox(null)}>×</button>
            <img src={lightbox} alt="Preview" />
          </div>
        </div>
      )}
    </section>
  )
}
