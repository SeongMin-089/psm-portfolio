import React from 'react'
import useSmoothScroll from '../../hook/useSmoothScroll'

const Nav = () => {
  const navLink = [
    { label: 'Hero', id: 'Hero' },
    { label: 'Skills', id: 'Skills' },
    { label: 'Project', id: 'Project' },
    { label: 'MiNi-Project', id: 'MiniProject' },
    { label: 'Contact', id: 'Contact' },
  ]

  const scrollTo = useSmoothScroll()

  return (
    <nav>
      <ul>
        {navLink.map((nav) => (
          <li key={nav.id}>
            <a
              onClick={(e) => {
                e.preventDefault()
                scrollTo(nav.id)
              }}
              href={`#${nav.id}`}
            >
              {nav.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav