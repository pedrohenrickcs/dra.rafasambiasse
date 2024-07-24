'use client'

import useScroll from '@/hooks/useScroll'
import Image from 'next/image'
import Link from 'next/link'

const Header = (): JSX.Element => {
  const { scrollPosition } = useScroll()

  return (
    <header className="bg-white-bg-color text-primary-bg-color w-full p-4 fixed z-10 shadow transition-all duration-300">
      <nav className="container mx-auto text-xl font-medium flex justify-between items-center">
        <div
          className={`w-full md:w-auto font-bold text-sm flex justify-center transition-all duration-300 ${
            scrollPosition > 100 ? 'h-15' : 'h-40'
          }`}
        >
          {scrollPosition >= 100 ? (
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
                width={300}
                height={300}
                alt="Rafaela Sambiasse"
              />
            </Link>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header
