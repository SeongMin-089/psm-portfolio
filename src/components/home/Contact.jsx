import React from "react"
import { motion } from "framer-motion"
import { useForm } from "@formspree/react"
import "./styles/Contact.scss"

const Contact = () => {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_ID)

  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 36,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: "easeOut",
      },
    },
  }

  const contentVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 28,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.section
      id="Contact"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="inner contact-inner">
        <div className="contact-head">
          <div className="section-badge">
            <span className="section-badge-dot"></span>
            <span className="section-badge-text">Contact</span>
          </div>

          <h2>Let’s Connect</h2>
        </div>

        <motion.div className="contact-content" variants={contentVariants}>
          <motion.form
            className="contact-form"
            variants={itemVariants}
            onSubmit={handleSubmit}
          >
            <div className="contact-card-title">
              <h3>Send a Message</h3>
              <p>문의 내용을 남겨주시면 빠르게 답변드리겠습니다.</p>
            </div>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <div className="input-wrap">
                <img src="/img/icon-user.svg" alt="" />
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <div className="input-wrap">
                <img src="/img/icon-mail.svg" alt="" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <div className="input-wrap">
                <img src="/img/icon-edit.svg" alt="" />
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Project / Subject"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <div className="input-wrap textarea-wrap">
                <img src="/img/icon-message.svg" alt="" />
                <textarea
                  id="message"
                  name="message"
                  placeholder="작업 문의, 협업 제안, 질문 등을 자유롭게 남겨주세요."
                  required
                ></textarea>
              </div>
            </div>

            <button type="submit" className="send-btn" disabled={state.submitting}>
              <span>▷</span>
              {state.submitting ? "Sending..." : "Send Message"}
            </button>

            {state.succeeded && (
              <p className="form-success">메시지가 전송되었습니다.</p>
            )}

            {state.errors && (
              <p className="form-error">
                전송 중 오류가 발생했습니다. 다시 시도해주세요.
              </p>
            )}
          </motion.form>

          <motion.div className="contact-info" variants={itemVariants}>
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
                <a
                  href="https://www.notion.so/35681c8faa33805595a7d089de178d8e?source=copy_link"
                  target="_blank"
                  rel="noreferrer"
                >
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
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Contact