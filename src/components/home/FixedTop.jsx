import React, { useEffect, useState } from "react"
import { FaArrowAltCircleUp } from "react-icons/fa"
import useSmoothScroll from "../../hook/useSmoothScroll"

const FixedTop = () => {
  const scrollTo = useSmoothScroll()
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed-top ${show ? "show" : ""}`}
      onClick={(e) => {
        e.preventDefault()
        scrollTo("hero")
      }}
    >
      <FaArrowAltCircleUp size={32} />
    </div>
  )
}

export default FixedTop