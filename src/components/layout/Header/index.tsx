'use client'

import useScroll from '@/hooks/useScroll'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import { Link as ScrollLink } from 'react-scroll'

const Header = (): JSX.Element => {
  const [navOpen, setNavOpen] = useState(false)

  const toggleNav = () => {
    setNavOpen(!navOpen)
  }

  const closeNav = () => {
    setNavOpen(false)
  }
  const { scrollPosition } = useScroll()

  return (
    <header className="bg-white-bg-color text-primary-bg-color w-full p-4 fixed z-10 shadow transition-all duration-250">
      <nav
        className={`container ${scrollPosition > 100 ? 'flex-row' : 'flex-col'} md:flex-row mx-auto text-xl font-medium flex justify-between items-center`}
      >
        <div
          className={`w-full md:w-auto font-bold text-sm flex justify-center transition-all duration-300 ${
            scrollPosition > 100 ? 'h-15' : 'h-32'
          }`}
        >
          {scrollPosition >= 110 ? (
            <Link href="/">
              <Image
                src="/logo_short.png"
                width={30}
                height={30}
                alt="Rafaela Sambiasse"
              />
            </Link>
          ) : (
            <Link href="/">
              <Image
                src="/logo_secondary.png"
                width={250}
                height={250}
                alt="Rafaela Sambiasse"
              />
            </Link>
          )}
        </div>

        <div className="md:hidden">
          <button onClick={toggleNav} className="focus:outline-none">
            {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <ul
          className={`md:flex md:right-10 bg-white-bg-color transition-transform transform md:transform-none ${navOpen ? 'translate-y-0' : 'translate-x-full'} bg-white absolute md:fixed ${scrollPosition >= 100 ? 'top-20' : 'top-44'} md:top-auto md:left-auto left-0 w-full h-screen md:w-auto md:h-auto py-3`}
        >
          <li className={'p-4 md:hover:underline md:shadow-none shadow-md'}>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-100}
              className="cursor-pointer"
              onClick={closeNav}
            >
              Sobre mim
            </ScrollLink>
          </li>
          <li className="p-4 md:hover:underline md:shadow-none shadow-md">
            <ScrollLink
              to="specialty"
              smooth={true}
              duration={500}
              offset={-100}
              className="cursor-pointer"
              onClick={closeNav}
            >
              Especialidades
            </ScrollLink>
          </li>
          <li className="p-4 md:hover:underline md:shadow-none shadow-md">
            <ScrollLink
              to="result"
              smooth={true}
              duration={500}
              offset={-100}
              className="cursor-pointer"
              onClick={closeNav}
            >
              Resultados
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header