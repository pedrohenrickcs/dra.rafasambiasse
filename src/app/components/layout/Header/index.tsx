'use-client'

import Image from 'next/image'
import Link from 'next/link'
// import { useState } from 'react'
// import { FaTimes, FaBars } from 'react-icons/fa'
// import { Link as ScrollLink } from 'react-scroll'

const Header = () => {
  // const [navOpen, setNavOpen] = useState(false)

  // const toggleNav = () => {
  //   setNavOpen(!navOpen)
  // }

  // const closeNav = () => {
  //   setNavOpen(false)
  // }

  return (
    <header className="bg-white-bg-color text-primary-bg-color w-full p-4 fixed z-10 shadow">
      <nav className="container mx-auto text-xl font-medium flex justify-between items-center">
        <div className="w-full md:w-auto font-bold text-sm flex justify-center">
          <Link href="/">
            <Image
              src="/logo_secondary.png"
              width={300}
              height={300}
              alt="Rafaela Sambiasse"
            />
          </Link>
        </div>

        {/* <div className="lg:hidden">
          <button onClick={toggleNav} className="focus:outline-none">
            {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div> */}

        {/* <ul
          className={`md:flex md:right-10 transition-transform transform md:transform-none ${navOpen ? 'translate-y-0' : 'translate-x-full'} bg-white absolute md:fixed top-24 md:top-auto md:left-auto left-0 w-full h-screen md:w-auto md:h-auto py-3`}
        >
          <li className={'p-5 md:hover:underline md:shadow-none shadow-md'}>
            <ScrollLink
              to="benefits"
              smooth={true}
              duration={500}
              offset={-100}
              className="cursor-pointer"
              onClick={closeNav}
            >
              Benefícios
            </ScrollLink>
          </li>
          <li className="p-5 md:hover:underline md:shadow-none shadow-md">
            <ScrollLink
              to="services"
              smooth={true}
              duration={500}
              offset={-100}
              className="cursor-pointer"
              onClick={closeNav}
            >
              Nossos serviços
            </ScrollLink>
          </li>
          <li className="p-5 md:hover:underline md:shadow-none shadow-md">
            <ScrollLink
              to="who-us"
              smooth={true}
              duration={500}
              offset={-100}
              className="cursor-pointer"
              onClick={closeNav}
            >
              Quem Somos
            </ScrollLink>
          </li>
          <li className="p-5 md:hover:underline md:shadow-none shadow-md">
            <ScrollLink
              to="result-service"
              smooth={true}
              duration={500}
              offset={-100}
              className="cursor-pointer"
              onClick={closeNav}
            >
              Antes e depois
            </ScrollLink>
          </li>
        </ul> */}
      </nav>
    </header>
  )
}

export default Header
