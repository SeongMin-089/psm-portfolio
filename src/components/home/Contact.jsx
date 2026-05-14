import React from "react"
import "./styles/Contact.scss"

const Contact = () => {
  return (
    <section id="Contact">
      <div className="inner contact-inner">
        <div className="contact-head">
          <div className="section-badge">
            <span className="section-badge-dot"></span>
            <span className="section-badge-text">Contact</span>
          </div>

          <h2>Let’s Connect</h2>
        </div>

        <div className="contact-content">
          <form className="contact-form">
            <div className="contact-card-title">
              <h3>Send a Message</h3>
              <p>문의 내용을 남겨주시면 빠르게 답변드리겠습니다.</p>
            </div>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <div className="input-wrap">
                <img src="/img/icon-user.svg" alt="" />
                <input id="name" type="text" placeholder="Your name" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <div className="input-wrap">
                <img src="/img/icon-mail.svg" alt="" />
                <input id="email" type="email" placeholder="your@email.com" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <div className="input-wrap">
                <img src="/img/icon-edit.svg" alt="" />
                <input
                  id="subject"
                  type="text"
                  placeholder="Project / Subject"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <div className="input-wrap textarea-wrap">
                <img src="/img/icon-message.svg" alt="" />
                <textarea
                  id="message"
                  placeholder="작업 문의, 협업 제안, 질문 등을 자유롭게 남겨주세요."
                ></textarea>
              </div>
            </div>

            <button type="submit" className="send-btn">
              <span>▷</span>
              Send Message
            </button>
          </form>

          <div className="contact-info">
            <h3>Information</h3>

            <ul>
              <li>
                <a href="mailto:a99701841@gmail.com">
                  <span className="info-icon">
                    <img src="/img/google.svg" alt="" />
                  </span>

                  <div className="info-text">
                    <strong>Email</strong>
                    <p>a99701841@gmail.com</p>
                  </div>

                  <em>Mail</em>
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/SeongMin-089"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="info-icon">
                    <img src="/img/github.svg" alt="" />
                  </span>

                  <div className="info-text">
                    <strong>GitHub</strong>
                    <p>github.com/SeongMin-089</p>
                  </div>

                  <em>Code</em>
                </a>
              </li>

              <li>
                <a href="https://www.notion.so/35681c8faa33805595a7d089de178d8e?source=copy_link" target="_blank" rel="noreferrer">
                  <span className="info-icon">
                    <img src="/img/notion.svg" alt="" />
                  </span>

                  <div className="info-text">
                    <strong>Notion</strong>
                    <p>notion.so/seongmin-089</p>
                  </div>

                  <em>Docs</em>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
