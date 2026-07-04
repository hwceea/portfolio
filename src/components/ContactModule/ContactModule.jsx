import React from 'react'
import './ContactModule.css'

export default function ContactModule() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const message = form.message.value
    window.location.href = `mailto:huangweicheng@example.com?subject=来自${name}的合作咨询&body=${encodeURIComponent(message)}%0A%0A联系方式: ${email}`
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-bg-overlay" />

      <div className="container contact-container">
        <div className="contact-content">
          <div className="section-label light">04</div>
          <h2 className="contact-title">合作联系</h2>
          <div className="divider" />
          <p className="contact-desc">
            如果您对我的作品感兴趣，或有品牌合作、项目委托等需求<br />
            欢迎随时联系，期待与您共同创造
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input type="text" name="name" placeholder="您的姓名" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="您的邮箱" required />
              </div>
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="说说您的需求..." rows="4" required />
            </div>
            <button type="submit" className="contact-submit">发送消息</button>
          </form>

          <div className="contact-info">
            <div className="contact-info-item">
              <span className="contact-info-label">邮箱</span>
              <span className="contact-info-value">huangweicheng@example.com</span>
            </div>
            <div className="contact-info-item">
              <span className="contact-info-label">微信</span>
              <span className="contact-info-value">hwc_design</span>
            </div>
            <div className="contact-info-item">
              <span className="contact-info-label">Behance</span>
              <span className="contact-info-value">behance.net/huangweicheng</span>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-footer">
        <p>&copy; 2026 黄伟诚. All rights reserved.</p>
      </div>
    </section>
  )
}
