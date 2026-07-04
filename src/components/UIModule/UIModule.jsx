import React, { useState } from 'react'
import './UIModule.css'

const uiGifs = [
  { src: '/assets/ui/ui动效设计1.gif', label: 'UI动效设计 1' },
  { src: '/assets/ui/ui动效设计2.gif', label: 'UI动效设计 2' },
  { src: '/assets/ui/ui动效设计3.gif', label: 'UI动效设计 3' },
  { src: '/assets/ui/ui动效设计4.GIF', label: 'UI动效设计 4' },
  { src: '/assets/ui/ui动效设计5.gif', label: 'UI动效设计 5' },
  { src: '/assets/ui/ui动效设计6.gif', label: 'UI动效设计 6' },
]

export default function UIModule() {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <section id="ui" className="ui-section">
      <div className="container">
        <div className="section-label">03</div>
        <h2 className="section-title">UI 设计</h2>
        <div className="divider" />
        <p className="section-subtitle">界面设计 · 动效交互 · 用户体验</p>

        <div className="ui-gif-grid">
          {uiGifs.map((gif, i) => (
            <div key={i} className="ui-gif-card" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="ui-gif-wrapper">
                <img src={gif.src} alt={gif.label} loading="lazy" />
              </div>
              <div className="ui-gif-label">{gif.label}</div>
            </div>
          ))}
        </div>

        <div className="ui-video-section">
          <h3 className="ui-video-title">UI 演示视频</h3>
          <div className="ui-video-wrapper" onClick={() => setShowVideo(!showVideo)}>
            <video
              src="/assets/ui/ui演示视频.mp4"
              controls
              playsInline
              poster="/assets/3d/模型1.jpg"
              style={{ width: '100%', display: 'block' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
