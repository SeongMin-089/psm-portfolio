import React, { useEffect, useState } from "react"
import Nav from "./Nav"
import "./styles/Header.scss"
import { useTheme } from "../../context/ThemeContext"
import FixedTop from "./FixedTop"
import useSmoothScroll from "../../hook/useSmoothScroll"

const Header = () => {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const scrollTo = useSmoothScroll()

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector("#hero")

      if (!hero) {
        setScrolled(window.scrollY > 50)
        return
      }

      const heroBottom = hero.offsetTop + hero.offsetHeight

      setScrolled(window.scrollY > heroBottom - 80)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  useEffect(() => {
    const onKey = (e) => e.key == "Escape" && setMenuOpen(false)

    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [])

  return (
    <header
      className={`${scrolled ? "scroll" : "hero-mode"} ${menuOpen ? "is-open" : ""} `}
    >
      <div className="inner">
        <div className="left-wrap">
          <a
            href="#hero"
            className="logo"
            aria-label="홈으로 이동"
            onClick={(e) => {
              e.preventDefault()
              scrollTo("hero")
              setMenuOpen(false)
            }}
          >
            <img
              src={theme === "dark" ? "/img/logo-dark.svg" : "/img/logo.svg"}
              alt="박성민 포트폴리오 로고"
            />
          </a>
          <h1>PSM Portfolio</h1>
        </div>

        <div className="right-wrap">
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="mob-nav-btn"
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={menuOpen}
          >
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </button>
          <Nav />
          <button className="btn" onClick={toggleTheme}>
            {theme === "light" ? "L" : "D"}
          </button>
        </div>
      </div>
      <FixedTop />
    </header>
  )
}

export default Header
